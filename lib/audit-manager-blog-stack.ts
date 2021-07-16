/*
Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
import * as cdk from '@aws-cdk/core';
import * as s3 from '@aws-cdk/aws-s3';
import * as lambda from '@aws-cdk/aws-lambda';
import * as iam from '@aws-cdk/aws-iam';
import * as s3n from '@aws-cdk/aws-s3-notifications';
import * as sns from '@aws-cdk/aws-sns';
import * as path from 'path';
import { auditManagerActions } from './audit-manager-actions';

export class AuditManagerBlogStack extends cdk.Stack {
    constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        const auditControlsBucket = new s3.Bucket(this, 'bucket', {
            encryption: s3.BucketEncryption.S3_MANAGED,
            versioned: true,
            removalPolicy: cdk.RemovalPolicy.DESTROY,
            autoDeleteObjects: true,
        });

        const notificationTopic = new sns.Topic(this, 'topic', {
            topicName: 'AuditManagerBlogNotification',
        });

        const auditManagerPolicyStatement = new iam.PolicyStatement({
            actions: auditManagerActions,
            effect: iam.Effect.ALLOW,
            resources: ['*'],
        });

        const listenerFunction = new lambda.Function(this, 'lambda', {
            handler: 'index.handler',
            code: lambda.Code.fromAsset(path.resolve(__dirname, `../dist/lambda/dist`)),
            timeout: cdk.Duration.seconds(30),
            runtime: lambda.Runtime.NODEJS_14_X,
            reservedConcurrentExecutions: 1,
            initialPolicy: [auditManagerPolicyStatement],
            environment: {
                SNS_TOPIC_ARN: notificationTopic.topicArn,
            },
        });

        auditControlsBucket.grantRead(listenerFunction);
        notificationTopic.grantPublish(listenerFunction);

        auditControlsBucket.addEventNotification(
            s3.EventType.OBJECT_CREATED_PUT,
            new s3n.LambdaDestination(listenerFunction)
        );

        new cdk.CfnOutput(this, 'bucketOutput', {
            description: 'Bucket name for Audit Manager Custom Controls and Frameworks',
            value: auditControlsBucket.bucketName,
        });

        new cdk.CfnOutput(this, 'notificationTopicArnOutput', {
            description: 'SNS topic ARN for notification',
            value: notificationTopic.topicArn,
        });
    }
}
