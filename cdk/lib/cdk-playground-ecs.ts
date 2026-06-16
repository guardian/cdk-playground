import { AccessScope } from '@guardian/cdk/lib/constants/access';
import { GuStack, type GuStackProps } from '@guardian/cdk/lib/constructs/core';
import { GuCname } from '@guardian/cdk/lib/constructs/dns';
import { GuLoadBalancedAppExperimental } from '@guardian/cdk/lib/experimental/patterns/gu-load-balanced-app';
import type { App } from 'aws-cdk-lib';
import { Duration } from 'aws-cdk-lib';
import {
	AdjustmentType,
	MetricAggregationType,
	StepScalingPolicy,
} from 'aws-cdk-lib/aws-applicationautoscaling';
import { Metric } from 'aws-cdk-lib/aws-cloudwatch';
import type { CfnCluster, ScalableTaskCount } from 'aws-cdk-lib/aws-ecs';

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
						maximumTasks: 4,
					},
				},
			},
		);

		// Enable Container Insights for faster metric delivery (~30s vs ~2-3 min).
		const cfnCluster = ecsService!.cluster.node.defaultChild as CfnCluster;
		cfnCluster.clusterSettings = [
			{ name: 'containerInsights', value: 'enhanced' },
		];

		const scalableTaskCount = ecsService!.node.findChild(
			'TaskCount',
		) as ScalableTaskCount;

		const cpuMetric = new Metric({
			namespace: 'ECS/ContainerInsights',
			metricName: 'TaskCpuUtilization',
			dimensionsMap: {
				ClusterName: ecsService!.cluster.clusterName,
				ServiceName: ecsService!.serviceName,
			},
			statistic: 'Average',
			period: Duration.seconds(60),
		});

		new StepScalingPolicy(this, 'CpuStepScaling', {
			scalingTarget: scalableTaskCount,
			metric: cpuMetric,
			adjustmentType: AdjustmentType.CHANGE_IN_CAPACITY,
			metricAggregationType: MetricAggregationType.AVERAGE,
			evaluationPeriods: 1,
			scalingSteps: [
				{ upper: 20, change: -1 },
				{ lower: 70, change: +1 },
			],
			cooldown: Duration.seconds(60),
		});

		new GuCname(this, 'EcsDns', {
			app,
			ttl: Duration.minutes(1),
			domainName,
			resourceRecord: loadBalancer.loadBalancerDnsName,
		});
	}
}
