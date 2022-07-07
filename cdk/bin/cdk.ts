import "source-map-support/register";
import { GuRoot } from "@guardian/cdk/lib/constructs/root";
import { CdkPlayground } from "../lib/cdk-playground";

const app = new GuRoot();
new CdkPlayground(app, "CdkPlayground", {
  stack: "deploy",
  env: { region: "eu-west-1" },
});
