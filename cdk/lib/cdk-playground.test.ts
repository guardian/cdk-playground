import { App } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { CdkPlayground } from './cdk-playground';

describe('The Deploy stack', () => {
	it('matches the snapshot for CODE', () => {
		const app = new App({ outdir: '/tmp/cdk.out' });
		const stack = new CdkPlayground(app, 'CdkPlayground-CODE', {
			buildIdentifier: 'TEST',
		});
		expect(Template.fromStack(stack).toJSON()).toMatchSnapshot();
	});
});
