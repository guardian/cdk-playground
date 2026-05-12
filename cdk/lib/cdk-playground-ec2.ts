import { AccessScope } from '@guardian/cdk/lib/constants/access';
import { GuStack, type GuStackProps } from '@guardian/cdk/lib/constructs/core';
import { GuCname } from '@guardian/cdk/lib/constructs/dns';
import { GuEc2AppExperimental } from '@guardian/cdk/lib/experimental/patterns/ec2-app';
import { GuEcsAppExperimental } from '@guardian/cdk/lib/experimental/patterns/ecs-app';
import type { GuDomainName } from '@guardian/cdk/lib/types';
import type { App } from 'aws-cdk-lib';
import { Duration } from 'aws-cdk-lib';
import { InstanceClass, InstanceSize, InstanceType } from 'aws-cdk-lib/aws-ec2';

interface CdkPlaygroundEc2Props extends Omit<GuStackProps, 'stack' | 'stage'> {
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

export class CdkPlaygroundEc2 extends GuStack {
	constructor(scope: App, id: string, props: CdkPlaygroundEc2Props) {
		super(scope, id, {
			...props,
			stack: 'deploy',
			stage: 'CODE',
			env: { region: 'eu-west-1' },
		});

		const { buildIdentifier, imageIdentifier } = props;

		const ec2AppDomainName = 'cdk-playground.code.dev-gutools.co.uk';
		const certificateProps: GuDomainName = {
			domainName: ec2AppDomainName,
		};

		const app = 'cdk-playground';

		const ec2App = new GuEc2AppExperimental(this, {
			buildIdentifier,
			applicationPort: 9000,
			app,
			instanceType: InstanceType.of(InstanceClass.T4G, InstanceSize.MICRO),
			access: { scope: AccessScope.PUBLIC },
			userData: {
				distributable: {
					fileName: `${app}-${buildIdentifier}.deb`,
					executionStatement: `dpkg -i /${app}/${app}-${buildIdentifier}.deb`,
				},
			},
			certificateProps,
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

		new GuEcsAppExperimental(this, {
			app,
			applicationPort: 9000,
			certificateProps,
			cpu: 1024,
			imageIdentifier,
			memoryLimitMiB: 2048,
			repositoryName: 'guardian/cdk-playground',
			scaling: { minimumTasks: 1, maximumTasks: 10 },
			// This is the important bit for the migration; it allows us to share the existing ALB & listener and split
			// traffic between the EC2 and ECS target groups
			migrationProps: {
				loadBalancer: ec2App.loadBalancer,
				listener: ec2App.listener,
				targetGroup: ec2App.targetGroup,
				// Although to begin with we send 0% traffic to the ECS target group; I think we need an initial deploy to
				// get some healthy tasks before we start routing traffic to them
				weightForEcsTargetGroup: 0,
			},
		});

		new GuCname(this, 'EC2AppDNS', {
			app: app,
			ttl: Duration.hours(1),
			domainName: ec2AppDomainName,
			resourceRecord: ec2App.loadBalancer.loadBalancerDnsName,
		});
	}
}
