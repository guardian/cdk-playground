import { AccessScope } from '@guardian/cdk/lib/constants/access';
import { GuStack, type GuStackProps } from '@guardian/cdk/lib/constructs/core';
import { GuCname } from '@guardian/cdk/lib/constructs/dns';
import { GuLoadBalancedAppExperimental } from '@guardian/cdk/lib/experimental/patterns/gu-load-balanced-app';
import type { App } from 'aws-cdk-lib';
import { Duration } from 'aws-cdk-lib';
import { InstanceClass, InstanceSize, InstanceType } from 'aws-cdk-lib/aws-ec2';

type CdkPlaygroundEc2Props = Omit<GuStackProps, 'stack' | 'stage'>;

export class CdkPlaygroundEc2 extends GuStack {
	constructor(scope: App, id: string, props: CdkPlaygroundEc2Props) {
		super(scope, id, {
			...props,
			stack: 'deploy',
			stage: 'CODE',
			env: { region: 'eu-west-1' },
		});

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
			ec2Props: {
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
				instanceType: InstanceType.of(InstanceClass.T4G, InstanceSize.MICRO),
				userData: {
					distributable: {
						fileName: `${ec2App}.deb`,
						executionStatement: `dpkg -i /${ec2App}/${ec2App}.deb`,
					},
				},
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
