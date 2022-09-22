import { GuApiLambda, GuPlayApp } from '@guardian/cdk';
import { AccessScope } from '@guardian/cdk/lib/constants/access';
import { GuCertificate } from '@guardian/cdk/lib/constructs/acm';
import type { GuStackProps } from '@guardian/cdk/lib/constructs/core';
import { GuStack } from '@guardian/cdk/lib/constructs/core';
import { GuCname } from '@guardian/cdk/lib/constructs/dns';
import { GuAllowPolicy } from '@guardian/cdk/lib/constructs/iam';
import type { App } from 'aws-cdk-lib';
import { Duration, Tags } from 'aws-cdk-lib';
import { InstanceClass, InstanceSize, InstanceType } from 'aws-cdk-lib/aws-ec2';
import { Runtime } from 'aws-cdk-lib/aws-lambda';

export class CdkPlayground extends GuStack {
	constructor(
		scope: App,
		id: string,
		props?: Omit<GuStackProps, 'stack' | 'stage'>,
	) {
		super(scope, id, {
			...props,
			stack: 'playground',
			stage: 'PROD',
			env: { region: 'eu-west-1' },
		});

		const ec2App = 'cdk-playground';
		const ec2AppDomainName = 'cdk-playground.gutools.co.uk';

		const prometheusMetricsPolicy = new GuAllowPolicy(this, 'AdotPolicy', {
			actions: ['aps:RemoteWrite'],
			resources: ['*'],
		});

		const { autoScalingGroup, loadBalancer } = new GuPlayApp(this, {
			app: ec2App,
			instanceType: InstanceType.of(InstanceClass.T4G, InstanceSize.MICRO),
			roleConfiguration: {
				additionalPolicies: [prometheusMetricsPolicy],
			},
			access: { scope: AccessScope.PUBLIC },
			userData: {
				distributable: {
					fileName: `${ec2App}.deb`,
					executionStatement: `dpkg -i /${ec2App}/${ec2App}.deb`,
				},
			},
			certificateProps: {
				domainName: ec2AppDomainName,
			},
			monitoringConfiguration: { noMonitoring: true },
			scaling: {
				minimumInstances: 1,
				maximumInstances: 2,
			},
			imageRecipe: 'arm64-bionic-java11-deploy-infrastructure',
		});

		// This should happen via Amigo
		autoScalingGroup.userData.addCommands(
			'wget https://aws-otel-collector.s3.amazonaws.com/ubuntu/arm64/latest/aws-otel-collector.deb',
			'dpkg -i -E ./aws-otel-collector.deb',
			'aws s3 cp s3://developer-playground-dist/playground/PROD/cdk-playground/metrics-config.yaml /opt/aws/aws-otel-collector/etc/metrics-config.yaml',
			'/opt/aws/aws-otel-collector/bin/aws-otel-collector-ctl -c /opt/aws/aws-otel-collector/etc/metrics-config.yaml -a start',
		);

		// Get devx-logs to ship EC2 application logs to Central ELK
		Tags.of(autoScalingGroup).add('SystemdUnit', `${ec2App}.service`);

		new GuCname(this, 'EC2AppDNS', {
			app: ec2App,
			ttl: Duration.hours(1),
			domainName: ec2AppDomainName,
			resourceRecord: loadBalancer.loadBalancerDnsName,
		});

		const lambdaApp = 'cdk-playground-lambda';
		const lambdaDomainName = 'cdk-playground-lambda.gutools.co.uk';

		const lambda = new GuApiLambda(this, 'lambda', {
			fileName: `cdk-playground-lambda.zip`,
			handler: 'handler.main',
			runtime: Runtime.NODEJS_16_X,
			monitoringConfiguration: {
				noMonitoring: true,
			},
			app: lambdaApp,
			api: {
				id: `${lambdaApp}-api`,
				description: lambdaApp,
			},
		});

		const domain = lambda.api.addDomainName('domain', {
			domainName: lambdaDomainName,
			certificate: new GuCertificate(this, {
				app: lambdaApp,
				domainName: lambdaDomainName,
			}),
		});

		new GuCname(this, 'LambdaDNS', {
			app: lambdaApp,
			ttl: Duration.hours(1),
			domainName: lambdaDomainName,
			resourceRecord: domain.domainNameAliasDomainName,
		});
	}
}
