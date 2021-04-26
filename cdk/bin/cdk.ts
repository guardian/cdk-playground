import "source-map-support/register";
import { App } from "@aws-cdk/core";
import { CdkPlayground } from "../lib/cdk-playground";

const app = new App();
new CdkPlayground(app, "CdkPlayground", { stack: "deploy" });
