import 'source-map-support/register';
import { GuRoot } from '@guardian/cdk/lib/constructs/root';
import { CdkPlayground } from '../lib/cdk-playground';
import { CdkPlaygroundEcs } from '../lib/cdk-playground-ecs';
import { CdkPlaygroundLambda } from '../lib/cdk-playground-lambda';
import { EventForwarder } from '../lib/event-forwarder';

const riffRaffProjectName = 'devx::cdk-playground';

const app = new GuRoot();

const playground = new CdkPlayground(app, 'CdkPlayground-CODE', {
	cloudFormationStackName: 'deploy-CODE-cdk-playground',
	buildIdentifier: process.env.GITHUB_RUN_NUMBER ?? 'DEV',
	imageIdentifier: process.env.IMAGE_DIGEST ?? 'DEV',
	riffRaffProjectName,
});

const eventForwarder = new EventForwarder(app, 'EventForwarder-CODE', {
	riffRaffProjectName,
});

new CdkPlaygroundLambda(app, 'CdkPlaygroundLambda-CODE', {
	cloudFormationStackName: 'deploy-CODE-cdk-playground-lambda',
	riffRaffProjectName,
});

new CdkPlaygroundEcs(app, 'CdkPlaygroundEcs-CODE', {
	cloudFormationStackName: 'deploy-CODE-cdk-playground-ecs',
	imageIdentifier: process.env.IMAGE_DIGEST ?? 'DEV',
	riffRaffProjectName,
});

// Configure Riff-Raff to deploy the application stack after the EventForwarder stack has finished.
playground.addDependency(eventForwarder);
