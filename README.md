# CDK Playground

A simple Scala Play app running in EC2 using infrastructure provided by [@guardian/cdk](https://github.com/guardian/cdk) (aka GuCDK).

The purpose of this repository is to offer a "real life" application to test GuCDK on that is isolated from in use production applications.

That is, CDK Playground offers a low risk environment to experiment with.

## Developing
The CDK stack is defined in the [cdk](./cdk) directory.

There are a couple of helpful scripts in the [script](./script) directory:
1. `./script/start-play` to run the Play app
2. `./script/start-cdk` to start Jest in watch mode, to test the CDK stack
3. `./script/build-cdk` to synthesise the CDK stack into a template
4. `./script/switch-cdk` to install GuCDK from a GitHub branch. This is useful to test changes _without_ publishing to NPM first.
5. `./script/scale-out` to simulate a scale out event, increasing the capacity of the autoscaling group
6. `./script/scale-in` to simulate a scale in event, decreasing the capacity of the autoscaling group

## Deploying
The app is set up in the usual way, with CI on each branch (via GitHub Actions) and [CD](https://riffraff.gutools.co.uk/deployment/history?projectName=devx%3A%3Acdk-playground&stage=CODE&pageSize=20&page=1) on `main`.
