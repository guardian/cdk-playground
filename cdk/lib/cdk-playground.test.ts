import { RiffRaffYamlFile } from "@guardian/cdk/lib/utils/riff-raff-yaml-file";
import { App } from "aws-cdk-lib";
import { Template } from "aws-cdk-lib/assertions";
import { CdkPlayground } from "./cdk-playground";

describe("The CdkPlayground stack", () => {
  it("matches the snapshot", () => {
    const app = new App({ outdir: "/tmp/cdk.out" });
    const stack = new CdkPlayground(app, "CdkPlayground", {
      stack: "deploy",
      env: { region: "eu-west-1" },
    });
    expect(Template.fromStack(stack).toJSON()).toMatchSnapshot();

    const riffRaffYaml = new RiffRaffYamlFile(app);
    expect(riffRaffYaml.toYAML()).toMatchSnapshot();
  });
});
