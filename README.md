# Enterprise Custom Controls using Audit Manager

## Prerequisite

Please make sure the following software packages are installed in your environment before the deployment:

-   Node.js v12 or above (https://nodejs.org)
-   AWS CLI version 2 (https://docs.aws.amazon.com/cli/latest/userguide/welcome-versions.html)
-   jq (https://stedolan.github.io/jq/)
-   git (https://git-scm.com/)

## Solution Overview

Companies go through audit and security assessments regularly by their customers, 3rd party audit firms or internal teams. This is required to identify the cybersecurity concerns and to mitigate the risks to protect your company and customers. Often the process of audit and liaising with the industry standards are mostly manual and time consuming. The key challenge is to keep up to date on the standards with continuous capability to build and review the controls to be audit ready.

In this solution, we will walk through the steps required to automatically create and maintain a custom enterprise controls catalog and assessment framework using AWS Audit Manager. AWS Audit Manager helps you continuously audit your AWS usage to simplify how you assess risk and compliance with regulations and industry standards. The proposed solution enables the Controls Owner team to help design, build IT controls that can be easily customised and audited.

The proposed solution utilised the event driven architecture that enables agility and reduce manual administration effort.
• AWS Audit Manager - AWS Audit Manager helps you continuously audit your AWS usage to simplify how you assess risk and compliance with regulations and industry standards.
• AWS Lambda - AWS Lambda is a serverless compute service that lets you run code without provisioning or managing servers in response to events such as changes in data, application state or user actions.
• Amazon S3 - Amazon S3 is object storage built to store and retrieve any amount of data from anywhere that offers industry leading durability, availability, performance, security, and virtually unlimited scalability at very low costs.
• AWS CDK – AWS Cloud Development Kit is a software development framework for provisioning your cloud infrastructure in code through AWS CloudFormation.

## Architecture:

The proposed solution enables automated controls management using event driven architecture with AWS Services like AWS Audit Manager, AWS lambda and Amazon S3 in integration with code management service like GitHub. The Controls owner can design, manage, monitor and rollout the custom controls in GitHub with a simple custom controls configuration file. Once the controls configuration file is checked in, the on-commit event of the file triggers controls pipeline to load controls in audit manager using Lambda function.

### Step 1 : Control owner load the controls as code (Controls and Framework) to S3 bucket

### Step 2 : Controls yaml file uploaded into S3 triggers lambda function to process the control file

### Step 3: Lambda function process the control file and creates or updates the existing control into Audit Manager.

### Step 4: Controls Framework yaml uploaded into S3 triggers lambda function to process the controls framework file

### Step 5: Lambda function validates the control framework file and updates the controls frameowrk library in Audit Manager

![Enterprise Controls using Audit Manager](/images/solution-overview.png?raw=true 'Enterprise Controls using Audit Manager')

## Deployment

Before deployment, please make sure that the correct AWS credentials are configured in your terminal session. It can be either in the environment variables or in `~/.aws`. More details, please refer to [Configuring the AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html).

Kindly ensure following pre-requisite are configured before running ./deploy.sh

-   AWS Audit Manager is enabled in the region deployed
-   Set your AWS Credentials to deploy the stack
-   -   export AWS_ACCESS_KEY_ID=<>
-   -   export AWS_SECRET_ACCESS_KEY=<>
-   -   export AWS_REGION = <>

When ready, clone this repo, then use the following command

```
cd enterprise-controls-catalog-via-aws-audit-manager

./deploy.sh

```

## Contributors

Deenadayaalan Thirugnanasambandam, Principal SA SDE, AWS

Hu Jin - SA SDE, AWS

Vinodh Shankar - Senior SA, AWS

Jasper Wang - Cloud Architect, AWS Professional Services

## Security

See [CONTRIBUTING](CONTRIBUTING.md#security-issue-notifications) for more information.

## License

This library is licensed under the MIT-0 License. See the LICENSE file.
