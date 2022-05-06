import controllers.{AssetsComponents, ManagementController}
import play.api.mvc.EssentialFilter
import play.api.{ApplicationLoader, BuiltInComponentsFromContext}
import play.api.routing.Router
import play.filters.HttpFiltersComponents
import router.Routes

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
}
