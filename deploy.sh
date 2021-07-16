#!/usr/bin/env bash
echo Preparing
cd lambda && npm ci && cd ..
npm ci

echo Building
npm run all

echo Deploying
npx cdk deploy --require-approval=never

BUCKET_NAME=$(aws cloudformation describe-stacks --stack-name AuditManagerBlogStack --output json | jq -r '.Stacks[].Outputs[] | select ( .OutputKey | contains("bucket") ) | .OutputValue')
echo Upload Example Controls to S3 bucket $BUCKET_NAME/controls

# upload the controls
aws s3 cp ./examples/controls/example-control-1.yaml s3://$BUCKET_NAME/controls/
aws s3 cp ./examples/controls/example-control-2.json s3://$BUCKET_NAME/controls/

# wait for controls to be created
echo Waiting for Example Controls to be Created
NUM_CONTROLS=0
while [ $NUM_CONTROLS -ne 2 ]; do
    NUM_CONTROLS=$(aws auditmanager list-controls --control-type Custom --output json | jq -r '.controlMetadataList[] | select ( .name | test("^Example Control [0-9]?$")) | .name' | wc -l)
    sleep 2
done
echo Example Controls are Created

# upload the frameworks
echo Upload Example Frameworks to S3 bucket $BUCKET_NAME/frameworks
aws s3 cp ./examples/frameworks/example-framework-1.yaml s3://$BUCKET_NAME/frameworks/
aws s3 cp ./examples/frameworks/example-framework-2.json s3://$BUCKET_NAME/frameworks/

# wait for controls to be created
echo Waiting for Example Frameworks to be Created
NUM_FRAMEWORKS=0
while [ $NUM_FRAMEWORKS -ne 2 ]; do
    NUM_FRAMEWORKS=$(aws auditmanager list-assessment-frameworks --framework-type Custom --output json | jq -r '.frameworkMetadataList[] | select ( .name | test("^Example Framework [0-9]?$")) | .name' | wc -l)
    sleep 2
done
echo Example Frameworks are Created.

echo Deployment Completed