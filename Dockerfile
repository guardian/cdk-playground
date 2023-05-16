FROM sbtscala/scala-sbt:openjdk-11.0.16_1.8.1_2.13.10 as build-env

WORKDIR /src

COPY build.sbt ./
COPY conf ./conf
COPY app ./app
COPY project ./project

RUN sbt test assembly


FROM gcr.io/distroless/java11-debian11

COPY --from=build-env /src/target/scala-2.13/cdk-playground-assembly-1.0-SNAPSHOT.jar /
EXPOSE 9000
CMD ["cdk-playground-assembly-1.0-SNAPSHOT.jar"]
