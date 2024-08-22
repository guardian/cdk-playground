import { GuApiLambda, GuPlayApp } from '@guardian/cdk';
import { AccessScope } from '@guardian/cdk/lib/constants/access';
import { GuCertificate } from '@guardian/cdk/lib/constructs/acm';
import type { GuStackProps } from '@guardian/cdk/lib/constructs/core';
import { GuStack, GuStringParameter } from '@guardian/cdk/lib/constructs/core';
import { GuCname } from '@guardian/cdk/lib/constructs/dns';
import { GuFastlyLogsIamRole } from '@guardian/cdk/lib/constructs/iam';
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

		const { loadBalancer, autoScalingGroup } = new GuPlayApp(this, {
			app: ec2App,
			instanceType: InstanceType.of(InstanceClass.T4G, InstanceSize.MICRO),
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
			applicationLogging: {
				enabled: true,
				systemdUnitName: 'cdk-playground',
			},
			imageRecipe: 'developerPlayground-arm64-java11',
		});

		new GuCname(this, 'EC2AppDNS', {
			app: ec2App,
			ttl: Duration.hours(1),
			domainName: ec2AppDomainName,
			resourceRecord: loadBalancer.loadBalancerDnsName,
		});

		// This is a temporary domain name to support testing with a Fastly service.
		// It will be removed when testing is complete.
		new GuCname(this, 'FastlyDNS', {
			app: ec2App,
			ttl: Duration.hours(1),
			domainName: 'cdn-playground.code.dev-guardianapis.com',
			resourceRecord: 'dualstack.guardian.map.fastly.net',
		});

		// Similarly, we are creating this role to support log shipping from Fastly.
		// It will also be removed once testing is complete.
		const fastlyBucketParameterKey = `/${this.stage}/${this.stack}/${ec2App}/fastly-logs-bucket`;
		new GuFastlyLogsIamRole(this, {
			bucketName: new GuStringParameter(this, 'FastlyBucket', {
				fromSSM: true,
				allowedValues: [fastlyBucketParameterKey],
				default: fastlyBucketParameterKey,
			}).valueAsString,
		});

		const lambdaApp = 'cdk-playground-lambda';
		const lambdaDomainName = 'cdk-playground-lambda.gutools.co.uk';

		const lambda = new GuApiLambda(this, 'lambda', {
			fileName: `cdk-playground-lambda.zip`,
			handler: 'handler.main',
			runtime: Runtime.NODEJS_20_X,
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

		const { GITHUB_RUN_NUMBER = 'unknown', GITHUB_SHA = 'unknown' } =
			process.env;

		this.addMetadata('gu:build:number', GITHUB_RUN_NUMBER);
		this.addMetadata('gu:build:sha', GITHUB_SHA);

		Tags.of(autoScalingGroup).add('gu:build:number', GITHUB_RUN_NUMBER);
		Tags.of(autoScalingGroup).add('gu:build:sha', GITHUB_SHA);
	}
}
