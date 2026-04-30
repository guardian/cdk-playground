import { GuCertificate } from '@guardian/cdk/lib/constructs/acm';
import {
	GuParameter,
	GuStack,
	type GuStackProps,
} from '@guardian/cdk/lib/constructs/core';
import { GuCname } from '@guardian/cdk/lib/constructs/dns';
import {
	GuHttpsEgressSecurityGroup,
	GuVpc,
	SubnetType,
} from '@guardian/cdk/lib/constructs/ec2';
import { GuParameterStoreReadPolicy } from '@guardian/cdk/lib/constructs/iam';
import {
	GuApplicationLoadBalancer,
	GuApplicationTargetGroup,
	GuHttpsApplicationListener,
} from '@guardian/cdk/lib/constructs/loadbalancing';
import type { App } from 'aws-cdk-lib';
import { Duration } from 'aws-cdk-lib';
import { Vpc } from 'aws-cdk-lib/aws-ec2';
import { Repository } from 'aws-cdk-lib/aws-ecr';
import {
	Cluster,
	ContainerImage,
	FargateService,
	FargateTaskDefinition,
	LogDriver,
	VersionConsistency,
} from 'aws-cdk-lib/aws-ecs';

interface CdkPlaygroundEcsProps extends Omit<GuStackProps, 'stack' | 'stage'> {
	/**
	 * Which application build to run.
	 * This will typically match the build number provided by CI.
	 *
	 * @example
	 * process.env.GITHUB_RUN_NUMBER
	 */
	buildIdentifier: string;
}

// For now, we provision all of this infrastructure via constructs as part of this repo.
// Once we've figured out the details we'd aim to provide this to users via a GuCDK pattern instead.
export class CdkPlaygroundEcs extends GuStack {
	constructor(scope: App, id: string, props: CdkPlaygroundEcsProps) {
		super(scope, id, {
			...props,
			stack: 'deploy',
			stage: 'CODE',
			env: { region: 'eu-west-1' },
		});

		const { buildIdentifier } = props;
		const ecsApp = 'cdk-playground-ecs';
		const ecsDomainName = 'cdk-playground-ecs.code.dev-gutools.co.uk';

		const vpc = GuVpc.fromIdParameter(this, 'GuVpc');

		// Trying to use a GuVpc with the ECS Cluster construct fails with the following error:
		// ValidationError: There are no 'Public' subnet groups in this VPC. Available types:

		// We should fix this properly when introducing the ECS pattern in GuCDK
		const vpcThatEcsClusterConstructWillAccept = Vpc.fromVpcAttributes(
			this,
			'Vpc',
			{
				vpcId: vpc.vpcId,
				// We have to provide public subnet ids to avoid a validation error, but they are unused
				publicSubnetIds: [''],
				// This seems to be the important bit that is missing from the IVpc that the pattern provides
				privateSubnetIds: new GuParameter(this, 'VpcPrivateSubnetsParam', {
					fromSSM: true,
					default: '/account/vpc/primary/subnets/private',
					type: 'List<String>',
				}).valueAsList,
				availabilityZones: [''], // The type system forces us to provide this, but it doesn't actually seem to be needed
			},
		);

		// AWS::ECS::Cluster
		const cluster = new Cluster(this, 'EcsCluster', {
			// We have to pass in an IVpc here, but the generated CFN only actually references the private subnets ids when
			// setting up the ECS service.
			vpc: vpcThatEcsClusterConstructWillAccept,
		});

		// Need to figure out how to make this cross-account, but this is fine for the simple case where the app and the
		// ECR repo are both in the Deploy Tools accoutn
		const image = ContainerImage.fromEcrRepository(
			Repository.fromRepositoryName(this, 'Repo', this.repositoryName!),
			`build-${buildIdentifier}`,
		);

		// AWS::ECS::TaskDefinition
		// AWS::IAM::Role ('execution role' - used for pulling image etc.)
		// AWS::IAM::Role ('task role' - used for application's runtime permissions e.g. reading config from SSM)
		const taskDefinition = new FargateTaskDefinition(
			this,
			'EcsTaskDefinition',
			// The defaults from AWS CDK are extremely low so it probably makes sense for us to encode something different
			// via our pattern - we already do this for Lambda:
			// https://github.com/guardian/cdk/blob/b567f1219dab416680a68981a488bbbf3564fe2d/src/constructs/lambda/lambda.ts#L65-L76
			{ memoryLimitMiB: 2048, cpu: 1024 },
		);

		taskDefinition.addContainer('cdk-playground', {
			image,
			// This speeds up deployment, but we should probably only use it in conjunction with immutable tags
			// https://aws.amazon.com/blogs/containers/announcing-software-version-consistency-for-amazon-ecs-services/
			versionConsistency: VersionConsistency.DISABLED,
			portMappings: [{ containerPort: 9000 }],
			// AWS::Logs::LogGroup
			logging: LogDriver.awsLogs({
				streamPrefix: 'cdk-playground-ecs',
			}),
			readonlyRootFilesystem: true,
		});

		// Here's an example of providing custom IAM permissions to the task role. cdk-playground doesn't actually need any
		// but our pattern should provide some useful defaults, such as reading from parameter store
		new GuParameterStoreReadPolicy(this, { app: ecsApp }).attachToRole(
			taskDefinition.taskRole,
		);

		// AWS::ECS::Service
		const ecsService = new FargateService(this, 'EcsService', {
			cluster,
			taskDefinition,
			// Important for service deployments; with the AWS defaults the service can be scaled down when deploying
			minHealthyPercent: 100,
			// Also important for service deployments; with the AWS defaults we don't get a fast failure when deploying a 'bad' build
			circuitBreaker: { enable: true, rollback: true },
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
		});

		// Can also set 'desiredCount' via the Fargate Service, but apparently this can lead to accidental scale downs
		// (this seems roughly equivalent to setting min/max, rather than desired at the ASG level).
		ecsService.autoScaleTaskCount({
			minCapacity: 3,
			maxCapacity: 6,
		});

		// Create a dedicated load balancer for now, but we could share a load balancer with the EC2 infrastructure for migrations
		const loadBalancer = new GuApplicationLoadBalancer(this, 'LoadBalancer', {
			app: ecsApp,
			vpc,
			internetFacing: true,
			vpcSubnets: {
				subnets: GuVpc.subnetsFromParameter(this, {
					type: SubnetType.PUBLIC,
					app: ecsApp,
				}),
			},
			withAccessLogging: true,
		});

		// We need a new target group even if we share the other load balancer components with the EC2 infrastructure
		const targetGroup = new GuApplicationTargetGroup(this, 'EcsTargetGroup', {
			vpc,
			app: ecsApp,
			port: 9000,
			targetGroupName: ecsApp, // Add the name here to make it more easily identifiable in the console etc.
			targets: [ecsService],
		});

		// We create a dedicated listener, but we could also share a listener with the EC2 infrastructure for migrations
		new GuHttpsApplicationListener(this, 'Listener', {
			app: ecsApp,
			loadBalancer,
			certificate: new GuCertificate(this, {
				app: ecsApp,
				domainName: ecsDomainName,
			}),
			targetGroup,
			// When open=true, AWS will create a security group which allows all inbound traffic over HTTPS
			open: true,
		});

		// This would not be part of the new GuCDK pattern
		new GuCname(this, 'EcsDns', {
			app: ecsApp,
			ttl: Duration.minutes(1),
			domainName: ecsDomainName,
			resourceRecord: loadBalancer.loadBalancerDnsName,
		});
	}
}
