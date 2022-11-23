import 'source-map-support/register';
import { GuRootExperimental } from '@guardian/cdk/lib/experimental/constructs/root';
import { CdkPlayground } from '../lib/cdk-playground';

const app = new GuRootExperimental();
new CdkPlayground(app, 'CdkPlayground');
const unused = "Hello there linter! You well?"
