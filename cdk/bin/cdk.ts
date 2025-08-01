import 'source-map-support/register';
import { RiffRaffYamlFile } from '@guardian/cdk/lib/riff-raff-yaml-file';
import { App } from 'aws-cdk-lib';
import { CdkPlayground } from '../lib/cdk-playground';
import { EventForwarder } from '../lib/event-forwarder';

const app = new App();

const eventForwarder = new EventForwarder(app, 'EventForwarder', {
	stage: 'PROD',
});

const applicationStack = new CdkPlayground(app, 'CdkPlayground', {
	cloudFormationStackName: 'deploy-PROD-cdk-playground',
	buildIdentifier: process.env.GITHUB_RUN_NUMBER ?? 'DEV',
	stage: 'PROD',
	ec2AppDomainName: 'cdk-playground.gutools.co.uk',
	lambdaDomainName: 'cdk-playground-lambda.gutools.co.uk',
});

// Configure Riff-Raff to deploy the application stack after the EventForwarder stack has finished.
applicationStack.addDependency(eventForwarder);

const riffRaff = new RiffRaffYamlFile(app);
const cfnDeployment = riffRaff.riffRaffYaml.deployments.get(
	'cfn-eu-west-1-deploy-cdk-playground',
);

/*
Required only for the initial deployment.

The cdk-playground stack has a CFN parameter `MinInstancesInServiceForcdkplayground` that does not have a default value.
We have to provide the initial value.

There are a few ways to do this:
- Create the CFN stack manually in the AWS console and provide the value
- Set the CFN parameter `riff-raff.yaml` and use Riff-Raff to deploy the stack
- Set the value in the cdk-playground stack

The latter is tricky, as the parameter is added via an Aspect, which is not executed within the `constructor` of CdkPlayground,
we'd have to find the relevant CDK hook.

Below, we set the value in the `riff-raff.yaml` file.
 */
if (cfnDeployment) {
	cfnDeployment.parameters = {
		...cfnDeployment.parameters,
		templateStageParameters: {
			PROD: {
				MinInstancesInServiceForcdkplayground: '1',
			},
		},
	};
}

riffRaff.synth();
