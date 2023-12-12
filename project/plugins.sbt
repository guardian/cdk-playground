addSbtPlugin("com.typesafe.play" % "sbt-plugin" % "2.9.0")
addSbtPlugin("com.eed3si9n" % "sbt-buildinfo" % "0.11.0")

libraryDependencies += "org.vafer" % "jdeb" % "1.8" artifacts Artifact("jdeb", "jar", "jar")
