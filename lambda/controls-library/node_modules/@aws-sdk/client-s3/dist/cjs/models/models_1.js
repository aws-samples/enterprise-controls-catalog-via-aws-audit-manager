"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WriteGetObjectResponseRequest = exports.UploadPartCopyRequest = exports.UploadPartCopyOutput = exports.CopyPartResult = exports.UploadPartRequest = exports.UploadPartOutput = exports.SelectObjectContentRequest = exports.ScanRange = exports.RequestProgress = exports.SelectObjectContentOutput = exports.SelectObjectContentEventStream = exports.StatsEvent = exports.Stats = exports.RecordsEvent = exports.ProgressEvent = exports.Progress = exports.EndEvent = exports.ContinuationEvent = exports.RestoreObjectRequest = exports.RestoreRequest = exports.RestoreRequestType = exports.SelectParameters = exports.OutputSerialization = exports.JSONOutput = exports.CSVOutput = exports.QuoteFields = exports.InputSerialization = exports.ParquetInput = exports.JSONInput = exports.JSONType = exports.CSVInput = exports.FileHeaderInfo = exports.OutputLocation = exports.S3Location = exports.MetadataEntry = exports.Encryption = void 0;
const smithy_client_1 = require("@aws-sdk/smithy-client");
var Encryption;
(function (Encryption) {
    /**
     * @internal
     */
    Encryption.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.KMSKeyId && { KMSKeyId: smithy_client_1.SENSITIVE_STRING }),
    });
})(Encryption = exports.Encryption || (exports.Encryption = {}));
var MetadataEntry;
(function (MetadataEntry) {
    /**
     * @internal
     */
    MetadataEntry.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MetadataEntry = exports.MetadataEntry || (exports.MetadataEntry = {}));
var S3Location;
(function (S3Location) {
    /**
     * @internal
     */
    S3Location.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Encryption && { Encryption: Encryption.filterSensitiveLog(obj.Encryption) }),
    });
})(S3Location = exports.S3Location || (exports.S3Location = {}));
var OutputLocation;
(function (OutputLocation) {
    /**
     * @internal
     */
    OutputLocation.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.S3 && { S3: S3Location.filterSensitiveLog(obj.S3) }),
    });
})(OutputLocation = exports.OutputLocation || (exports.OutputLocation = {}));
var FileHeaderInfo;
(function (FileHeaderInfo) {
    FileHeaderInfo["IGNORE"] = "IGNORE";
    FileHeaderInfo["NONE"] = "NONE";
    FileHeaderInfo["USE"] = "USE";
})(FileHeaderInfo = exports.FileHeaderInfo || (exports.FileHeaderInfo = {}));
var CSVInput;
(function (CSVInput) {
    /**
     * @internal
     */
    CSVInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CSVInput = exports.CSVInput || (exports.CSVInput = {}));
var JSONType;
(function (JSONType) {
    JSONType["DOCUMENT"] = "DOCUMENT";
    JSONType["LINES"] = "LINES";
})(JSONType = exports.JSONType || (exports.JSONType = {}));
var JSONInput;
(function (JSONInput) {
    /**
     * @internal
     */
    JSONInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(JSONInput = exports.JSONInput || (exports.JSONInput = {}));
var ParquetInput;
(function (ParquetInput) {
    /**
     * @internal
     */
    ParquetInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ParquetInput = exports.ParquetInput || (exports.ParquetInput = {}));
var InputSerialization;
(function (InputSerialization) {
    /**
     * @internal
     */
    InputSerialization.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InputSerialization = exports.InputSerialization || (exports.InputSerialization = {}));
var QuoteFields;
(function (QuoteFields) {
    QuoteFields["ALWAYS"] = "ALWAYS";
    QuoteFields["ASNEEDED"] = "ASNEEDED";
})(QuoteFields = exports.QuoteFields || (exports.QuoteFields = {}));
var CSVOutput;
(function (CSVOutput) {
    /**
     * @internal
     */
    CSVOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CSVOutput = exports.CSVOutput || (exports.CSVOutput = {}));
var JSONOutput;
(function (JSONOutput) {
    /**
     * @internal
     */
    JSONOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(JSONOutput = exports.JSONOutput || (exports.JSONOutput = {}));
var OutputSerialization;
(function (OutputSerialization) {
    /**
     * @internal
     */
    OutputSerialization.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OutputSerialization = exports.OutputSerialization || (exports.OutputSerialization = {}));
var SelectParameters;
(function (SelectParameters) {
    /**
     * @internal
     */
    SelectParameters.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SelectParameters = exports.SelectParameters || (exports.SelectParameters = {}));
var RestoreRequestType;
(function (RestoreRequestType) {
    RestoreRequestType["SELECT"] = "SELECT";
})(RestoreRequestType = exports.RestoreRequestType || (exports.RestoreRequestType = {}));
var RestoreRequest;
(function (RestoreRequest) {
    /**
     * @internal
     */
    RestoreRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.OutputLocation && { OutputLocation: OutputLocation.filterSensitiveLog(obj.OutputLocation) }),
    });
})(RestoreRequest = exports.RestoreRequest || (exports.RestoreRequest = {}));
var RestoreObjectRequest;
(function (RestoreObjectRequest) {
    /**
     * @internal
     */
    RestoreObjectRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.RestoreRequest && { RestoreRequest: RestoreRequest.filterSensitiveLog(obj.RestoreRequest) }),
    });
})(RestoreObjectRequest = exports.RestoreObjectRequest || (exports.RestoreObjectRequest = {}));
var ContinuationEvent;
(function (ContinuationEvent) {
    /**
     * @internal
     */
    ContinuationEvent.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ContinuationEvent = exports.ContinuationEvent || (exports.ContinuationEvent = {}));
var EndEvent;
(function (EndEvent) {
    /**
     * @internal
     */
    EndEvent.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EndEvent = exports.EndEvent || (exports.EndEvent = {}));
var Progress;
(function (Progress) {
    /**
     * @internal
     */
    Progress.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Progress = exports.Progress || (exports.Progress = {}));
var ProgressEvent;
(function (ProgressEvent) {
    /**
     * @internal
     */
    ProgressEvent.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ProgressEvent = exports.ProgressEvent || (exports.ProgressEvent = {}));
var RecordsEvent;
(function (RecordsEvent) {
    /**
     * @internal
     */
    RecordsEvent.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RecordsEvent = exports.RecordsEvent || (exports.RecordsEvent = {}));
var Stats;
(function (Stats) {
    /**
     * @internal
     */
    Stats.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Stats = exports.Stats || (exports.Stats = {}));
var StatsEvent;
(function (StatsEvent) {
    /**
     * @internal
     */
    StatsEvent.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StatsEvent = exports.StatsEvent || (exports.StatsEvent = {}));
var SelectObjectContentEventStream;
(function (SelectObjectContentEventStream) {
    SelectObjectContentEventStream.visit = (value, visitor) => {
        if (value.Records !== undefined)
            return visitor.Records(value.Records);
        if (value.Stats !== undefined)
            return visitor.Stats(value.Stats);
        if (value.Progress !== undefined)
            return visitor.Progress(value.Progress);
        if (value.Cont !== undefined)
            return visitor.Cont(value.Cont);
        if (value.End !== undefined)
            return visitor.End(value.End);
        return visitor._(value.$unknown[0], value.$unknown[1]);
    };
    /**
     * @internal
     */
    SelectObjectContentEventStream.filterSensitiveLog = (obj) => {
        if (obj.Records !== undefined)
            return { Records: RecordsEvent.filterSensitiveLog(obj.Records) };
        if (obj.Stats !== undefined)
            return { Stats: StatsEvent.filterSensitiveLog(obj.Stats) };
        if (obj.Progress !== undefined)
            return { Progress: ProgressEvent.filterSensitiveLog(obj.Progress) };
        if (obj.Cont !== undefined)
            return { Cont: ContinuationEvent.filterSensitiveLog(obj.Cont) };
        if (obj.End !== undefined)
            return { End: EndEvent.filterSensitiveLog(obj.End) };
        if (obj.$unknown !== undefined)
            return { [obj.$unknown[0]]: "UNKNOWN" };
    };
})(SelectObjectContentEventStream = exports.SelectObjectContentEventStream || (exports.SelectObjectContentEventStream = {}));
var SelectObjectContentOutput;
(function (SelectObjectContentOutput) {
    /**
     * @internal
     */
    SelectObjectContentOutput.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Payload && { Payload: "STREAMING_CONTENT" }),
    });
})(SelectObjectContentOutput = exports.SelectObjectContentOutput || (exports.SelectObjectContentOutput = {}));
var RequestProgress;
(function (RequestProgress) {
    /**
     * @internal
     */
    RequestProgress.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RequestProgress = exports.RequestProgress || (exports.RequestProgress = {}));
var ScanRange;
(function (ScanRange) {
    /**
     * @internal
     */
    ScanRange.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ScanRange = exports.ScanRange || (exports.ScanRange = {}));
var SelectObjectContentRequest;
(function (SelectObjectContentRequest) {
    /**
     * @internal
     */
    SelectObjectContentRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.SSECustomerKey && { SSECustomerKey: smithy_client_1.SENSITIVE_STRING }),
    });
})(SelectObjectContentRequest = exports.SelectObjectContentRequest || (exports.SelectObjectContentRequest = {}));
var UploadPartOutput;
(function (UploadPartOutput) {
    /**
     * @internal
     */
    UploadPartOutput.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.SSEKMSKeyId && { SSEKMSKeyId: smithy_client_1.SENSITIVE_STRING }),
    });
})(UploadPartOutput = exports.UploadPartOutput || (exports.UploadPartOutput = {}));
var UploadPartRequest;
(function (UploadPartRequest) {
    /**
     * @internal
     */
    UploadPartRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.SSECustomerKey && { SSECustomerKey: smithy_client_1.SENSITIVE_STRING }),
    });
})(UploadPartRequest = exports.UploadPartRequest || (exports.UploadPartRequest = {}));
var CopyPartResult;
(function (CopyPartResult) {
    /**
     * @internal
     */
    CopyPartResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CopyPartResult = exports.CopyPartResult || (exports.CopyPartResult = {}));
var UploadPartCopyOutput;
(function (UploadPartCopyOutput) {
    /**
     * @internal
     */
    UploadPartCopyOutput.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.SSEKMSKeyId && { SSEKMSKeyId: smithy_client_1.SENSITIVE_STRING }),
    });
})(UploadPartCopyOutput = exports.UploadPartCopyOutput || (exports.UploadPartCopyOutput = {}));
var UploadPartCopyRequest;
(function (UploadPartCopyRequest) {
    /**
     * @internal
     */
    UploadPartCopyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.SSECustomerKey && { SSECustomerKey: smithy_client_1.SENSITIVE_STRING }),
        ...(obj.CopySourceSSECustomerKey && { CopySourceSSECustomerKey: smithy_client_1.SENSITIVE_STRING }),
    });
})(UploadPartCopyRequest = exports.UploadPartCopyRequest || (exports.UploadPartCopyRequest = {}));
var WriteGetObjectResponseRequest;
(function (WriteGetObjectResponseRequest) {
    /**
     * @internal
     */
    WriteGetObjectResponseRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.SSEKMSKeyId && { SSEKMSKeyId: smithy_client_1.SENSITIVE_STRING }),
    });
})(WriteGetObjectResponseRequest = exports.WriteGetObjectResponseRequest || (exports.WriteGetObjectResponseRequest = {}));
//# sourceMappingURL=models_1.js.map