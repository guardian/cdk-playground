import { App } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { EventForwarder } from './event-forwarder';

describe('The EventForwarder stack', () => {
	it('matches the snapshot', () => {
		const app = new App();
		const stack = new EventForwarder(app);
		const template = Template.fromStack(stack);
		expect(template.toJSON()).toMatchSnapshot();
	});
});
