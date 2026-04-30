import { AccessScope } from '@guardian/cdk/lib/constants/access';
import { GuStack, type GuStackProps } from '@guardian/cdk/lib/constructs/core';
import { GuCname } from '@guardian/cdk/lib/constructs/dns';
import { GuEc2AppExperimental } from '@guardian/cdk/lib/experimental/patterns/ec2-app';
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
}

export class CdkPlaygroundEc2 extends GuStack {
	constructor(scope: App, id: string, props: CdkPlaygroundEc2Props) {
		super(scope, id, {
			...props,
			stack: 'deploy',
			stage: 'CODE',
			env: { region: 'eu-west-1' },
		});

		const { buildIdentifier } = props;

		const ec2AppDomainName = 'cdk-playground.code.dev-gutools.co.uk';

		const ec2App = 'cdk-playground';

		const { loadBalancer } = new GuEc2AppExperimental(this, {
			buildIdentifier,
			applicationPort: 9000,
			app: ec2App,
			instanceType: InstanceType.of(InstanceClass.T4G, InstanceSize.MICRO),
			access: { scope: AccessScope.PUBLIC },
			userData: {
				distributable: {
					fileName: `${ec2App}-${buildIdentifier}.deb`,
					executionStatement: `dpkg -i /${ec2App}/${ec2App}-${buildIdentifier}.deb`,
				},
			},
			certificateProps: {
				domainName: ec2AppDomainName,
			},
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

		new GuCname(this, 'EC2AppDNS', {
			app: ec2App,
			ttl: Duration.hours(1),
			domainName: ec2AppDomainName,
			resourceRecord: loadBalancer.loadBalancerDnsName,
		});
	}
}
