import { App } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { CdkPlaygroundEcs } from './cdk-playground-ecs';

describe('The cdk-playground infrastructure definition', () => {
	it('matches the snapshot for ECS', () => {
		const app = new App({ outdir: '/tmp/cdk.out' });
		const stack = new CdkPlaygroundEcs(app, 'CdkPlaygroundEcs-CODE', {
			imageIdentifier: 'sha256:12345',
			riffRaffProjectName: 'devx::cdk-playground',
			stack: 'deploy',
			stage: 'CODE',
			domainName: 'cdk-playground-ecs.code.dev-gutools.co.uk',
		});
		expect(Template.fromStack(stack).toJSON()).toMatchSnapshot();
	});
});
