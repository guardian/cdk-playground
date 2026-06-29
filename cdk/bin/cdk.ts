import 'source-map-support/register';
import { GuRoot } from '@guardian/cdk/lib/constructs/root';
import { CdkPlaygroundEcs } from '../lib/cdk-playground-ecs';
import { CdkPlaygroundLambda } from '../lib/cdk-playground-lambda';
import { EventForwarder } from '../lib/event-forwarder';

const riffRaffProjectName = 'devx::cdk-playground';

const app = new GuRoot();

new EventForwarder(app, 'EventForwarder-CODE', {
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
