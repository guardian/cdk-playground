import controllers.{AssetsComponents, ManagementController}
import play.api.mvc.EssentialFilter
import play.api.{ApplicationLoader, BuiltInComponentsFromContext, Logger}
import play.api.routing.Router
import play.filters.HttpFiltersComponents
import router.Routes

import scala.concurrent.duration.DurationInt

class AppComponents(context: ApplicationLoader.Context)
  extends BuiltInComponentsFromContext(context)
    with HttpFiltersComponents
    with AssetsComponents {

  private val disabledFilters: Set[EssentialFilter] = Set(allowedHostsFilter)
  override def httpFilters: Seq[EssentialFilter] = super.httpFilters.filterNot(disabledFilters.contains) ++ Seq(
    new RequestLoggingFilter(materializer)
  )

  lazy val managementController = new ManagementController(controllerComponents)

  lazy val router: Router = new Routes(httpErrorHandler, managementController, assets)

  private val heartbeatLogger = Logger("heartbeat")
  actorSystem.scheduler.scheduleAtFixedRate(0.seconds, 5.seconds)(
    () => heartbeatLogger.info("Heartbeat")
  )(using executionContext)
}
