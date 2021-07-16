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
const auditManager = new AWS.AuditManager({ apiVersion: '2017-07-25' });

export async function updateTags(
    resourceArn: string,
    tags?: Record<string, string>
): Promise<void> {
    console.log('updating tags');
    console.log(tags);

    // get tags from the resource
    const resourceTags = await auditManager
        .listTagsForResource({ resourceArn })
        .promise();

    // remove all tags from resource
    if (resourceTags.tags) {
        await auditManager
            .untagResource({
                resourceArn,
                tagKeys: Object.keys(resourceTags.tags),
            })
            .promise();
    }

    // add tags to resource
    if (tags) {
        await auditManager
            .tagResource({
                resourceArn,
                tags,
            })
            .promise();
    }
}
