import { App } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { CdkPlayground } from './cdk-playground';

describe('The Deploy stack', () => {
	it('matches the snapshot', () => {
		const app = new App({ outdir: '/tmp/cdk.out' });
		const stack = new CdkPlayground(app, 'CdkPlayground', {
			buildIdentifier: 'TEST',
			stage: 'PROD',
			ec2AppDomainName: 'cdk-playground.gutools.co.uk',
			lambdaDomainName: 'cdk-playground-lambda.gutools.co.uk',
		});
		expect(Template.fromStack(stack).toJSON()).toMatchSnapshot();
	});
});
