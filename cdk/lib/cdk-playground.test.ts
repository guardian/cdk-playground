import { App } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import {
	CdkPlaygroundEc2,
	CdkPlaygroundEcs,
	CdkPlaygroundLambda,
} from './cdk-playground';

describe('The cdk-playground infrastructure definition', () => {
	it('matches the snapshot for EC2', () => {
		const app = new App({ outdir: '/tmp/cdk.out' });
		const stack = new CdkPlaygroundEc2(app, 'CdkPlaygroundEc2-CODE', {
			buildIdentifier: 'TEST',
		});
		expect(Template.fromStack(stack).toJSON()).toMatchSnapshot();
	});
	it('matches the snapshot for Lambda', () => {
		const app = new App({ outdir: '/tmp/cdk.out' });
		const stack = new CdkPlaygroundLambda(app, 'CdkPlaygroundLambda-CODE', {
			buildIdentifier: 'TEST',
		});
		expect(Template.fromStack(stack).toJSON()).toMatchSnapshot();
	});
	it('matches the snapshot for ECS', () => {
		const app = new App({ outdir: '/tmp/cdk.out' });
		const stack = new CdkPlaygroundEcs(app, 'CdkPlaygroundEcs-CODE', {
			buildIdentifier: 'TEST',
		});
		expect(Template.fromStack(stack).toJSON()).toMatchSnapshot();
	});
});
