import play.api._

class AppLoader extends ApplicationLoader {
  private var components: AppComponents = _

  def load(context: ApplicationLoader.Context): Application = {
    components = new AppComponents(context)
    components.application
  }
}
