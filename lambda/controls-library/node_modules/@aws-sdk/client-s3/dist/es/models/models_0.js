import { __assign } from "tslib";
import { SENSITIVE_STRING } from "@aws-sdk/smithy-client";
export var AbortIncompleteMultipartUpload;
(function (AbortIncompleteMultipartUpload) {
    /**
     * @internal
     */
    AbortIncompleteMultipartUpload.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AbortIncompleteMultipartUpload || (AbortIncompleteMultipartUpload = {}));
export var AbortMultipartUploadOutput;
(function (AbortMultipartUploadOutput) {
    /**
     * @internal
     */
    AbortMultipartUploadOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AbortMultipartUploadOutput || (AbortMultipartUploadOutput = {}));
export var AbortMultipartUploadRequest;
(function (AbortMultipartUploadRequest) {
    /**
     * @internal
     */
    AbortMultipartUploadRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AbortMultipartUploadRequest || (AbortMultipartUploadRequest = {}));
export var NoSuchUpload;
(function (NoSuchUpload) {
    /**
     * @internal
     */
    NoSuchUpload.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(NoSuchUpload || (NoSuchUpload = {}));
export var AccelerateConfiguration;
(function (AccelerateConfiguration) {
    /**
     * @internal
     */
    AccelerateConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AccelerateConfiguration || (AccelerateConfiguration = {}));
export var Grantee;
(function (Grantee) {
    /**
     * @internal
     */
    Grantee.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Grantee || (Grantee = {}));
export var Grant;
(function (Grant) {
    /**
     * @internal
     */
    Grant.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Grant || (Grant = {}));
export var Owner;
(function (Owner) {
    /**
     * @internal
     */
    Owner.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Owner || (Owner = {}));
export var AccessControlPolicy;
(function (AccessControlPolicy) {
    /**
     * @internal
     */
    AccessControlPolicy.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AccessControlPolicy || (AccessControlPolicy = {}));
export var AccessControlTranslation;
(function (AccessControlTranslation) {
    /**
     * @internal
     */
    AccessControlTranslation.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AccessControlTranslation || (AccessControlTranslation = {}));
export var CompleteMultipartUploadOutput;
(function (CompleteMultipartUploadOutput) {
    /**
     * @internal
     */
    CompleteMultipartUploadOutput.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.SSEKMSKeyId && { SSEKMSKeyId: SENSITIVE_STRING }))); };
})(CompleteMultipartUploadOutput || (CompleteMultipartUploadOutput = {}));
export var CompletedPart;
(function (CompletedPart) {
    /**
     * @internal
     */
    CompletedPart.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CompletedPart || (CompletedPart = {}));
export var CompletedMultipartUpload;
(function (CompletedMultipartUpload) {
    /**
     * @internal
     */
    CompletedMultipartUpload.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CompletedMultipartUpload || (CompletedMultipartUpload = {}));
export var CompleteMultipartUploadRequest;
(function (CompleteMultipartUploadRequest) {
    /**
     * @internal
     */
    CompleteMultipartUploadRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CompleteMultipartUploadRequest || (CompleteMultipartUploadRequest = {}));
export var CopyObjectResult;
(function (CopyObjectResult) {
    /**
     * @internal
     */
    CopyObjectResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CopyObjectResult || (CopyObjectResult = {}));
export var CopyObjectOutput;
(function (CopyObjectOutput) {
    /**
     * @internal
     */
    CopyObjectOutput.filterSensitiveLog = function (obj) { return (__assign(__assign(__assign({}, obj), (obj.SSEKMSKeyId && { SSEKMSKeyId: SENSITIVE_STRING })), (obj.SSEKMSEncryptionContext && { SSEKMSEncryptionContext: SENSITIVE_STRING }))); };
})(CopyObjectOutput || (CopyObjectOutput = {}));
export var CopyObjectRequest;
(function (CopyObjectRequest) {
    /**
     * @internal
     */
    CopyObjectRequest.filterSensitiveLog = function (obj) { return (__assign(__assign(__assign(__assign(__assign({}, obj), (obj.SSECustomerKey && { SSECustomerKey: SENSITIVE_STRING })), (obj.SSEKMSKeyId && { SSEKMSKeyId: SENSITIVE_STRING })), (obj.SSEKMSEncryptionContext && { SSEKMSEncryptionContext: SENSITIVE_STRING })), (obj.CopySourceSSECustomerKey && { CopySourceSSECustomerKey: SENSITIVE_STRING }))); };
})(CopyObjectRequest || (CopyObjectRequest = {}));
export var ObjectNotInActiveTierError;
(function (ObjectNotInActiveTierError) {
    /**
     * @internal
     */
    ObjectNotInActiveTierError.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ObjectNotInActiveTierError || (ObjectNotInActiveTierError = {}));
export var BucketAlreadyExists;
(function (BucketAlreadyExists) {
    /**
     * @internal
     */
    BucketAlreadyExists.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BucketAlreadyExists || (BucketAlreadyExists = {}));
export var BucketAlreadyOwnedByYou;
(function (BucketAlreadyOwnedByYou) {
    /**
     * @internal
     */
    BucketAlreadyOwnedByYou.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BucketAlreadyOwnedByYou || (BucketAlreadyOwnedByYou = {}));
export var CreateBucketOutput;
(function (CreateBucketOutput) {
    /**
     * @internal
     */
    CreateBucketOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateBucketOutput || (CreateBucketOutput = {}));
export var CreateBucketConfiguration;
(function (CreateBucketConfiguration) {
    /**
     * @internal
     */
    CreateBucketConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateBucketConfiguration || (CreateBucketConfiguration = {}));
export var CreateBucketRequest;
(function (CreateBucketRequest) {
    /**
     * @internal
     */
    CreateBucketRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateBucketRequest || (CreateBucketRequest = {}));
export var CreateMultipartUploadOutput;
(function (CreateMultipartUploadOutput) {
    /**
     * @internal
     */
    CreateMultipartUploadOutput.filterSensitiveLog = function (obj) { return (__assign(__assign(__assign({}, obj), (obj.SSEKMSKeyId && { SSEKMSKeyId: SENSITIVE_STRING })), (obj.SSEKMSEncryptionContext && { SSEKMSEncryptionContext: SENSITIVE_STRING }))); };
})(CreateMultipartUploadOutput || (CreateMultipartUploadOutput = {}));
export var CreateMultipartUploadRequest;
(function (CreateMultipartUploadRequest) {
    /**
     * @internal
     */
    CreateMultipartUploadRequest.filterSensitiveLog = function (obj) { return (__assign(__assign(__assign(__assign({}, obj), (obj.SSECustomerKey && { SSECustomerKey: SENSITIVE_STRING })), (obj.SSEKMSKeyId && { SSEKMSKeyId: SENSITIVE_STRING })), (obj.SSEKMSEncryptionContext && { SSEKMSEncryptionContext: SENSITIVE_STRING }))); };
})(CreateMultipartUploadRequest || (CreateMultipartUploadRequest = {}));
export var DeleteBucketRequest;
(function (DeleteBucketRequest) {
    /**
     * @internal
     */
    DeleteBucketRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteBucketRequest || (DeleteBucketRequest = {}));
export var DeleteBucketAnalyticsConfigurationRequest;
(function (DeleteBucketAnalyticsConfigurationRequest) {
    /**
     * @internal
     */
    DeleteBucketAnalyticsConfigurationRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteBucketAnalyticsConfigurationRequest || (DeleteBucketAnalyticsConfigurationRequest = {}));
export var DeleteBucketCorsRequest;
(function (DeleteBucketCorsRequest) {
    /**
     * @internal
     */
    DeleteBucketCorsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteBucketCorsRequest || (DeleteBucketCorsRequest = {}));
export var DeleteBucketEncryptionRequest;
(function (DeleteBucketEncryptionRequest) {
    /**
     * @internal
     */
    DeleteBucketEncryptionRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteBucketEncryptionRequest || (DeleteBucketEncryptionRequest = {}));
export var DeleteBucketIntelligentTieringConfigurationRequest;
(function (DeleteBucketIntelligentTieringConfigurationRequest) {
    /**
     * @internal
     */
    DeleteBucketIntelligentTieringConfigurationRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteBucketIntelligentTieringConfigurationRequest || (DeleteBucketIntelligentTieringConfigurationRequest = {}));
export var DeleteBucketInventoryConfigurationRequest;
(function (DeleteBucketInventoryConfigurationRequest) {
    /**
     * @internal
     */
    DeleteBucketInventoryConfigurationRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteBucketInventoryConfigurationRequest || (DeleteBucketInventoryConfigurationRequest = {}));
export var DeleteBucketLifecycleRequest;
(function (DeleteBucketLifecycleRequest) {
    /**
     * @internal
     */
    DeleteBucketLifecycleRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteBucketLifecycleRequest || (DeleteBucketLifecycleRequest = {}));
export var DeleteBucketMetricsConfigurationRequest;
(function (DeleteBucketMetricsConfigurationRequest) {
    /**
     * @internal
     */
    DeleteBucketMetricsConfigurationRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteBucketMetricsConfigurationRequest || (DeleteBucketMetricsConfigurationRequest = {}));
export var DeleteBucketOwnershipControlsRequest;
(function (DeleteBucketOwnershipControlsRequest) {
    /**
     * @internal
     */
    DeleteBucketOwnershipControlsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteBucketOwnershipControlsRequest || (DeleteBucketOwnershipControlsRequest = {}));
export var DeleteBucketPolicyRequest;
(function (DeleteBucketPolicyRequest) {
    /**
     * @internal
     */
    DeleteBucketPolicyRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteBucketPolicyRequest || (DeleteBucketPolicyRequest = {}));
export var DeleteBucketReplicationRequest;
(function (DeleteBucketReplicationRequest) {
    /**
     * @internal
     */
    DeleteBucketReplicationRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteBucketReplicationRequest || (DeleteBucketReplicationRequest = {}));
export var DeleteBucketTaggingRequest;
(function (DeleteBucketTaggingRequest) {
    /**
     * @internal
     */
    DeleteBucketTaggingRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteBucketTaggingRequest || (DeleteBucketTaggingRequest = {}));
export var DeleteBucketWebsiteRequest;
(function (DeleteBucketWebsiteRequest) {
    /**
     * @internal
     */
    DeleteBucketWebsiteRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteBucketWebsiteRequest || (DeleteBucketWebsiteRequest = {}));
export var DeleteObjectOutput;
(function (DeleteObjectOutput) {
    /**
     * @internal
     */
    DeleteObjectOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteObjectOutput || (DeleteObjectOutput = {}));
export var DeleteObjectRequest;
(function (DeleteObjectRequest) {
    /**
     * @internal
     */
    DeleteObjectRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteObjectRequest || (DeleteObjectRequest = {}));
export var DeletedObject;
(function (DeletedObject) {
    /**
     * @internal
     */
    DeletedObject.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeletedObject || (DeletedObject = {}));
export var _Error;
(function (_Error) {
    /**
     * @internal
     */
    _Error.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(_Error || (_Error = {}));
export var DeleteObjectsOutput;
(function (DeleteObjectsOutput) {
    /**
     * @internal
     */
    DeleteObjectsOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteObjectsOutput || (DeleteObjectsOutput = {}));
export var ObjectIdentifier;
(function (ObjectIdentifier) {
    /**
     * @internal
     */
    ObjectIdentifier.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ObjectIdentifier || (ObjectIdentifier = {}));
export var Delete;
(function (Delete) {
    /**
     * @internal
     */
    Delete.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Delete || (Delete = {}));
export var DeleteObjectsRequest;
(function (DeleteObjectsRequest) {
    /**
     * @internal
     */
    DeleteObjectsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteObjectsRequest || (DeleteObjectsRequest = {}));
export var DeleteObjectTaggingOutput;
(function (DeleteObjectTaggingOutput) {
    /**
     * @internal
     */
    DeleteObjectTaggingOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteObjectTaggingOutput || (DeleteObjectTaggingOutput = {}));
export var DeleteObjectTaggingRequest;
(function (DeleteObjectTaggingRequest) {
    /**
     * @internal
     */
    DeleteObjectTaggingRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteObjectTaggingRequest || (DeleteObjectTaggingRequest = {}));
export var DeletePublicAccessBlockRequest;
(function (DeletePublicAccessBlockRequest) {
    /**
     * @internal
     */
    DeletePublicAccessBlockRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeletePublicAccessBlockRequest || (DeletePublicAccessBlockRequest = {}));
export var GetBucketAccelerateConfigurationOutput;
(function (GetBucketAccelerateConfigurationOutput) {
    /**
     * @internal
     */
    GetBucketAccelerateConfigurationOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetBucketAccelerateConfigurationOutput || (GetBucketAccelerateConfigurationOutput = {}));
export var GetBucketAccelerateConfigurationRequest;
(function (GetBucketAccelerateConfigurationRequest) {
    /**
     * @internal
     */
    GetBucketAccelerateConfigurationRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetBucketAccelerateConfigurationRequest || (GetBucketAccelerateConfigurationRequest = {}));
export var GetBucketAclOutput;
(function (GetBucketAclOutput) {
    /**
     * @internal
     */
    GetBucketAclOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetBucketAclOutput || (GetBucketAclOutput = {}));
export var GetBucketAclRequest;
(function (GetBucketAclRequest) {
    /**
     * @internal
     */
    GetBucketAclRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetBucketAclRequest || (GetBucketAclRequest = {}));
export var Tag;
(function (Tag) {
    /**
     * @internal
     */
    Tag.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Tag || (Tag = {}));
export var AnalyticsAndOperator;
(function (AnalyticsAndOperator) {
    /**
     * @internal
     */
    AnalyticsAndOperator.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AnalyticsAndOperator || (AnalyticsAndOperator = {}));
export var AnalyticsFilter;
(function (AnalyticsFilter) {
    AnalyticsFilter.visit = function (value, visitor) {
        if (value.Prefix !== undefined)
            return visitor.Prefix(value.Prefix);
        if (value.Tag !== undefined)
            return visitor.Tag(value.Tag);
        if (value.And !== undefined)
            return visitor.And(value.And);
        return visitor._(value.$unknown[0], value.$unknown[1]);
    };
    /**
     * @internal
     */
    AnalyticsFilter.filterSensitiveLog = function (obj) {
        var _a;
        if (obj.Prefix !== undefined)
            return { Prefix: obj.Prefix };
        if (obj.Tag !== undefined)
            return { Tag: Tag.filterSensitiveLog(obj.Tag) };
        if (obj.And !== undefined)
            return { And: AnalyticsAndOperator.filterSensitiveLog(obj.And) };
        if (obj.$unknown !== undefined)
            return _a = {}, _a[obj.$unknown[0]] = "UNKNOWN", _a;
    };
})(AnalyticsFilter || (AnalyticsFilter = {}));
export var AnalyticsS3BucketDestination;
(function (AnalyticsS3BucketDestination) {
    /**
     * @internal
     */
    AnalyticsS3BucketDestination.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AnalyticsS3BucketDestination || (AnalyticsS3BucketDestination = {}));
export var AnalyticsExportDestination;
(function (AnalyticsExportDestination) {
    /**
     * @internal
     */
    AnalyticsExportDestination.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AnalyticsExportDestination || (AnalyticsExportDestination = {}));
export var StorageClassAnalysisDataExport;
(function (StorageClassAnalysisDataExport) {
    /**
     * @internal
     */
    StorageClassAnalysisDataExport.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StorageClassAnalysisDataExport || (StorageClassAnalysisDataExport = {}));
export var StorageClassAnalysis;
(function (StorageClassAnalysis) {
    /**
     * @internal
     */
    StorageClassAnalysis.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StorageClassAnalysis || (StorageClassAnalysis = {}));
export var AnalyticsConfiguration;
(function (AnalyticsConfiguration) {
    /**
     * @internal
     */
    AnalyticsConfiguration.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Filter && { Filter: AnalyticsFilter.filterSensitiveLog(obj.Filter) }))); };
})(AnalyticsConfiguration || (AnalyticsConfiguration = {}));
export var GetBucketAnalyticsConfigurationOutput;
(function (GetBucketAnalyticsConfigurationOutput) {
    /**
     * @internal
     */
    GetBucketAnalyticsConfigurationOutput.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.AnalyticsConfiguration && {
        AnalyticsConfiguration: AnalyticsConfiguration.filterSensitiveLog(obj.AnalyticsConfiguration),
    }))); };
})(GetBucketAnalyticsConfigurationOutput || (GetBucketAnalyticsConfigurationOutput = {}));
export var GetBucketAnalyticsConfigurationRequest;
(function (GetBucketAnalyticsConfigurationRequest) {
    /**
     * @internal
     */
    GetBucketAnalyticsConfigurationRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetBucketAnalyticsConfigurationRequest || (GetBucketAnalyticsConfigurationRequest = {}));
export var CORSRule;
(function (CORSRule) {
    /**
     * @internal
     */
    CORSRule.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CORSRule || (CORSRule = {}));
export var GetBucketCorsOutput;
(function (GetBucketCorsOutput) {
    /**
     * @internal
     */
    GetBucketCorsOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetBucketCorsOutput || (GetBucketCorsOutput = {}));
export var GetBucketCorsRequest;
(function (GetBucketCorsRequest) {
    /**
     * @internal
     */
    GetBucketCorsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetBucketCorsRequest || (GetBucketCorsRequest = {}));
export var ServerSideEncryptionByDefault;
(function (ServerSideEncryptionByDefault) {
    /**
     * @internal
     */
    ServerSideEncryptionByDefault.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.KMSMasterKeyID && { KMSMasterKeyID: SENSITIVE_STRING }))); };
})(ServerSideEncryptionByDefault || (ServerSideEncryptionByDefault = {}));
export var ServerSideEncryptionRule;
(function (ServerSideEncryptionRule) {
    /**
     * @internal
     */
    ServerSideEncryptionRule.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.ApplyServerSideEncryptionByDefault && {
        ApplyServerSideEncryptionByDefault: ServerSideEncryptionByDefault.filterSensitiveLog(obj.ApplyServerSideEncryptionByDefault),
    }))); };
})(ServerSideEncryptionRule || (ServerSideEncryptionRule = {}));
export var ServerSideEncryptionConfiguration;
(function (ServerSideEncryptionConfiguration) {
    /**
     * @internal
     */
    ServerSideEncryptionConfiguration.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Rules && { Rules: obj.Rules.map(function (item) { return ServerSideEncryptionRule.filterSensitiveLog(item); }) }))); };
})(ServerSideEncryptionConfiguration || (ServerSideEncryptionConfiguration = {}));
export var GetBucketEncryptionOutput;
(function (GetBucketEncryptionOutput) {
    /**
     * @internal
     */
    GetBucketEncryptionOutput.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.ServerSideEncryptionConfiguration && {
        ServerSideEncryptionConfiguration: ServerSideEncryptionConfiguration.filterSensitiveLog(obj.ServerSideEncryptionConfiguration),
    }))); };
})(GetBucketEncryptionOutput || (GetBucketEncryptionOutput = {}));
export var GetBucketEncryptionRequest;
(function (GetBucketEncryptionRequest) {
    /**
     * @internal
     */
    GetBucketEncryptionRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetBucketEncryptionRequest || (GetBucketEncryptionRequest = {}));
export var IntelligentTieringAndOperator;
(function (IntelligentTieringAndOperator) {
    /**
     * @internal
     */
    IntelligentTieringAndOperator.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(IntelligentTieringAndOperator || (IntelligentTieringAndOperator = {}));
export var IntelligentTieringFilter;
(function (IntelligentTieringFilter) {
    /**
     * @internal
     */
    IntelligentTieringFilter.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(IntelligentTieringFilter || (IntelligentTieringFilter = {}));
export var Tiering;
(function (Tiering) {
    /**
     * @internal
     */
    Tiering.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Tiering || (Tiering = {}));
export var IntelligentTieringConfiguration;
(function (IntelligentTieringConfiguration) {
    /**
     * @internal
     */
    IntelligentTieringConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(IntelligentTieringConfiguration || (IntelligentTieringConfiguration = {}));
export var GetBucketIntelligentTieringConfigurationOutput;
(function (GetBucketIntelligentTieringConfigurationOutput) {
    /**
     * @internal
     */
    GetBucketIntelligentTieringConfigurationOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetBucketIntelligentTieringConfigurationOutput || (GetBucketIntelligentTieringConfigurationOutput = {}));
export var GetBucketIntelligentTieringConfigurationRequest;
(function (GetBucketIntelligentTieringConfigurationRequest) {
    /**
     * @internal
     */
    GetBucketIntelligentTieringConfigurationRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetBucketIntelligentTieringConfigurationRequest || (GetBucketIntelligentTieringConfigurationRequest = {}));
export var SSEKMS;
(function (SSEKMS) {
    /**
     * @internal
     */
    SSEKMS.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.KeyId && { KeyId: SENSITIVE_STRING }))); };
})(SSEKMS || (SSEKMS = {}));
export var SSES3;
(function (SSES3) {
    /**
     * @internal
     */
    SSES3.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SSES3 || (SSES3 = {}));
export var InventoryEncryption;
(function (InventoryEncryption) {
    /**
     * @internal
     */
    InventoryEncryption.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.SSEKMS && { SSEKMS: SSEKMS.filterSensitiveLog(obj.SSEKMS) }))); };
})(InventoryEncryption || (InventoryEncryption = {}));
export var InventoryS3BucketDestination;
(function (InventoryS3BucketDestination) {
    /**
     * @internal
     */
    InventoryS3BucketDestination.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Encryption && { Encryption: InventoryEncryption.filterSensitiveLog(obj.Encryption) }))); };
})(InventoryS3BucketDestination || (InventoryS3BucketDestination = {}));
export var InventoryDestination;
(function (InventoryDestination) {
    /**
     * @internal
     */
    InventoryDestination.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.S3BucketDestination && {
        S3BucketDestination: InventoryS3BucketDestination.filterSensitiveLog(obj.S3BucketDestination),
    }))); };
})(InventoryDestination || (InventoryDestination = {}));
export var InventoryFilter;
(function (InventoryFilter) {
    /**
     * @internal
     */
    InventoryFilter.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InventoryFilter || (InventoryFilter = {}));
export var InventorySchedule;
(function (InventorySchedule) {
    /**
     * @internal
     */
    InventorySchedule.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InventorySchedule || (InventorySchedule = {}));
export var InventoryConfiguration;
(function (InventoryConfiguration) {
    /**
     * @internal
     */
    InventoryConfiguration.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Destination && { Destination: InventoryDestination.filterSensitiveLog(obj.Destination) }))); };
})(InventoryConfiguration || (InventoryConfiguration = {}));
export var GetBucketInventoryConfigurationOutput;
(function (GetBucketInventoryConfigurationOutput) {
    /**
     * @internal
     */
    GetBucketInventoryConfigurationOutput.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.InventoryConfiguration && {
        InventoryConfiguration: InventoryConfiguration.filterSensitiveLog(obj.InventoryConfiguration),
    }))); };
})(GetBucketInventoryConfigurationOutput || (GetBucketInventoryConfigurationOutput = {}));
export var GetBucketInventoryConfigurationRequest;
(function (GetBucketInventoryConfigurationRequest) {
    /**
     * @internal
     */
    GetBucketInventoryConfigurationRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetBucketInventoryConfigurationRequest || (GetBucketInventoryConfigurationRequest = {}));
export var LifecycleExpiration;
(function (LifecycleExpiration) {
    /**
     * @internal
     */
    LifecycleExpiration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LifecycleExpiration || (LifecycleExpiration = {}));
export var LifecycleRuleAndOperator;
(function (LifecycleRuleAndOperator) {
    /**
     * @internal
     */
    LifecycleRuleAndOperator.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LifecycleRuleAndOperator || (LifecycleRuleAndOperator = {}));
export var LifecycleRuleFilter;
(function (LifecycleRuleFilter) {
    LifecycleRuleFilter.visit = function (value, visitor) {
        if (value.Prefix !== undefined)
            return visitor.Prefix(value.Prefix);
        if (value.Tag !== undefined)
            return visitor.Tag(value.Tag);
        if (value.And !== undefined)
            return visitor.And(value.And);
        return visitor._(value.$unknown[0], value.$unknown[1]);
    };
    /**
     * @internal
     */
    LifecycleRuleFilter.filterSensitiveLog = function (obj) {
        var _a;
        if (obj.Prefix !== undefined)
            return { Prefix: obj.Prefix };
        if (obj.Tag !== undefined)
            return { Tag: Tag.filterSensitiveLog(obj.Tag) };
        if (obj.And !== undefined)
            return { And: LifecycleRuleAndOperator.filterSensitiveLog(obj.And) };
        if (obj.$unknown !== undefined)
            return _a = {}, _a[obj.$unknown[0]] = "UNKNOWN", _a;
    };
})(LifecycleRuleFilter || (LifecycleRuleFilter = {}));
export var NoncurrentVersionExpiration;
(function (NoncurrentVersionExpiration) {
    /**
     * @internal
     */
    NoncurrentVersionExpiration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(NoncurrentVersionExpiration || (NoncurrentVersionExpiration = {}));
export var NoncurrentVersionTransition;
(function (NoncurrentVersionTransition) {
    /**
     * @internal
     */
    NoncurrentVersionTransition.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(NoncurrentVersionTransition || (NoncurrentVersionTransition = {}));
export var Transition;
(function (Transition) {
    /**
     * @internal
     */
    Transition.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Transition || (Transition = {}));
export var LifecycleRule;
(function (LifecycleRule) {
    /**
     * @internal
     */
    LifecycleRule.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Filter && { Filter: LifecycleRuleFilter.filterSensitiveLog(obj.Filter) }))); };
})(LifecycleRule || (LifecycleRule = {}));
export var GetBucketLifecycleConfigurationOutput;
(function (GetBucketLifecycleConfigurationOutput) {
    /**
     * @internal
     */
    GetBucketLifecycleConfigurationOutput.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Rules && { Rules: obj.Rules.map(function (item) { return LifecycleRule.filterSensitiveLog(item); }) }))); };
})(GetBucketLifecycleConfigurationOutput || (GetBucketLifecycleConfigurationOutput = {}));
export var GetBucketLifecycleConfigurationRequest;
(function (GetBucketLifecycleConfigurationRequest) {
    /**
     * @internal
     */
    GetBucketLifecycleConfigurationRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetBucketLifecycleConfigurationRequest || (GetBucketLifecycleConfigurationRequest = {}));
export var GetBucketLocationOutput;
(function (GetBucketLocationOutput) {
    /**
     * @internal
     */
    GetBucketLocationOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetBucketLocationOutput || (GetBucketLocationOutput = {}));
export var GetBucketLocationRequest;
(function (GetBucketLocationRequest) {
    /**
     * @internal
     */
    GetBucketLocationRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetBucketLocationRequest || (GetBucketLocationRequest = {}));
export var TargetGrant;
(function (TargetGrant) {
    /**
     * @internal
     */
    TargetGrant.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TargetGrant || (TargetGrant = {}));
export var LoggingEnabled;
(function (LoggingEnabled) {
    /**
     * @internal
     */
    LoggingEnabled.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LoggingEnabled || (LoggingEnabled = {}));
export var GetBucketLoggingOutput;
(function (GetBucketLoggingOutput) {
    /**
     * @internal
     */
    GetBucketLoggingOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetBucketLoggingOutput || (GetBucketLoggingOutput = {}));
export var GetBucketLoggingRequest;
(function (GetBucketLoggingRequest) {
    /**
     * @internal
     */
    GetBucketLoggingRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetBucketLoggingRequest || (GetBucketLoggingRequest = {}));
export var MetricsAndOperator;
(function (MetricsAndOperator) {
    /**
     * @internal
     */
    MetricsAndOperator.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(MetricsAndOperator || (MetricsAndOperator = {}));
export var MetricsFilter;
(function (MetricsFilter) {
    MetricsFilter.visit = function (value, visitor) {
        if (value.Prefix !== undefined)
            return visitor.Prefix(value.Prefix);
        if (value.Tag !== undefined)
            return visitor.Tag(value.Tag);
        if (value.And !== undefined)
            return visitor.And(value.And);
        return visitor._(value.$unknown[0], value.$unknown[1]);
    };
    /**
     * @internal
     */
    MetricsFilter.filterSensitiveLog = function (obj) {
        var _a;
        if (obj.Prefix !== undefined)
            return { Prefix: obj.Prefix };
        if (obj.Tag !== undefined)
            return { Tag: Tag.filterSensitiveLog(obj.Tag) };
        if (obj.And !== undefined)
            return { And: MetricsAndOperator.filterSensitiveLog(obj.And) };
        if (obj.$unknown !== undefined)
            return _a = {}, _a[obj.$unknown[0]] = "UNKNOWN", _a;
    };
})(MetricsFilter || (MetricsFilter = {}));
export var MetricsConfiguration;
(function (MetricsConfiguration) {
    /**
     * @internal
     */
    MetricsConfiguration.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Filter && { Filter: MetricsFilter.filterSensitiveLog(obj.Filter) }))); };
})(MetricsConfiguration || (MetricsConfiguration = {}));
export var GetBucketMetricsConfigurationOutput;
(function (GetBucketMetricsConfigurationOutput) {
    /**
     * @internal
     */
    GetBucketMetricsConfigurationOutput.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.MetricsConfiguration && {
        MetricsConfiguration: MetricsConfiguration.filterSensitiveLog(obj.MetricsConfiguration),
    }))); };
})(GetBucketMetricsConfigurationOutput || (GetBucketMetricsConfigurationOutput = {}));
export var GetBucketMetricsConfigurationRequest;
(function (GetBucketMetricsConfigurationRequest) {
    /**
     * @internal
     */
    GetBucketMetricsConfigurationRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetBucketMetricsConfigurationRequest || (GetBucketMetricsConfigurationRequest = {}));
export var GetBucketNotificationConfigurationRequest;
(function (GetBucketNotificationConfigurationRequest) {
    /**
     * @internal
     */
    GetBucketNotificationConfigurationRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetBucketNotificationConfigurationRequest || (GetBucketNotificationConfigurationRequest = {}));
export var FilterRule;
(function (FilterRule) {
    /**
     * @internal
     */
    FilterRule.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(FilterRule || (FilterRule = {}));
export var S3KeyFilter;
(function (S3KeyFilter) {
    /**
     * @internal
     */
    S3KeyFilter.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(S3KeyFilter || (S3KeyFilter = {}));
export var NotificationConfigurationFilter;
(function (NotificationConfigurationFilter) {
    /**
     * @internal
     */
    NotificationConfigurationFilter.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(NotificationConfigurationFilter || (NotificationConfigurationFilter = {}));
export var LambdaFunctionConfiguration;
(function (LambdaFunctionConfiguration) {
    /**
     * @internal
     */
    LambdaFunctionConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LambdaFunctionConfiguration || (LambdaFunctionConfiguration = {}));
export var QueueConfiguration;
(function (QueueConfiguration) {
    /**
     * @internal
     */
    QueueConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(QueueConfiguration || (QueueConfiguration = {}));
export var TopicConfiguration;
(function (TopicConfiguration) {
    /**
     * @internal
     */
    TopicConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TopicConfiguration || (TopicConfiguration = {}));
export var NotificationConfiguration;
(function (NotificationConfiguration) {
    /**
     * @internal
     */
    NotificationConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(NotificationConfiguration || (NotificationConfiguration = {}));
export var OwnershipControlsRule;
(function (OwnershipControlsRule) {
    /**
     * @internal
     */
    OwnershipControlsRule.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(OwnershipControlsRule || (OwnershipControlsRule = {}));
export var OwnershipControls;
(function (OwnershipControls) {
    /**
     * @internal
     */
    OwnershipControls.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(OwnershipControls || (OwnershipControls = {}));
export var GetBucketOwnershipControlsOutput;
(function (GetBucketOwnershipControlsOutput) {
    /**
     * @internal
     */
    GetBucketOwnershipControlsOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetBucketOwnershipControlsOutput || (GetBucketOwnershipControlsOutput = {}));
export var GetBucketOwnershipControlsRequest;
(function (GetBucketOwnershipControlsRequest) {
    /**
     * @internal
     */
    GetBucketOwnershipControlsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetBucketOwnershipControlsRequest || (GetBucketOwnershipControlsRequest = {}));
export var GetBucketPolicyOutput;
(function (GetBucketPolicyOutput) {
    /**
     * @internal
     */
    GetBucketPolicyOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetBucketPolicyOutput || (GetBucketPolicyOutput = {}));
export var GetBucketPolicyRequest;
(function (GetBucketPolicyRequest) {
    /**
     * @internal
     */
    GetBucketPolicyRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetBucketPolicyRequest || (GetBucketPolicyRequest = {}));
export var PolicyStatus;
(function (PolicyStatus) {
    /**
     * @internal
     */
    PolicyStatus.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PolicyStatus || (PolicyStatus = {}));
export var GetBucketPolicyStatusOutput;
(function (GetBucketPolicyStatusOutput) {
    /**
     * @internal
     */
    GetBucketPolicyStatusOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetBucketPolicyStatusOutput || (GetBucketPolicyStatusOutput = {}));
export var GetBucketPolicyStatusRequest;
(function (GetBucketPolicyStatusRequest) {
    /**
     * @internal
     */
    GetBucketPolicyStatusRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetBucketPolicyStatusRequest || (GetBucketPolicyStatusRequest = {}));
export var DeleteMarkerReplication;
(function (DeleteMarkerReplication) {
    /**
     * @internal
     */
    DeleteMarkerReplication.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteMarkerReplication || (DeleteMarkerReplication = {}));
export var EncryptionConfiguration;
(function (EncryptionConfiguration) {
    /**
     * @internal
     */
    EncryptionConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(EncryptionConfiguration || (EncryptionConfiguration = {}));
export var ReplicationTimeValue;
(function (ReplicationTimeValue) {
    /**
     * @internal
     */
    ReplicationTimeValue.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ReplicationTimeValue || (ReplicationTimeValue = {}));
export var Metrics;
(function (Metrics) {
    /**
     * @internal
     */
    Metrics.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Metrics || (Metrics = {}));
export var ReplicationTime;
(function (ReplicationTime) {
    /**
     * @internal
     */
    ReplicationTime.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ReplicationTime || (ReplicationTime = {}));
export var Destination;
(function (Destination) {
    /**
     * @internal
     */
    Destination.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Destination || (Destination = {}));
export var ExistingObjectReplication;
(function (ExistingObjectReplication) {
    /**
     * @internal
     */
    ExistingObjectReplication.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ExistingObjectReplication || (ExistingObjectReplication = {}));
export var ReplicationRuleAndOperator;
(function (ReplicationRuleAndOperator) {
    /**
     * @internal
     */
    ReplicationRuleAndOperator.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ReplicationRuleAndOperator || (ReplicationRuleAndOperator = {}));
export var ReplicationRuleFilter;
(function (ReplicationRuleFilter) {
    ReplicationRuleFilter.visit = function (value, visitor) {
        if (value.Prefix !== undefined)
            return visitor.Prefix(value.Prefix);
        if (value.Tag !== undefined)
            return visitor.Tag(value.Tag);
        if (value.And !== undefined)
            return visitor.And(value.And);
        return visitor._(value.$unknown[0], value.$unknown[1]);
    };
    /**
     * @internal
     */
    ReplicationRuleFilter.filterSensitiveLog = function (obj) {
        var _a;
        if (obj.Prefix !== undefined)
            return { Prefix: obj.Prefix };
        if (obj.Tag !== undefined)
            return { Tag: Tag.filterSensitiveLog(obj.Tag) };
        if (obj.And !== undefined)
            return { And: ReplicationRuleAndOperator.filterSensitiveLog(obj.And) };
        if (obj.$unknown !== undefined)
            return _a = {}, _a[obj.$unknown[0]] = "UNKNOWN", _a;
    };
})(ReplicationRuleFilter || (ReplicationRuleFilter = {}));
export var ReplicaModifications;
(function (ReplicaModifications) {
    /**
     * @internal
     */
    ReplicaModifications.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ReplicaModifications || (ReplicaModifications = {}));
export var SseKmsEncryptedObjects;
(function (SseKmsEncryptedObjects) {
    /**
     * @internal
     */
    SseKmsEncryptedObjects.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SseKmsEncryptedObjects || (SseKmsEncryptedObjects = {}));
export var SourceSelectionCriteria;
(function (SourceSelectionCriteria) {
    /**
     * @internal
     */
    SourceSelectionCriteria.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SourceSelectionCriteria || (SourceSelectionCriteria = {}));
export var ReplicationRule;
(function (ReplicationRule) {
    /**
     * @internal
     */
    ReplicationRule.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Filter && { Filter: ReplicationRuleFilter.filterSensitiveLog(obj.Filter) }))); };
})(ReplicationRule || (ReplicationRule = {}));
export var ReplicationConfiguration;
(function (ReplicationConfiguration) {
    /**
     * @internal
     */
    ReplicationConfiguration.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Rules && { Rules: obj.Rules.map(function (item) { return ReplicationRule.filterSensitiveLog(item); }) }))); };
})(ReplicationConfiguration || (ReplicationConfiguration = {}));
export var GetBucketReplicationOutput;
(function (GetBucketReplicationOutput) {
    /**
     * @internal
     */
    GetBucketReplicationOutput.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.ReplicationConfiguration && {
        ReplicationConfiguration: ReplicationConfiguration.filterSensitiveLog(obj.ReplicationConfiguration),
    }))); };
})(GetBucketReplicationOutput || (GetBucketReplicationOutput = {}));
export var GetBucketReplicationRequest;
(function (GetBucketReplicationRequest) {
    /**
     * @internal
     */
    GetBucketReplicationRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetBucketReplicationRequest || (GetBucketReplicationRequest = {}));
export var GetBucketRequestPaymentOutput;
(function (GetBucketRequestPaymentOutput) {
    /**
     * @internal
     */
    GetBucketRequestPaymentOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetBucketRequestPaymentOutput || (GetBucketRequestPaymentOutput = {}));
export var GetBucketRequestPaymentRequest;
(function (GetBucketRequestPaymentRequest) {
    /**
     * @internal
     */
    GetBucketRequestPaymentRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetBucketRequestPaymentRequest || (GetBucketRequestPaymentRequest = {}));
export var GetBucketTaggingOutput;
(function (GetBucketTaggingOutput) {
    /**
     * @internal
     */
    GetBucketTaggingOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetBucketTaggingOutput || (GetBucketTaggingOutput = {}));
export var GetBucketTaggingRequest;
(function (GetBucketTaggingRequest) {
    /**
     * @internal
     */
    GetBucketTaggingRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetBucketTaggingRequest || (GetBucketTaggingRequest = {}));
export var GetBucketVersioningOutput;
(function (GetBucketVersioningOutput) {
    /**
     * @internal
     */
    GetBucketVersioningOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetBucketVersioningOutput || (GetBucketVersioningOutput = {}));
export var GetBucketVersioningRequest;
(function (GetBucketVersioningRequest) {
    /**
     * @internal
     */
    GetBucketVersioningRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetBucketVersioningRequest || (GetBucketVersioningRequest = {}));
export var ErrorDocument;
(function (ErrorDocument) {
    /**
     * @internal
     */
    ErrorDocument.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ErrorDocument || (ErrorDocument = {}));
export var IndexDocument;
(function (IndexDocument) {
    /**
     * @internal
     */
    IndexDocument.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(IndexDocument || (IndexDocument = {}));
export var RedirectAllRequestsTo;
(function (RedirectAllRequestsTo) {
    /**
     * @internal
     */
    RedirectAllRequestsTo.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RedirectAllRequestsTo || (RedirectAllRequestsTo = {}));
export var Condition;
(function (Condition) {
    /**
     * @internal
     */
    Condition.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Condition || (Condition = {}));
export var Redirect;
(function (Redirect) {
    /**
     * @internal
     */
    Redirect.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Redirect || (Redirect = {}));
export var RoutingRule;
(function (RoutingRule) {
    /**
     * @internal
     */
    RoutingRule.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RoutingRule || (RoutingRule = {}));
export var GetBucketWebsiteOutput;
(function (GetBucketWebsiteOutput) {
    /**
     * @internal
     */
    GetBucketWebsiteOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetBucketWebsiteOutput || (GetBucketWebsiteOutput = {}));
export var GetBucketWebsiteRequest;
(function (GetBucketWebsiteRequest) {
    /**
     * @internal
     */
    GetBucketWebsiteRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetBucketWebsiteRequest || (GetBucketWebsiteRequest = {}));
export var GetObjectOutput;
(function (GetObjectOutput) {
    /**
     * @internal
     */
    GetObjectOutput.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.SSEKMSKeyId && { SSEKMSKeyId: SENSITIVE_STRING }))); };
})(GetObjectOutput || (GetObjectOutput = {}));
export var GetObjectRequest;
(function (GetObjectRequest) {
    /**
     * @internal
     */
    GetObjectRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.SSECustomerKey && { SSECustomerKey: SENSITIVE_STRING }))); };
})(GetObjectRequest || (GetObjectRequest = {}));
export var InvalidObjectState;
(function (InvalidObjectState) {
    /**
     * @internal
     */
    InvalidObjectState.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidObjectState || (InvalidObjectState = {}));
export var NoSuchKey;
(function (NoSuchKey) {
    /**
     * @internal
     */
    NoSuchKey.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(NoSuchKey || (NoSuchKey = {}));
export var GetObjectAclOutput;
(function (GetObjectAclOutput) {
    /**
     * @internal
     */
    GetObjectAclOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetObjectAclOutput || (GetObjectAclOutput = {}));
export var GetObjectAclRequest;
(function (GetObjectAclRequest) {
    /**
     * @internal
     */
    GetObjectAclRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetObjectAclRequest || (GetObjectAclRequest = {}));
export var ObjectLockLegalHold;
(function (ObjectLockLegalHold) {
    /**
     * @internal
     */
    ObjectLockLegalHold.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ObjectLockLegalHold || (ObjectLockLegalHold = {}));
export var GetObjectLegalHoldOutput;
(function (GetObjectLegalHoldOutput) {
    /**
     * @internal
     */
    GetObjectLegalHoldOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetObjectLegalHoldOutput || (GetObjectLegalHoldOutput = {}));
export var GetObjectLegalHoldRequest;
(function (GetObjectLegalHoldRequest) {
    /**
     * @internal
     */
    GetObjectLegalHoldRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetObjectLegalHoldRequest || (GetObjectLegalHoldRequest = {}));
export var DefaultRetention;
(function (DefaultRetention) {
    /**
     * @internal
     */
    DefaultRetention.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DefaultRetention || (DefaultRetention = {}));
export var ObjectLockRule;
(function (ObjectLockRule) {
    /**
     * @internal
     */
    ObjectLockRule.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ObjectLockRule || (ObjectLockRule = {}));
export var ObjectLockConfiguration;
(function (ObjectLockConfiguration) {
    /**
     * @internal
     */
    ObjectLockConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ObjectLockConfiguration || (ObjectLockConfiguration = {}));
export var GetObjectLockConfigurationOutput;
(function (GetObjectLockConfigurationOutput) {
    /**
     * @internal
     */
    GetObjectLockConfigurationOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetObjectLockConfigurationOutput || (GetObjectLockConfigurationOutput = {}));
export var GetObjectLockConfigurationRequest;
(function (GetObjectLockConfigurationRequest) {
    /**
     * @internal
     */
    GetObjectLockConfigurationRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetObjectLockConfigurationRequest || (GetObjectLockConfigurationRequest = {}));
export var ObjectLockRetention;
(function (ObjectLockRetention) {
    /**
     * @internal
     */
    ObjectLockRetention.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ObjectLockRetention || (ObjectLockRetention = {}));
export var GetObjectRetentionOutput;
(function (GetObjectRetentionOutput) {
    /**
     * @internal
     */
    GetObjectRetentionOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetObjectRetentionOutput || (GetObjectRetentionOutput = {}));
export var GetObjectRetentionRequest;
(function (GetObjectRetentionRequest) {
    /**
     * @internal
     */
    GetObjectRetentionRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetObjectRetentionRequest || (GetObjectRetentionRequest = {}));
export var GetObjectTaggingOutput;
(function (GetObjectTaggingOutput) {
    /**
     * @internal
     */
    GetObjectTaggingOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetObjectTaggingOutput || (GetObjectTaggingOutput = {}));
export var GetObjectTaggingRequest;
(function (GetObjectTaggingRequest) {
    /**
     * @internal
     */
    GetObjectTaggingRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetObjectTaggingRequest || (GetObjectTaggingRequest = {}));
export var GetObjectTorrentOutput;
(function (GetObjectTorrentOutput) {
    /**
     * @internal
     */
    GetObjectTorrentOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetObjectTorrentOutput || (GetObjectTorrentOutput = {}));
export var GetObjectTorrentRequest;
(function (GetObjectTorrentRequest) {
    /**
     * @internal
     */
    GetObjectTorrentRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetObjectTorrentRequest || (GetObjectTorrentRequest = {}));
export var PublicAccessBlockConfiguration;
(function (PublicAccessBlockConfiguration) {
    /**
     * @internal
     */
    PublicAccessBlockConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PublicAccessBlockConfiguration || (PublicAccessBlockConfiguration = {}));
export var GetPublicAccessBlockOutput;
(function (GetPublicAccessBlockOutput) {
    /**
     * @internal
     */
    GetPublicAccessBlockOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetPublicAccessBlockOutput || (GetPublicAccessBlockOutput = {}));
export var GetPublicAccessBlockRequest;
(function (GetPublicAccessBlockRequest) {
    /**
     * @internal
     */
    GetPublicAccessBlockRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetPublicAccessBlockRequest || (GetPublicAccessBlockRequest = {}));
export var HeadBucketRequest;
(function (HeadBucketRequest) {
    /**
     * @internal
     */
    HeadBucketRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(HeadBucketRequest || (HeadBucketRequest = {}));
export var NotFound;
(function (NotFound) {
    /**
     * @internal
     */
    NotFound.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(NotFound || (NotFound = {}));
export var HeadObjectOutput;
(function (HeadObjectOutput) {
    /**
     * @internal
     */
    HeadObjectOutput.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.SSEKMSKeyId && { SSEKMSKeyId: SENSITIVE_STRING }))); };
})(HeadObjectOutput || (HeadObjectOutput = {}));
export var HeadObjectRequest;
(function (HeadObjectRequest) {
    /**
     * @internal
     */
    HeadObjectRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.SSECustomerKey && { SSECustomerKey: SENSITIVE_STRING }))); };
})(HeadObjectRequest || (HeadObjectRequest = {}));
export var ListBucketAnalyticsConfigurationsOutput;
(function (ListBucketAnalyticsConfigurationsOutput) {
    /**
     * @internal
     */
    ListBucketAnalyticsConfigurationsOutput.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.AnalyticsConfigurationList && {
        AnalyticsConfigurationList: obj.AnalyticsConfigurationList.map(function (item) {
            return AnalyticsConfiguration.filterSensitiveLog(item);
        }),
    }))); };
})(ListBucketAnalyticsConfigurationsOutput || (ListBucketAnalyticsConfigurationsOutput = {}));
export var ListBucketAnalyticsConfigurationsRequest;
(function (ListBucketAnalyticsConfigurationsRequest) {
    /**
     * @internal
     */
    ListBucketAnalyticsConfigurationsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListBucketAnalyticsConfigurationsRequest || (ListBucketAnalyticsConfigurationsRequest = {}));
export var ListBucketIntelligentTieringConfigurationsOutput;
(function (ListBucketIntelligentTieringConfigurationsOutput) {
    /**
     * @internal
     */
    ListBucketIntelligentTieringConfigurationsOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListBucketIntelligentTieringConfigurationsOutput || (ListBucketIntelligentTieringConfigurationsOutput = {}));
export var ListBucketIntelligentTieringConfigurationsRequest;
(function (ListBucketIntelligentTieringConfigurationsRequest) {
    /**
     * @internal
     */
    ListBucketIntelligentTieringConfigurationsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListBucketIntelligentTieringConfigurationsRequest || (ListBucketIntelligentTieringConfigurationsRequest = {}));
export var ListBucketInventoryConfigurationsOutput;
(function (ListBucketInventoryConfigurationsOutput) {
    /**
     * @internal
     */
    ListBucketInventoryConfigurationsOutput.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.InventoryConfigurationList && {
        InventoryConfigurationList: obj.InventoryConfigurationList.map(function (item) {
            return InventoryConfiguration.filterSensitiveLog(item);
        }),
    }))); };
})(ListBucketInventoryConfigurationsOutput || (ListBucketInventoryConfigurationsOutput = {}));
export var ListBucketInventoryConfigurationsRequest;
(function (ListBucketInventoryConfigurationsRequest) {
    /**
     * @internal
     */
    ListBucketInventoryConfigurationsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListBucketInventoryConfigurationsRequest || (ListBucketInventoryConfigurationsRequest = {}));
export var ListBucketMetricsConfigurationsOutput;
(function (ListBucketMetricsConfigurationsOutput) {
    /**
     * @internal
     */
    ListBucketMetricsConfigurationsOutput.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.MetricsConfigurationList && {
        MetricsConfigurationList: obj.MetricsConfigurationList.map(function (item) {
            return MetricsConfiguration.filterSensitiveLog(item);
        }),
    }))); };
})(ListBucketMetricsConfigurationsOutput || (ListBucketMetricsConfigurationsOutput = {}));
export var ListBucketMetricsConfigurationsRequest;
(function (ListBucketMetricsConfigurationsRequest) {
    /**
     * @internal
     */
    ListBucketMetricsConfigurationsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListBucketMetricsConfigurationsRequest || (ListBucketMetricsConfigurationsRequest = {}));
export var Bucket;
(function (Bucket) {
    /**
     * @internal
     */
    Bucket.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Bucket || (Bucket = {}));
export var ListBucketsOutput;
(function (ListBucketsOutput) {
    /**
     * @internal
     */
    ListBucketsOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListBucketsOutput || (ListBucketsOutput = {}));
export var CommonPrefix;
(function (CommonPrefix) {
    /**
     * @internal
     */
    CommonPrefix.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CommonPrefix || (CommonPrefix = {}));
export var Initiator;
(function (Initiator) {
    /**
     * @internal
     */
    Initiator.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Initiator || (Initiator = {}));
export var MultipartUpload;
(function (MultipartUpload) {
    /**
     * @internal
     */
    MultipartUpload.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(MultipartUpload || (MultipartUpload = {}));
export var ListMultipartUploadsOutput;
(function (ListMultipartUploadsOutput) {
    /**
     * @internal
     */
    ListMultipartUploadsOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListMultipartUploadsOutput || (ListMultipartUploadsOutput = {}));
export var ListMultipartUploadsRequest;
(function (ListMultipartUploadsRequest) {
    /**
     * @internal
     */
    ListMultipartUploadsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListMultipartUploadsRequest || (ListMultipartUploadsRequest = {}));
export var _Object;
(function (_Object) {
    /**
     * @internal
     */
    _Object.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(_Object || (_Object = {}));
export var ListObjectsOutput;
(function (ListObjectsOutput) {
    /**
     * @internal
     */
    ListObjectsOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListObjectsOutput || (ListObjectsOutput = {}));
export var ListObjectsRequest;
(function (ListObjectsRequest) {
    /**
     * @internal
     */
    ListObjectsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListObjectsRequest || (ListObjectsRequest = {}));
export var NoSuchBucket;
(function (NoSuchBucket) {
    /**
     * @internal
     */
    NoSuchBucket.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(NoSuchBucket || (NoSuchBucket = {}));
export var ListObjectsV2Output;
(function (ListObjectsV2Output) {
    /**
     * @internal
     */
    ListObjectsV2Output.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListObjectsV2Output || (ListObjectsV2Output = {}));
export var ListObjectsV2Request;
(function (ListObjectsV2Request) {
    /**
     * @internal
     */
    ListObjectsV2Request.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListObjectsV2Request || (ListObjectsV2Request = {}));
export var DeleteMarkerEntry;
(function (DeleteMarkerEntry) {
    /**
     * @internal
     */
    DeleteMarkerEntry.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteMarkerEntry || (DeleteMarkerEntry = {}));
export var ObjectVersion;
(function (ObjectVersion) {
    /**
     * @internal
     */
    ObjectVersion.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ObjectVersion || (ObjectVersion = {}));
export var ListObjectVersionsOutput;
(function (ListObjectVersionsOutput) {
    /**
     * @internal
     */
    ListObjectVersionsOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListObjectVersionsOutput || (ListObjectVersionsOutput = {}));
export var ListObjectVersionsRequest;
(function (ListObjectVersionsRequest) {
    /**
     * @internal
     */
    ListObjectVersionsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListObjectVersionsRequest || (ListObjectVersionsRequest = {}));
export var Part;
(function (Part) {
    /**
     * @internal
     */
    Part.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Part || (Part = {}));
export var ListPartsOutput;
(function (ListPartsOutput) {
    /**
     * @internal
     */
    ListPartsOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListPartsOutput || (ListPartsOutput = {}));
export var ListPartsRequest;
(function (ListPartsRequest) {
    /**
     * @internal
     */
    ListPartsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListPartsRequest || (ListPartsRequest = {}));
export var PutBucketAccelerateConfigurationRequest;
(function (PutBucketAccelerateConfigurationRequest) {
    /**
     * @internal
     */
    PutBucketAccelerateConfigurationRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutBucketAccelerateConfigurationRequest || (PutBucketAccelerateConfigurationRequest = {}));
export var PutBucketAclRequest;
(function (PutBucketAclRequest) {
    /**
     * @internal
     */
    PutBucketAclRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutBucketAclRequest || (PutBucketAclRequest = {}));
export var PutBucketAnalyticsConfigurationRequest;
(function (PutBucketAnalyticsConfigurationRequest) {
    /**
     * @internal
     */
    PutBucketAnalyticsConfigurationRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.AnalyticsConfiguration && {
        AnalyticsConfiguration: AnalyticsConfiguration.filterSensitiveLog(obj.AnalyticsConfiguration),
    }))); };
})(PutBucketAnalyticsConfigurationRequest || (PutBucketAnalyticsConfigurationRequest = {}));
export var CORSConfiguration;
(function (CORSConfiguration) {
    /**
     * @internal
     */
    CORSConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CORSConfiguration || (CORSConfiguration = {}));
export var PutBucketCorsRequest;
(function (PutBucketCorsRequest) {
    /**
     * @internal
     */
    PutBucketCorsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutBucketCorsRequest || (PutBucketCorsRequest = {}));
export var PutBucketEncryptionRequest;
(function (PutBucketEncryptionRequest) {
    /**
     * @internal
     */
    PutBucketEncryptionRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.ServerSideEncryptionConfiguration && {
        ServerSideEncryptionConfiguration: ServerSideEncryptionConfiguration.filterSensitiveLog(obj.ServerSideEncryptionConfiguration),
    }))); };
})(PutBucketEncryptionRequest || (PutBucketEncryptionRequest = {}));
export var PutBucketIntelligentTieringConfigurationRequest;
(function (PutBucketIntelligentTieringConfigurationRequest) {
    /**
     * @internal
     */
    PutBucketIntelligentTieringConfigurationRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutBucketIntelligentTieringConfigurationRequest || (PutBucketIntelligentTieringConfigurationRequest = {}));
export var PutBucketInventoryConfigurationRequest;
(function (PutBucketInventoryConfigurationRequest) {
    /**
     * @internal
     */
    PutBucketInventoryConfigurationRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.InventoryConfiguration && {
        InventoryConfiguration: InventoryConfiguration.filterSensitiveLog(obj.InventoryConfiguration),
    }))); };
})(PutBucketInventoryConfigurationRequest || (PutBucketInventoryConfigurationRequest = {}));
export var BucketLifecycleConfiguration;
(function (BucketLifecycleConfiguration) {
    /**
     * @internal
     */
    BucketLifecycleConfiguration.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Rules && { Rules: obj.Rules.map(function (item) { return LifecycleRule.filterSensitiveLog(item); }) }))); };
})(BucketLifecycleConfiguration || (BucketLifecycleConfiguration = {}));
export var PutBucketLifecycleConfigurationRequest;
(function (PutBucketLifecycleConfigurationRequest) {
    /**
     * @internal
     */
    PutBucketLifecycleConfigurationRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.LifecycleConfiguration && {
        LifecycleConfiguration: BucketLifecycleConfiguration.filterSensitiveLog(obj.LifecycleConfiguration),
    }))); };
})(PutBucketLifecycleConfigurationRequest || (PutBucketLifecycleConfigurationRequest = {}));
export var BucketLoggingStatus;
(function (BucketLoggingStatus) {
    /**
     * @internal
     */
    BucketLoggingStatus.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BucketLoggingStatus || (BucketLoggingStatus = {}));
export var PutBucketLoggingRequest;
(function (PutBucketLoggingRequest) {
    /**
     * @internal
     */
    PutBucketLoggingRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutBucketLoggingRequest || (PutBucketLoggingRequest = {}));
export var PutBucketMetricsConfigurationRequest;
(function (PutBucketMetricsConfigurationRequest) {
    /**
     * @internal
     */
    PutBucketMetricsConfigurationRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.MetricsConfiguration && {
        MetricsConfiguration: MetricsConfiguration.filterSensitiveLog(obj.MetricsConfiguration),
    }))); };
})(PutBucketMetricsConfigurationRequest || (PutBucketMetricsConfigurationRequest = {}));
export var PutBucketNotificationConfigurationRequest;
(function (PutBucketNotificationConfigurationRequest) {
    /**
     * @internal
     */
    PutBucketNotificationConfigurationRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutBucketNotificationConfigurationRequest || (PutBucketNotificationConfigurationRequest = {}));
export var PutBucketOwnershipControlsRequest;
(function (PutBucketOwnershipControlsRequest) {
    /**
     * @internal
     */
    PutBucketOwnershipControlsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutBucketOwnershipControlsRequest || (PutBucketOwnershipControlsRequest = {}));
export var PutBucketPolicyRequest;
(function (PutBucketPolicyRequest) {
    /**
     * @internal
     */
    PutBucketPolicyRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutBucketPolicyRequest || (PutBucketPolicyRequest = {}));
export var PutBucketReplicationRequest;
(function (PutBucketReplicationRequest) {
    /**
     * @internal
     */
    PutBucketReplicationRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.ReplicationConfiguration && {
        ReplicationConfiguration: ReplicationConfiguration.filterSensitiveLog(obj.ReplicationConfiguration),
    }))); };
})(PutBucketReplicationRequest || (PutBucketReplicationRequest = {}));
export var RequestPaymentConfiguration;
(function (RequestPaymentConfiguration) {
    /**
     * @internal
     */
    RequestPaymentConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RequestPaymentConfiguration || (RequestPaymentConfiguration = {}));
export var PutBucketRequestPaymentRequest;
(function (PutBucketRequestPaymentRequest) {
    /**
     * @internal
     */
    PutBucketRequestPaymentRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutBucketRequestPaymentRequest || (PutBucketRequestPaymentRequest = {}));
export var Tagging;
(function (Tagging) {
    /**
     * @internal
     */
    Tagging.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Tagging || (Tagging = {}));
export var PutBucketTaggingRequest;
(function (PutBucketTaggingRequest) {
    /**
     * @internal
     */
    PutBucketTaggingRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutBucketTaggingRequest || (PutBucketTaggingRequest = {}));
export var VersioningConfiguration;
(function (VersioningConfiguration) {
    /**
     * @internal
     */
    VersioningConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(VersioningConfiguration || (VersioningConfiguration = {}));
export var PutBucketVersioningRequest;
(function (PutBucketVersioningRequest) {
    /**
     * @internal
     */
    PutBucketVersioningRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutBucketVersioningRequest || (PutBucketVersioningRequest = {}));
export var WebsiteConfiguration;
(function (WebsiteConfiguration) {
    /**
     * @internal
     */
    WebsiteConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(WebsiteConfiguration || (WebsiteConfiguration = {}));
export var PutBucketWebsiteRequest;
(function (PutBucketWebsiteRequest) {
    /**
     * @internal
     */
    PutBucketWebsiteRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutBucketWebsiteRequest || (PutBucketWebsiteRequest = {}));
export var PutObjectOutput;
(function (PutObjectOutput) {
    /**
     * @internal
     */
    PutObjectOutput.filterSensitiveLog = function (obj) { return (__assign(__assign(__assign({}, obj), (obj.SSEKMSKeyId && { SSEKMSKeyId: SENSITIVE_STRING })), (obj.SSEKMSEncryptionContext && { SSEKMSEncryptionContext: SENSITIVE_STRING }))); };
})(PutObjectOutput || (PutObjectOutput = {}));
export var PutObjectRequest;
(function (PutObjectRequest) {
    /**
     * @internal
     */
    PutObjectRequest.filterSensitiveLog = function (obj) { return (__assign(__assign(__assign(__assign({}, obj), (obj.SSECustomerKey && { SSECustomerKey: SENSITIVE_STRING })), (obj.SSEKMSKeyId && { SSEKMSKeyId: SENSITIVE_STRING })), (obj.SSEKMSEncryptionContext && { SSEKMSEncryptionContext: SENSITIVE_STRING }))); };
})(PutObjectRequest || (PutObjectRequest = {}));
export var PutObjectAclOutput;
(function (PutObjectAclOutput) {
    /**
     * @internal
     */
    PutObjectAclOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutObjectAclOutput || (PutObjectAclOutput = {}));
export var PutObjectAclRequest;
(function (PutObjectAclRequest) {
    /**
     * @internal
     */
    PutObjectAclRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutObjectAclRequest || (PutObjectAclRequest = {}));
export var PutObjectLegalHoldOutput;
(function (PutObjectLegalHoldOutput) {
    /**
     * @internal
     */
    PutObjectLegalHoldOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutObjectLegalHoldOutput || (PutObjectLegalHoldOutput = {}));
export var PutObjectLegalHoldRequest;
(function (PutObjectLegalHoldRequest) {
    /**
     * @internal
     */
    PutObjectLegalHoldRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutObjectLegalHoldRequest || (PutObjectLegalHoldRequest = {}));
export var PutObjectLockConfigurationOutput;
(function (PutObjectLockConfigurationOutput) {
    /**
     * @internal
     */
    PutObjectLockConfigurationOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutObjectLockConfigurationOutput || (PutObjectLockConfigurationOutput = {}));
export var PutObjectLockConfigurationRequest;
(function (PutObjectLockConfigurationRequest) {
    /**
     * @internal
     */
    PutObjectLockConfigurationRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutObjectLockConfigurationRequest || (PutObjectLockConfigurationRequest = {}));
export var PutObjectRetentionOutput;
(function (PutObjectRetentionOutput) {
    /**
     * @internal
     */
    PutObjectRetentionOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutObjectRetentionOutput || (PutObjectRetentionOutput = {}));
export var PutObjectRetentionRequest;
(function (PutObjectRetentionRequest) {
    /**
     * @internal
     */
    PutObjectRetentionRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutObjectRetentionRequest || (PutObjectRetentionRequest = {}));
export var PutObjectTaggingOutput;
(function (PutObjectTaggingOutput) {
    /**
     * @internal
     */
    PutObjectTaggingOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutObjectTaggingOutput || (PutObjectTaggingOutput = {}));
export var PutObjectTaggingRequest;
(function (PutObjectTaggingRequest) {
    /**
     * @internal
     */
    PutObjectTaggingRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutObjectTaggingRequest || (PutObjectTaggingRequest = {}));
export var PutPublicAccessBlockRequest;
(function (PutPublicAccessBlockRequest) {
    /**
     * @internal
     */
    PutPublicAccessBlockRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutPublicAccessBlockRequest || (PutPublicAccessBlockRequest = {}));
export var ObjectAlreadyInActiveTierError;
(function (ObjectAlreadyInActiveTierError) {
    /**
     * @internal
     */
    ObjectAlreadyInActiveTierError.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ObjectAlreadyInActiveTierError || (ObjectAlreadyInActiveTierError = {}));
export var RestoreObjectOutput;
(function (RestoreObjectOutput) {
    /**
     * @internal
     */
    RestoreObjectOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RestoreObjectOutput || (RestoreObjectOutput = {}));
export var GlacierJobParameters;
(function (GlacierJobParameters) {
    /**
     * @internal
     */
    GlacierJobParameters.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GlacierJobParameters || (GlacierJobParameters = {}));
//# sourceMappingURL=models_0.js.map