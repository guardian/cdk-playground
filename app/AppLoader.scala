import play.api._
import play.api.libs.logback.LogbackLoggerConfigurator

class AppLoader extends ApplicationLoader {
  private var components: AppComponents = _

  def load(context: ApplicationLoader.Context): Application = {
    new LogbackLoggerConfigurator().configure(context.environment)
    Otel.configure()
    components = new AppComponents(context)
    components.application
  }
}
