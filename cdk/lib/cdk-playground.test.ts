import { App } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { CdkPlayground } from './cdk-playground';

describe('The Deploy stack', () => {
	it('matches the snapshot', () => {
		const app = new App();
		const stack = new CdkPlayground(app, 'CdkPlayground', { stack: 'deploy' });
		expect(Template.fromStack(stack).toJSON()).toMatchSnapshot();
	});
});
