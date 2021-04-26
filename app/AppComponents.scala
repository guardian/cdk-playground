import controllers.{AssetsComponents, HomeController}
import play.api.{ApplicationLoader, BuiltInComponentsFromContext}
import play.api.routing.Router
import play.filters.HttpFiltersComponents
import router.Routes

class AppComponents(context: ApplicationLoader.Context)
  extends BuiltInComponentsFromContext(context)
    with HttpFiltersComponents
    with AssetsComponents {

  lazy val homeController = new HomeController(controllerComponents)

  lazy val router: Router = new Routes(httpErrorHandler, homeController, assets)
}
