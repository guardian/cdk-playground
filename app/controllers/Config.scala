package controllers

import software.amazon.awssdk.auth.credentials.DefaultCredentialsProvider
import software.amazon.awssdk.regions.Region
import software.amazon.awssdk.services.ssm.SsmClient
import software.amazon.awssdk.services.ssm.model.GetParameterRequest

object Config {

  val ssmClient = SsmClient.builder
    .credentialsProvider(
      DefaultCredentialsProvider.builder
        .profileName("developerPlayground")
        .build()
    )
    .region(Region.of("eu-west-1"))
    .build()

  lazy val getHealthCheckConfigOnce: String = {
    val parameterName = s"/PROD/playground/cdk-playground/healthcheck-test"
    val getParameterRequest = GetParameterRequest
      .builder()
      .name(parameterName)
      .build()
    ssmClient
      .getParameter(getParameterRequest)
      .parameter
      .value
  }

}
