package controllers

import buildinfo.BuildInfo
import play.api.Logging
import play.api.libs.json.Json
import play.api.mvc.{Action, AnyContent, BaseController, ControllerComponents}

import scala.util.Random

class ManagementController (override val controllerComponents: ControllerComponents) extends BaseController with Logging {
  def manifest: Action[AnyContent] = Action {
    Ok(Json.parse(BuildInfo.toJson))
  }

  def disallowRobots: Action[AnyContent] = Action {
    Ok("User-agent: *\nDisallow: /\n")
  }

  def serveError: Action[AnyContent] = Action {
    val number = Random.nextInt(50)
    if (number == 13) {
      Ok("Failed to show correct page")
    } else {
      Ok("OK")
    }
  }

  def healthCheck: Action[AnyContent] = Action {
    logger.info("hello from the health check")
    Ok("OK")
  }
}
