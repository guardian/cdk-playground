package controllers

import buildinfo.BuildInfo
import io.prometheus.client.Counter
import play.api.Logging
import play.api.libs.json.Json
import play.api.mvc.{Action, AnyContent, BaseController, ControllerComponents}

class ManagementController (override val controllerComponents: ControllerComponents) extends BaseController with Logging {
  def manifest: Action[AnyContent] = Action {
    Ok(Json.parse(BuildInfo.toJson))
  }

  def disallowRobots: Action[AnyContent] = Action {
    Ok("User-agent: *\nDisallow: /\n")
  }

  def healthCheck: Action[AnyContent] = Action {
    logger.info("hello from the health check")
    Ok("OK")
  }

  //  Setting up a custom metric for Prometheus
  val errors = Counter.build().name("custom_errors_total").help("Total errors.").register()
  def testError: Action[AnyContent] = Action {
    // Adding a data point to the Prometheus metric
    errors.inc()
    InternalServerError
  }

}
