#!/usr/bin/env bash
echo Preparing
cd lambda && npm ci && cd ..
npm ci

echo Building
npm run all

echo Deploying
npx cdk deploy --require-approval=never

BUCKET_NAME=$(aws cloudformation describe-stacks --stack-name AuditManagerBlogStack --output json | jq -r '.Stacks[].Outputs[] | select ( .OutputKey | contains("bucket") ) | .OutputValue')
echo Upload Example Data Security Controls to S3 bucket $BUCKET_NAME/controls

# upload the controls
aws s3 cp ./examples/controls/datasecurity-encryption-at-rest.yaml s3://$BUCKET_NAME/controls/
aws s3 cp ./examples/controls/datasecurity-encryption-in-transit.yaml s3://$BUCKET_NAME/controls/

# wait for controls to be created
echo Waiting for Example Data Security Controls to be Created
NUM_CONTROLS=0
while [ $NUM_CONTROLS -ne 2 ]; do
    NUM_CONTROLS=$(aws auditmanager list-controls --control-type Custom --output json | jq -r '.controlMetadataList[] | select ( .name | test("^DataSecurity")) | .name' | wc -l)
    sleep 2
done
echo Example Data Security Controls are Created

# upload the frameworks
echo Upload Example Enterprise Framework to S3 bucket $BUCKET_NAME/frameworks
aws s3 cp ./examples/frameworks/enterprise-framework.yaml s3://$BUCKET_NAME/frameworks/

# wait for controls to be created
echo Waiting for Example NIST Enterprise Framework to be Created
NUM_FRAMEWORKS=0
while [ $NUM_FRAMEWORKS -ne 1 ]; do
    NUM_FRAMEWORKS=$(aws auditmanager list-assessment-frameworks --framework-type Custom --output json | jq -r '.frameworkMetadataList[] | select ( .name | test("^NIST Enterprise")) | .name' | wc -l)
    sleep 2
done
echo Example NIST Enterprise Frameworks is Created.

echo Deployment Completed
