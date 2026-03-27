FROM sbtscala/scala-sbt:amazoncorretto-al2023-21.0.8_1.12.8_2.13.18 AS build-env

WORKDIR /src

COPY build.sbt ./
COPY conf ./conf
COPY app ./app
COPY project ./project

RUN sbt assembly


FROM gcr.io/distroless/java21-debian13

COPY --from=build-env /src/target/scala-2.13/cdk-playground-assembly-1.0-SNAPSHOT.jar /
EXPOSE 9000
CMD ["cdk-playground-assembly-1.0-SNAPSHOT.jar"]
