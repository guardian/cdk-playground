import * as path from 'path';
import type { GuStack } from '@guardian/cdk/lib/constructs/core';
import { GuHttpsEgressSecurityGroup } from '@guardian/cdk/lib/constructs/ec2/security-groups/base';
import {
	CustomResource,
	Duration,
	type aws_ec2 as ec2,
	RemovalPolicy,
} from 'aws-cdk-lib';
import type { AutoScalingGroup } from 'aws-cdk-lib/aws-autoscaling';
import type { ISubnet, IVpc } from 'aws-cdk-lib/aws-ec2';
import {
	CfnTrafficMirrorFilter,
	CfnTrafficMirrorFilterRule,
	CfnTrafficMirrorTarget,
	Peer,
	Port,
} from 'aws-cdk-lib/aws-ec2';
import { Repository } from 'aws-cdk-lib/aws-ecr';
import {
	Cluster,
	ContainerImage,
	CpuArchitecture,
	Protocol as ECSProtocol,
	FargateService,
	FargateTaskDefinition,
	LogDriver,
	OperatingSystemFamily,
	PropagatedTagSource,
} from 'aws-cdk-lib/aws-ecs';
import {
	type ApplicationLoadBalancer,
	Protocol as ELBProtocol,
	NetworkLoadBalancer,
} from 'aws-cdk-lib/aws-elasticloadbalancingv2';
import * as events from 'aws-cdk-lib/aws-events';
import { LambdaFunction } from 'aws-cdk-lib/aws-events-targets';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import { LogGroup, RetentionDays } from 'aws-cdk-lib/aws-logs';
import { Provider } from 'aws-cdk-lib/custom-resources';
import { Construct } from 'constructs';

export interface HttpTrafficMirroringProps {
	readonly vpc: IVpc;
	readonly privateSubnets: ISubnet[];
	readonly trafficSource: AutoScalingGroup;
	readonly trafficTarget: ApplicationLoadBalancer;
}

export class HttpTrafficMirroring extends Construct {
	constructor(scope: GuStack, id: string, props: HttpTrafficMirroringProps) {
		super(scope, id);

		// if (props.trafficTarget.vpc === undefined) {
		// 	throw new Error("VPC not defined in mirroring target application load balancer.");
		// }
		// const vpc = props.trafficTarget.vpc;

		this.node.addDependency(props.trafficSource);
		this.node.addDependency(props.trafficTarget);

		const handlerNlb = this.createHandler(
			props.vpc,
			props.privateSubnets,
			scope,
		);

		// The mirrorTarget and mirrorFilter will not be able to be cleaned up by cloud formation
		// unless the mirroring session is deleted, though sessions are created by the lambda.
		const mirrorTarget: CfnTrafficMirrorTarget = new CfnTrafficMirrorTarget(
			this,
			'Target',
			{
				networkLoadBalancerArn: handlerNlb.loadBalancerArn,
				description: `Traffic mirror target created by ${id}`,
			},
		);

		const mirrorFilter: ec2.CfnTrafficMirrorFilter = new CfnTrafficMirrorFilter(
			this,
			'Filter',
			{
				description: `Traffic mirror filter created by ${id}`,
			},
		);

		new CfnTrafficMirrorFilterRule(this, 'AllowAllInbound', {
			trafficMirrorFilterId: mirrorFilter.attrId,
			ruleAction: 'accept',
			ruleNumber: 100,
			trafficDirection: 'ingress',
			destinationCidrBlock: '0.0.0.0/0', // TODO: Narrow the CIDR block scopes.
			sourceCidrBlock: '0.0.0.0/0',
		});

		// Lambda function to attach Mirror Session on ASG instance launch
		const attacherLambda = new NodejsFunction(this, 'SessionAttacherLambda', {
			entry: path.join(
				__dirname,
				'http-traffic-mirroring-lambdas/session-attacher.ts',
			),
			runtime: lambda.Runtime.NODEJS_24_X,
			timeout: Duration.seconds(30),
			environment: {
				TARGET_ID: mirrorTarget.attrId,
				FILTER_ID: mirrorFilter.attrId,
			},
		});

		// Grant Lambda EC2 access permissions
		attacherLambda.addToRolePolicy(
			new iam.PolicyStatement({
				actions: ['ec2:DescribeInstances', 'ec2:CreateTrafficMirrorSession'],
				resources: ['*'],
			}),
		);

		// Lambda-backed custom resource to mirror sessions for instances that already
		// exist in the ASG at deploy time (the event-based lambda only catches new ones).
		const initializerLambda = new NodejsFunction(
			this,
			'SessionInitializerLambda',
			{
				entry: path.join(
					__dirname,
					'http-traffic-mirroring-lambdas/session-initializer.ts',
				),
				runtime: lambda.Runtime.NODEJS_24_X,
				timeout: Duration.minutes(5),
			},
		);

		initializerLambda.addToRolePolicy(
			new iam.PolicyStatement({
				actions: [
					'autoscaling:DescribeAutoScalingGroups',
					'ec2:DescribeInstances',
					'ec2:CreateTrafficMirrorSession',
				],
				resources: ['*'],
			}),
		);

		const initializerProvider = new Provider(
			this,
			'SessionInitializerProvider',
			{ onEventHandler: initializerLambda },
		);

		new CustomResource(this, 'SessionInitializerResource', {
			serviceToken: initializerProvider.serviceToken,
			properties: {
				AsgName: props.trafficSource.autoScalingGroupName,
				TargetId: mirrorTarget.attrId,
				FilterId: mirrorFilter.attrId,
			},
		});

		// EventBridge Rule to trigger Lambda on ASG Instance Launch
		const launchRule = new events.Rule(this, 'AsgInstanceLaunchRule', {
			eventPattern: {
				source: ['aws.autoscaling'],
				detailType: ['EC2 Instance Launch Successful'],
				detail: {
					AutoScalingGroupName: [props.trafficSource.autoScalingGroupName],
				},
			},
		});

		launchRule.addTarget(new LambdaFunction(attacherLambda));
	}

	private createHandler(
		vpc: ec2.IVpc,
		subnets: ISubnet[],
		stack: GuStack,
	): NetworkLoadBalancer {
		const ecsCluster = new Cluster(this, 'MirroringHandlerEcsCluster', {
			vpc,
		});

		const taskDefinition = new FargateTaskDefinition(
			this,
			'MirroringHandlerEcsTaskDefinition',
			{
				memoryLimitMiB: 2048,
				cpu: 1024,
				runtimePlatform: {
					cpuArchitecture: CpuArchitecture.ARM64,
					operatingSystemFamily: OperatingSystemFamily.LINUX,
				},
			},
		);

		const healthCheckLogGroup = new LogGroup(
			this,
			'MirroringHandlerHealthCheckLogGroup',
			{
				logGroupName: [
					stack.stack,
					stack.stage,
					stack.app,
					'mirroring-health-check-logs',
				].join('/'),
				retention: RetentionDays.ONE_DAY,
				removalPolicy: RemovalPolicy.DESTROY,
			},
		);

		const handlerLogGroup = new LogGroup(this, 'MirroringHandlerLogGroup', {
			logGroupName: [
				stack.stack,
				stack.stage,
				stack.app,
				'mirroring-handler-logs',
			].join('/'),
			retention: RetentionDays.ONE_DAY,
			removalPolicy: RemovalPolicy.DESTROY,
		});

		// TCP for health check
		// We have to add this first as the network load balancer will send health check traffic to the default container.
		// If we don't add this first then we fail to add the ECS service to the target group as there is no tcp endpoint.
		// Can not do health check over UDP.
		//
		// Nginx by default serves a simple welcome page on port 80, which can pass the health check.
		taskDefinition.addContainer('MirroringHandlerHealthCheckContainer', {
			image: ContainerImage.fromRegistry('nginx:latest'),
			logging: LogDriver.awsLogs({
				streamPrefix: 'mirroring-health-check',
				logGroup: healthCheckLogGroup,
			}),
			portMappings: [{ containerPort: 80, hostPort: 80 }],
			// TODO: logging: fireLensLogDriver,
		});

		const mirroringHandlerRepo = Repository.fromRepositoryName(
			this,
			'HttpMirroringHandlerRepo',
			'guardian/cdk-playground',
		);

		taskDefinition.addContainer('MirroringHandlerContainer', {
			image: ContainerImage.fromEcrRepository(
				mirroringHandlerRepo,
				'build-2681',
			),
			logging: LogDriver.awsLogs({
				streamPrefix: 'mirroring-handler',
				logGroup: handlerLogGroup,
			}),
			portMappings: [
				{
					containerPort: 4789,
					protocol: ECSProtocol.UDP,
					hostPort: 4789,
				},
			],
			command: [
				'deploy-LoadB-Il8Mi5eaoqiF-2013471505.eu-west-1.elb.amazonaws.com',
				'80',
				'--header',
				'"X-Gu-Target-Group: ecs"',
			],
			// TODO: logging: fireLensLogDriver,
			readonlyRootFilesystem: true,
		});

		/*
		     GuardDuty is enabled at the organisation level and runs as a sidecar.
		     We need to add specific permissions to allow pulling the GuardDuty image.
		     See https://docs.aws.amazon.com/guardduty/latest/ug/prereq-runtime-monitoring-ecs-support.html.
		     */
		const guardDutyPolicies = [
			new iam.PolicyStatement({
				effect: iam.Effect.ALLOW,
				actions: ['ecr:GetAuthorizationToken'],
				resources: ['*'],
			}),
			new iam.PolicyStatement({
				effect: iam.Effect.ALLOW,
				actions: [
					'ecr:BatchCheckLayerAvailability',
					'ecr:GetDownloadUrlForLayer',
					'ecr:BatchGetImage',
				],
				resources: [
					// See https://docs.aws.amazon.com/guardduty/latest/ug/runtime-monitoring-ecr-repository-gdu-agent.html
					'arn:aws:ecr:eu-west-1:694911143906:repository/aws-guardduty-agent-fargate',
				],
			}),
		];

		guardDutyPolicies.forEach((policy) =>
			taskDefinition.addToExecutionRolePolicy(policy),
		);

		const fargateService = new FargateService(
			this,
			'MirroringHandlerFargateService',
			{
				cluster: ecsCluster,
				taskDefinition,
				vpcSubnets: { subnets },
				// Important for service deployments; with the AWS defaults the service can be scaled down when deploying
				minHealthyPercent: 100,
				// Also important for service deployments; with the AWS defaults we don't get a fast failure when deploying a 'bad' build
				// circuitBreaker: { enable: true, rollback: true },
				propagateTags: PropagatedTagSource.SERVICE,
				// By default, AWS will create a new security group which allows all outbound traffic
				// We don't want this so explicitly allow outbound HTTPS only
				// This is what we do for the current GuEc2App pattern:
				// https://github.com/guardian/cdk/blob/3b5688637024642055ed0bf576f668e56e40830d/src/constructs/autoscaling/asg.ts#L143-L145
				securityGroups: [
					GuHttpsEgressSecurityGroup.forVpc(stack, {
						app: `${stack.app}-ecs`,
						vpc,
						ingresses: [
							{
								range: Peer.anyIpv4(),
								port: 80,
								description: 'allow health check port 80',
							},
							{
								range: Peer.anyIpv4(),
								port: Port.udp(4789),
								description: 'allow VXLAN traffic',
							},
						],
					}),
				],
			},
		);

		fargateService.autoScaleTaskCount({
			minCapacity: 0,
			maxCapacity: 1,
		});

		const nlb = new NetworkLoadBalancer(this, 'MirroringHandlerNLB', {
			vpc,
			internetFacing: false, // Don't think this is needed given the subnets, but i want to be safe
			vpcSubnets: { subnets },
			securityGroups: [
				GuHttpsEgressSecurityGroup.forVpc(stack, {
					app: `${stack.app}-nlb`,
					vpc,
					ingresses: [
						{
							range: Peer.anyIpv4(),
							port: Port.udp(4789),
							description: 'allow vxlan traffic',
						},
					],
				}),
			],
		});

		const listener = nlb.addListener('MirroringHandlerListener', {
			port: 4789,
			protocol: ELBProtocol.UDP,
		});

		const targetGroup = listener.addTargets('ECSHandlers', {
			port: 4789,
			protocol: ELBProtocol.UDP,
			healthCheck: {
				port: '80',
				protocol: ELBProtocol.TCP,
			},
		});

		targetGroup.addTarget(fargateService);

		return nlb;
	}
}
