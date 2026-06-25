import 'source-map-support/register';
import { GuRoot } from '@guardian/cdk/lib/constructs/root';
import { CdkPlayground } from '../lib/cdk-playground';
import { CdkPlaygroundLambda } from '../lib/cdk-playground-lambda';
import { EventForwarder } from '../lib/event-forwarder';

const riffRaffProjectName = 'devx::cdk-playground';

const app = new GuRoot();

const eventForwarder = new EventForwarder(app, 'EventForwarder-CODE', {
	riffRaffProjectName,
});

const playground = new CdkPlayground(app, 'CdkPlaygroundEc2-CODE', {
	cloudFormationStackName: 'deploy-CODE-cdk-playground-ec2',
	buildIdentifier: process.env.GITHUB_RUN_NUMBER ?? 'DEV',
	imageIdentifier: process.env.IMAGE_DIGEST ?? 'DEV',
	riffRaffProjectName,
});

new CdkPlaygroundLambda(app, 'CdkPlaygroundLambda-CODE', {
	cloudFormationStackName: 'deploy-CODE-cdk-playground-lambda',
	riffRaffProjectName,
});

// Configure Riff-Raff to deploy the application stack after the EventForwarder stack has finished.
playground.addDependency(eventForwarder);
