package controllers

import buildinfo.BuildInfo
import play.api.Logging
import play.api.libs.json.Json
import play.api.mvc.{Action, AnyContent, BaseController, ControllerComponents}

class ManagementController (override val controllerComponents: ControllerComponents) extends BaseController with Logging {
  def manifest: Action[AnyContent] = Action {
    logger.info("Manifest requested")
    Ok(Json.parse(BuildInfo.toJson))
  }

  def disallowRobots: Action[AnyContent] = Action {
    Ok("User-agent: *\nDisallow: /\n")
  }

  def healthCheck: Action[AnyContent] = Action {
    logger.info("Healthcheck requested")
    Ok("OK")
  }
}
