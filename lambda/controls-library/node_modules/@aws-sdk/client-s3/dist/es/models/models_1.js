import { __assign } from "tslib";
import { SENSITIVE_STRING } from "@aws-sdk/smithy-client";
export var Encryption;
(function (Encryption) {
    /**
     * @internal
     */
    Encryption.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.KMSKeyId && { KMSKeyId: SENSITIVE_STRING }))); };
})(Encryption || (Encryption = {}));
export var MetadataEntry;
(function (MetadataEntry) {
    /**
     * @internal
     */
    MetadataEntry.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(MetadataEntry || (MetadataEntry = {}));
export var S3Location;
(function (S3Location) {
    /**
     * @internal
     */
    S3Location.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Encryption && { Encryption: Encryption.filterSensitiveLog(obj.Encryption) }))); };
})(S3Location || (S3Location = {}));
export var OutputLocation;
(function (OutputLocation) {
    /**
     * @internal
     */
    OutputLocation.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.S3 && { S3: S3Location.filterSensitiveLog(obj.S3) }))); };
})(OutputLocation || (OutputLocation = {}));
export var FileHeaderInfo;
(function (FileHeaderInfo) {
    FileHeaderInfo["IGNORE"] = "IGNORE";
    FileHeaderInfo["NONE"] = "NONE";
    FileHeaderInfo["USE"] = "USE";
})(FileHeaderInfo || (FileHeaderInfo = {}));
export var CSVInput;
(function (CSVInput) {
    /**
     * @internal
     */
    CSVInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CSVInput || (CSVInput = {}));
export var JSONType;
(function (JSONType) {
    JSONType["DOCUMENT"] = "DOCUMENT";
    JSONType["LINES"] = "LINES";
})(JSONType || (JSONType = {}));
export var JSONInput;
(function (JSONInput) {
    /**
     * @internal
     */
    JSONInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(JSONInput || (JSONInput = {}));
export var ParquetInput;
(function (ParquetInput) {
    /**
     * @internal
     */
    ParquetInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ParquetInput || (ParquetInput = {}));
export var InputSerialization;
(function (InputSerialization) {
    /**
     * @internal
     */
    InputSerialization.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InputSerialization || (InputSerialization = {}));
export var QuoteFields;
(function (QuoteFields) {
    QuoteFields["ALWAYS"] = "ALWAYS";
    QuoteFields["ASNEEDED"] = "ASNEEDED";
})(QuoteFields || (QuoteFields = {}));
export var CSVOutput;
(function (CSVOutput) {
    /**
     * @internal
     */
    CSVOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CSVOutput || (CSVOutput = {}));
export var JSONOutput;
(function (JSONOutput) {
    /**
     * @internal
     */
    JSONOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(JSONOutput || (JSONOutput = {}));
export var OutputSerialization;
(function (OutputSerialization) {
    /**
     * @internal
     */
    OutputSerialization.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(OutputSerialization || (OutputSerialization = {}));
export var SelectParameters;
(function (SelectParameters) {
    /**
     * @internal
     */
    SelectParameters.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SelectParameters || (SelectParameters = {}));
export var RestoreRequestType;
(function (RestoreRequestType) {
    RestoreRequestType["SELECT"] = "SELECT";
})(RestoreRequestType || (RestoreRequestType = {}));
export var RestoreRequest;
(function (RestoreRequest) {
    /**
     * @internal
     */
    RestoreRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.OutputLocation && { OutputLocation: OutputLocation.filterSensitiveLog(obj.OutputLocation) }))); };
})(RestoreRequest || (RestoreRequest = {}));
export var RestoreObjectRequest;
(function (RestoreObjectRequest) {
    /**
     * @internal
     */
    RestoreObjectRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.RestoreRequest && { RestoreRequest: RestoreRequest.filterSensitiveLog(obj.RestoreRequest) }))); };
})(RestoreObjectRequest || (RestoreObjectRequest = {}));
export var ContinuationEvent;
(function (ContinuationEvent) {
    /**
     * @internal
     */
    ContinuationEvent.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ContinuationEvent || (ContinuationEvent = {}));
export var EndEvent;
(function (EndEvent) {
    /**
     * @internal
     */
    EndEvent.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(EndEvent || (EndEvent = {}));
export var Progress;
(function (Progress) {
    /**
     * @internal
     */
    Progress.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Progress || (Progress = {}));
export var ProgressEvent;
(function (ProgressEvent) {
    /**
     * @internal
     */
    ProgressEvent.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ProgressEvent || (ProgressEvent = {}));
export var RecordsEvent;
(function (RecordsEvent) {
    /**
     * @internal
     */
    RecordsEvent.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RecordsEvent || (RecordsEvent = {}));
export var Stats;
(function (Stats) {
    /**
     * @internal
     */
    Stats.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Stats || (Stats = {}));
export var StatsEvent;
(function (StatsEvent) {
    /**
     * @internal
     */
    StatsEvent.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StatsEvent || (StatsEvent = {}));
export var SelectObjectContentEventStream;
(function (SelectObjectContentEventStream) {
    SelectObjectContentEventStream.visit = function (value, visitor) {
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
    SelectObjectContentEventStream.filterSensitiveLog = function (obj) {
        var _a;
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
            return _a = {}, _a[obj.$unknown[0]] = "UNKNOWN", _a;
    };
})(SelectObjectContentEventStream || (SelectObjectContentEventStream = {}));
export var SelectObjectContentOutput;
(function (SelectObjectContentOutput) {
    /**
     * @internal
     */
    SelectObjectContentOutput.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Payload && { Payload: "STREAMING_CONTENT" }))); };
})(SelectObjectContentOutput || (SelectObjectContentOutput = {}));
export var RequestProgress;
(function (RequestProgress) {
    /**
     * @internal
     */
    RequestProgress.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RequestProgress || (RequestProgress = {}));
export var ScanRange;
(function (ScanRange) {
    /**
     * @internal
     */
    ScanRange.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ScanRange || (ScanRange = {}));
export var SelectObjectContentRequest;
(function (SelectObjectContentRequest) {
    /**
     * @internal
     */
    SelectObjectContentRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.SSECustomerKey && { SSECustomerKey: SENSITIVE_STRING }))); };
})(SelectObjectContentRequest || (SelectObjectContentRequest = {}));
export var UploadPartOutput;
(function (UploadPartOutput) {
    /**
     * @internal
     */
    UploadPartOutput.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.SSEKMSKeyId && { SSEKMSKeyId: SENSITIVE_STRING }))); };
})(UploadPartOutput || (UploadPartOutput = {}));
export var UploadPartRequest;
(function (UploadPartRequest) {
    /**
     * @internal
     */
    UploadPartRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.SSECustomerKey && { SSECustomerKey: SENSITIVE_STRING }))); };
})(UploadPartRequest || (UploadPartRequest = {}));
export var CopyPartResult;
(function (CopyPartResult) {
    /**
     * @internal
     */
    CopyPartResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CopyPartResult || (CopyPartResult = {}));
export var UploadPartCopyOutput;
(function (UploadPartCopyOutput) {
    /**
     * @internal
     */
    UploadPartCopyOutput.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.SSEKMSKeyId && { SSEKMSKeyId: SENSITIVE_STRING }))); };
})(UploadPartCopyOutput || (UploadPartCopyOutput = {}));
export var UploadPartCopyRequest;
(function (UploadPartCopyRequest) {
    /**
     * @internal
     */
    UploadPartCopyRequest.filterSensitiveLog = function (obj) { return (__assign(__assign(__assign({}, obj), (obj.SSECustomerKey && { SSECustomerKey: SENSITIVE_STRING })), (obj.CopySourceSSECustomerKey && { CopySourceSSECustomerKey: SENSITIVE_STRING }))); };
})(UploadPartCopyRequest || (UploadPartCopyRequest = {}));
export var WriteGetObjectResponseRequest;
(function (WriteGetObjectResponseRequest) {
    /**
     * @internal
     */
    WriteGetObjectResponseRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.SSEKMSKeyId && { SSEKMSKeyId: SENSITIVE_STRING }))); };
})(WriteGetObjectResponseRequest || (WriteGetObjectResponseRequest = {}));
//# sourceMappingURL=models_1.js.map