import { RiffRaffYamlFileExperimental } from '@guardian/cdk/lib/experimental/riff-raff-yaml-file';
import { App } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { CdkPlayground } from './cdk-playground';

describe('The Deploy stack', () => {
	it('matches the snapshot', () => {
		const app = new App({ outdir: '/tmp/cdk.out' });
		const stack = new CdkPlayground(app, 'CdkPlayground');
		expect(Template.fromStack(stack).toJSON()).toMatchSnapshot();

		const riffRaffYaml = new RiffRaffYamlFileExperimental(app);
		expect(riffRaffYaml.toYAML()).toMatchInlineSnapshot(`
		"allowedStages:
		  - PROD
		deployments:
		  lambda-upload-eu-west-1-playground-cdk-playground-lambda:
		    type: aws-lambda
		    stacks:
		      - playground
		    regions:
		      - eu-west-1
		    app: cdk-playground-lambda
		    contentDirectory: cdk-playground-lambda
		    parameters:
		      bucketSsmLookup: true
		      lookupByTags: true
		      fileName: cdk-playground-lambda.zip
		    actions:
		      - uploadLambda
		  asg-upload-eu-west-1-playground-cdk-playground:
		    type: autoscaling
		    actions:
		      - uploadArtifacts
		    regions:
		      - eu-west-1
		    stacks:
		      - playground
		    app: cdk-playground
		    parameters:
		      bucketSsmLookup: true
		      prefixApp: true
		    contentDirectory: cdk-playground
		  cfn-eu-west-1-playground-cdk-playground:
		    type: cloud-formation
		    regions:
		      - eu-west-1
		    stacks:
		      - playground
		    app: cdk-playground
		    contentDirectory: /tmp/cdk.out
		    parameters:
		      templateStagePaths:
		        PROD: CdkPlayground.template.json
		      amiParameter: AMICdkplayground
		      amiTags:
		        BuiltBy: amigo
		        Recipe: arm64-bionic-java11-deploy-infrastructure
		        AmigoStage: PROD
		    dependencies:
		      - lambda-upload-eu-west-1-playground-cdk-playground-lambda
		      - asg-upload-eu-west-1-playground-cdk-playground
		  lambda-update-eu-west-1-playground-cdk-playground-lambda:
		    type: aws-lambda
		    stacks:
		      - playground
		    regions:
		      - eu-west-1
		    app: cdk-playground-lambda
		    contentDirectory: cdk-playground-lambda
		    parameters:
		      bucketSsmLookup: true
		      lookupByTags: true
		      fileName: cdk-playground-lambda.zip
		    actions:
		      - updateLambda
		    dependencies:
		      - cfn-eu-west-1-playground-cdk-playground
		  asg-update-eu-west-1-playground-cdk-playground:
		    type: autoscaling
		    actions:
		      - deploy
		    regions:
		      - eu-west-1
		    stacks:
		      - playground
		    app: cdk-playground
		    parameters:
		      bucketSsmLookup: true
		      prefixApp: true
		    dependencies:
		      - cfn-eu-west-1-playground-cdk-playground
		    contentDirectory: cdk-playground
		"
	`);
	});
});
