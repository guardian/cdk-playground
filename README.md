# CDK Playground

A simple Scala Play app running in EC2 using infrastructure provided by [@guardian/cdk](https://github.com/guardian/cdk) (aka GuCDK).

The purpose of this repository is to offer a "real life" application to test GuCDK on that is isolated from in use production applications.

That is, CDK Playground offers a low risk environment to experiment with.

The CDK stack is defined in the [cdk](./cdk) directory.

The app is set up in the usual way, with CI on each branch and CD on `main`.
