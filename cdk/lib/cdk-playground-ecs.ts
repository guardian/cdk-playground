import { AccessScope } from '@guardian/cdk/lib/constants/access';
import { GuStack, type GuStackProps } from '@guardian/cdk/lib/constructs/core';
import { GuCname } from '@guardian/cdk/lib/constructs/dns';
import { GuLoadBalancedAppExperimental } from '@guardian/cdk/lib/experimental/patterns/gu-load-balanced-app';
import type { App } from 'aws-cdk-lib';
import { ArnFormat, Duration, RemovalPolicy } from 'aws-cdk-lib';
import { CfnRule } from 'aws-cdk-lib/aws-events';
import {
	CfnDelivery,
	CfnDeliveryDestination,
	CfnDeliverySource,
	CfnResourcePolicy,
	LogGroup,
	RetentionDays,
} from 'aws-cdk-lib/aws-logs';

interface CdkPlaygroundEcsProps extends Omit<GuStackProps, 'stack' | 'stage'> {
	/**
	 * Which image to run.
	 * This should be the image digest (e.g. 'sha256:abc123') to ensure immutable deployments.
	 *
	 * @see https://docs.docker.com/dhi/core-concepts/digests
	 */
	imageIdentifier: string;
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

		const { imageIdentifier } = props;
		const app = 'cdk-playground';
		const domainName = 'cdk-playground-ecs.code.dev-gutools.co.uk';

		const { loadBalancer, ecsService } = new GuLoadBalancedAppExperimental(
			this,
			{
				access: { scope: AccessScope.PUBLIC },
				app,
				applicationPort: 9000,
				certificateProps: {
					domainName,
				},
				monitoringConfiguration: { noMonitoring: true },
				ecsProps: {
					imageIdentifier,
					memoryLimitMiB: 2048,
					cpu: 1024,
					repositoryName: 'guardian/cdk-playground',
					scaling: {
						minimumTasks: 1,
						maximumTasks: 2,
					},
				},
			},
		);

		// Deliver per-health-check-attempt results (PASS/FAIL, latency, target
		// IP:port, reason code) straight to CloudWatch Logs as vended logs, so we
		// can query them alongside task-state events to reconstruct the
		// registration → healthy phase of a task's lifecycle.
		// See https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-cloudwatch-logs.html
		const healthCheckLogsName = `/aws/elasticloadbalancing/${app}-${this.stage}-health-check`;
		const healthCheckLogs = new LogGroup(this, 'HealthCheckLogs', {
			logGroupName: healthCheckLogsName,
			retention: RetentionDays.ONE_WEEK,
			removalPolicy: RemovalPolicy.DESTROY,
		});

		const healthCheckLogSource = new CfnDeliverySource(
			this,
			'HealthCheckLogSource',
			{
				name: `${app}-${this.stage}-health-check`,
				logType: 'ALB_HEALTH_CHECK_LOGS',
				resourceArn: loadBalancer.loadBalancerArn,
			},
		);

		const healthCheckLogDestination = new CfnDeliveryDestination(
			this,
			'HealthCheckLogDestination',
			{
				name: `${app}-${this.stage}-health-check`,
				destinationResourceArn: healthCheckLogs.logGroupArn,
			},
		);

		// Allow the CloudWatch Logs delivery service to write to the log group.
		const healthCheckLogsPolicy = new CfnResourcePolicy(
			this,
			'HealthCheckLogsDeliveryPolicy',
			{
				policyName: `${app}-${this.stage}-health-check-logs`,
				policyDocument: JSON.stringify({
					Version: '2012-10-17',
					Statement: [
						{
							Sid: 'AllowLogDeliveryWrite',
							Effect: 'Allow',
							Principal: { Service: 'delivery.logs.amazonaws.com' },
							Action: ['logs:CreateLogStream', 'logs:PutLogEvents'],
							Resource: this.formatArn({
								service: 'logs',
								resource: 'log-group',
								resourceName: `${healthCheckLogsName}:log-stream:*`,
								arnFormat: ArnFormat.COLON_RESOURCE_NAME,
							}),
							Condition: {
								StringEquals: { 'aws:SourceAccount': this.account },
								ArnLike: { 'aws:SourceArn': healthCheckLogSource.attrArn },
							},
						},
					],
				}),
			},
		);

		const healthCheckLogDelivery = new CfnDelivery(
			this,
			'HealthCheckLogDelivery',
			{
				deliverySourceName: healthCheckLogSource.name,
				deliveryDestinationArn: healthCheckLogDestination.attrArn,
			},
		);
		healthCheckLogDelivery.addDependency(healthCheckLogSource);
		healthCheckLogDelivery.addDependency(healthCheckLogsPolicy);

		// Record every ECS task lifecycle transition (PROVISIONING → ... → STOPPED)
		// so we can reconstruct a per-state timeline for scale-out latency analysis.
		const taskStateEvents = new LogGroup(this, 'TaskStateEvents', {
			logGroupName: `/aws/events/${app}-${this.stage}-task-state`,
			retention: RetentionDays.ONE_WEEK,
			removalPolicy: RemovalPolicy.DESTROY,
		});

		// Use a low-level CfnRule + native resource policy rather than the L2
		// CloudWatchLogGroup target: the L2 target injects a Lambda-backed custom
		// resource (an asset), which requires `cdk deploy`. This keeps the stack
		// deployable via plain CloudFormation changesets.
		const taskStateRule = new CfnRule(this, 'TaskStateChangeRule', {
			eventPattern: {
				source: ['aws.ecs'],
				'detail-type': ['ECS Task State Change'],
				detail: {
					clusterArn: [ecsService!.cluster.clusterArn],
				},
			},
			targets: [
				{
					id: 'TaskStateEventsLog',
					arn: this.formatArn({
						service: 'logs',
						resource: 'log-group',
						resourceName: taskStateEvents.logGroupName,
						arnFormat: ArnFormat.COLON_RESOURCE_NAME,
					}),
				},
			],
		});

		new CfnResourcePolicy(this, 'TaskStateEventsPolicy', {
			policyName: `${app}-${this.stage}-task-state-events`,
			policyDocument: JSON.stringify({
				Version: '2012-10-17',
				Statement: [
					{
						Sid: 'AllowEventBridgeToLog',
						Effect: 'Allow',
						Principal: { Service: 'events.amazonaws.com' },
						Action: ['logs:CreateLogStream', 'logs:PutLogEvents'],
						Resource: taskStateEvents.logGroupArn,
						Condition: {
							ArnEquals: { 'aws:SourceArn': taskStateRule.attrArn },
						},
					},
				],
			}),
		});

		new GuCname(this, 'EcsDns', {
			app,
			ttl: Duration.minutes(1),
			domainName,
			resourceRecord: loadBalancer.loadBalancerDnsName,
		});
	}
}
