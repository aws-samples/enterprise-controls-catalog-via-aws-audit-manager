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
import { Control } from './types';
import { updateTags } from './tags';

const auditManager = new AWS.AuditManager({ apiVersion: '2017-07-25' });

export async function loadCustomControlList(): Promise<AWS.AuditManager.ControlMetadataList> {
    const results: AWS.AuditManager.ControlMetadataList = [];
    let nextToken: string | undefined = undefined;
    do {
        const response: AWS.AuditManager.ListControlsResponse = await auditManager
            .listControls({ controlType: 'Custom', nextToken })
            .promise();
        if (response.controlMetadataList) {
            results.push(...response.controlMetadataList);
        }
        nextToken = response.nextToken;
    } while (nextToken);
    return results;
}

function buildControlRequest(control: Control): AWS.AuditManager.CreateControlRequest {
    return {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion

        controlMappingSources: control.datasources!,

        name: control.name,
        actionPlanInstructions: control.actionPlanInstructions,
        actionPlanTitle: control.actionPlanTitle,
        description: control.description,
        testingInformation: control.testingInformation,
    };
}

export async function processControlFile(dataFile: DataFile): Promise<void> {
    const controlDefinition = dataFile.data as Control;
    console.log(controlDefinition);

    // get the list of all custom controls
    const controlList = await loadCustomControlList();

    // check whether or not the control already exists
    const existingControl = controlList.find(
        ({ name }) => name === controlDefinition.name
    );

    if (!controlDefinition.datasources) {
        controlDefinition.datasources = [
            {
                sourceName: 'Manual Attestation',
                sourceDescription: 'Manual attestation',
                sourceSetUpOption: 'Procedural_Controls_Mapping',
                sourceType: 'MANUAL',
            },
        ];
    }
    // create or update the control
    if (!existingControl) {
        console.log('create new control');
        const request = {
            ...buildControlRequest(controlDefinition),
            tags: controlDefinition.tags,
        };
        const response = await auditManager.createControl(request).promise();
        console.log(response);
    } else {
        const controlId = existingControl.id || '';
        const resourceArn = existingControl.arn || '';
        console.log(`update existing control id = ${controlId}`);
        const request: AWS.AuditManager.UpdateControlRequest = {
            ...buildControlRequest(controlDefinition),
            controlId,
        };
        const response = await auditManager.updateControl(request).promise();
        console.log(response);

        //update tags
        await updateTags(resourceArn, controlDefinition.tags);
    }
}
