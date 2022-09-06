import { GuApiLambda, GuPlayApp } from '@guardian/cdk';
import { AccessScope } from '@guardian/cdk/lib/constants/access';
import { GuCertificate } from '@guardian/cdk/lib/constructs/acm';
import type { GuStackProps } from '@guardian/cdk/lib/constructs/core';
import { GuStack } from '@guardian/cdk/lib/constructs/core';
import { GuCname } from '@guardian/cdk/lib/constructs/dns';
import type { App } from 'aws-cdk-lib';
import { Duration, Tags } from 'aws-cdk-lib';
import {
	Alarm,
	AlarmRule,
	AlarmState,
	ComparisonOperator,
	CompositeAlarm,
	MathExpression,
	TreatMissingData,
} from 'aws-cdk-lib/aws-cloudwatch';
import { InstanceClass, InstanceSize, InstanceType } from 'aws-cdk-lib/aws-ec2';
import {
	HttpCodeElb,
	HttpCodeTarget,
} from 'aws-cdk-lib/aws-elasticloadbalancingv2';
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

		const { autoScalingGroup, loadBalancer } = new GuPlayApp(this, {
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
			imageRecipe: 'arm64-bionic-java11-deploy-infrastructure',
		});

		// Get devx-logs to ship EC2 application logs to Central ELK
		Tags.of(autoScalingGroup).add('SystemdUnit', `${ec2App}.service`);

		new GuCname(this, 'EC2AppDNS', {
			app: ec2App,
			ttl: Duration.hours(1),
			domainName: ec2AppDomainName,
			resourceRecord: loadBalancer.loadBalancerDnsName,
		});

		interface BurnRate {
			speed: 'Fast' | 'Moderate' | 'Slow';
			burnRate: number;
			longWindow: Duration;
			shortWindow: Duration;
			action: 'notify' | 'ticket';
		}

		const fastBurnRate: BurnRate = {
			speed: 'Fast',
			burnRate: 15,
			longWindow: Duration.hours(1),
			shortWindow: Duration.minutes(5),
			action: 'notify',
		};

		const moderateBurnRate: BurnRate = {
			speed: 'Moderate',
			burnRate: 6,
			longWindow: Duration.hours(6),
			shortWindow: Duration.minutes(30),
			action: 'notify',
		};

		const slowBurnRate: BurnRate = {
			speed: 'Slow',
			burnRate: 3,
			longWindow: Duration.days(1),
			shortWindow: Duration.hours(2),
			action: 'ticket',
		};

		const sloTarget = 0.999;
		const errorBudget = 1 - sloTarget;

		function burnRateAlarm(
			scope: GuStack,
			burnRate: BurnRate,
			window: Duration,
		): Alarm {
			const undesirableErrorBudgetConsumption = errorBudget * burnRate.burnRate;
			return new Alarm(
				scope,
				`${burnRate.speed}BurnOver${window.toHumanString()}`,
				{
					metric: new MathExpression({
						expression: `(m1+m2)/m3`,
						label: 'Observed failure rate',
						usingMetrics: {
							m1: loadBalancer.metricHttpCodeElb(HttpCodeElb.ELB_5XX_COUNT),
							m2: loadBalancer.metricHttpCodeTarget(
								HttpCodeTarget.TARGET_5XX_COUNT,
							),
							m3: loadBalancer.metricRequestCount(),
						},
						period: window,
					}),
					evaluationPeriods: 1,
					threshold: undesirableErrorBudgetConsumption,
					comparisonOperator: ComparisonOperator.GREATER_THAN_THRESHOLD,
					treatMissingData: TreatMissingData.NOT_BREACHING,
				},
			);
		}

		[fastBurnRate, moderateBurnRate, slowBurnRate].map((burnRate) => {
			return new CompositeAlarm(this, `${burnRate.speed}BurnCompositeAlarm`, {
				alarmRule: AlarmRule.allOf(
					AlarmRule.fromAlarm(
						burnRateAlarm(this, burnRate, burnRate.longWindow),
						AlarmState.ALARM,
					),
					AlarmRule.fromAlarm(
						burnRateAlarm(this, burnRate, burnRate.shortWindow),
						AlarmState.ALARM,
					),
				),
				// Use burnRate.action to do something useful
			});
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
