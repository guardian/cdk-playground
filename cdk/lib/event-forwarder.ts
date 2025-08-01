import { GuStack, type GuStackProps } from '@guardian/cdk/lib/constructs/core';
import { GuLambdaFunction } from '@guardian/cdk/lib/constructs/lambda';
import type { App } from 'aws-cdk-lib';
import { Arn } from 'aws-cdk-lib';
import { Rule } from 'aws-cdk-lib/aws-events';
import { LambdaFunction } from 'aws-cdk-lib/aws-events-targets';
import { Effect, PolicyStatement } from 'aws-cdk-lib/aws-iam';
import { LoggingFormat, Runtime } from 'aws-cdk-lib/aws-lambda';

type EventForwarderProps = Omit<GuStackProps, 'stack'>;

export class EventForwarder extends GuStack {
	constructor(scope: App, id: string, props: EventForwarderProps) {
		const app = 'event-forwarder';

		super(scope, id, {
			...props,
			stack: 'deploy',
			app,
			env: {
				region: 'eu-west-1',
			},
		});

		const { account, region } = this;

		const lambda = new GuLambdaFunction(this, 'EventForwarderLambda', {
			app,
			fileName: `${app}.zip`,
			handler: 'index.main',
			runtime: Runtime.NODEJS_20_X,

			/*
      Override the default provided by GuCDK for improved compatability with https://github.com/guardian/cloudwatch-logs-management when producing log lines with markers.
      See also: https://github.com/guardian/cloudwatch-logs-management/issues/326.
       */
			loggingFormat: LoggingFormat.TEXT,
		});

		// This isn't lest privilege, but couldn't get a `condition` to work
		lambda.addToRolePolicy(
			new PolicyStatement({
				effect: Effect.ALLOW,
				actions: ['autoscaling:DescribeAutoScalingGroups'],
				resources: ['*'],
				// conditions: {
				// 	StringEquals: {
				// 		'aws:ResourceTag/gu:repo': this.repositoryName,
				// 	},
				// },
			}),
		);

		new Rule(this, 'CloudformationEventForwarderRule', {
			targets: [new LambdaFunction(lambda)],
			eventPattern: {
				source: ['aws.cloudformation'],
				detailType: ['CloudFormation Resource Status Change'],
				detail: {
					'stack-id': [
						{
							wildcard: Arn.format({
								partition: 'aws',
								service: 'cloudformation',
								region,
								account,
								resource: 'stack',
								resourceName: 'playground-PROD-cdk-playground*',
							}),
						},
					],
				},
			},
		});

		new Rule(this, 'AutoscalingGroupEventForwarderRule', {
			targets: [new LambdaFunction(lambda)],
			eventPattern: {
				source: ['aws.autoscaling'],
				detail: {
					AutoScalingGroupName: [
						{
							wildcard: 'playground-PROD-cdk-playground-*',
						},
					],
				},
			},
		});
	}
}
