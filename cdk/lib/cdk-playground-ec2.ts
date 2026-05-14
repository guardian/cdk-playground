import { AccessScope } from '@guardian/cdk/lib/constants/access';
import { GuStack, type GuStackProps } from '@guardian/cdk/lib/constructs/core';
import { GuCname } from '@guardian/cdk/lib/constructs/dns';
import { GuLoadBalancedAppExperimental } from '@guardian/cdk/lib/experimental/patterns/gu-load-balanced-app';
import type { App } from 'aws-cdk-lib';
import { Duration } from 'aws-cdk-lib';

interface CdkPlaygroundEc2Props extends Omit<GuStackProps, 'stack' | 'stage'> {
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

		const { imageIdentifier } = props;

		const ec2AppDomainName = 'cdk-playground.code.dev-gutools.co.uk';

		const ec2App = 'cdk-playground';

		const { loadBalancer } = new GuLoadBalancedAppExperimental(this, {
			applicationPort: 9000,
			app: ec2App,
			access: { scope: AccessScope.PUBLIC },
			certificateProps: {
				domainName: ec2AppDomainName,
			},
			monitoringConfiguration: { noMonitoring: true },
			ecsProps: {
				cpu: 1024,
				imageIdentifier,
				memoryLimitMiB: 2048,
				repositoryName: 'guardian/cdk-playground',
				scaling: { minimumTasks: 1, maximumTasks: 10 },
			},
		});

		new GuCname(this, 'EC2AppDNS', {
			app: ec2App,
			ttl: Duration.hours(1),
			domainName: ec2AppDomainName,
			resourceRecord: loadBalancer.loadBalancerDnsName,
		});
	}
}
