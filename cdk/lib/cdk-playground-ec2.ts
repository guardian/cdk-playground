import { GuStack, type GuStackProps } from '@guardian/cdk/lib/constructs/core';
import type { App } from 'aws-cdk-lib';
import { CfnInclude } from 'aws-cdk-lib/cloudformation-include';

type CdkPlaygroundEc2Props = Omit<GuStackProps, 'stack' | 'stage'>;

export class CdkPlaygroundEc2 extends GuStack {
	constructor(scope: App, id: string, props: CdkPlaygroundEc2Props) {
		super(scope, id, {
			...props,
			stack: 'deploy',
			stage: 'CODE',
			env: { region: 'eu-west-1' },
		});
		new CfnInclude(this, 'Template', {
			templateFile: '../ec2-app.yaml',
		});
	}
}
