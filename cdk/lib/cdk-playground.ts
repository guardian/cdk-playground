import { InstanceClass, InstanceSize, InstanceType } from "@aws-cdk/aws-ec2";
import type { App } from "@aws-cdk/core";
import { GuPlayApp } from "@guardian/cdk";
import { Stage } from "@guardian/cdk/lib/constants";
import { AccessScope } from "@guardian/cdk/lib/constants/access";
import type { GuStackProps } from "@guardian/cdk/lib/constructs/core";
import { GuStack, GuStringParameter } from "@guardian/cdk/lib/constructs/core";
import { AppIdentity } from "@guardian/cdk/lib/constructs/core/identity";

export class CdkPlayground extends GuStack {
  private static app: AppIdentity = {
    app: "cdk-playground",
  };
  constructor(scope: App, id: string, props: GuStackProps) {
    const { app } = CdkPlayground.app;

    super(scope, id, {
      ...props,
      env: { region: "eu-west-1" },
    });

    AppIdentity.taggedConstruct(CdkPlayground.app, this);

    const hostedZoneIdParam = new GuStringParameter(this, "HostedZone", {
      description: "Route53 hosted zone",
    });

    new GuPlayApp(this, {
      app,
      instanceType: InstanceType.of(InstanceClass.T4G, InstanceSize.MICRO),
      access: { scope: AccessScope.PUBLIC },
      accessLogging: {
        enabled: true,
        prefix: `${this.stack}/${this.stage}/${app}`,
      },
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
      scaling: {
        [Stage.CODE]: {
          minimumInstances: 0,
          maximumInstances: 0,
        },
        [Stage.PROD]: {
          minimumInstances: 1,
          maximumInstances: 2,
        },
      },
    });
  }
}
