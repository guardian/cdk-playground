import { App } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { CdkPlaygroundLambda } from './cdk-playground-lambda';

describe('The cdk-playground infrastructure definition', () => {
	it('matches the snapshot for Lambda', () => {
		const app = new App({ outdir: '/tmp/cdk.out' });
		const stack = new CdkPlaygroundLambda(app, 'CdkPlaygroundLambda-CODE', {
			riffRaffProjectName: 'devx::cdk-playground',
		});
		expect(Template.fromStack(stack).toJSON()).toMatchSnapshot();
	});
});
