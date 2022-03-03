import "source-map-support/register";
import { App } from "@aws-cdk/core";
import { CdkPlayground } from "../lib/cdk-playground";

const app = new App();
new CdkPlayground(app, "CdkPlayground-PROD", {
  stack: "deploy",
  stage: "PROD",
  cloudFormationStackName: "cdk-playground-PROD",
  env: {
    region: "eu-west-1",
  },
});

new CdkPlayground(app, "CdkPlayground-CODE", {
  stack: "deploy",
  stage: "CODE",
  cloudFormationStackName: "cdk-playground-CODE",
  env: {
    region: "eu-west-1",
  },
});
