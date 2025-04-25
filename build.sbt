// https://github.com/orgs/playframework/discussions/11222
val jacksonVersion         = "2.19.0"

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
  .enablePlugins(PlayScala, BuildInfoPlugin, JDebPackaging, SystemdPlugin)
  .settings(
    name := """cdk-playground""",
    version := "1.0-SNAPSHOT",
    scalaVersion := "2.13.16",
    scalacOptions ++= List(
      "-encoding", "utf8",
      "-deprecation",
      "-feature",
      "-unchecked",
      "-Xfatal-warnings"
    ),
    Universal / javaOptions ++= Seq(
      s"-Dpidfile.path=/dev/null",
      s"-J-Dlogs.home=/var/log/${packageName.value}",
      s"-J-Xloggc:/var/log/${packageName.value}/gc.log",
    ),

    libraryDependencies ++= jacksonOverrides
      ++ akkaSerializationJacksonOverrides
      ++ Seq(
        "net.logstash.logback" % "logstash-logback-encoder" % "8.1",
        // Transient dependency of Play. No newer version of Play 2.9 or Play 3.0 with this vulnerability fixed.
        "ch.qos.logback" % "logback-classic" % "1.5.18",
      ),

    buildInfoKeys ++= Seq[BuildInfoKey](
      name,
      scalaVersion,
      sbtVersion,

      // copied from https://github.com/guardian/sbt-riffraff-artifact/blob/e6f5e62d8f776b1004f72ed1ea415328fa43ed31/src/main/scala/com/gu/riffraff/artifact/BuildInfo.scala
      BuildInfoKey.sbtbuildinfoConstantEntry("buildNumber", env("GITHUB_RUN_NUMBER")),
      BuildInfoKey.sbtbuildinfoConstantEntry("buildTime", System.currentTimeMillis),
      BuildInfoKey.sbtbuildinfoConstantEntry("gitCommitId", env("GITHUB_SHA")),

      BuildInfoKey.sbtbuildinfoConstantEntry(
        "branch",
        env("GITHUB_HEAD_REF")
          .orElse(env("GITHUB_REF"))
          .orElse(Some("unknown-branch"))
          .get
          .stripPrefix("refs/heads/")),
    ),
    buildInfoOptions := Seq(
      BuildInfoOption.Traits("management.BuildInfo"),
      BuildInfoOption.ToJson
    )
  )
