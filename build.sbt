import com.gu.riffraff.artifact.BuildInfo

lazy val root = (project in file("."))
  .enablePlugins(PlayScala, BuildInfoPlugin, RiffRaffArtifact, JDebPackaging, SystemdPlugin)
  .settings(
    name := """cdk-playground""",
    version := "1.0-SNAPSHOT",
    scalaVersion := "2.13.5",
    scalacOptions ++= List(
      "-encoding", "utf8",
      "-deprecation",
      "-feature",
      "-unchecked",
      "-Xfatal-warnings"
    ),
    javaOptions in Universal ++= Seq(
      s"-Dpidfile.path=/dev/null",
      s"-J-Dlogs.home=/var/log/${packageName.value}",
      s"-J-Xloggc:/var/log/${packageName.value}/gc.log",
    ),
    riffRaffPackageName := s"devx::${name.value}",
    riffRaffManifestProjectName := riffRaffPackageName.value,
    riffRaffArtifactResources := Seq(
      (packageBin in Debian).value -> s"${name.value}/${name.value}.deb",
      baseDirectory.value / "riff-raff.yaml" -> "riff-raff.yaml",
      baseDirectory.value / "cdk" / "cdk.out" / "CdkPlayground.template.json" -> s"cloudformation-for-deploy/CdkPlayground.template.json",
      baseDirectory.value / "cdk" / "cdk.out" / "CdkPlaygroundPreview.template.json" -> s"cloudformation-for-deploy-preview/CdkPlaygroundPreview.template.json"
    ),
    buildInfoKeys := {
      lazy val buildInfo = BuildInfo(baseDirectory.value)
      Seq[BuildInfoKey](
        BuildInfoKey.sbtbuildinfoConstantEntry("buildNumber", buildInfo.buildIdentifier),
        // so this next one is constant to avoid it always recompiling on dev machines.
        // we only really care about build time on teamcity, when a constant based on when
        // it was loaded is just fine
        BuildInfoKey.sbtbuildinfoConstantEntry("buildTime", System.currentTimeMillis),
        BuildInfoKey.sbtbuildinfoConstantEntry("gitCommitId", buildInfo.revision),
        BuildInfoKey.sbtbuildinfoConstantEntry("branch", buildInfo.branch)
      )
    },
    buildInfoOptions:= Seq(
      BuildInfoOption.Traits("management.BuildInfo"),
      BuildInfoOption.ToJson
    )
  )
