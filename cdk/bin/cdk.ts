import 'source-map-support/register';
import { GuRoot } from '@guardian/cdk/lib/constructs/root';
import { CdkPlayground } from '../lib/cdk-playground';

const app = new GuRoot();
new CdkPlayground(app, 'CdkPlayground', {
	cloudFormationStackName: 'playground-PROD-cdk-playground',
	buildIdentifier: process.env.GITHUB_RUN_NUMBER ?? 'DEV',
});
