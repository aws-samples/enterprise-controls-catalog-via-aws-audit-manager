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
import * as path from 'path';
import { auditManagerActions } from './audit-manager-actions';
import { Construct } from 'constructs';
import {
    CfnOutput,
    RemovalPolicy,
    Stack,
    StackProps,
    Duration,
} from 'aws-cdk-lib';
import { IKey, Key } from 'aws-cdk-lib/aws-kms';
import { Effect, PolicyStatement } from 'aws-cdk-lib/aws-iam';
import { Function, Code, Runtime } from 'aws-cdk-lib/aws-lambda';
import { ManagedPolicy, Role, ServicePrincipal } from 'aws-cdk-lib/aws-iam';
import { Topic } from 'aws-cdk-lib/aws-sns';
import { Bucket, BucketEncryption, EventType } from 'aws-cdk-lib/aws-s3';
import { LambdaDestination } from 'aws-cdk-lib/aws-s3-notifications';

export class AuditManagerBlogStack extends Stack {
    constructor(scope: Construct, id: string, props?: StackProps) {
        super(scope, id, props);

        const auditControlsBucket = new Bucket(this, 'bucket', {
            encryption: BucketEncryption.S3_MANAGED,
            versioned: true,
            removalPolicy: RemovalPolicy.DESTROY,
            autoDeleteObjects: true,
        });
        const snskey: IKey = new Key(this, 'auditblogkey', {
            enableKeyRotation: true,
            description: 'auditblogkey',
        });

        const notificationTopic = new Topic(this, 'topic', {
            topicName: 'AuditManagerBlogNotification',
            masterKey: snskey,
        });

        const auditManagerPolicyStatement = new PolicyStatement({
            actions: auditManagerActions,
            effect: Effect.ALLOW,
            resources: ['*'],
        });

        const listenerFunction = new Function(this, 'lambda', {
            handler: 'index.handler',
            code: Code.fromAsset(
                path.resolve(__dirname, `../dist/lambda/dist`)
            ),
            timeout: Duration.seconds(30),
            runtime: Runtime.NODEJS_14_X,
            reservedConcurrentExecutions: 1,
            initialPolicy: [auditManagerPolicyStatement],
            environment: {
                SNS_TOPIC_ARN: notificationTopic.topicArn,
            },
        });
        snskey.grantEncryptDecrypt(listenerFunction);

        auditControlsBucket.grantRead(listenerFunction);
        notificationTopic.grantPublish(listenerFunction);

        listenerFunction.role?.addManagedPolicy(
            ManagedPolicy.fromAwsManagedPolicyName(
                'service-role/AWSLambdaBasicExecutionRole'
            )
        );

        auditControlsBucket.addEventNotification(
            EventType.OBJECT_CREATED_PUT,
            new LambdaDestination(listenerFunction)
        );

        new CfnOutput(this, 'bucketOutput', {
            description:
                'Bucket name for Audit Manager Custom Controls and Frameworks',
            value: auditControlsBucket.bucketName,
        });

        new CfnOutput(this, 'notificationTopicArnOutput', {
            description: 'SNS topic ARN for notification',
            value: notificationTopic.topicArn,
        });
    }
}
