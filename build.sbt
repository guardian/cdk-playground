// https://github.com/orgs/playframework/discussions/11222
val jacksonVersion         = "2.21.2"

val jacksonOverrides = Seq(
  "com.fasterxml.jackson.datatype" % "jackson-datatype-jdk8",
  "com.fasterxml.jackson.datatype" % "jackson-datatype-jsr310"
).map(_ % jacksonVersion)

val akkaSerializationJacksonOverrides = Seq(
  "com.fasterxml.jackson.dataformat" % "jackson-dataformat-cbor",
  "com.fasterxml.jackson.module"     % "jackson-module-parameter-names",
  "com.fasterxml.jackson.module"     %% "jackson-module-scala",
).map(_ % jacksonVersion)

def env(propName: String): Option[String] = sys.env.get(propName).filter(_.trim.nonEmpty)

lazy val root = (project in file("."))
  .enablePlugins(PlayScala, BuildInfoPlugin, JDebPackaging, SystemdPlugin, DockerPlugin, AshScriptPlugin)
  .settings(
    name := """cdk-playground""",
    version := "1.0-SNAPSHOT",
    scalaVersion := "2.13.18",
    scalacOptions ++= List(
      "-encoding", "utf8",
      "-deprecation",
      "-feature",
      "-unchecked",
      "-Xfatal-warnings"
    ),
    Universal / javaOptions ++= Seq(
      s"-Dpidfile.path=/dev/null",
    ),

    libraryDependencies ++= jacksonOverrides ++
      akkaSerializationJacksonOverrides ++
      Seq(
        "net.logstash.logback" % "logstash-logback-encoder" % "8.1",
        // Transient dependency of Play. No newer version of Play 2.9 or Play 3.0 with this vulnerability fixed.
        "ch.qos.logback" % "logback-classic" % "1.5.32",
      ),

    buildInfoKeys ++= Seq[BuildInfoKey](
      name,
      scalaVersion,
      sbtVersion,

      BuildInfoKey.sbtbuildinfoConstantEntry("buildNumber", env("BUILD_NUMBER")),
      BuildInfoKey.sbtbuildinfoConstantEntry("buildTime", System.currentTimeMillis),
      BuildInfoKey.sbtbuildinfoConstantEntry("gitCommitId", env("COMMIT_SHA")),
      BuildInfoKey.sbtbuildinfoConstantEntry("branch", env("BRANCH_NAME")),
    ),
    buildInfoOptions := Seq(
      BuildInfoOption.Traits("management.BuildInfo"),
      BuildInfoOption.ToJson
    ),

    dockerBaseImage := "amazoncorretto:21-alpine",
    dockerBuildxPlatforms := Seq("linux/amd64"),
    dockerAliases := Seq(
      "sha"    -> env("COMMIT_SHA").getOrElse("dev"),
      "build"  -> env("BUILD_NUMBER").getOrElse("dev"),
      "branch" -> env("BRANCH_NAME").getOrElse("dev")
    ).map { case (prefix, value) =>
      DockerAlias(
        name = name.value,
        registryHost = Some(s"${env("REGISTRY").getOrElse("dev")}/guardian"),
        username = None,
        tag = Some(s"$prefix-$value"),
      )
    }
  )
