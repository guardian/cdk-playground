import 'source-map-support/register';
import { App } from 'aws-cdk-lib';
import { CdkPlayground } from '../lib/cdk-playground';

const app = new App();
new CdkPlayground(app, 'CdkPlayground');
