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
    InternalServerError
  }

  def healthCheck: Action[AnyContent] = Action {
    logger.info("hello from the health check")
    Ok("OK")
  }
}
