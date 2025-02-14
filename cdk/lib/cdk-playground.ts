import { GuApiLambda } from '@guardian/cdk';
import { AccessScope } from '@guardian/cdk/lib/constants/access';
import { GuCertificate } from '@guardian/cdk/lib/constructs/acm';
import type { GuStackProps } from '@guardian/cdk/lib/constructs/core';
import { GuStack } from '@guardian/cdk/lib/constructs/core';
import { GuCname } from '@guardian/cdk/lib/constructs/dns';
import { GuEc2AppExperimental } from '@guardian/cdk/lib/experimental/patterns/ec2-app';
import type { App } from 'aws-cdk-lib';
import { CfnOutput, Duration } from 'aws-cdk-lib';
import { CfnScalingPolicy } from 'aws-cdk-lib/aws-autoscaling';
import {InstanceClass, InstanceSize, InstanceType, Peer} from 'aws-cdk-lib/aws-ec2';
import { Runtime } from 'aws-cdk-lib/aws-lambda';

interface CdkPlaygroundProps extends Omit<GuStackProps, 'stack' | 'stage'> {
	/**
	 * Which application build to run.
	 * This will typically match the build number provided by CI.
	 *
	 * @example
	 * process.env.GITHUB_RUN_NUMBER
	 */
	buildIdentifier: string;
}

export class CdkPlayground extends GuStack {
	constructor(scope: App, id: string, props: CdkPlaygroundProps) {
		super(scope, id, {
			...props,
			stack: 'playground',
			stage: 'PROD',
			env: { region: 'eu-west-1' },
		});

		const { buildIdentifier } = props;

		const ec2App = 'cdk-playground';
		const ec2AppDomainName = 'cdk-playground.gutools.co.uk';

		const { loadBalancer, autoScalingGroup } = new GuEc2AppExperimental(this, {
			buildIdentifier,
			applicationPort: 9000,
			app: ec2App,
			instanceType: InstanceType.of(InstanceClass.T4G, InstanceSize.MICRO),
			access: { scope: AccessScope.PUBLIC },
			userData: {
				distributable: {
					fileName: `${ec2App}-${buildIdentifier}.deb`,
					executionStatement: `dpkg -i /${ec2App}/${ec2App}-${buildIdentifier}.deb`,
				},
			},
			certificateProps: {
				domainName: ec2AppDomainName,
			},
			monitoringConfiguration: { noMonitoring: true },
			scaling: {
				minimumInstances: 1,
				maximumInstances: 10,
			},
			applicationLogging: {
				enabled: true,
				systemdUnitName: 'cdk-playground',
			},
			imageRecipe: 'developerPlayground-arm64-java11',
		});

		const scaleOutPolicy = new CfnScalingPolicy(autoScalingGroup, 'ScaleOut', {
			autoScalingGroupName: autoScalingGroup.autoScalingGroupName,
			policyType: 'SimpleScaling',
			adjustmentType: 'ChangeInCapacity',
			scalingAdjustment: 1,
		});

		const scaleInPolicy = new CfnScalingPolicy(autoScalingGroup, 'ScaleIn', {
			autoScalingGroupName: autoScalingGroup.autoScalingGroupName,
			policyType: 'SimpleScaling',
			adjustmentType: 'ChangeInCapacity',
			scalingAdjustment: -1,
		});

		new CfnOutput(this, 'ScaleOutArn', {
			key: 'ScaleOutArn',
			value: scaleOutPolicy.attrArn,
		});

		new CfnOutput(this, 'ScaleInArn', {
			key: 'ScaleInArn',
			value: scaleInPolicy.attrArn,
		});

		new CfnOutput(this, 'AutoscalingGroupName', {
			key: 'AutoscalingGroupName',
			value: autoScalingGroup.autoScalingGroupName,
		});

		new GuCname(this, 'EC2AppDNS', {
			app: ec2App,
			ttl: Duration.hours(1),
			domainName: ec2AppDomainName,
			resourceRecord: loadBalancer.loadBalancerDnsName,
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

    /*
    For testing https://docs.google.com/document/d/11TTJ2pwUIEzHtfkxgIRMriJ_Kygji0ypOVHcog_KYJc/edit?tab=t.0
     */
    const testingSubnetsApp = 'cdk-playground-testing-subnets';
    const testingSubnetsAppDomain = 'cdk-playground-testing-subnets.gutools.co.uk';
    const testApp = new GuEc2AppExperimental(this, {
      buildIdentifier,
      applicationPort: 9000,
      app: testingSubnetsApp,
      instanceType: InstanceType.of(InstanceClass.T4G, InstanceSize.MICRO),
      access: { scope: AccessScope.INTERNAL, cidrRanges: [Peer.ipv4("10.0.0.0/16")] },
      userData: {
        distributable: {
          fileName: `${testingSubnetsApp}-${buildIdentifier}.deb`,
          executionStatement: `dpkg -i /${testingSubnetsApp}/${testingSubnetsApp}-${buildIdentifier}.deb`,
        },
      },
      certificateProps: {
        domainName: testingSubnetsAppDomain,
      },
      monitoringConfiguration: { noMonitoring: true },
      scaling: {
        minimumInstances: 1,
        maximumInstances: 2,
      },
      applicationLogging: {
        enabled: false,
      },
      imageRecipe: 'developerPlayground-arm64-java11',
    });

    new GuCname(this, 'TestEC2AppDNS', {
      app: testingSubnetsApp,
      ttl: Duration.minutes(1),
      domainName: testingSubnetsAppDomain,
      resourceRecord: testApp.loadBalancer.loadBalancerDnsName,
    });

    // const subnetParam = this.parameters[`${testingSubnetsApp}PrivateSubnets`]
    // subnetParam.default = '/account/vpc/primary/subnets/private-new'
	}
}
