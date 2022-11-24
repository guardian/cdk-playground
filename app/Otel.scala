import io.opentelemetry.exporter.otlp.metrics.OtlpGrpcMetricExporter
import io.opentelemetry.sdk.OpenTelemetrySdk
import io.opentelemetry.sdk.metrics.SdkMeterProvider
import io.opentelemetry.sdk.metrics.`export`.PeriodicMetricReader

object Otel {

  def configure() = {

    val metricReader = PeriodicMetricReader.builder(
      OtlpGrpcMetricExporter.getDefault())
      .build();

    OpenTelemetrySdk.builder()
      .setMeterProvider(
        SdkMeterProvider.builder()
          .registerMetricReader(metricReader)
          .build())
      .buildAndRegisterGlobal()

  }

}
