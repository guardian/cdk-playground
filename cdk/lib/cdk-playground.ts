import { GuPlayApp } from "@guardian/cdk";
import { AccessScope } from "@guardian/cdk/lib/constants/access";
import type { GuStackProps } from "@guardian/cdk/lib/constructs/core";
import { GuStack, GuStringParameter } from "@guardian/cdk/lib/constructs/core";
import { AppIdentity } from "@guardian/cdk/lib/constructs/core/identity";
import type { App } from "aws-cdk-lib";
import { Tags } from "aws-cdk-lib";
import {
  InstanceClass,
  InstanceSize,
  InstanceType,
  Port,
} from "aws-cdk-lib/aws-ec2";

export class CdkPlayground extends GuStack {
  private static app: AppIdentity = {
    app: "cdk-playground",
  };
  constructor(scope: App, id: string, props: Omit<GuStackProps, "stage">) {
    const { app } = CdkPlayground.app;

    super(scope, id, { ...props, stage: "PROD" });
    AppIdentity.taggedConstruct(CdkPlayground.app, this);

    const hostedZoneIdParam = new GuStringParameter(this, "HostedZone", {
      description: "Route53 hosted zone",
    });

    const { autoScalingGroup } = new GuPlayApp(this, {
      app,
      instanceType: InstanceType.of(InstanceClass.T4G, InstanceSize.MEDIUM),
      access: { scope: AccessScope.PUBLIC },
      userData: {
        distributable: {
          fileName: `${app}.deb`,
          executionStatement: `dpkg -i /${app}/${app}.deb`,
        },
      },
      certificateProps: {
        domainName: "cdk-playground.devx.dev-gutools.co.uk",
        hostedZoneId: hostedZoneIdParam.valueAsString,
      },
      monitoringConfiguration: { noMonitoring: true },
      scaling: {
        minimumInstances: 1,
        maximumInstances: 2,
      },
    });

    Tags.of(autoScalingGroup).add(
      "SystemdUnit",
      `${CdkPlayground.app.app}.service`
    );

    autoScalingGroup.connections.allowToAnyIpv4(Port.tcp(80));
  }
}
