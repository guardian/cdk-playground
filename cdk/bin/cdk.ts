import 'source-map-support/register';
import { GuRoot } from '@guardian/cdk/lib/constructs/root';
import { CdkPlayground } from '../lib/cdk-playground';
import { LocalstackStack } from '../lib/localstack-stack';

const app = new GuRoot();
new CdkPlayground(app, 'CdkPlayground');

const localstackApp = new GuRoot();
new LocalstackStack(localstackApp, 'LocalstackStack');
