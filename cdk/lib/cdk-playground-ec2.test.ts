import { App } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { CdkPlaygroundEc2 } from './cdk-playground-ec2';

describe('The cdk-playground infrastructure definition', () => {
	it('matches the snapshot for EC2', () => {
		const app = new App({ outdir: '/tmp/cdk.out' });
		const stack = new CdkPlaygroundEc2(app, 'CdkPlaygroundEc2-CODE', {
			buildIdentifier: 'TEST',
		});
		expect(Template.fromStack(stack).toJSON()).toMatchSnapshot();
	});
});
