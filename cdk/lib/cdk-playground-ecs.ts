import { AccessScope } from '@guardian/cdk/lib/constants/access';
import { GuStack, type GuStackProps } from '@guardian/cdk/lib/constructs/core';
import { GuCname } from '@guardian/cdk/lib/constructs/dns';
import { GuLoadBalancedAppExperimental } from '@guardian/cdk/lib/experimental/patterns/gu-load-balanced-app';
import type { App } from 'aws-cdk-lib';
import { Duration } from 'aws-cdk-lib';

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
		const app = 'cdk-playground-ecs';

		super(scope, id, {
			...props,
			stack: 'deploy',
			stage: 'CODE',
			app,
			env: { region: 'eu-west-1' },
		});

		const { imageIdentifier } = props;
		const domainName = 'cdk-playground-ecs.code.dev-gutools.co.uk';

		const { loadBalancer } = new GuLoadBalancedAppExperimental(this, {
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
		});

		new GuCname(this, 'EcsDns', {
			app,
			ttl: Duration.minutes(1),
			domainName,
			resourceRecord: loadBalancer.loadBalancerDnsName,
		});
	}
}
