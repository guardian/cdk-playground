import 'source-map-support/register';
import { GuRoot } from '@guardian/cdk/lib/constructs/root';
import { CdkPlayground } from '../lib/cdk-playground';
import { EventForwarder } from '../lib/event-forwarder';

const app = new GuRoot();

const eventForwarder = new EventForwarder(app);

const applicationStack = new CdkPlayground(app, 'CdkPlayground', {
	cloudFormationStackName: 'deploy-PROD-cdk-playground',
	buildIdentifier: process.env.GITHUB_RUN_NUMBER ?? 'DEV',
});

// Configure Riff-Raff to deploy the application stack after the EventForwarder stack has finished.
applicationStack.addDependency(eventForwarder);
