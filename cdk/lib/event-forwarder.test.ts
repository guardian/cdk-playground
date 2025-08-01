import { App } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { EventForwarder } from './event-forwarder';

describe('The EventForwarder stack', () => {
	it('matches the snapshot', () => {
		const app = new App();
		const stack = new EventForwarder(app, 'EventForwarder', { stage: 'PROD' });
		const template = Template.fromStack(stack);
		expect(template.toJSON()).toMatchSnapshot();
	});
	it('matches the snapshot for CODE', () => {
		const app = new App({ outdir: '/tmp/cdk.out' });
		const stack = new EventForwarder(app, 'EventForwarder-CODE', {
			stage: 'CODE',
		});
		const template = Template.fromStack(stack);
		expect(template.toJSON()).toMatchSnapshot();
	});
});
