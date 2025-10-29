import 'source-map-support/register';
import { RiffRaffYamlFile } from '@guardian/cdk/lib/riff-raff-yaml-file';
import { App } from 'aws-cdk-lib';
import { CdkPlayground } from '../lib/cdk-playground';
import { EventForwarder } from '../lib/event-forwarder';

const app = new App();

const eventForwarder = new EventForwarder(app, 'EventForwarder-CODE');

const applicationStack = new CdkPlayground(app, 'CdkPlayground-CODE', {
	cloudFormationStackName: 'deploy-CODE-cdk-playground',
	buildIdentifier: process.env.GITHUB_RUN_NUMBER ?? 'DEV',
});

// Configure Riff-Raff to deploy the application stack after the EventForwarder stack has finished.
applicationStack.addDependency(eventForwarder);

const riffRaff = new RiffRaffYamlFile(app);
// const cfnDeployment = riffRaff.riffRaffYaml.deployments.get(
// 	'cfn-eu-west-1-deploy-cdk-playground',
// );
//
// // This is temporarily required to work around a bug with the riff-raff.yaml generation
// // in GuCDK: https://trello.com/c/4sUs6fWY/546-new-deployment-mechanism-fix-bugs-with-riff-raffyaml-generation
// if (cfnDeployment) {
// 	cfnDeployment.parameters = {
// 		...cfnDeployment.parameters,
// 		minInstancesInServiceParameters: {
// 			MinInstancesInServiceForcdkplayground: { App: 'cdk-playground' },
// 		},
// 	};
// }

riffRaff.synth();
