import com.typesafe.sbt.packager.docker._

// https://github.com/orgs/playframework/discussions/11222
val jacksonVersion         = "2.17.0"

val jacksonOverrides = Seq(
  "com.fasterxml.jackson.datatype" % "jackson-datatype-jdk8",
  "com.fasterxml.jackson.datatype" % "jackson-datatype-jsr310"
).map(_ % jacksonVersion)

val akkaSerializationJacksonOverrides = Seq(
  "com.fasterxml.jackson.dataformat" % "jackson-dataformat-cbor",
  "com.fasterxml.jackson.module"     % "jackson-module-parameter-names",
  "com.fasterxml.jackson.module"     %% "jackson-module-scala",
).map(_ % jacksonVersion)

dockerExposedPorts ++= Seq(9000)

dockerBaseImage := "amazoncorretto:11"

Docker / packageName := packageName.value

Docker / version := version.value

dockerRepository := Some("dockeruser")

//dockerExposedVolumes := Seq("/opt/docker/logs")

Docker / daemonUserUid := None
Docker / daemonGroupGid := None
Docker / daemonUser := "daemon"

/**
 * 1. how to put these elsewhere in the dockerfile? (e.g. earlier)
 * 2. is there a better way to create the files and assign permissions?
 * 3. what's the difference between Cmd and ExecCmd? (seems like the same output)
 * 4. does the JVM process run as the daemonUser? what does this look like?
 */
dockerCommands ++= Seq(
  Cmd("USER", "root"),
  ExecCmd("RUN", "mkdir", "-p", s"/opt/docker/logs/${packageName.value}"),
  ExecCmd("RUN", "touch", s"/opt/docker/logs/${packageName.value}/gc.log"),
  ExecCmd("RUN", "chmod", "777", s"/opt/docker/logs/${packageName.value}/gc.log"),
  Cmd("USER", (Docker / daemonUser).value)
)


def env(propName: String): Option[String] = sys.env.get(propName).filter(_.trim.nonEmpty)

lazy val root = (project in file("."))
  .enablePlugins(PlayScala, BuildInfoPlugin, JDebPackaging, SystemdPlugin, DockerPlugin)
  .settings(
    name := """cdk-playground""",
    version := "1.0-SNAPSHOT",
    scalaVersion := "2.13.13",
    scalacOptions ++= List(
      "-encoding", "utf8",
      "-deprecation",
      "-feature",
      "-unchecked",
      "-Xfatal-warnings"
    ),
    Universal / javaOptions ++= Seq(
      s"-Dpidfile.path=/dev/null",
      s"-J-Dlogs.home=/opt/docker/logs/${packageName.value}",
      s"-J-Xloggc:/opt/docker/logs/${packageName.value}/gc.log",
    ),

    libraryDependencies ++= jacksonOverrides
      ++ akkaSerializationJacksonOverrides
      ++ Seq(
        "net.logstash.logback" % "logstash-logback-encoder" % "7.4",
        // Transient dependency of Play. No newer version of Play 2.9 or Play 3.0 with this vulnerability fixed.
        "ch.qos.logback" % "logback-classic" % "1.5.5",
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
