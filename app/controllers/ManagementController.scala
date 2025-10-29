package controllers

import buildinfo.BuildInfo
import play.api.Logging
import play.api.libs.json.Json
import play.api.mvc.{Action, AnyContent, BaseController, ControllerComponents}
import scala.io.Source

class ManagementController (override val controllerComponents: ControllerComponents) extends BaseController with Logging {
  def manifest: Action[AnyContent] = Action {
    Ok(Json.parse(BuildInfo.toJson))
  }

  def tags: Action[AnyContent] = Action {
    /*
    This file is created by https://github.com/guardian/instance-tag-discovery,
    which is part of the `cdk-base` AMIgo role.
     */
    val filename = "/etc/config/tags.json"
    try {
      val content = Source.fromFile(filename)
      val tagsJson = try content.mkString finally content.close()
      Ok(Json.parse(tagsJson))
    }
    catch {
      case e: Exception => InternalServerError(e.getMessage)
    }
  }

  def disallowRobots: Action[AnyContent] = Action {
    Ok("User-agent: *\nDisallow: /\n")
  }

  def healthCheck: Action[AnyContent] = Action {
    logger.info("hello from the health check")
    InternalServerError
  }

  def movedPermanently: Action[AnyContent] = Action {
    MovedPermanently("https://www.theguardian.com/uk")
  }

  def badRequest: Action[AnyContent] = Action {
    BadRequest
  }

  def error: Action[AnyContent] = Action {
    InternalServerError
  }

}
