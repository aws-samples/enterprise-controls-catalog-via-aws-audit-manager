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
import { DataFile } from './data-file';
import { Framework } from './types';
import { loadCustomControlList } from './controls';
import { updateTags } from './tags';

const auditManager = new AWS.AuditManager({ apiVersion: '2017-07-25' });

async function loadCustomFrameworkList(): Promise<AWS.AuditManager.FrameworkMetadataList> {
    const results: AWS.AuditManager.FrameworkMetadataList = [];
    let nextToken: string | undefined = undefined;
    do {
        const response: AWS.AuditManager.ListAssessmentFrameworksResponse =
            await auditManager
                .listAssessmentFrameworks({ frameworkType: 'Custom', nextToken })
                .promise();
        if (response.frameworkMetadataList) {
            results.push(...response.frameworkMetadataList);
        }
        nextToken = response.nextToken;
    } while (nextToken);
    return results;
}

function buildFrameworkRequest(
    framework: Framework,
    customControlList: AWS.AuditManager.ControlMetadataList
): AWS.AuditManager.CreateAssessmentFrameworkRequest {
    const getControlIdByName = (name: string): string | undefined =>
        customControlList.find(({ name: controlName }) => controlName === name)?.id;
    return {
        name: framework.name,
        description: framework.description,
        complianceType: framework.complianceType,
        controlSets: framework.controlSets.map((item) => ({
            name: item.name,
            controls: item.controls.map((name) => ({ id: getControlIdByName(name) })),
        })),
    };
}

export async function processFrameworkFile(dataFile: DataFile): Promise<void> {
    const frameworkDefinition = dataFile.data as Framework;
    console.log(frameworkDefinition);

    // get the list of all custom frameworks
    const frameworkList = await loadCustomFrameworkList();

    // check whether or not the framework already exists
    const existingFramework = frameworkList.find(
        ({ name }) => name === frameworkDefinition.name
    );

    // load all custom controls
    const customControlList = await loadCustomControlList();

    // create or update the framework
    if (!existingFramework) {
        console.log('create new framework');
        const request: AWS.AuditManager.CreateAssessmentFrameworkRequest = {
            ...buildFrameworkRequest(frameworkDefinition, customControlList),
            tags: frameworkDefinition.tags,
        };
        const response = await auditManager.createAssessmentFramework(request).promise();
        console.log(response);
    } else {
        const frameworkId = existingFramework.id || '';
        const resourceArn = existingFramework.arn || '';
        console.log(`update existing framework id = ${frameworkId}`);
        const request: AWS.AuditManager.UpdateAssessmentFrameworkRequest = {
            ...buildFrameworkRequest(frameworkDefinition, customControlList),
            frameworkId,
        };
        const response = await auditManager.updateAssessmentFramework(request).promise();
        console.log(response);

        //update tags
        await updateTags(resourceArn, frameworkDefinition.tags);
    }
}
