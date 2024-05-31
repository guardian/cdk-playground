#!/bin/bash

export AWS_DEFAULT_REGION=eu-west-1

awslocal s3 mb s3://cfn-bucket

awslocal cloudformation deploy \
  --stack-name cfn-stack \
  --template /cdk/cdk.out/LocalstackStack.template.json
