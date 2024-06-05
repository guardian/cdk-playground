import { GuApiLambda, GuPlayApp } from '@guardian/cdk';
import { AccessScope } from '@guardian/cdk/lib/constants/access';
import { GuCertificate } from '@guardian/cdk/lib/constructs/acm';
import type { GuStackProps } from '@guardian/cdk/lib/constructs/core';
import { GuStack } from '@guardian/cdk/lib/constructs/core';
import { GuCname } from '@guardian/cdk/lib/constructs/dns';
import { GuLambdaFunction } from '@guardian/cdk/lib/constructs/lambda';
import type { App } from 'aws-cdk-lib';
import { Duration, RemovalPolicy, Tags } from 'aws-cdk-lib';
import { InstanceClass, InstanceSize, InstanceType } from 'aws-cdk-lib/aws-ec2';
import type { CfnRole } from 'aws-cdk-lib/aws-iam';
import { Role, ServicePrincipal } from 'aws-cdk-lib/aws-iam';
import type { CfnFunction } from 'aws-cdk-lib/aws-lambda';
import { Runtime } from 'aws-cdk-lib/aws-lambda';
import { LogGroup } from 'aws-cdk-lib/aws-logs';

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

		const { loadBalancer } = new GuPlayApp(this, {
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

		const { stage, stack } = this;
		const testLambdaApp = 'cdk-playground-lambda-test';

		const logGroup = new LogGroup(this, `${testLambdaApp}-log-group`, {
			logGroupName: `/aws/lambda/${stage}/${stack}/${testLambdaApp}`,
			retention: 14,
			removalPolicy: RemovalPolicy.DESTROY,
		});
		Tags.of(logGroup).add('App', testLambdaApp);

		const testLambda = new GuLambdaFunction(this, 'test-lambda', {
			app: testLambdaApp,
			fileName: `${testLambdaApp}.zip`,
			handler: 'handler.main',
			runtime: Runtime.NODEJS_20_X,
			logGroup,
		});

		logGroup.grantWrite(testLambda);

		const { role } = testLambda;
		if (role) {
			(role.node.defaultChild as CfnRole).managedPolicyArns = [];
		}

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
