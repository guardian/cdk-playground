import { GuApiLambda, GuPlayApp } from '@guardian/cdk';
import { AccessScope } from '@guardian/cdk/lib/constants/access';
import { GuCertificate } from '@guardian/cdk/lib/constructs/acm';
import type { GuStackProps } from '@guardian/cdk/lib/constructs/core';
import { GuStack, GuStringParameter } from '@guardian/cdk/lib/constructs/core';
import { GuCname } from '@guardian/cdk/lib/constructs/dns';
import { GuFastlyLogsIamRole } from '@guardian/cdk/lib/constructs/iam';
import type { App } from 'aws-cdk-lib';
import { Duration } from 'aws-cdk-lib';
import type { CfnAutoScalingGroup } from 'aws-cdk-lib/aws-autoscaling';
import { UpdatePolicy } from 'aws-cdk-lib/aws-autoscaling';
import { InstanceClass, InstanceSize, InstanceType } from 'aws-cdk-lib/aws-ec2';
import { Effect, Policy, PolicyStatement } from 'aws-cdk-lib/aws-iam';
import { Runtime } from 'aws-cdk-lib/aws-lambda';

export class CdkPlayground extends GuStack {
	constructor(
		scope: App,
		id: string,
		props?: Omit<GuStackProps, 'stack' | 'stage' | 'app'>,
	) {
		super(scope, id, {
			...props,
			stack: 'playground',
			stage: 'PROD',
			app: 'cdk-playground',
			env: { region: 'eu-west-1' },
		});

		const ec2App = 'cdk-playground';
		const ec2AppDomainName = 'cdk-playground.gutools.co.uk';

		const minimumInstances = 1;
		const maximumInstances = minimumInstances * 2;

		const buildNumber = process.env.GITHUB_RUN_NUMBER ?? 'DEV';

		const { loadBalancer, autoScalingGroup, targetGroup } = new GuPlayApp(
			this,
			{
				app: ec2App,
				instanceType: InstanceType.of(InstanceClass.T4G, InstanceSize.MICRO),
				access: { scope: AccessScope.PUBLIC },
				userData: {
					distributable: {
						fileName: `${ec2App}-${buildNumber}.deb`,
						executionStatement: `dpkg -i /${ec2App}/${ec2App}-${buildNumber}.deb`,
					},
				},
				certificateProps: {
					domainName: ec2AppDomainName,
				},
				monitoringConfiguration: { noMonitoring: true },
				scaling: {
					minimumInstances,
					maximumInstances: 10,
				},
				applicationLogging: {
					enabled: true,
					systemdUnitName: 'cdk-playground',
				},
				imageRecipe: 'developerPlayground-arm64-java11',
				updatePolicy: UpdatePolicy.rollingUpdate({
					maxBatchSize: maximumInstances,
					minInstancesInService: minimumInstances,
					minSuccessPercentage: 100,
					waitOnResourceSignals: true,
					suspendProcesses: [],
				}),
			},
		);

		const { role, userData } = autoScalingGroup;
		const { stackId, region } = this;

		new Policy(this, 'AsgRollingUpdatePolicy', {
			statements: [
				// Allow usage of command `cfn-signal`.
				new PolicyStatement({
					actions: ['cloudformation:SignalResource'],
					effect: Effect.ALLOW,
					resources: [stackId],
				}),

				/*
        Allow usage of command `aws elbv2 describe-target-health`.
        AWS Elastic Load Balancing does not support resource based policies, so the resource has to be `*` (any) here.
        See https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-services-that-work-with-iam.html
         */
				new PolicyStatement({
					actions: ['elasticloadbalancing:DescribeTargetHealth'],
					effect: Effect.ALLOW,
					resources: ['*'],
				}),
			],
		}).attachToRole(role);

		userData.addCommands(
			`
			echo "Build number: ${buildNumber}"

      INSTANCE_ID=$(ec2metadata --instance-id)

      STATE=$(aws elbv2 describe-target-health \
        --target-group-arn ${targetGroup.targetGroupArn} \
        --region ${region} \
        --targets Id=$INSTANCE_ID,Port=${GuPlayApp.PORT} \
        --query "TargetHealthDescriptions[0].TargetHealth.State")

      until [ "$STATE" == "\\"healthy\\"" ]; do
        echo "Instance not yet healthy within target group. Current state $STATE. Sleeping..."
        sleep 5
        STATE=$(aws elbv2 describe-target-health \
          --target-group-arn ${targetGroup.targetGroupArn} \
          --region ${region} \
          --targets Id=$INSTANCE_ID,Port=${GuPlayApp.PORT} \
          --query "TargetHealthDescriptions[0].TargetHealth.State")
      done
      `,
		);

		const cfnAsg = autoScalingGroup.node.defaultChild as CfnAutoScalingGroup;

		userData.addOnExitCommands(
			`
        cfn-signal --stack ${stackId} \
          --resource ${cfnAsg.logicalId} \
          --region ${region} \
          --exit-code $exitCode || echo 'Failed to send Cloudformation Signal'
        `,
		);

		autoScalingGroup.scaleOnRequestCount('ScaleOutOnRequests', {
			targetRequestsPerMinute: 1,
		});

		new GuCname(this, 'EC2AppDNS', {
			app: ec2App,
			ttl: Duration.hours(1),
			domainName: ec2AppDomainName,
			resourceRecord: loadBalancer.loadBalancerDnsName,
		});

		// This is a temporary domain name to support testing with a Fastly service.
		// It will be removed when testing is complete.
		new GuCname(this, 'FastlyDNS', {
			app: ec2App,
			ttl: Duration.hours(1),
			domainName: 'cdn-playground.code.dev-guardianapis.com',
			resourceRecord: 'dualstack.guardian.map.fastly.net',
		});

		// Similarly, we are creating this role to support log shipping from Fastly.
		// It will also be removed once testing is complete.
		const fastlyBucketParameterKey = `/${this.stage}/${this.stack}/${ec2App}/fastly-logs-bucket`;
		new GuFastlyLogsIamRole(this, {
			bucketName: new GuStringParameter(this, 'FastlyBucket', {
				fromSSM: true,
				allowedValues: [fastlyBucketParameterKey],
				default: fastlyBucketParameterKey,
			}).valueAsString,
		});

		const lambdaApp = 'cdk-playground-lambda';
		const lambdaDomainName = 'cdk-playground-lambda.gutools.co.uk';

		const lambda = new GuApiLambda(this, 'lambda', {
			fileName: `cdk-playground-lambda.zip`,
			handler: 'handler.main',
			runtime: Runtime.NODEJS_20_X,
			monitoringConfiguration: {
				noMonitoring: true,
			},
			app: lambdaApp,
			api: {
				id: `${lambdaApp}-api`,
				description: lambdaApp,
			},
		});

		const domain = lambda.api.addDomainName('domain', {
			domainName: lambdaDomainName,
			certificate: new GuCertificate(this, {
				app: lambdaApp,
				domainName: lambdaDomainName,
			}),
		});

		new GuCname(this, 'LambdaDNS', {
			app: lambdaApp,
			ttl: Duration.hours(1),
			domainName: lambdaDomainName,
			resourceRecord: domain.domainNameAliasDomainName,
		});
	}
}
