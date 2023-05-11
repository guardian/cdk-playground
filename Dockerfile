FROM sbtscala/scala-sbt:openjdk-11.0.16_1.8.1_2.13.10

WORKDIR /src

COPY build.sbt ./
COPY conf ./conf
COPY app ./app
COPY project ./project

RUN sbt test dist

#target/cdk-playground_1.0-SNAPSHOT_all.deb

RUN cp target/universal/cdk-playground-1.0-SNAPSHOT.zip play.zip
RUN unzip play.zip

EXPOSE 9000

CMD cdk-playground-1.0-SNAPSHOT/bin/cdk-playground
