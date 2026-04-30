import 'source-map-support/register';
import { GuRoot } from '@guardian/cdk/lib/constructs/root';
import { CdkPlaygroundEc2 } from '../lib/cdk-playground-ec2';
import { CdkPlaygroundEcs } from '../lib/cdk-playground-ecs';
import { CdkPlaygroundLambda } from '../lib/cdk-playground-lambda';
import { EventForwarder } from '../lib/event-forwarder';

const app = new GuRoot();

const eventForwarder = new EventForwarder(app, 'EventForwarder-CODE');

const ec2Stack = new CdkPlaygroundEc2(app, 'CdkPlaygroundEc2-CODE', {
	cloudFormationStackName: 'deploy-CODE-cdk-playground-ec2',
	buildIdentifier: process.env.GITHUB_RUN_NUMBER ?? 'DEV',
});

new CdkPlaygroundLambda(app, 'CdkPlaygroundLambda-CODE', {
	cloudFormationStackName: 'deploy-CODE-cdk-playground-lambda',
});

new CdkPlaygroundEcs(app, 'CdkPlaygroundEcs-CODE', {
	cloudFormationStackName: 'deploy-CODE-cdk-playground-ecs',
	buildIdentifier: process.env.GITHUB_RUN_NUMBER ?? 'DEV',
});

// Configure Riff-Raff to deploy the application stack after the EventForwarder stack has finished.
ec2Stack.addDependency(eventForwarder);
