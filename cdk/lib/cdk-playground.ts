import { AccessScope } from '@guardian/cdk/lib/constants/access';
import { GuStack, type GuStackProps } from '@guardian/cdk/lib/constructs/core';
import { GuCname } from '@guardian/cdk/lib/constructs/dns';
import { GuLoadBalancedAppExperimental } from '@guardian/cdk/lib/experimental/patterns/gu-load-balanced-app';
import type { App } from 'aws-cdk-lib';
import { Duration } from 'aws-cdk-lib';
import { InstanceClass, InstanceSize, InstanceType } from 'aws-cdk-lib/aws-ec2';

interface CdkPlaygroundProps extends Omit<GuStackProps, 'stack' | 'stage'> {
	/**
	 * Which application build to run.
	 * This will typically match the build number provided by CI.
	 *
	 * @example
	 * process.env.GITHUB_RUN_NUMBER
	 */
	buildIdentifier: string;

	/**
	 * Which image to run.
	 * This should be the image digest (e.g. 'sha256:abc123') to ensure immutable deployments.
	 *
	 * @see https://docs.docker.com/dhi/core-concepts/digests
	 */
	imageIdentifier: string;
}

export class CdkPlayground extends GuStack {
	constructor(scope: App, id: string, props: CdkPlaygroundProps) {
		const app = 'cdk-playground';

		super(scope, id, {
			...props,
			stack: 'deploy',
			stage: 'CODE',
			app,
			env: { region: 'eu-west-1' },
		});

		const { buildIdentifier, imageIdentifier } = props;

		const ec2AppDomainName = 'cdk-playground.code.dev-gutools.co.uk';

		const { loadBalancer } = new GuLoadBalancedAppExperimental(this, {
			applicationPort: 9000,
			app,
			access: { scope: AccessScope.PUBLIC },
			certificateProps: {
				domainName: ec2AppDomainName,
			},
			monitoringConfiguration: { noMonitoring: true },
			ec2Props: {
				versionedDeployments: {
					enabled: true,
					buildIdentifier,
				},
				instanceType: InstanceType.of(InstanceClass.T4G, InstanceSize.MICRO),
				userData: {
					distributable: {
						fileName: `${app}-${buildIdentifier}.deb`,
						executionStatement: `dpkg -i /${app}/${app}-${buildIdentifier}.deb`,
					},
				},
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
			},
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
			targetGroupWeights: {
				ec2: 500,
				ecs: 499,
			},
		});

		new GuCname(this, 'EC2AppDNS', {
			app,
			ttl: Duration.hours(1),
			domainName: ec2AppDomainName,
			resourceRecord: loadBalancer.loadBalancerDnsName,
		});
	}
}
