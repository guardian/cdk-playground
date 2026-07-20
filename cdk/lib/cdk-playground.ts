import { AccessScope } from '@guardian/cdk/lib/constants/access';
import { GuStack, type GuStackProps } from '@guardian/cdk/lib/constructs/core';
import { GuCname } from '@guardian/cdk/lib/constructs/dns';
import { GuLoadBalancedAppExperimental } from '@guardian/cdk/lib/experimental/patterns/gu-load-balanced-app';
import type { App } from 'aws-cdk-lib';
import { Duration } from 'aws-cdk-lib';
import { InstanceClass, InstanceSize, InstanceType } from 'aws-cdk-lib/aws-ec2';
import type { CfnService, CfnTaskDefinition } from 'aws-cdk-lib/aws-ecs';

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
		super(scope, id, {
			...props,
			stack: 'deploy',
			stage: 'CODE',
			env: { region: 'eu-west-1' },
		});

		const { buildIdentifier, imageIdentifier } = props;

		const ec2AppDomainName = 'cdk-playground.code.dev-gutools.co.uk';

		const ec2App = 'cdk-playground';

		const loadBalancedApp = new GuLoadBalancedAppExperimental(this, {
			applicationPort: 9000,
			app: ec2App,
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
						fileName: `${ec2App}-${buildIdentifier}.deb`,
						executionStatement: `dpkg -i /${ec2App}/${ec2App}-${buildIdentifier}.deb`,
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
				ec2: 1,
				ecs: 1,
			},
		});

		const cfnService = loadBalancedApp.ecsService!.node
			.defaultChild as CfnService;
		cfnService.addPropertyOverride('EnableExecuteCommand', true);

		const cfnTaskDef = loadBalancedApp.ecsService!.taskDefinition.node
			.defaultChild as CfnTaskDefinition;
		cfnTaskDef.addPropertyOverride(
			'ContainerDefinitions.0.ReadonlyRootFilesystem',
			false,
		);

		new GuCname(this, 'EC2AppDNS', {
			app: ec2App,
			ttl: Duration.hours(1),
			domainName: ec2AppDomainName,
			resourceRecord: loadBalancedApp.loadBalancer.loadBalancerDnsName,
		});
	}
}
