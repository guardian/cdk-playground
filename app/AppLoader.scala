import play.api._
import play.api.libs.logback.LogbackLoggerConfigurator
import scala.compiletime.uninitialized

class AppLoader extends ApplicationLoader {
  private var components: AppComponents = uninitialized

  def load(context: ApplicationLoader.Context): Application = {
    new LogbackLoggerConfigurator().configure(context.environment)
    components = new AppComponents(context)
    components.application
  }
}
