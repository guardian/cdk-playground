import { GuCertificate } from '@guardian/cdk/lib/constructs/acm';
import type { GuStackProps } from '@guardian/cdk/lib/constructs/core';
import { GuParameter, GuStack } from '@guardian/cdk/lib/constructs/core';
import { GuCname } from '@guardian/cdk/lib/constructs/dns';
import {
	GuHttpsEgressSecurityGroup,
	GuVpc,
} from '@guardian/cdk/lib/constructs/ec2';
import { GuParameterStoreReadPolicy } from '@guardian/cdk/lib/constructs/iam';
import type { App } from 'aws-cdk-lib';
import { Duration } from 'aws-cdk-lib';
import { Vpc } from 'aws-cdk-lib/aws-ec2';
import { Repository } from 'aws-cdk-lib/aws-ecr';
import { ContainerImage } from 'aws-cdk-lib/aws-ecs';
import { ApplicationLoadBalancedFargateService } from 'aws-cdk-lib/aws-ecs-patterns';
import { ApplicationProtocol } from 'aws-cdk-lib/aws-elasticloadbalancingv2';

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

		const ecsDomainName = 'cdk-playground-ecs.code.dev-gutools.co.uk';
		const ecsApp = 'cdk-playground-ecs';

		const publicSubnetIds = new GuParameter(this, 'VpcPublicSubnetsParam', {
			fromSSM: true,
			default: '/account/vpc/primary/subnets/public',
			type: 'List<String>',
		});

		const privateSubnetIds = new GuParameter(this, 'VpcPrivateSubnetsParam', {
			fromSSM: true,
			default: '/account/vpc/primary/subnets/private',
			type: 'List<String>',
		});

		const vpc = GuVpc.fromIdParameter(this, 'GuVpc');

		// Trying to use vpcFromEc2AppPattern fails with the following error:
		// ValidationError: There are no 'Public' subnet groups in this VPC. Available types:
		const vpcThatEcsClusterConstructWillAccept = Vpc.fromVpcAttributes(
			this,
			'Vpc',
			{
				vpcId: vpc.vpcId,
				// This is required in this case where the ECS pattern creates a public load balancer
				publicSubnetIds: publicSubnetIds.valueAsList,
				// This seems to be the important bit that is missing from the IVpc that the pattern provides
				privateSubnetIds: privateSubnetIds.valueAsList,
				availabilityZones: [''], // The type system forces us to provide this, but it doesn't actually seem to be needed
			},
		);

		// Need to figure out how to make this cross-account, but this is fine for
		// the simple case where the app and the repo are both in Deploy Tools
		const image = ContainerImage.fromEcrRepository(
			Repository.fromRepositoryName(this, 'Repo', this.repositoryName!),
			`build-${buildIdentifier}`,
		);

		// EC2 app pattern creates this for us
		const certificate = new GuCertificate(this, {
			app: ecsApp,
			domainName: ecsDomainName,
		});

		// ## Potential Issues
		// * Load balancer deletion protection is false (to match pattern this should be true)
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
				vpc: vpcThatEcsClusterConstructWillAccept,
				protocol: ApplicationProtocol.HTTPS,
				// By default, AWS will create a new security group which allows all outbound traffic
				// We don't want this so explicitly allow outbound HTTPS only
				// This is what we do for the current GuEc2App pattern:
				// https://github.com/guardian/cdk/blob/3b5688637024642055ed0bf576f668e56e40830d/src/constructs/autoscaling/asg.ts#L143-L145
				securityGroups: [
					GuHttpsEgressSecurityGroup.forVpc(this, {
						app: ecsApp,
						vpc,
					}),
				],
				certificate,
				// healthCheckGracePeriod - should we define this? AWS CDK is defaulting to 1 minute
				// https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service_definition_parameters.html#sd-networkconfiguration
				taskImageOptions: {
					image,
					containerName: 'cdk-playground',
					containerPort: 9000,
				},
				desiredCount: 3,
				minHealthyPercent: 100,
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
	}
}
