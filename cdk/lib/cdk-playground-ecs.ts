import { AccessScope } from '@guardian/cdk/lib/constants/access';
import { GuStack, type GuStackProps } from '@guardian/cdk/lib/constructs/core';
import { GuCname } from '@guardian/cdk/lib/constructs/dns';
import { GuLoadBalancedAppExperimental } from '@guardian/cdk/lib/experimental/patterns/gu-load-balanced-app';
import type { App } from 'aws-cdk-lib';
import { Duration, RemovalPolicy } from 'aws-cdk-lib';
import { Rule } from 'aws-cdk-lib/aws-events';
import { CloudWatchLogGroup } from 'aws-cdk-lib/aws-events-targets';
import { LogGroup, RetentionDays } from 'aws-cdk-lib/aws-logs';

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

		// Record every ECS task lifecycle transition (PROVISIONING → ... → STOPPED)
		// so we can reconstruct a per-state timeline for scale-out latency analysis.
		const taskStateEvents = new LogGroup(this, 'TaskStateEvents', {
			retention: RetentionDays.ONE_WEEK,
			removalPolicy: RemovalPolicy.DESTROY,
		});

		new Rule(this, 'TaskStateChangeRule', {
			eventPattern: {
				source: ['aws.ecs'],
				detailType: ['ECS Task State Change'],
				detail: {
					clusterArn: [ecsService!.cluster.clusterArn],
				},
			},
			targets: [new CloudWatchLogGroup(taskStateEvents)],
		});

		new GuCname(this, 'EcsDns', {
			app,
			ttl: Duration.minutes(1),
			domainName,
			resourceRecord: loadBalancer.loadBalancerDnsName,
		});
	}
}
