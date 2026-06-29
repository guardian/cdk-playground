import { App } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { CdkPlayground } from './cdk-playground';

describe('The cdk-playground infrastructure definition', () => {
	it('matches the snapshot', () => {
		const app = new App({ outdir: '/tmp/cdk.out' });
		const stack = new CdkPlayground(app, 'CdkPlayground-CODE', {
			buildIdentifier: 'TEST',
			imageIdentifier: 'sha256:12345',
			riffRaffProjectName: 'devx::cdk-playground',
		});
		expect(Template.fromStack(stack).toJSON()).toMatchSnapshot();
	});
});
