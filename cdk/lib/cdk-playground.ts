import { InstanceClass, InstanceSize, InstanceType } from "@aws-cdk/aws-ec2";
import type { App } from "@aws-cdk/core";
import { Stage } from "@guardian/cdk/lib/constants";
import type { GuStackProps } from "@guardian/cdk/lib/constructs/core";
import { GuStack, GuStringParameter } from "@guardian/cdk/lib/constructs/core";
import { AppIdentity } from "@guardian/cdk/lib/constructs/core/identity";
import { AccessScope, GuPlayApp } from "@guardian/cdk/lib/patterns/ec2-app";

export class CdkPlayground extends GuStack {
  private static app: AppIdentity = {
    app: "cdk-playground",
  };
  constructor(scope: App, id: string, props: GuStackProps) {
    const { app } = CdkPlayground.app;

    super(scope, id, props);
    AppIdentity.taggedConstruct(CdkPlayground.app, this);

    const hostedZoneIdParam = new GuStringParameter(this, "HostedZone", {
      description: "Route53 hosted zone",
    });

    new GuPlayApp(this, {
      app,
      instanceType: InstanceType.of(InstanceClass.T3, InstanceSize.SMALL),
      access: { scope: AccessScope.PUBLIC },
      userData: {
        distributable: {
          fileName: `${app}.deb`,
          executionStatement: `dpkg -i /${app}/${app}.deb`,
        },
      },
      certificateProps: {
        [Stage.CODE]: {
          domainName: "IGNORED. Just here to satisfy the type checks.",
        },
        [Stage.PROD]: {
          domainName: "cdk-playground.devx.dev-gutools.co.uk",
          hostedZoneId: hostedZoneIdParam.valueAsString,
        },
      },
      monitoringConfiguration: { noMonitoring: true },
    });
  }
}
