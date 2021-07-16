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
import { S3EventRecord } from 'aws-lambda';
import * as YAML from 'js-yaml';

const s3 = new AWS.S3({ apiVersion: '2006-03-01' });

function getType(objectKey: string) {
    const type = objectKey.split('/').slice(-2, -1)[0];
    return type && ['controls', 'frameworks'].includes(type.toLowerCase())
        ? type.toLowerCase()
        : null;
}

function getExtension(objectKey: string) {
    const extension = objectKey.split('.').slice(-1)[0];
    return extension && ['json', 'yaml', 'yml'].includes(extension.toLowerCase())
        ? extension.toLowerCase()
        : null;
}

export interface DataFile {
    type: string;
    data: unknown;
}

export async function loadDataFile(record: S3EventRecord): Promise<DataFile | null> {
    const bucketName = record.s3.bucket.name;
    const objectKey = record.s3.object.key;

    const type = getType(objectKey);
    const extension = getExtension(objectKey);

    const file = await s3
        .getObject({
            Bucket: bucketName,
            Key: objectKey,
        })
        .promise();

    const content = file.Body?.toString('utf-8');
    if (type && extension && content) {
        let data;
        if (extension === 'json') {
            data = <unknown>JSON.parse(content);
        } else {
            data = <unknown>YAML.load(content);
        }
        return {
            type,
            data,
        };
    } else {
        return null;
    }
}
