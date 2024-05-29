package controllers

import buildinfo.BuildInfo
import play.api.Logging
import play.api.libs.json.Json
import play.api.mvc.{Action, AnyContent, BaseController, ControllerComponents}

object Testing {
  var failureCount = 0
}

class ManagementController (override val controllerComponents: ControllerComponents) extends BaseController with Logging {
  def manifest: Action[AnyContent] = Action {
    Ok(Json.parse(BuildInfo.toJson))
  }

  def disallowRobots: Action[AnyContent] = Action {
    Ok("User-agent: *\nDisallow: /\n")
  }

  def healthCheck: Action[AnyContent] = Action {
    if (Testing.failureCount < 20) {
      Testing.failureCount += 1
      InternalServerError
    } else {
      Ok
    }
  }
}
