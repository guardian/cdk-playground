import java.io.File

import org.scalatestplus.play.FakeApplicationFactory
import play.api._
import play.api.inject._

trait AppFactory extends FakeApplicationFactory {

  override def fakeApplication(): Application = {
    val env = Environment.simple(new File("."))
    val context = ApplicationLoader.Context.create(env)
    val loader = new AppLoader()
    loader.load(context)
  }

}
