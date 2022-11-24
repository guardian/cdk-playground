package controllers

import buildinfo.BuildInfo
import io.opentelemetry.api.GlobalOpenTelemetry.getMeter
import io.opentelemetry.api.metrics.Meter
import play.api.Logging
import play.api.libs.json.Json
import play.api.mvc.{Action, AnyContent, BaseController, ControllerComponents}

class ManagementController (override val controllerComponents: ControllerComponents) extends BaseController with Logging {

  val meter: Meter = getMeter("ManagementController")
  val counter = meter.counterBuilder("test_counter").setDescription("A test counter").setUnit("n").build

  def manifest: Action[AnyContent] = Action {
    Ok(Json.parse(BuildInfo.toJson))
  }

  def disallowRobots: Action[AnyContent] = Action {
    Ok("User-agent: *\nDisallow: /\n")
  }

  def healthCheck: Action[AnyContent] = Action {
    logger.info("hello from the health check")
    counter.add(1)
    Ok("OK")
  }
}
