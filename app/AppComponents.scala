import com.github.stijndehaes.playprometheusfilters.controllers.PrometheusController
import com.github.stijndehaes.playprometheusfilters.filters.{StatusAndRouteCounterFilter, StatusCounterFilter}
import controllers.{AssetsComponents, ManagementController}
import io.prometheus.client.CollectorRegistry
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
    new RequestLoggingFilter(materializer),
    // Setting up collection of standardised HTTP data (e.g. response code, path) for Prometheus metrics
    // Adding this as a filter will automatically apply it to all requests
    new StatusAndRouteCounterFilter(CollectorRegistry.defaultRegistry, configuration)
  )

  lazy val managementController = new ManagementController(controllerComponents)
  lazy val prometheusController = new PrometheusController(CollectorRegistry.defaultRegistry, controllerComponents)

  lazy val router: Router = new Routes(httpErrorHandler, managementController, prometheusController, assets)
}
