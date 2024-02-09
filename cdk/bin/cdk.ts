import 'source-map-support/register';
import { GuRoot } from "@guardian/cdk/lib/constructs/root";
import {Aspects} from "aws-cdk-lib";
import { AwsSolutionsChecks } from 'cdk-nag'
import { CdkPlayground } from '../lib/cdk-playground';

const app = new GuRoot();
Aspects.of(app).add(new AwsSolutionsChecks({ verbose: true }));
new CdkPlayground(app, 'CdkPlayground');
