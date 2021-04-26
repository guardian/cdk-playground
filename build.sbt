import com.gu.riffraff.artifact.BuildInfo

lazy val root = (project in file("."))
  .enablePlugins(PlayScala, BuildInfoPlugin, RiffRaffArtifact)
  .settings(
    name := """cdk-playground""",
    version := "1.0-SNAPSHOT",
    scalaVersion := "2.13.5",
    libraryDependencies += "org.scalatestplus.play" %% "scalatestplus-play" % "5.0.0" % Test,
    scalacOptions ++= List(
      "-encoding", "utf8",
      "-deprecation",
      "-feature",
      "-unchecked",
      "-Xfatal-warnings"
    ),
    riffRaffArtifactResources := Seq(
      (packageBin in Debian).value -> s"${name.value}/${name.value}.deb",
      baseDirectory.value / "riff-raff.yaml" -> "riff-raff.yaml"
    ),
    buildInfoKeys := {
      lazy val buildInfo = BuildInfo(baseDirectory.value)
      Seq[BuildInfoKey](
        BuildInfoKey.sbtbuildinfoConstantEntry("buildNumber", buildInfo.buildIdentifier),
        // so this next one is constant to avoid it always recompiling on dev machines.
        // we only really care about build time on teamcity, when a constant based on when
        // it was loaded is just fine
        BuildInfoKey.sbtbuildinfoConstantEntry("buildTime", System.currentTimeMillis),
        BuildInfoKey.sbtbuildinfoConstantEntry("gitCommitId", buildInfo.revision)
      )
    },
  )
