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
import * as AWS from 'aws-sdk';
import { S3Event } from 'aws-lambda';
import { loadDataFile } from './data-file';
import { processControlFile } from './controls';
import { processFrameworkFile } from './frameworks';

const notificationTopicArn = process.env.SNS_TOPIC_ARN;
const sns = new AWS.SNS({ apiVersion: '2010-03-31' });

async function sendNotification(message: string) {
    return sns
        .publish({
            Message: message,
            Subject: 'Audit Manager Blog Notification',
            TopicArn: notificationTopicArn,
        })
        .promise();
}

async function handleError(error: Error): Promise<void> {
    console.log(error.message);
    await sendNotification(`Error occured during processing. ${error.message}`);
}

export const handler = async (event: S3Event): Promise<void> => {
    const record = event.Records[0];
    if (record) {
        try {
            console.log(
                `Loading data file from s3 bucket. Bucket: ${record.s3.bucket.name}, Key: ${record.s3.object.key}`
            );
            const dataFile = await loadDataFile(record);
            if (dataFile) {
                if (dataFile.type === 'controls') {
                    console.log('Process control file.');
                    await processControlFile(dataFile);
                } else if (dataFile.type === 'frameworks') {
                    console.log('Process framework file.');
                    await processFrameworkFile(dataFile);
                }
            } else {
                console.log('Failed to load data file from s3 bucket');
                throw new Error(`Failed to load data file.`);
            }

            // send successful notification
            await sendNotification(
                `Successfully processed ${record.s3.object.key}`
            );
        } catch (error) {
            console.log(
                `Error occurred on processing data file. Key: ${record.s3.object.key}`
            );
            await handleError(new Error(`Key: ${record.s3.object.key}; `));
        }
    }
};
