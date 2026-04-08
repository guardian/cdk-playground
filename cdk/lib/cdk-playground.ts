import { GuApiLambda } from '@guardian/cdk';
import { AccessScope } from '@guardian/cdk/lib/constants/access';
import { GuCertificate } from '@guardian/cdk/lib/constructs/acm';
import type { GuStackProps } from '@guardian/cdk/lib/constructs/core';
import { GuParameter, GuStack } from '@guardian/cdk/lib/constructs/core';
import { GuCname } from '@guardian/cdk/lib/constructs/dns';
import { GuHttpsEgressSecurityGroup } from '@guardian/cdk/lib/constructs/ec2';
import { GuParameterStoreReadPolicy } from '@guardian/cdk/lib/constructs/iam';
import { GuApplicationTargetGroup } from '@guardian/cdk/lib/constructs/loadbalancing';
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
import {
	Cluster,
	ContainerImage,
	FargateService,
	FargateTaskDefinition,
	LogDriver,
} from 'aws-cdk-lib/aws-ecs';
import type { CfnListener } from 'aws-cdk-lib/aws-elasticloadbalancingv2';
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
		const lambdaDomainName = 'cdk-playground-lambda.code.dev-gutools.co.uk';

		const ec2App = 'cdk-playground';

		const {
			autoScalingGroup,
			listener,
			loadBalancer,
			targetGroup: ec2TargetGroup,
			vpc: vpcFromEc2AppPattern,
		} = new GuEc2AppExperimental(this, {
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

		const privateSubnetIds = new GuParameter(this, 'VpcPrivateSubnetsParam', {
			fromSSM: true,
			default: '/account/vpc/primary/subnets/private',
			type: 'List<String>',
		});

		// Trying to use vpcFromEc2AppPattern fails with the following error:
		// ValidationError: There are no 'Public' subnet groups in this VPC. Available types:
		const vpcThatEcsClusterConstructWillAccept = Vpc.fromVpcAttributes(
			this,
			'Vpc',
			{
				vpcId: vpcFromEc2AppPattern.vpcId,
				// We have to provide public subnet ids to avoid a validation error, but they are unused
				publicSubnetIds: [''],
				// This seems to be the important bit that is missing from the IVpc that the pattern provides
				privateSubnetIds: privateSubnetIds.valueAsList,
				availabilityZones: [''], // The type system forces us to provide this, but it doesn't actually seem to be needed
			},
		);

		// AWS::ECS::Cluster
		const cluster = new Cluster(this, 'EcsCluster', {
			// We have to pass in an IVpc here, but the generated CFN only actually references the private subnets ids when
			// setting up the ECS service.
			vpc: vpcThatEcsClusterConstructWillAccept,
		});

		// Need to figure out how to make this cross-account, but this is fine for
		// the simple case where the app and the repo are both in Deploy Tools
		const image = ContainerImage.fromEcrRepository(
			Repository.fromRepositoryName(this, 'Repo', this.repositoryName!),
			// Hardcode this for now so that we have an image to test with; this should really point to the build identifier
			'bd1737b461371a7e956eae24f12188946946c55f',
			// buildIdentifier,
		);

		// AWS::ECS::TaskDefinition
		// AWS::IAM::Role ('execution role' - used for pulling image etc.)
		// AWS::IAM::Role ('task role' - used for application's runtime permissions e.g. reading config from SSM)
		const taskDefinition = new FargateTaskDefinition(this, 'EcsTaskDefinition');

		taskDefinition.addContainer('cdk-playground', {
			image,
			portMappings: [{ containerPort: 9000 }],
			// AWS::Logs::LogGroup
			logging: LogDriver.awsLogs({
				streamPrefix: 'cdk-playground-ecs',
			}),
		});

		// EC2 pattern helps with this wiring and provides useful default permissions, although most of these are irrelevant when running in ECS
		new GuParameterStoreReadPolicy(this, { app: ecsApp }).attachToRole(
			taskDefinition.taskRole,
		);

		// AWS::ElasticLoadBalancingV2::TargetGroup (can now be wired up with existing load balancer)
		const ecsTargetGroup = new GuApplicationTargetGroup(
			this,
			'EcsTargetGroup',
			{
				vpc: vpcFromEc2AppPattern,
				app: ecsApp,
				port: 9000,
			},
		);

		// AWS::ECS::Service
		const ecsService = new FargateService(this, 'EcsService', {
			cluster,
			taskDefinition,
			// By default, AWS will create a new security group which allows all outbound traffic
			// We don't want this so explicitly allow outbound HTTPS only
			// This is what we do for the current GuEc2App pattern:
			// https://github.com/guardian/cdk/blob/3b5688637024642055ed0bf576f668e56e40830d/src/constructs/autoscaling/asg.ts#L143-L145
			securityGroups: [
				GuHttpsEgressSecurityGroup.forVpc(this, {
					app: ecsApp,
					vpc: vpcFromEc2AppPattern,
				}),
			],
		});

		ecsTargetGroup.addTarget(ecsService);

		// If we build this into the pattern we should be able to modify GuHttpsApplicationListener to do something
		// along these lines but in a cleaner way

		// This creates the requisite ingress/egress rules between the load balancer and the targets
		listener.addTargetGroups('AddEcsTargetGroup', {
			targetGroups: [ecsTargetGroup],
		});

		// And this splits the traffic evenly between EC2 and ECS
		const cfnListener = listener.node.defaultChild as CfnListener;
		cfnListener.defaultActions = [
			{
				type: 'forward',
				forwardConfig: {
					targetGroups: [
						{
							targetGroupArn: ec2TargetGroup.targetGroupArn,
							weight: 50,
						},
						{
							targetGroupArn: ecsTargetGroup.targetGroupArn,
							weight: 50,
						},
					],
				},
			},
		];

		// ## TODO for ECS infrastructure
		// * Logging - ships to CloudWatch by default and https://github.com/guardian/cloudwatch-logs-management can be
		//   configured to pick up from there
		// * Deployment?

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
