import { GuApiLambda } from '@guardian/cdk';
import { AccessScope } from '@guardian/cdk/lib/constants/access';
import { GuCertificate } from '@guardian/cdk/lib/constructs/acm';
import type { GuStackProps } from '@guardian/cdk/lib/constructs/core';
import { GuParameter, GuStack } from '@guardian/cdk/lib/constructs/core';
import { GuCname } from '@guardian/cdk/lib/constructs/dns';
import { GuParameterStoreReadPolicy } from '@guardian/cdk/lib/constructs/iam';
import { GuEc2AppExperimental } from '@guardian/cdk/lib/experimental/patterns/ec2-app';
import type { App } from 'aws-cdk-lib';
import { CfnOutput, Duration } from 'aws-cdk-lib';
import { CfnScalingPolicy } from 'aws-cdk-lib/aws-autoscaling';
import {
	InstanceClass,
	InstanceSize,
	InstanceType,
	Vpc,
} from 'aws-cdk-lib/aws-ec2';
import { Repository } from 'aws-cdk-lib/aws-ecr';
import { ContainerImage } from 'aws-cdk-lib/aws-ecs';
import { ApplicationLoadBalancedFargateService } from 'aws-cdk-lib/aws-ecs-patterns';
import { ApplicationProtocol } from 'aws-cdk-lib/aws-elasticloadbalancingv2';
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
			stack: 'deploy',
			stage: 'CODE',
			env: { region: 'eu-west-1' },
		});

		const { buildIdentifier } = props;

		const ec2AppDomainName = 'cdk-playground.code.dev-gutools.co.uk';
		const ecsDomainName = 'cdk-playground-ecs.code.dev-gutools.co.uk';
		const lambdaDomainName = 'cdk-playground-lambda.code.dev-gutools.co.uk';

		const ec2App = 'cdk-playground';

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
			imageRecipe: 'arm64-jammy-java21-deploy-infrastructure',
			instanceMetricGranularity: '5Minute',
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

		const ecsApp = 'cdk-playground-ecs';

		const vpcId = new GuParameter(this, 'VpcIdParam', {
			fromSSM: true,
			default: `/account/vpc/primary/id`,
			description: 'The VPC to deploy the structuriser to',
		});

		const publicSubnetIds = new GuParameter(this, 'VpcPublicParam', {
			fromSSM: true,
			default: '/account/vpc/primary/subnets/public',
			type: 'List<String>',
		});

		const privateSubnetIds = new GuParameter(this, 'VpcPrivateParam', {
			fromSSM: true,
			default: '/account/vpc/primary/subnets/private',
			type: 'List<String>',
		});

		// Trying to use the vpc that is available via the pattern fails with the following error:
		// ValidationError: There are no 'Public' subnet groups in this VPC. Available types:
		const vpc = Vpc.fromVpcAttributes(this, 'Vpc', {
			vpcId: vpcId.valueAsString,
			publicSubnetIds: publicSubnetIds.valueAsList,
			privateSubnetIds: privateSubnetIds.valueAsList,
			availabilityZones: [''], // The type system forces us to provide this but it doesn't actually seem to be needed
		});

		// Need to figure out how to make this cross-account, but this is fine for
		// the simple case where the app and the repo are both in Deploy Tools
		const image = ContainerImage.fromEcrRepository(
			Repository.fromRepositoryName(this, 'Repo', this.repositoryName!),
			// Hardcode this for now so that we have an image to test with; this should really point to the build identifier
			'bd1737b461371a7e956eae24f12188946946c55f',
			// buildIdentifier,
		);

		// EC2 app pattern creates this for us
		const certificate = new GuCertificate(this, {
			app: ecsApp,
			domainName: ecsDomainName,
		});

		// ## Potential Issues
		// * Load balancer deletion protection is false (to match pattern this should be true)
		// * Allows all outbound traffic by default (to match pattern this would be HTTPs only)
		// * Logging - ships to CloudWatch by default and https://github.com/guardian/cloudwatch-logs-management can be
		//   configured to pick up from there
		// * Deployment?
		//
		// ## CFN resources
		// AWS::ECS::Cluster (can pass in your own)
		// AWS::ECS::Service
		// AWS::ECS::TaskDefinition
		// AWS::Logs::LogGroup
		// AWS::IAM::Role ('execution role' - used for pulling image etc. - can pass in your own)
		// AWS::IAM::Role ('task role' - used for application's runtime permissions e.g. reading config from SSM - can pass in your own)
		// AWS::IAM::Policy
		// AWS::ElasticLoadBalancingV2::LoadBalancer (present in GuEc2App; no need to duplicate)
		// AWS::ElasticLoadBalancingV2::Listener (present in GuEc2App; no need to duplicate)
		// AWS::ElasticLoadBalancingV2::TargetGroup (present in GuEc2App; need new dedicated group)
		// AWS::EC2::SecurityGroups and AWS::EC2::SecurityGroupEgress / AWS::EC2::SecurityGroupIngress (from memory, aws-cdk auto-generates these anyway)

		const loadBalancedEcs = new ApplicationLoadBalancedFargateService(
			this,
			'FargateServiceWithCluster',
			{
				vpc,
				protocol: ApplicationProtocol.HTTPS,
				certificate,
				// healthCheckGracePeriod - should we define this? AWS CDK is defaulting to 1 minute
				// https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service_definition_parameters.html#sd-networkconfiguration
				taskImageOptions: {
					image,
					containerName: 'cdk-playground',
					containerPort: 9000,
				},
			},
		);

		// EC2 pattern helps with this wiring and provides useful default permissions, although most of these are irrelevant when running in ECS
		new GuParameterStoreReadPolicy(this, { app: ecsApp }).attachToRole(
			loadBalancedEcs.taskDefinition.taskRole,
		);

		loadBalancedEcs.targetGroup.configureHealthCheck({
			path: '/healthcheck',
			interval: Duration.seconds(10),
			timeout: Duration.seconds(5),
			healthyThresholdCount: 5,
			unhealthyThresholdCount: 2,
		});

		// Let's create a separate GuCname for now, but we could use the existing one to perform a migration if desired
		new GuCname(this, 'EcsDns', {
			app: ecsApp,
			ttl: Duration.minutes(1),
			domainName: ecsDomainName,
			resourceRecord: loadBalancedEcs.loadBalancer.loadBalancerDnsName,
		});

		const lambdaApp = 'cdk-playground-lambda';

		const lambda = new GuApiLambda(this, 'lambda', {
			fileName: `cdk-playground-lambda.zip`,
			handler: 'handler.main',
			runtime: Runtime.NODEJS_24_X,
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
