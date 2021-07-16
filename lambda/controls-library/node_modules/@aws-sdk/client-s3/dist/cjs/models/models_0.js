"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetBucketAccelerateConfigurationOutput = exports.DeletePublicAccessBlockRequest = exports.DeleteObjectTaggingRequest = exports.DeleteObjectTaggingOutput = exports.DeleteObjectsRequest = exports.Delete = exports.ObjectIdentifier = exports.DeleteObjectsOutput = exports._Error = exports.DeletedObject = exports.DeleteObjectRequest = exports.DeleteObjectOutput = exports.DeleteBucketWebsiteRequest = exports.DeleteBucketTaggingRequest = exports.DeleteBucketReplicationRequest = exports.DeleteBucketPolicyRequest = exports.DeleteBucketOwnershipControlsRequest = exports.DeleteBucketMetricsConfigurationRequest = exports.DeleteBucketLifecycleRequest = exports.DeleteBucketInventoryConfigurationRequest = exports.DeleteBucketIntelligentTieringConfigurationRequest = exports.DeleteBucketEncryptionRequest = exports.DeleteBucketCorsRequest = exports.DeleteBucketAnalyticsConfigurationRequest = exports.DeleteBucketRequest = exports.CreateMultipartUploadRequest = exports.CreateMultipartUploadOutput = exports.CreateBucketRequest = exports.CreateBucketConfiguration = exports.CreateBucketOutput = exports.BucketAlreadyOwnedByYou = exports.BucketAlreadyExists = exports.ObjectNotInActiveTierError = exports.CopyObjectRequest = exports.CopyObjectOutput = exports.CopyObjectResult = exports.CompleteMultipartUploadRequest = exports.CompletedMultipartUpload = exports.CompletedPart = exports.CompleteMultipartUploadOutput = exports.AccessControlTranslation = exports.AccessControlPolicy = exports.Owner = exports.Grant = exports.Grantee = exports.AccelerateConfiguration = exports.NoSuchUpload = exports.AbortMultipartUploadRequest = exports.AbortMultipartUploadOutput = exports.AbortIncompleteMultipartUpload = void 0;
exports.LoggingEnabled = exports.TargetGrant = exports.GetBucketLocationRequest = exports.GetBucketLocationOutput = exports.GetBucketLifecycleConfigurationRequest = exports.GetBucketLifecycleConfigurationOutput = exports.LifecycleRule = exports.Transition = exports.NoncurrentVersionTransition = exports.NoncurrentVersionExpiration = exports.LifecycleRuleFilter = exports.LifecycleRuleAndOperator = exports.LifecycleExpiration = exports.GetBucketInventoryConfigurationRequest = exports.GetBucketInventoryConfigurationOutput = exports.InventoryConfiguration = exports.InventorySchedule = exports.InventoryFilter = exports.InventoryDestination = exports.InventoryS3BucketDestination = exports.InventoryEncryption = exports.SSES3 = exports.SSEKMS = exports.GetBucketIntelligentTieringConfigurationRequest = exports.GetBucketIntelligentTieringConfigurationOutput = exports.IntelligentTieringConfiguration = exports.Tiering = exports.IntelligentTieringFilter = exports.IntelligentTieringAndOperator = exports.GetBucketEncryptionRequest = exports.GetBucketEncryptionOutput = exports.ServerSideEncryptionConfiguration = exports.ServerSideEncryptionRule = exports.ServerSideEncryptionByDefault = exports.GetBucketCorsRequest = exports.GetBucketCorsOutput = exports.CORSRule = exports.GetBucketAnalyticsConfigurationRequest = exports.GetBucketAnalyticsConfigurationOutput = exports.AnalyticsConfiguration = exports.StorageClassAnalysis = exports.StorageClassAnalysisDataExport = exports.AnalyticsExportDestination = exports.AnalyticsS3BucketDestination = exports.AnalyticsFilter = exports.AnalyticsAndOperator = exports.Tag = exports.GetBucketAclRequest = exports.GetBucketAclOutput = exports.GetBucketAccelerateConfigurationRequest = void 0;
exports.Condition = exports.RedirectAllRequestsTo = exports.IndexDocument = exports.ErrorDocument = exports.GetBucketVersioningRequest = exports.GetBucketVersioningOutput = exports.GetBucketTaggingRequest = exports.GetBucketTaggingOutput = exports.GetBucketRequestPaymentRequest = exports.GetBucketRequestPaymentOutput = exports.GetBucketReplicationRequest = exports.GetBucketReplicationOutput = exports.ReplicationConfiguration = exports.ReplicationRule = exports.SourceSelectionCriteria = exports.SseKmsEncryptedObjects = exports.ReplicaModifications = exports.ReplicationRuleFilter = exports.ReplicationRuleAndOperator = exports.ExistingObjectReplication = exports.Destination = exports.ReplicationTime = exports.Metrics = exports.ReplicationTimeValue = exports.EncryptionConfiguration = exports.DeleteMarkerReplication = exports.GetBucketPolicyStatusRequest = exports.GetBucketPolicyStatusOutput = exports.PolicyStatus = exports.GetBucketPolicyRequest = exports.GetBucketPolicyOutput = exports.GetBucketOwnershipControlsRequest = exports.GetBucketOwnershipControlsOutput = exports.OwnershipControls = exports.OwnershipControlsRule = exports.NotificationConfiguration = exports.TopicConfiguration = exports.QueueConfiguration = exports.LambdaFunctionConfiguration = exports.NotificationConfigurationFilter = exports.S3KeyFilter = exports.FilterRule = exports.GetBucketNotificationConfigurationRequest = exports.GetBucketMetricsConfigurationRequest = exports.GetBucketMetricsConfigurationOutput = exports.MetricsConfiguration = exports.MetricsFilter = exports.MetricsAndOperator = exports.GetBucketLoggingRequest = exports.GetBucketLoggingOutput = void 0;
exports.ListObjectsRequest = exports.ListObjectsOutput = exports._Object = exports.ListMultipartUploadsRequest = exports.ListMultipartUploadsOutput = exports.MultipartUpload = exports.Initiator = exports.CommonPrefix = exports.ListBucketsOutput = exports.Bucket = exports.ListBucketMetricsConfigurationsRequest = exports.ListBucketMetricsConfigurationsOutput = exports.ListBucketInventoryConfigurationsRequest = exports.ListBucketInventoryConfigurationsOutput = exports.ListBucketIntelligentTieringConfigurationsRequest = exports.ListBucketIntelligentTieringConfigurationsOutput = exports.ListBucketAnalyticsConfigurationsRequest = exports.ListBucketAnalyticsConfigurationsOutput = exports.HeadObjectRequest = exports.HeadObjectOutput = exports.NotFound = exports.HeadBucketRequest = exports.GetPublicAccessBlockRequest = exports.GetPublicAccessBlockOutput = exports.PublicAccessBlockConfiguration = exports.GetObjectTorrentRequest = exports.GetObjectTorrentOutput = exports.GetObjectTaggingRequest = exports.GetObjectTaggingOutput = exports.GetObjectRetentionRequest = exports.GetObjectRetentionOutput = exports.ObjectLockRetention = exports.GetObjectLockConfigurationRequest = exports.GetObjectLockConfigurationOutput = exports.ObjectLockConfiguration = exports.ObjectLockRule = exports.DefaultRetention = exports.GetObjectLegalHoldRequest = exports.GetObjectLegalHoldOutput = exports.ObjectLockLegalHold = exports.GetObjectAclRequest = exports.GetObjectAclOutput = exports.NoSuchKey = exports.InvalidObjectState = exports.GetObjectRequest = exports.GetObjectOutput = exports.GetBucketWebsiteRequest = exports.GetBucketWebsiteOutput = exports.RoutingRule = exports.Redirect = void 0;
exports.RestoreObjectOutput = exports.ObjectAlreadyInActiveTierError = exports.PutPublicAccessBlockRequest = exports.PutObjectTaggingRequest = exports.PutObjectTaggingOutput = exports.PutObjectRetentionRequest = exports.PutObjectRetentionOutput = exports.PutObjectLockConfigurationRequest = exports.PutObjectLockConfigurationOutput = exports.PutObjectLegalHoldRequest = exports.PutObjectLegalHoldOutput = exports.PutObjectAclRequest = exports.PutObjectAclOutput = exports.PutObjectRequest = exports.PutObjectOutput = exports.PutBucketWebsiteRequest = exports.WebsiteConfiguration = exports.PutBucketVersioningRequest = exports.VersioningConfiguration = exports.PutBucketTaggingRequest = exports.Tagging = exports.PutBucketRequestPaymentRequest = exports.RequestPaymentConfiguration = exports.PutBucketReplicationRequest = exports.PutBucketPolicyRequest = exports.PutBucketOwnershipControlsRequest = exports.PutBucketNotificationConfigurationRequest = exports.PutBucketMetricsConfigurationRequest = exports.PutBucketLoggingRequest = exports.BucketLoggingStatus = exports.PutBucketLifecycleConfigurationRequest = exports.BucketLifecycleConfiguration = exports.PutBucketInventoryConfigurationRequest = exports.PutBucketIntelligentTieringConfigurationRequest = exports.PutBucketEncryptionRequest = exports.PutBucketCorsRequest = exports.CORSConfiguration = exports.PutBucketAnalyticsConfigurationRequest = exports.PutBucketAclRequest = exports.PutBucketAccelerateConfigurationRequest = exports.ListPartsRequest = exports.ListPartsOutput = exports.Part = exports.ListObjectVersionsRequest = exports.ListObjectVersionsOutput = exports.ObjectVersion = exports.DeleteMarkerEntry = exports.ListObjectsV2Request = exports.ListObjectsV2Output = exports.NoSuchBucket = void 0;
exports.GlacierJobParameters = void 0;
const smithy_client_1 = require("@aws-sdk/smithy-client");
var AbortIncompleteMultipartUpload;
(function (AbortIncompleteMultipartUpload) {
    /**
     * @internal
     */
    AbortIncompleteMultipartUpload.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AbortIncompleteMultipartUpload = exports.AbortIncompleteMultipartUpload || (exports.AbortIncompleteMultipartUpload = {}));
var AbortMultipartUploadOutput;
(function (AbortMultipartUploadOutput) {
    /**
     * @internal
     */
    AbortMultipartUploadOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AbortMultipartUploadOutput = exports.AbortMultipartUploadOutput || (exports.AbortMultipartUploadOutput = {}));
var AbortMultipartUploadRequest;
(function (AbortMultipartUploadRequest) {
    /**
     * @internal
     */
    AbortMultipartUploadRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AbortMultipartUploadRequest = exports.AbortMultipartUploadRequest || (exports.AbortMultipartUploadRequest = {}));
var NoSuchUpload;
(function (NoSuchUpload) {
    /**
     * @internal
     */
    NoSuchUpload.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NoSuchUpload = exports.NoSuchUpload || (exports.NoSuchUpload = {}));
var AccelerateConfiguration;
(function (AccelerateConfiguration) {
    /**
     * @internal
     */
    AccelerateConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AccelerateConfiguration = exports.AccelerateConfiguration || (exports.AccelerateConfiguration = {}));
var Grantee;
(function (Grantee) {
    /**
     * @internal
     */
    Grantee.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Grantee = exports.Grantee || (exports.Grantee = {}));
var Grant;
(function (Grant) {
    /**
     * @internal
     */
    Grant.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Grant = exports.Grant || (exports.Grant = {}));
var Owner;
(function (Owner) {
    /**
     * @internal
     */
    Owner.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Owner = exports.Owner || (exports.Owner = {}));
var AccessControlPolicy;
(function (AccessControlPolicy) {
    /**
     * @internal
     */
    AccessControlPolicy.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AccessControlPolicy = exports.AccessControlPolicy || (exports.AccessControlPolicy = {}));
var AccessControlTranslation;
(function (AccessControlTranslation) {
    /**
     * @internal
     */
    AccessControlTranslation.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AccessControlTranslation = exports.AccessControlTranslation || (exports.AccessControlTranslation = {}));
var CompleteMultipartUploadOutput;
(function (CompleteMultipartUploadOutput) {
    /**
     * @internal
     */
    CompleteMultipartUploadOutput.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.SSEKMSKeyId && { SSEKMSKeyId: smithy_client_1.SENSITIVE_STRING }),
    });
})(CompleteMultipartUploadOutput = exports.CompleteMultipartUploadOutput || (exports.CompleteMultipartUploadOutput = {}));
var CompletedPart;
(function (CompletedPart) {
    /**
     * @internal
     */
    CompletedPart.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CompletedPart = exports.CompletedPart || (exports.CompletedPart = {}));
var CompletedMultipartUpload;
(function (CompletedMultipartUpload) {
    /**
     * @internal
     */
    CompletedMultipartUpload.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CompletedMultipartUpload = exports.CompletedMultipartUpload || (exports.CompletedMultipartUpload = {}));
var CompleteMultipartUploadRequest;
(function (CompleteMultipartUploadRequest) {
    /**
     * @internal
     */
    CompleteMultipartUploadRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CompleteMultipartUploadRequest = exports.CompleteMultipartUploadRequest || (exports.CompleteMultipartUploadRequest = {}));
var CopyObjectResult;
(function (CopyObjectResult) {
    /**
     * @internal
     */
    CopyObjectResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CopyObjectResult = exports.CopyObjectResult || (exports.CopyObjectResult = {}));
var CopyObjectOutput;
(function (CopyObjectOutput) {
    /**
     * @internal
     */
    CopyObjectOutput.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.SSEKMSKeyId && { SSEKMSKeyId: smithy_client_1.SENSITIVE_STRING }),
        ...(obj.SSEKMSEncryptionContext && { SSEKMSEncryptionContext: smithy_client_1.SENSITIVE_STRING }),
    });
})(CopyObjectOutput = exports.CopyObjectOutput || (exports.CopyObjectOutput = {}));
var CopyObjectRequest;
(function (CopyObjectRequest) {
    /**
     * @internal
     */
    CopyObjectRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.SSECustomerKey && { SSECustomerKey: smithy_client_1.SENSITIVE_STRING }),
        ...(obj.SSEKMSKeyId && { SSEKMSKeyId: smithy_client_1.SENSITIVE_STRING }),
        ...(obj.SSEKMSEncryptionContext && { SSEKMSEncryptionContext: smithy_client_1.SENSITIVE_STRING }),
        ...(obj.CopySourceSSECustomerKey && { CopySourceSSECustomerKey: smithy_client_1.SENSITIVE_STRING }),
    });
})(CopyObjectRequest = exports.CopyObjectRequest || (exports.CopyObjectRequest = {}));
var ObjectNotInActiveTierError;
(function (ObjectNotInActiveTierError) {
    /**
     * @internal
     */
    ObjectNotInActiveTierError.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ObjectNotInActiveTierError = exports.ObjectNotInActiveTierError || (exports.ObjectNotInActiveTierError = {}));
var BucketAlreadyExists;
(function (BucketAlreadyExists) {
    /**
     * @internal
     */
    BucketAlreadyExists.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BucketAlreadyExists = exports.BucketAlreadyExists || (exports.BucketAlreadyExists = {}));
var BucketAlreadyOwnedByYou;
(function (BucketAlreadyOwnedByYou) {
    /**
     * @internal
     */
    BucketAlreadyOwnedByYou.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BucketAlreadyOwnedByYou = exports.BucketAlreadyOwnedByYou || (exports.BucketAlreadyOwnedByYou = {}));
var CreateBucketOutput;
(function (CreateBucketOutput) {
    /**
     * @internal
     */
    CreateBucketOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateBucketOutput = exports.CreateBucketOutput || (exports.CreateBucketOutput = {}));
var CreateBucketConfiguration;
(function (CreateBucketConfiguration) {
    /**
     * @internal
     */
    CreateBucketConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateBucketConfiguration = exports.CreateBucketConfiguration || (exports.CreateBucketConfiguration = {}));
var CreateBucketRequest;
(function (CreateBucketRequest) {
    /**
     * @internal
     */
    CreateBucketRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateBucketRequest = exports.CreateBucketRequest || (exports.CreateBucketRequest = {}));
var CreateMultipartUploadOutput;
(function (CreateMultipartUploadOutput) {
    /**
     * @internal
     */
    CreateMultipartUploadOutput.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.SSEKMSKeyId && { SSEKMSKeyId: smithy_client_1.SENSITIVE_STRING }),
        ...(obj.SSEKMSEncryptionContext && { SSEKMSEncryptionContext: smithy_client_1.SENSITIVE_STRING }),
    });
})(CreateMultipartUploadOutput = exports.CreateMultipartUploadOutput || (exports.CreateMultipartUploadOutput = {}));
var CreateMultipartUploadRequest;
(function (CreateMultipartUploadRequest) {
    /**
     * @internal
     */
    CreateMultipartUploadRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.SSECustomerKey && { SSECustomerKey: smithy_client_1.SENSITIVE_STRING }),
        ...(obj.SSEKMSKeyId && { SSEKMSKeyId: smithy_client_1.SENSITIVE_STRING }),
        ...(obj.SSEKMSEncryptionContext && { SSEKMSEncryptionContext: smithy_client_1.SENSITIVE_STRING }),
    });
})(CreateMultipartUploadRequest = exports.CreateMultipartUploadRequest || (exports.CreateMultipartUploadRequest = {}));
var DeleteBucketRequest;
(function (DeleteBucketRequest) {
    /**
     * @internal
     */
    DeleteBucketRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteBucketRequest = exports.DeleteBucketRequest || (exports.DeleteBucketRequest = {}));
var DeleteBucketAnalyticsConfigurationRequest;
(function (DeleteBucketAnalyticsConfigurationRequest) {
    /**
     * @internal
     */
    DeleteBucketAnalyticsConfigurationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteBucketAnalyticsConfigurationRequest = exports.DeleteBucketAnalyticsConfigurationRequest || (exports.DeleteBucketAnalyticsConfigurationRequest = {}));
var DeleteBucketCorsRequest;
(function (DeleteBucketCorsRequest) {
    /**
     * @internal
     */
    DeleteBucketCorsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteBucketCorsRequest = exports.DeleteBucketCorsRequest || (exports.DeleteBucketCorsRequest = {}));
var DeleteBucketEncryptionRequest;
(function (DeleteBucketEncryptionRequest) {
    /**
     * @internal
     */
    DeleteBucketEncryptionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteBucketEncryptionRequest = exports.DeleteBucketEncryptionRequest || (exports.DeleteBucketEncryptionRequest = {}));
var DeleteBucketIntelligentTieringConfigurationRequest;
(function (DeleteBucketIntelligentTieringConfigurationRequest) {
    /**
     * @internal
     */
    DeleteBucketIntelligentTieringConfigurationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteBucketIntelligentTieringConfigurationRequest = exports.DeleteBucketIntelligentTieringConfigurationRequest || (exports.DeleteBucketIntelligentTieringConfigurationRequest = {}));
var DeleteBucketInventoryConfigurationRequest;
(function (DeleteBucketInventoryConfigurationRequest) {
    /**
     * @internal
     */
    DeleteBucketInventoryConfigurationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteBucketInventoryConfigurationRequest = exports.DeleteBucketInventoryConfigurationRequest || (exports.DeleteBucketInventoryConfigurationRequest = {}));
var DeleteBucketLifecycleRequest;
(function (DeleteBucketLifecycleRequest) {
    /**
     * @internal
     */
    DeleteBucketLifecycleRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteBucketLifecycleRequest = exports.DeleteBucketLifecycleRequest || (exports.DeleteBucketLifecycleRequest = {}));
var DeleteBucketMetricsConfigurationRequest;
(function (DeleteBucketMetricsConfigurationRequest) {
    /**
     * @internal
     */
    DeleteBucketMetricsConfigurationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteBucketMetricsConfigurationRequest = exports.DeleteBucketMetricsConfigurationRequest || (exports.DeleteBucketMetricsConfigurationRequest = {}));
var DeleteBucketOwnershipControlsRequest;
(function (DeleteBucketOwnershipControlsRequest) {
    /**
     * @internal
     */
    DeleteBucketOwnershipControlsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteBucketOwnershipControlsRequest = exports.DeleteBucketOwnershipControlsRequest || (exports.DeleteBucketOwnershipControlsRequest = {}));
var DeleteBucketPolicyRequest;
(function (DeleteBucketPolicyRequest) {
    /**
     * @internal
     */
    DeleteBucketPolicyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteBucketPolicyRequest = exports.DeleteBucketPolicyRequest || (exports.DeleteBucketPolicyRequest = {}));
var DeleteBucketReplicationRequest;
(function (DeleteBucketReplicationRequest) {
    /**
     * @internal
     */
    DeleteBucketReplicationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteBucketReplicationRequest = exports.DeleteBucketReplicationRequest || (exports.DeleteBucketReplicationRequest = {}));
var DeleteBucketTaggingRequest;
(function (DeleteBucketTaggingRequest) {
    /**
     * @internal
     */
    DeleteBucketTaggingRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteBucketTaggingRequest = exports.DeleteBucketTaggingRequest || (exports.DeleteBucketTaggingRequest = {}));
var DeleteBucketWebsiteRequest;
(function (DeleteBucketWebsiteRequest) {
    /**
     * @internal
     */
    DeleteBucketWebsiteRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteBucketWebsiteRequest = exports.DeleteBucketWebsiteRequest || (exports.DeleteBucketWebsiteRequest = {}));
var DeleteObjectOutput;
(function (DeleteObjectOutput) {
    /**
     * @internal
     */
    DeleteObjectOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteObjectOutput = exports.DeleteObjectOutput || (exports.DeleteObjectOutput = {}));
var DeleteObjectRequest;
(function (DeleteObjectRequest) {
    /**
     * @internal
     */
    DeleteObjectRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteObjectRequest = exports.DeleteObjectRequest || (exports.DeleteObjectRequest = {}));
var DeletedObject;
(function (DeletedObject) {
    /**
     * @internal
     */
    DeletedObject.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeletedObject = exports.DeletedObject || (exports.DeletedObject = {}));
var _Error;
(function (_Error) {
    /**
     * @internal
     */
    _Error.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(_Error = exports._Error || (exports._Error = {}));
var DeleteObjectsOutput;
(function (DeleteObjectsOutput) {
    /**
     * @internal
     */
    DeleteObjectsOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteObjectsOutput = exports.DeleteObjectsOutput || (exports.DeleteObjectsOutput = {}));
var ObjectIdentifier;
(function (ObjectIdentifier) {
    /**
     * @internal
     */
    ObjectIdentifier.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ObjectIdentifier = exports.ObjectIdentifier || (exports.ObjectIdentifier = {}));
var Delete;
(function (Delete) {
    /**
     * @internal
     */
    Delete.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Delete = exports.Delete || (exports.Delete = {}));
var DeleteObjectsRequest;
(function (DeleteObjectsRequest) {
    /**
     * @internal
     */
    DeleteObjectsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteObjectsRequest = exports.DeleteObjectsRequest || (exports.DeleteObjectsRequest = {}));
var DeleteObjectTaggingOutput;
(function (DeleteObjectTaggingOutput) {
    /**
     * @internal
     */
    DeleteObjectTaggingOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteObjectTaggingOutput = exports.DeleteObjectTaggingOutput || (exports.DeleteObjectTaggingOutput = {}));
var DeleteObjectTaggingRequest;
(function (DeleteObjectTaggingRequest) {
    /**
     * @internal
     */
    DeleteObjectTaggingRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteObjectTaggingRequest = exports.DeleteObjectTaggingRequest || (exports.DeleteObjectTaggingRequest = {}));
var DeletePublicAccessBlockRequest;
(function (DeletePublicAccessBlockRequest) {
    /**
     * @internal
     */
    DeletePublicAccessBlockRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeletePublicAccessBlockRequest = exports.DeletePublicAccessBlockRequest || (exports.DeletePublicAccessBlockRequest = {}));
var GetBucketAccelerateConfigurationOutput;
(function (GetBucketAccelerateConfigurationOutput) {
    /**
     * @internal
     */
    GetBucketAccelerateConfigurationOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetBucketAccelerateConfigurationOutput = exports.GetBucketAccelerateConfigurationOutput || (exports.GetBucketAccelerateConfigurationOutput = {}));
var GetBucketAccelerateConfigurationRequest;
(function (GetBucketAccelerateConfigurationRequest) {
    /**
     * @internal
     */
    GetBucketAccelerateConfigurationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetBucketAccelerateConfigurationRequest = exports.GetBucketAccelerateConfigurationRequest || (exports.GetBucketAccelerateConfigurationRequest = {}));
var GetBucketAclOutput;
(function (GetBucketAclOutput) {
    /**
     * @internal
     */
    GetBucketAclOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetBucketAclOutput = exports.GetBucketAclOutput || (exports.GetBucketAclOutput = {}));
var GetBucketAclRequest;
(function (GetBucketAclRequest) {
    /**
     * @internal
     */
    GetBucketAclRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetBucketAclRequest = exports.GetBucketAclRequest || (exports.GetBucketAclRequest = {}));
var Tag;
(function (Tag) {
    /**
     * @internal
     */
    Tag.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Tag = exports.Tag || (exports.Tag = {}));
var AnalyticsAndOperator;
(function (AnalyticsAndOperator) {
    /**
     * @internal
     */
    AnalyticsAndOperator.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AnalyticsAndOperator = exports.AnalyticsAndOperator || (exports.AnalyticsAndOperator = {}));
var AnalyticsFilter;
(function (AnalyticsFilter) {
    AnalyticsFilter.visit = (value, visitor) => {
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
    AnalyticsFilter.filterSensitiveLog = (obj) => {
        if (obj.Prefix !== undefined)
            return { Prefix: obj.Prefix };
        if (obj.Tag !== undefined)
            return { Tag: Tag.filterSensitiveLog(obj.Tag) };
        if (obj.And !== undefined)
            return { And: AnalyticsAndOperator.filterSensitiveLog(obj.And) };
        if (obj.$unknown !== undefined)
            return { [obj.$unknown[0]]: "UNKNOWN" };
    };
})(AnalyticsFilter = exports.AnalyticsFilter || (exports.AnalyticsFilter = {}));
var AnalyticsS3BucketDestination;
(function (AnalyticsS3BucketDestination) {
    /**
     * @internal
     */
    AnalyticsS3BucketDestination.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AnalyticsS3BucketDestination = exports.AnalyticsS3BucketDestination || (exports.AnalyticsS3BucketDestination = {}));
var AnalyticsExportDestination;
(function (AnalyticsExportDestination) {
    /**
     * @internal
     */
    AnalyticsExportDestination.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AnalyticsExportDestination = exports.AnalyticsExportDestination || (exports.AnalyticsExportDestination = {}));
var StorageClassAnalysisDataExport;
(function (StorageClassAnalysisDataExport) {
    /**
     * @internal
     */
    StorageClassAnalysisDataExport.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StorageClassAnalysisDataExport = exports.StorageClassAnalysisDataExport || (exports.StorageClassAnalysisDataExport = {}));
var StorageClassAnalysis;
(function (StorageClassAnalysis) {
    /**
     * @internal
     */
    StorageClassAnalysis.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StorageClassAnalysis = exports.StorageClassAnalysis || (exports.StorageClassAnalysis = {}));
var AnalyticsConfiguration;
(function (AnalyticsConfiguration) {
    /**
     * @internal
     */
    AnalyticsConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Filter && { Filter: AnalyticsFilter.filterSensitiveLog(obj.Filter) }),
    });
})(AnalyticsConfiguration = exports.AnalyticsConfiguration || (exports.AnalyticsConfiguration = {}));
var GetBucketAnalyticsConfigurationOutput;
(function (GetBucketAnalyticsConfigurationOutput) {
    /**
     * @internal
     */
    GetBucketAnalyticsConfigurationOutput.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.AnalyticsConfiguration && {
            AnalyticsConfiguration: AnalyticsConfiguration.filterSensitiveLog(obj.AnalyticsConfiguration),
        }),
    });
})(GetBucketAnalyticsConfigurationOutput = exports.GetBucketAnalyticsConfigurationOutput || (exports.GetBucketAnalyticsConfigurationOutput = {}));
var GetBucketAnalyticsConfigurationRequest;
(function (GetBucketAnalyticsConfigurationRequest) {
    /**
     * @internal
     */
    GetBucketAnalyticsConfigurationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetBucketAnalyticsConfigurationRequest = exports.GetBucketAnalyticsConfigurationRequest || (exports.GetBucketAnalyticsConfigurationRequest = {}));
var CORSRule;
(function (CORSRule) {
    /**
     * @internal
     */
    CORSRule.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CORSRule = exports.CORSRule || (exports.CORSRule = {}));
var GetBucketCorsOutput;
(function (GetBucketCorsOutput) {
    /**
     * @internal
     */
    GetBucketCorsOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetBucketCorsOutput = exports.GetBucketCorsOutput || (exports.GetBucketCorsOutput = {}));
var GetBucketCorsRequest;
(function (GetBucketCorsRequest) {
    /**
     * @internal
     */
    GetBucketCorsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetBucketCorsRequest = exports.GetBucketCorsRequest || (exports.GetBucketCorsRequest = {}));
var ServerSideEncryptionByDefault;
(function (ServerSideEncryptionByDefault) {
    /**
     * @internal
     */
    ServerSideEncryptionByDefault.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.KMSMasterKeyID && { KMSMasterKeyID: smithy_client_1.SENSITIVE_STRING }),
    });
})(ServerSideEncryptionByDefault = exports.ServerSideEncryptionByDefault || (exports.ServerSideEncryptionByDefault = {}));
var ServerSideEncryptionRule;
(function (ServerSideEncryptionRule) {
    /**
     * @internal
     */
    ServerSideEncryptionRule.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.ApplyServerSideEncryptionByDefault && {
            ApplyServerSideEncryptionByDefault: ServerSideEncryptionByDefault.filterSensitiveLog(obj.ApplyServerSideEncryptionByDefault),
        }),
    });
})(ServerSideEncryptionRule = exports.ServerSideEncryptionRule || (exports.ServerSideEncryptionRule = {}));
var ServerSideEncryptionConfiguration;
(function (ServerSideEncryptionConfiguration) {
    /**
     * @internal
     */
    ServerSideEncryptionConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Rules && { Rules: obj.Rules.map((item) => ServerSideEncryptionRule.filterSensitiveLog(item)) }),
    });
})(ServerSideEncryptionConfiguration = exports.ServerSideEncryptionConfiguration || (exports.ServerSideEncryptionConfiguration = {}));
var GetBucketEncryptionOutput;
(function (GetBucketEncryptionOutput) {
    /**
     * @internal
     */
    GetBucketEncryptionOutput.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.ServerSideEncryptionConfiguration && {
            ServerSideEncryptionConfiguration: ServerSideEncryptionConfiguration.filterSensitiveLog(obj.ServerSideEncryptionConfiguration),
        }),
    });
})(GetBucketEncryptionOutput = exports.GetBucketEncryptionOutput || (exports.GetBucketEncryptionOutput = {}));
var GetBucketEncryptionRequest;
(function (GetBucketEncryptionRequest) {
    /**
     * @internal
     */
    GetBucketEncryptionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetBucketEncryptionRequest = exports.GetBucketEncryptionRequest || (exports.GetBucketEncryptionRequest = {}));
var IntelligentTieringAndOperator;
(function (IntelligentTieringAndOperator) {
    /**
     * @internal
     */
    IntelligentTieringAndOperator.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(IntelligentTieringAndOperator = exports.IntelligentTieringAndOperator || (exports.IntelligentTieringAndOperator = {}));
var IntelligentTieringFilter;
(function (IntelligentTieringFilter) {
    /**
     * @internal
     */
    IntelligentTieringFilter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(IntelligentTieringFilter = exports.IntelligentTieringFilter || (exports.IntelligentTieringFilter = {}));
var Tiering;
(function (Tiering) {
    /**
     * @internal
     */
    Tiering.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Tiering = exports.Tiering || (exports.Tiering = {}));
var IntelligentTieringConfiguration;
(function (IntelligentTieringConfiguration) {
    /**
     * @internal
     */
    IntelligentTieringConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(IntelligentTieringConfiguration = exports.IntelligentTieringConfiguration || (exports.IntelligentTieringConfiguration = {}));
var GetBucketIntelligentTieringConfigurationOutput;
(function (GetBucketIntelligentTieringConfigurationOutput) {
    /**
     * @internal
     */
    GetBucketIntelligentTieringConfigurationOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetBucketIntelligentTieringConfigurationOutput = exports.GetBucketIntelligentTieringConfigurationOutput || (exports.GetBucketIntelligentTieringConfigurationOutput = {}));
var GetBucketIntelligentTieringConfigurationRequest;
(function (GetBucketIntelligentTieringConfigurationRequest) {
    /**
     * @internal
     */
    GetBucketIntelligentTieringConfigurationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetBucketIntelligentTieringConfigurationRequest = exports.GetBucketIntelligentTieringConfigurationRequest || (exports.GetBucketIntelligentTieringConfigurationRequest = {}));
var SSEKMS;
(function (SSEKMS) {
    /**
     * @internal
     */
    SSEKMS.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.KeyId && { KeyId: smithy_client_1.SENSITIVE_STRING }),
    });
})(SSEKMS = exports.SSEKMS || (exports.SSEKMS = {}));
var SSES3;
(function (SSES3) {
    /**
     * @internal
     */
    SSES3.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SSES3 = exports.SSES3 || (exports.SSES3 = {}));
var InventoryEncryption;
(function (InventoryEncryption) {
    /**
     * @internal
     */
    InventoryEncryption.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.SSEKMS && { SSEKMS: SSEKMS.filterSensitiveLog(obj.SSEKMS) }),
    });
})(InventoryEncryption = exports.InventoryEncryption || (exports.InventoryEncryption = {}));
var InventoryS3BucketDestination;
(function (InventoryS3BucketDestination) {
    /**
     * @internal
     */
    InventoryS3BucketDestination.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Encryption && { Encryption: InventoryEncryption.filterSensitiveLog(obj.Encryption) }),
    });
})(InventoryS3BucketDestination = exports.InventoryS3BucketDestination || (exports.InventoryS3BucketDestination = {}));
var InventoryDestination;
(function (InventoryDestination) {
    /**
     * @internal
     */
    InventoryDestination.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.S3BucketDestination && {
            S3BucketDestination: InventoryS3BucketDestination.filterSensitiveLog(obj.S3BucketDestination),
        }),
    });
})(InventoryDestination = exports.InventoryDestination || (exports.InventoryDestination = {}));
var InventoryFilter;
(function (InventoryFilter) {
    /**
     * @internal
     */
    InventoryFilter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InventoryFilter = exports.InventoryFilter || (exports.InventoryFilter = {}));
var InventorySchedule;
(function (InventorySchedule) {
    /**
     * @internal
     */
    InventorySchedule.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InventorySchedule = exports.InventorySchedule || (exports.InventorySchedule = {}));
var InventoryConfiguration;
(function (InventoryConfiguration) {
    /**
     * @internal
     */
    InventoryConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Destination && { Destination: InventoryDestination.filterSensitiveLog(obj.Destination) }),
    });
})(InventoryConfiguration = exports.InventoryConfiguration || (exports.InventoryConfiguration = {}));
var GetBucketInventoryConfigurationOutput;
(function (GetBucketInventoryConfigurationOutput) {
    /**
     * @internal
     */
    GetBucketInventoryConfigurationOutput.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.InventoryConfiguration && {
            InventoryConfiguration: InventoryConfiguration.filterSensitiveLog(obj.InventoryConfiguration),
        }),
    });
})(GetBucketInventoryConfigurationOutput = exports.GetBucketInventoryConfigurationOutput || (exports.GetBucketInventoryConfigurationOutput = {}));
var GetBucketInventoryConfigurationRequest;
(function (GetBucketInventoryConfigurationRequest) {
    /**
     * @internal
     */
    GetBucketInventoryConfigurationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetBucketInventoryConfigurationRequest = exports.GetBucketInventoryConfigurationRequest || (exports.GetBucketInventoryConfigurationRequest = {}));
var LifecycleExpiration;
(function (LifecycleExpiration) {
    /**
     * @internal
     */
    LifecycleExpiration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LifecycleExpiration = exports.LifecycleExpiration || (exports.LifecycleExpiration = {}));
var LifecycleRuleAndOperator;
(function (LifecycleRuleAndOperator) {
    /**
     * @internal
     */
    LifecycleRuleAndOperator.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LifecycleRuleAndOperator = exports.LifecycleRuleAndOperator || (exports.LifecycleRuleAndOperator = {}));
var LifecycleRuleFilter;
(function (LifecycleRuleFilter) {
    LifecycleRuleFilter.visit = (value, visitor) => {
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
    LifecycleRuleFilter.filterSensitiveLog = (obj) => {
        if (obj.Prefix !== undefined)
            return { Prefix: obj.Prefix };
        if (obj.Tag !== undefined)
            return { Tag: Tag.filterSensitiveLog(obj.Tag) };
        if (obj.And !== undefined)
            return { And: LifecycleRuleAndOperator.filterSensitiveLog(obj.And) };
        if (obj.$unknown !== undefined)
            return { [obj.$unknown[0]]: "UNKNOWN" };
    };
})(LifecycleRuleFilter = exports.LifecycleRuleFilter || (exports.LifecycleRuleFilter = {}));
var NoncurrentVersionExpiration;
(function (NoncurrentVersionExpiration) {
    /**
     * @internal
     */
    NoncurrentVersionExpiration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NoncurrentVersionExpiration = exports.NoncurrentVersionExpiration || (exports.NoncurrentVersionExpiration = {}));
var NoncurrentVersionTransition;
(function (NoncurrentVersionTransition) {
    /**
     * @internal
     */
    NoncurrentVersionTransition.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NoncurrentVersionTransition = exports.NoncurrentVersionTransition || (exports.NoncurrentVersionTransition = {}));
var Transition;
(function (Transition) {
    /**
     * @internal
     */
    Transition.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Transition = exports.Transition || (exports.Transition = {}));
var LifecycleRule;
(function (LifecycleRule) {
    /**
     * @internal
     */
    LifecycleRule.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Filter && { Filter: LifecycleRuleFilter.filterSensitiveLog(obj.Filter) }),
    });
})(LifecycleRule = exports.LifecycleRule || (exports.LifecycleRule = {}));
var GetBucketLifecycleConfigurationOutput;
(function (GetBucketLifecycleConfigurationOutput) {
    /**
     * @internal
     */
    GetBucketLifecycleConfigurationOutput.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Rules && { Rules: obj.Rules.map((item) => LifecycleRule.filterSensitiveLog(item)) }),
    });
})(GetBucketLifecycleConfigurationOutput = exports.GetBucketLifecycleConfigurationOutput || (exports.GetBucketLifecycleConfigurationOutput = {}));
var GetBucketLifecycleConfigurationRequest;
(function (GetBucketLifecycleConfigurationRequest) {
    /**
     * @internal
     */
    GetBucketLifecycleConfigurationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetBucketLifecycleConfigurationRequest = exports.GetBucketLifecycleConfigurationRequest || (exports.GetBucketLifecycleConfigurationRequest = {}));
var GetBucketLocationOutput;
(function (GetBucketLocationOutput) {
    /**
     * @internal
     */
    GetBucketLocationOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetBucketLocationOutput = exports.GetBucketLocationOutput || (exports.GetBucketLocationOutput = {}));
var GetBucketLocationRequest;
(function (GetBucketLocationRequest) {
    /**
     * @internal
     */
    GetBucketLocationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetBucketLocationRequest = exports.GetBucketLocationRequest || (exports.GetBucketLocationRequest = {}));
var TargetGrant;
(function (TargetGrant) {
    /**
     * @internal
     */
    TargetGrant.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TargetGrant = exports.TargetGrant || (exports.TargetGrant = {}));
var LoggingEnabled;
(function (LoggingEnabled) {
    /**
     * @internal
     */
    LoggingEnabled.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LoggingEnabled = exports.LoggingEnabled || (exports.LoggingEnabled = {}));
var GetBucketLoggingOutput;
(function (GetBucketLoggingOutput) {
    /**
     * @internal
     */
    GetBucketLoggingOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetBucketLoggingOutput = exports.GetBucketLoggingOutput || (exports.GetBucketLoggingOutput = {}));
var GetBucketLoggingRequest;
(function (GetBucketLoggingRequest) {
    /**
     * @internal
     */
    GetBucketLoggingRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetBucketLoggingRequest = exports.GetBucketLoggingRequest || (exports.GetBucketLoggingRequest = {}));
var MetricsAndOperator;
(function (MetricsAndOperator) {
    /**
     * @internal
     */
    MetricsAndOperator.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MetricsAndOperator = exports.MetricsAndOperator || (exports.MetricsAndOperator = {}));
var MetricsFilter;
(function (MetricsFilter) {
    MetricsFilter.visit = (value, visitor) => {
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
    MetricsFilter.filterSensitiveLog = (obj) => {
        if (obj.Prefix !== undefined)
            return { Prefix: obj.Prefix };
        if (obj.Tag !== undefined)
            return { Tag: Tag.filterSensitiveLog(obj.Tag) };
        if (obj.And !== undefined)
            return { And: MetricsAndOperator.filterSensitiveLog(obj.And) };
        if (obj.$unknown !== undefined)
            return { [obj.$unknown[0]]: "UNKNOWN" };
    };
})(MetricsFilter = exports.MetricsFilter || (exports.MetricsFilter = {}));
var MetricsConfiguration;
(function (MetricsConfiguration) {
    /**
     * @internal
     */
    MetricsConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Filter && { Filter: MetricsFilter.filterSensitiveLog(obj.Filter) }),
    });
})(MetricsConfiguration = exports.MetricsConfiguration || (exports.MetricsConfiguration = {}));
var GetBucketMetricsConfigurationOutput;
(function (GetBucketMetricsConfigurationOutput) {
    /**
     * @internal
     */
    GetBucketMetricsConfigurationOutput.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.MetricsConfiguration && {
            MetricsConfiguration: MetricsConfiguration.filterSensitiveLog(obj.MetricsConfiguration),
        }),
    });
})(GetBucketMetricsConfigurationOutput = exports.GetBucketMetricsConfigurationOutput || (exports.GetBucketMetricsConfigurationOutput = {}));
var GetBucketMetricsConfigurationRequest;
(function (GetBucketMetricsConfigurationRequest) {
    /**
     * @internal
     */
    GetBucketMetricsConfigurationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetBucketMetricsConfigurationRequest = exports.GetBucketMetricsConfigurationRequest || (exports.GetBucketMetricsConfigurationRequest = {}));
var GetBucketNotificationConfigurationRequest;
(function (GetBucketNotificationConfigurationRequest) {
    /**
     * @internal
     */
    GetBucketNotificationConfigurationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetBucketNotificationConfigurationRequest = exports.GetBucketNotificationConfigurationRequest || (exports.GetBucketNotificationConfigurationRequest = {}));
var FilterRule;
(function (FilterRule) {
    /**
     * @internal
     */
    FilterRule.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FilterRule = exports.FilterRule || (exports.FilterRule = {}));
var S3KeyFilter;
(function (S3KeyFilter) {
    /**
     * @internal
     */
    S3KeyFilter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(S3KeyFilter = exports.S3KeyFilter || (exports.S3KeyFilter = {}));
var NotificationConfigurationFilter;
(function (NotificationConfigurationFilter) {
    /**
     * @internal
     */
    NotificationConfigurationFilter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NotificationConfigurationFilter = exports.NotificationConfigurationFilter || (exports.NotificationConfigurationFilter = {}));
var LambdaFunctionConfiguration;
(function (LambdaFunctionConfiguration) {
    /**
     * @internal
     */
    LambdaFunctionConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LambdaFunctionConfiguration = exports.LambdaFunctionConfiguration || (exports.LambdaFunctionConfiguration = {}));
var QueueConfiguration;
(function (QueueConfiguration) {
    /**
     * @internal
     */
    QueueConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(QueueConfiguration = exports.QueueConfiguration || (exports.QueueConfiguration = {}));
var TopicConfiguration;
(function (TopicConfiguration) {
    /**
     * @internal
     */
    TopicConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TopicConfiguration = exports.TopicConfiguration || (exports.TopicConfiguration = {}));
var NotificationConfiguration;
(function (NotificationConfiguration) {
    /**
     * @internal
     */
    NotificationConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NotificationConfiguration = exports.NotificationConfiguration || (exports.NotificationConfiguration = {}));
var OwnershipControlsRule;
(function (OwnershipControlsRule) {
    /**
     * @internal
     */
    OwnershipControlsRule.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OwnershipControlsRule = exports.OwnershipControlsRule || (exports.OwnershipControlsRule = {}));
var OwnershipControls;
(function (OwnershipControls) {
    /**
     * @internal
     */
    OwnershipControls.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OwnershipControls = exports.OwnershipControls || (exports.OwnershipControls = {}));
var GetBucketOwnershipControlsOutput;
(function (GetBucketOwnershipControlsOutput) {
    /**
     * @internal
     */
    GetBucketOwnershipControlsOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetBucketOwnershipControlsOutput = exports.GetBucketOwnershipControlsOutput || (exports.GetBucketOwnershipControlsOutput = {}));
var GetBucketOwnershipControlsRequest;
(function (GetBucketOwnershipControlsRequest) {
    /**
     * @internal
     */
    GetBucketOwnershipControlsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetBucketOwnershipControlsRequest = exports.GetBucketOwnershipControlsRequest || (exports.GetBucketOwnershipControlsRequest = {}));
var GetBucketPolicyOutput;
(function (GetBucketPolicyOutput) {
    /**
     * @internal
     */
    GetBucketPolicyOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetBucketPolicyOutput = exports.GetBucketPolicyOutput || (exports.GetBucketPolicyOutput = {}));
var GetBucketPolicyRequest;
(function (GetBucketPolicyRequest) {
    /**
     * @internal
     */
    GetBucketPolicyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetBucketPolicyRequest = exports.GetBucketPolicyRequest || (exports.GetBucketPolicyRequest = {}));
var PolicyStatus;
(function (PolicyStatus) {
    /**
     * @internal
     */
    PolicyStatus.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PolicyStatus = exports.PolicyStatus || (exports.PolicyStatus = {}));
var GetBucketPolicyStatusOutput;
(function (GetBucketPolicyStatusOutput) {
    /**
     * @internal
     */
    GetBucketPolicyStatusOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetBucketPolicyStatusOutput = exports.GetBucketPolicyStatusOutput || (exports.GetBucketPolicyStatusOutput = {}));
var GetBucketPolicyStatusRequest;
(function (GetBucketPolicyStatusRequest) {
    /**
     * @internal
     */
    GetBucketPolicyStatusRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetBucketPolicyStatusRequest = exports.GetBucketPolicyStatusRequest || (exports.GetBucketPolicyStatusRequest = {}));
var DeleteMarkerReplication;
(function (DeleteMarkerReplication) {
    /**
     * @internal
     */
    DeleteMarkerReplication.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteMarkerReplication = exports.DeleteMarkerReplication || (exports.DeleteMarkerReplication = {}));
var EncryptionConfiguration;
(function (EncryptionConfiguration) {
    /**
     * @internal
     */
    EncryptionConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EncryptionConfiguration = exports.EncryptionConfiguration || (exports.EncryptionConfiguration = {}));
var ReplicationTimeValue;
(function (ReplicationTimeValue) {
    /**
     * @internal
     */
    ReplicationTimeValue.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReplicationTimeValue = exports.ReplicationTimeValue || (exports.ReplicationTimeValue = {}));
var Metrics;
(function (Metrics) {
    /**
     * @internal
     */
    Metrics.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Metrics = exports.Metrics || (exports.Metrics = {}));
var ReplicationTime;
(function (ReplicationTime) {
    /**
     * @internal
     */
    ReplicationTime.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReplicationTime = exports.ReplicationTime || (exports.ReplicationTime = {}));
var Destination;
(function (Destination) {
    /**
     * @internal
     */
    Destination.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Destination = exports.Destination || (exports.Destination = {}));
var ExistingObjectReplication;
(function (ExistingObjectReplication) {
    /**
     * @internal
     */
    ExistingObjectReplication.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ExistingObjectReplication = exports.ExistingObjectReplication || (exports.ExistingObjectReplication = {}));
var ReplicationRuleAndOperator;
(function (ReplicationRuleAndOperator) {
    /**
     * @internal
     */
    ReplicationRuleAndOperator.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReplicationRuleAndOperator = exports.ReplicationRuleAndOperator || (exports.ReplicationRuleAndOperator = {}));
var ReplicationRuleFilter;
(function (ReplicationRuleFilter) {
    ReplicationRuleFilter.visit = (value, visitor) => {
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
    ReplicationRuleFilter.filterSensitiveLog = (obj) => {
        if (obj.Prefix !== undefined)
            return { Prefix: obj.Prefix };
        if (obj.Tag !== undefined)
            return { Tag: Tag.filterSensitiveLog(obj.Tag) };
        if (obj.And !== undefined)
            return { And: ReplicationRuleAndOperator.filterSensitiveLog(obj.And) };
        if (obj.$unknown !== undefined)
            return { [obj.$unknown[0]]: "UNKNOWN" };
    };
})(ReplicationRuleFilter = exports.ReplicationRuleFilter || (exports.ReplicationRuleFilter = {}));
var ReplicaModifications;
(function (ReplicaModifications) {
    /**
     * @internal
     */
    ReplicaModifications.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReplicaModifications = exports.ReplicaModifications || (exports.ReplicaModifications = {}));
var SseKmsEncryptedObjects;
(function (SseKmsEncryptedObjects) {
    /**
     * @internal
     */
    SseKmsEncryptedObjects.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SseKmsEncryptedObjects = exports.SseKmsEncryptedObjects || (exports.SseKmsEncryptedObjects = {}));
var SourceSelectionCriteria;
(function (SourceSelectionCriteria) {
    /**
     * @internal
     */
    SourceSelectionCriteria.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SourceSelectionCriteria = exports.SourceSelectionCriteria || (exports.SourceSelectionCriteria = {}));
var ReplicationRule;
(function (ReplicationRule) {
    /**
     * @internal
     */
    ReplicationRule.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Filter && { Filter: ReplicationRuleFilter.filterSensitiveLog(obj.Filter) }),
    });
})(ReplicationRule = exports.ReplicationRule || (exports.ReplicationRule = {}));
var ReplicationConfiguration;
(function (ReplicationConfiguration) {
    /**
     * @internal
     */
    ReplicationConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Rules && { Rules: obj.Rules.map((item) => ReplicationRule.filterSensitiveLog(item)) }),
    });
})(ReplicationConfiguration = exports.ReplicationConfiguration || (exports.ReplicationConfiguration = {}));
var GetBucketReplicationOutput;
(function (GetBucketReplicationOutput) {
    /**
     * @internal
     */
    GetBucketReplicationOutput.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.ReplicationConfiguration && {
            ReplicationConfiguration: ReplicationConfiguration.filterSensitiveLog(obj.ReplicationConfiguration),
        }),
    });
})(GetBucketReplicationOutput = exports.GetBucketReplicationOutput || (exports.GetBucketReplicationOutput = {}));
var GetBucketReplicationRequest;
(function (GetBucketReplicationRequest) {
    /**
     * @internal
     */
    GetBucketReplicationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetBucketReplicationRequest = exports.GetBucketReplicationRequest || (exports.GetBucketReplicationRequest = {}));
var GetBucketRequestPaymentOutput;
(function (GetBucketRequestPaymentOutput) {
    /**
     * @internal
     */
    GetBucketRequestPaymentOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetBucketRequestPaymentOutput = exports.GetBucketRequestPaymentOutput || (exports.GetBucketRequestPaymentOutput = {}));
var GetBucketRequestPaymentRequest;
(function (GetBucketRequestPaymentRequest) {
    /**
     * @internal
     */
    GetBucketRequestPaymentRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetBucketRequestPaymentRequest = exports.GetBucketRequestPaymentRequest || (exports.GetBucketRequestPaymentRequest = {}));
var GetBucketTaggingOutput;
(function (GetBucketTaggingOutput) {
    /**
     * @internal
     */
    GetBucketTaggingOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetBucketTaggingOutput = exports.GetBucketTaggingOutput || (exports.GetBucketTaggingOutput = {}));
var GetBucketTaggingRequest;
(function (GetBucketTaggingRequest) {
    /**
     * @internal
     */
    GetBucketTaggingRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetBucketTaggingRequest = exports.GetBucketTaggingRequest || (exports.GetBucketTaggingRequest = {}));
var GetBucketVersioningOutput;
(function (GetBucketVersioningOutput) {
    /**
     * @internal
     */
    GetBucketVersioningOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetBucketVersioningOutput = exports.GetBucketVersioningOutput || (exports.GetBucketVersioningOutput = {}));
var GetBucketVersioningRequest;
(function (GetBucketVersioningRequest) {
    /**
     * @internal
     */
    GetBucketVersioningRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetBucketVersioningRequest = exports.GetBucketVersioningRequest || (exports.GetBucketVersioningRequest = {}));
var ErrorDocument;
(function (ErrorDocument) {
    /**
     * @internal
     */
    ErrorDocument.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ErrorDocument = exports.ErrorDocument || (exports.ErrorDocument = {}));
var IndexDocument;
(function (IndexDocument) {
    /**
     * @internal
     */
    IndexDocument.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(IndexDocument = exports.IndexDocument || (exports.IndexDocument = {}));
var RedirectAllRequestsTo;
(function (RedirectAllRequestsTo) {
    /**
     * @internal
     */
    RedirectAllRequestsTo.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RedirectAllRequestsTo = exports.RedirectAllRequestsTo || (exports.RedirectAllRequestsTo = {}));
var Condition;
(function (Condition) {
    /**
     * @internal
     */
    Condition.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Condition = exports.Condition || (exports.Condition = {}));
var Redirect;
(function (Redirect) {
    /**
     * @internal
     */
    Redirect.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Redirect = exports.Redirect || (exports.Redirect = {}));
var RoutingRule;
(function (RoutingRule) {
    /**
     * @internal
     */
    RoutingRule.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RoutingRule = exports.RoutingRule || (exports.RoutingRule = {}));
var GetBucketWebsiteOutput;
(function (GetBucketWebsiteOutput) {
    /**
     * @internal
     */
    GetBucketWebsiteOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetBucketWebsiteOutput = exports.GetBucketWebsiteOutput || (exports.GetBucketWebsiteOutput = {}));
var GetBucketWebsiteRequest;
(function (GetBucketWebsiteRequest) {
    /**
     * @internal
     */
    GetBucketWebsiteRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetBucketWebsiteRequest = exports.GetBucketWebsiteRequest || (exports.GetBucketWebsiteRequest = {}));
var GetObjectOutput;
(function (GetObjectOutput) {
    /**
     * @internal
     */
    GetObjectOutput.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.SSEKMSKeyId && { SSEKMSKeyId: smithy_client_1.SENSITIVE_STRING }),
    });
})(GetObjectOutput = exports.GetObjectOutput || (exports.GetObjectOutput = {}));
var GetObjectRequest;
(function (GetObjectRequest) {
    /**
     * @internal
     */
    GetObjectRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.SSECustomerKey && { SSECustomerKey: smithy_client_1.SENSITIVE_STRING }),
    });
})(GetObjectRequest = exports.GetObjectRequest || (exports.GetObjectRequest = {}));
var InvalidObjectState;
(function (InvalidObjectState) {
    /**
     * @internal
     */
    InvalidObjectState.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidObjectState = exports.InvalidObjectState || (exports.InvalidObjectState = {}));
var NoSuchKey;
(function (NoSuchKey) {
    /**
     * @internal
     */
    NoSuchKey.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NoSuchKey = exports.NoSuchKey || (exports.NoSuchKey = {}));
var GetObjectAclOutput;
(function (GetObjectAclOutput) {
    /**
     * @internal
     */
    GetObjectAclOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetObjectAclOutput = exports.GetObjectAclOutput || (exports.GetObjectAclOutput = {}));
var GetObjectAclRequest;
(function (GetObjectAclRequest) {
    /**
     * @internal
     */
    GetObjectAclRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetObjectAclRequest = exports.GetObjectAclRequest || (exports.GetObjectAclRequest = {}));
var ObjectLockLegalHold;
(function (ObjectLockLegalHold) {
    /**
     * @internal
     */
    ObjectLockLegalHold.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ObjectLockLegalHold = exports.ObjectLockLegalHold || (exports.ObjectLockLegalHold = {}));
var GetObjectLegalHoldOutput;
(function (GetObjectLegalHoldOutput) {
    /**
     * @internal
     */
    GetObjectLegalHoldOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetObjectLegalHoldOutput = exports.GetObjectLegalHoldOutput || (exports.GetObjectLegalHoldOutput = {}));
var GetObjectLegalHoldRequest;
(function (GetObjectLegalHoldRequest) {
    /**
     * @internal
     */
    GetObjectLegalHoldRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetObjectLegalHoldRequest = exports.GetObjectLegalHoldRequest || (exports.GetObjectLegalHoldRequest = {}));
var DefaultRetention;
(function (DefaultRetention) {
    /**
     * @internal
     */
    DefaultRetention.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DefaultRetention = exports.DefaultRetention || (exports.DefaultRetention = {}));
var ObjectLockRule;
(function (ObjectLockRule) {
    /**
     * @internal
     */
    ObjectLockRule.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ObjectLockRule = exports.ObjectLockRule || (exports.ObjectLockRule = {}));
var ObjectLockConfiguration;
(function (ObjectLockConfiguration) {
    /**
     * @internal
     */
    ObjectLockConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ObjectLockConfiguration = exports.ObjectLockConfiguration || (exports.ObjectLockConfiguration = {}));
var GetObjectLockConfigurationOutput;
(function (GetObjectLockConfigurationOutput) {
    /**
     * @internal
     */
    GetObjectLockConfigurationOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetObjectLockConfigurationOutput = exports.GetObjectLockConfigurationOutput || (exports.GetObjectLockConfigurationOutput = {}));
var GetObjectLockConfigurationRequest;
(function (GetObjectLockConfigurationRequest) {
    /**
     * @internal
     */
    GetObjectLockConfigurationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetObjectLockConfigurationRequest = exports.GetObjectLockConfigurationRequest || (exports.GetObjectLockConfigurationRequest = {}));
var ObjectLockRetention;
(function (ObjectLockRetention) {
    /**
     * @internal
     */
    ObjectLockRetention.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ObjectLockRetention = exports.ObjectLockRetention || (exports.ObjectLockRetention = {}));
var GetObjectRetentionOutput;
(function (GetObjectRetentionOutput) {
    /**
     * @internal
     */
    GetObjectRetentionOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetObjectRetentionOutput = exports.GetObjectRetentionOutput || (exports.GetObjectRetentionOutput = {}));
var GetObjectRetentionRequest;
(function (GetObjectRetentionRequest) {
    /**
     * @internal
     */
    GetObjectRetentionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetObjectRetentionRequest = exports.GetObjectRetentionRequest || (exports.GetObjectRetentionRequest = {}));
var GetObjectTaggingOutput;
(function (GetObjectTaggingOutput) {
    /**
     * @internal
     */
    GetObjectTaggingOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetObjectTaggingOutput = exports.GetObjectTaggingOutput || (exports.GetObjectTaggingOutput = {}));
var GetObjectTaggingRequest;
(function (GetObjectTaggingRequest) {
    /**
     * @internal
     */
    GetObjectTaggingRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetObjectTaggingRequest = exports.GetObjectTaggingRequest || (exports.GetObjectTaggingRequest = {}));
var GetObjectTorrentOutput;
(function (GetObjectTorrentOutput) {
    /**
     * @internal
     */
    GetObjectTorrentOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetObjectTorrentOutput = exports.GetObjectTorrentOutput || (exports.GetObjectTorrentOutput = {}));
var GetObjectTorrentRequest;
(function (GetObjectTorrentRequest) {
    /**
     * @internal
     */
    GetObjectTorrentRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetObjectTorrentRequest = exports.GetObjectTorrentRequest || (exports.GetObjectTorrentRequest = {}));
var PublicAccessBlockConfiguration;
(function (PublicAccessBlockConfiguration) {
    /**
     * @internal
     */
    PublicAccessBlockConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PublicAccessBlockConfiguration = exports.PublicAccessBlockConfiguration || (exports.PublicAccessBlockConfiguration = {}));
var GetPublicAccessBlockOutput;
(function (GetPublicAccessBlockOutput) {
    /**
     * @internal
     */
    GetPublicAccessBlockOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetPublicAccessBlockOutput = exports.GetPublicAccessBlockOutput || (exports.GetPublicAccessBlockOutput = {}));
var GetPublicAccessBlockRequest;
(function (GetPublicAccessBlockRequest) {
    /**
     * @internal
     */
    GetPublicAccessBlockRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetPublicAccessBlockRequest = exports.GetPublicAccessBlockRequest || (exports.GetPublicAccessBlockRequest = {}));
var HeadBucketRequest;
(function (HeadBucketRequest) {
    /**
     * @internal
     */
    HeadBucketRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(HeadBucketRequest = exports.HeadBucketRequest || (exports.HeadBucketRequest = {}));
var NotFound;
(function (NotFound) {
    /**
     * @internal
     */
    NotFound.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NotFound = exports.NotFound || (exports.NotFound = {}));
var HeadObjectOutput;
(function (HeadObjectOutput) {
    /**
     * @internal
     */
    HeadObjectOutput.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.SSEKMSKeyId && { SSEKMSKeyId: smithy_client_1.SENSITIVE_STRING }),
    });
})(HeadObjectOutput = exports.HeadObjectOutput || (exports.HeadObjectOutput = {}));
var HeadObjectRequest;
(function (HeadObjectRequest) {
    /**
     * @internal
     */
    HeadObjectRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.SSECustomerKey && { SSECustomerKey: smithy_client_1.SENSITIVE_STRING }),
    });
})(HeadObjectRequest = exports.HeadObjectRequest || (exports.HeadObjectRequest = {}));
var ListBucketAnalyticsConfigurationsOutput;
(function (ListBucketAnalyticsConfigurationsOutput) {
    /**
     * @internal
     */
    ListBucketAnalyticsConfigurationsOutput.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.AnalyticsConfigurationList && {
            AnalyticsConfigurationList: obj.AnalyticsConfigurationList.map((item) => AnalyticsConfiguration.filterSensitiveLog(item)),
        }),
    });
})(ListBucketAnalyticsConfigurationsOutput = exports.ListBucketAnalyticsConfigurationsOutput || (exports.ListBucketAnalyticsConfigurationsOutput = {}));
var ListBucketAnalyticsConfigurationsRequest;
(function (ListBucketAnalyticsConfigurationsRequest) {
    /**
     * @internal
     */
    ListBucketAnalyticsConfigurationsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListBucketAnalyticsConfigurationsRequest = exports.ListBucketAnalyticsConfigurationsRequest || (exports.ListBucketAnalyticsConfigurationsRequest = {}));
var ListBucketIntelligentTieringConfigurationsOutput;
(function (ListBucketIntelligentTieringConfigurationsOutput) {
    /**
     * @internal
     */
    ListBucketIntelligentTieringConfigurationsOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListBucketIntelligentTieringConfigurationsOutput = exports.ListBucketIntelligentTieringConfigurationsOutput || (exports.ListBucketIntelligentTieringConfigurationsOutput = {}));
var ListBucketIntelligentTieringConfigurationsRequest;
(function (ListBucketIntelligentTieringConfigurationsRequest) {
    /**
     * @internal
     */
    ListBucketIntelligentTieringConfigurationsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListBucketIntelligentTieringConfigurationsRequest = exports.ListBucketIntelligentTieringConfigurationsRequest || (exports.ListBucketIntelligentTieringConfigurationsRequest = {}));
var ListBucketInventoryConfigurationsOutput;
(function (ListBucketInventoryConfigurationsOutput) {
    /**
     * @internal
     */
    ListBucketInventoryConfigurationsOutput.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.InventoryConfigurationList && {
            InventoryConfigurationList: obj.InventoryConfigurationList.map((item) => InventoryConfiguration.filterSensitiveLog(item)),
        }),
    });
})(ListBucketInventoryConfigurationsOutput = exports.ListBucketInventoryConfigurationsOutput || (exports.ListBucketInventoryConfigurationsOutput = {}));
var ListBucketInventoryConfigurationsRequest;
(function (ListBucketInventoryConfigurationsRequest) {
    /**
     * @internal
     */
    ListBucketInventoryConfigurationsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListBucketInventoryConfigurationsRequest = exports.ListBucketInventoryConfigurationsRequest || (exports.ListBucketInventoryConfigurationsRequest = {}));
var ListBucketMetricsConfigurationsOutput;
(function (ListBucketMetricsConfigurationsOutput) {
    /**
     * @internal
     */
    ListBucketMetricsConfigurationsOutput.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.MetricsConfigurationList && {
            MetricsConfigurationList: obj.MetricsConfigurationList.map((item) => MetricsConfiguration.filterSensitiveLog(item)),
        }),
    });
})(ListBucketMetricsConfigurationsOutput = exports.ListBucketMetricsConfigurationsOutput || (exports.ListBucketMetricsConfigurationsOutput = {}));
var ListBucketMetricsConfigurationsRequest;
(function (ListBucketMetricsConfigurationsRequest) {
    /**
     * @internal
     */
    ListBucketMetricsConfigurationsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListBucketMetricsConfigurationsRequest = exports.ListBucketMetricsConfigurationsRequest || (exports.ListBucketMetricsConfigurationsRequest = {}));
var Bucket;
(function (Bucket) {
    /**
     * @internal
     */
    Bucket.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Bucket = exports.Bucket || (exports.Bucket = {}));
var ListBucketsOutput;
(function (ListBucketsOutput) {
    /**
     * @internal
     */
    ListBucketsOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListBucketsOutput = exports.ListBucketsOutput || (exports.ListBucketsOutput = {}));
var CommonPrefix;
(function (CommonPrefix) {
    /**
     * @internal
     */
    CommonPrefix.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CommonPrefix = exports.CommonPrefix || (exports.CommonPrefix = {}));
var Initiator;
(function (Initiator) {
    /**
     * @internal
     */
    Initiator.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Initiator = exports.Initiator || (exports.Initiator = {}));
var MultipartUpload;
(function (MultipartUpload) {
    /**
     * @internal
     */
    MultipartUpload.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MultipartUpload = exports.MultipartUpload || (exports.MultipartUpload = {}));
var ListMultipartUploadsOutput;
(function (ListMultipartUploadsOutput) {
    /**
     * @internal
     */
    ListMultipartUploadsOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListMultipartUploadsOutput = exports.ListMultipartUploadsOutput || (exports.ListMultipartUploadsOutput = {}));
var ListMultipartUploadsRequest;
(function (ListMultipartUploadsRequest) {
    /**
     * @internal
     */
    ListMultipartUploadsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListMultipartUploadsRequest = exports.ListMultipartUploadsRequest || (exports.ListMultipartUploadsRequest = {}));
var _Object;
(function (_Object) {
    /**
     * @internal
     */
    _Object.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(_Object = exports._Object || (exports._Object = {}));
var ListObjectsOutput;
(function (ListObjectsOutput) {
    /**
     * @internal
     */
    ListObjectsOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListObjectsOutput = exports.ListObjectsOutput || (exports.ListObjectsOutput = {}));
var ListObjectsRequest;
(function (ListObjectsRequest) {
    /**
     * @internal
     */
    ListObjectsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListObjectsRequest = exports.ListObjectsRequest || (exports.ListObjectsRequest = {}));
var NoSuchBucket;
(function (NoSuchBucket) {
    /**
     * @internal
     */
    NoSuchBucket.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NoSuchBucket = exports.NoSuchBucket || (exports.NoSuchBucket = {}));
var ListObjectsV2Output;
(function (ListObjectsV2Output) {
    /**
     * @internal
     */
    ListObjectsV2Output.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListObjectsV2Output = exports.ListObjectsV2Output || (exports.ListObjectsV2Output = {}));
var ListObjectsV2Request;
(function (ListObjectsV2Request) {
    /**
     * @internal
     */
    ListObjectsV2Request.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListObjectsV2Request = exports.ListObjectsV2Request || (exports.ListObjectsV2Request = {}));
var DeleteMarkerEntry;
(function (DeleteMarkerEntry) {
    /**
     * @internal
     */
    DeleteMarkerEntry.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteMarkerEntry = exports.DeleteMarkerEntry || (exports.DeleteMarkerEntry = {}));
var ObjectVersion;
(function (ObjectVersion) {
    /**
     * @internal
     */
    ObjectVersion.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ObjectVersion = exports.ObjectVersion || (exports.ObjectVersion = {}));
var ListObjectVersionsOutput;
(function (ListObjectVersionsOutput) {
    /**
     * @internal
     */
    ListObjectVersionsOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListObjectVersionsOutput = exports.ListObjectVersionsOutput || (exports.ListObjectVersionsOutput = {}));
var ListObjectVersionsRequest;
(function (ListObjectVersionsRequest) {
    /**
     * @internal
     */
    ListObjectVersionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListObjectVersionsRequest = exports.ListObjectVersionsRequest || (exports.ListObjectVersionsRequest = {}));
var Part;
(function (Part) {
    /**
     * @internal
     */
    Part.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Part = exports.Part || (exports.Part = {}));
var ListPartsOutput;
(function (ListPartsOutput) {
    /**
     * @internal
     */
    ListPartsOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListPartsOutput = exports.ListPartsOutput || (exports.ListPartsOutput = {}));
var ListPartsRequest;
(function (ListPartsRequest) {
    /**
     * @internal
     */
    ListPartsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListPartsRequest = exports.ListPartsRequest || (exports.ListPartsRequest = {}));
var PutBucketAccelerateConfigurationRequest;
(function (PutBucketAccelerateConfigurationRequest) {
    /**
     * @internal
     */
    PutBucketAccelerateConfigurationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutBucketAccelerateConfigurationRequest = exports.PutBucketAccelerateConfigurationRequest || (exports.PutBucketAccelerateConfigurationRequest = {}));
var PutBucketAclRequest;
(function (PutBucketAclRequest) {
    /**
     * @internal
     */
    PutBucketAclRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutBucketAclRequest = exports.PutBucketAclRequest || (exports.PutBucketAclRequest = {}));
var PutBucketAnalyticsConfigurationRequest;
(function (PutBucketAnalyticsConfigurationRequest) {
    /**
     * @internal
     */
    PutBucketAnalyticsConfigurationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.AnalyticsConfiguration && {
            AnalyticsConfiguration: AnalyticsConfiguration.filterSensitiveLog(obj.AnalyticsConfiguration),
        }),
    });
})(PutBucketAnalyticsConfigurationRequest = exports.PutBucketAnalyticsConfigurationRequest || (exports.PutBucketAnalyticsConfigurationRequest = {}));
var CORSConfiguration;
(function (CORSConfiguration) {
    /**
     * @internal
     */
    CORSConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CORSConfiguration = exports.CORSConfiguration || (exports.CORSConfiguration = {}));
var PutBucketCorsRequest;
(function (PutBucketCorsRequest) {
    /**
     * @internal
     */
    PutBucketCorsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutBucketCorsRequest = exports.PutBucketCorsRequest || (exports.PutBucketCorsRequest = {}));
var PutBucketEncryptionRequest;
(function (PutBucketEncryptionRequest) {
    /**
     * @internal
     */
    PutBucketEncryptionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.ServerSideEncryptionConfiguration && {
            ServerSideEncryptionConfiguration: ServerSideEncryptionConfiguration.filterSensitiveLog(obj.ServerSideEncryptionConfiguration),
        }),
    });
})(PutBucketEncryptionRequest = exports.PutBucketEncryptionRequest || (exports.PutBucketEncryptionRequest = {}));
var PutBucketIntelligentTieringConfigurationRequest;
(function (PutBucketIntelligentTieringConfigurationRequest) {
    /**
     * @internal
     */
    PutBucketIntelligentTieringConfigurationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutBucketIntelligentTieringConfigurationRequest = exports.PutBucketIntelligentTieringConfigurationRequest || (exports.PutBucketIntelligentTieringConfigurationRequest = {}));
var PutBucketInventoryConfigurationRequest;
(function (PutBucketInventoryConfigurationRequest) {
    /**
     * @internal
     */
    PutBucketInventoryConfigurationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.InventoryConfiguration && {
            InventoryConfiguration: InventoryConfiguration.filterSensitiveLog(obj.InventoryConfiguration),
        }),
    });
})(PutBucketInventoryConfigurationRequest = exports.PutBucketInventoryConfigurationRequest || (exports.PutBucketInventoryConfigurationRequest = {}));
var BucketLifecycleConfiguration;
(function (BucketLifecycleConfiguration) {
    /**
     * @internal
     */
    BucketLifecycleConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Rules && { Rules: obj.Rules.map((item) => LifecycleRule.filterSensitiveLog(item)) }),
    });
})(BucketLifecycleConfiguration = exports.BucketLifecycleConfiguration || (exports.BucketLifecycleConfiguration = {}));
var PutBucketLifecycleConfigurationRequest;
(function (PutBucketLifecycleConfigurationRequest) {
    /**
     * @internal
     */
    PutBucketLifecycleConfigurationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.LifecycleConfiguration && {
            LifecycleConfiguration: BucketLifecycleConfiguration.filterSensitiveLog(obj.LifecycleConfiguration),
        }),
    });
})(PutBucketLifecycleConfigurationRequest = exports.PutBucketLifecycleConfigurationRequest || (exports.PutBucketLifecycleConfigurationRequest = {}));
var BucketLoggingStatus;
(function (BucketLoggingStatus) {
    /**
     * @internal
     */
    BucketLoggingStatus.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BucketLoggingStatus = exports.BucketLoggingStatus || (exports.BucketLoggingStatus = {}));
var PutBucketLoggingRequest;
(function (PutBucketLoggingRequest) {
    /**
     * @internal
     */
    PutBucketLoggingRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutBucketLoggingRequest = exports.PutBucketLoggingRequest || (exports.PutBucketLoggingRequest = {}));
var PutBucketMetricsConfigurationRequest;
(function (PutBucketMetricsConfigurationRequest) {
    /**
     * @internal
     */
    PutBucketMetricsConfigurationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.MetricsConfiguration && {
            MetricsConfiguration: MetricsConfiguration.filterSensitiveLog(obj.MetricsConfiguration),
        }),
    });
})(PutBucketMetricsConfigurationRequest = exports.PutBucketMetricsConfigurationRequest || (exports.PutBucketMetricsConfigurationRequest = {}));
var PutBucketNotificationConfigurationRequest;
(function (PutBucketNotificationConfigurationRequest) {
    /**
     * @internal
     */
    PutBucketNotificationConfigurationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutBucketNotificationConfigurationRequest = exports.PutBucketNotificationConfigurationRequest || (exports.PutBucketNotificationConfigurationRequest = {}));
var PutBucketOwnershipControlsRequest;
(function (PutBucketOwnershipControlsRequest) {
    /**
     * @internal
     */
    PutBucketOwnershipControlsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutBucketOwnershipControlsRequest = exports.PutBucketOwnershipControlsRequest || (exports.PutBucketOwnershipControlsRequest = {}));
var PutBucketPolicyRequest;
(function (PutBucketPolicyRequest) {
    /**
     * @internal
     */
    PutBucketPolicyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutBucketPolicyRequest = exports.PutBucketPolicyRequest || (exports.PutBucketPolicyRequest = {}));
var PutBucketReplicationRequest;
(function (PutBucketReplicationRequest) {
    /**
     * @internal
     */
    PutBucketReplicationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.ReplicationConfiguration && {
            ReplicationConfiguration: ReplicationConfiguration.filterSensitiveLog(obj.ReplicationConfiguration),
        }),
    });
})(PutBucketReplicationRequest = exports.PutBucketReplicationRequest || (exports.PutBucketReplicationRequest = {}));
var RequestPaymentConfiguration;
(function (RequestPaymentConfiguration) {
    /**
     * @internal
     */
    RequestPaymentConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RequestPaymentConfiguration = exports.RequestPaymentConfiguration || (exports.RequestPaymentConfiguration = {}));
var PutBucketRequestPaymentRequest;
(function (PutBucketRequestPaymentRequest) {
    /**
     * @internal
     */
    PutBucketRequestPaymentRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutBucketRequestPaymentRequest = exports.PutBucketRequestPaymentRequest || (exports.PutBucketRequestPaymentRequest = {}));
var Tagging;
(function (Tagging) {
    /**
     * @internal
     */
    Tagging.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Tagging = exports.Tagging || (exports.Tagging = {}));
var PutBucketTaggingRequest;
(function (PutBucketTaggingRequest) {
    /**
     * @internal
     */
    PutBucketTaggingRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutBucketTaggingRequest = exports.PutBucketTaggingRequest || (exports.PutBucketTaggingRequest = {}));
var VersioningConfiguration;
(function (VersioningConfiguration) {
    /**
     * @internal
     */
    VersioningConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(VersioningConfiguration = exports.VersioningConfiguration || (exports.VersioningConfiguration = {}));
var PutBucketVersioningRequest;
(function (PutBucketVersioningRequest) {
    /**
     * @internal
     */
    PutBucketVersioningRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutBucketVersioningRequest = exports.PutBucketVersioningRequest || (exports.PutBucketVersioningRequest = {}));
var WebsiteConfiguration;
(function (WebsiteConfiguration) {
    /**
     * @internal
     */
    WebsiteConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(WebsiteConfiguration = exports.WebsiteConfiguration || (exports.WebsiteConfiguration = {}));
var PutBucketWebsiteRequest;
(function (PutBucketWebsiteRequest) {
    /**
     * @internal
     */
    PutBucketWebsiteRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutBucketWebsiteRequest = exports.PutBucketWebsiteRequest || (exports.PutBucketWebsiteRequest = {}));
var PutObjectOutput;
(function (PutObjectOutput) {
    /**
     * @internal
     */
    PutObjectOutput.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.SSEKMSKeyId && { SSEKMSKeyId: smithy_client_1.SENSITIVE_STRING }),
        ...(obj.SSEKMSEncryptionContext && { SSEKMSEncryptionContext: smithy_client_1.SENSITIVE_STRING }),
    });
})(PutObjectOutput = exports.PutObjectOutput || (exports.PutObjectOutput = {}));
var PutObjectRequest;
(function (PutObjectRequest) {
    /**
     * @internal
     */
    PutObjectRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.SSECustomerKey && { SSECustomerKey: smithy_client_1.SENSITIVE_STRING }),
        ...(obj.SSEKMSKeyId && { SSEKMSKeyId: smithy_client_1.SENSITIVE_STRING }),
        ...(obj.SSEKMSEncryptionContext && { SSEKMSEncryptionContext: smithy_client_1.SENSITIVE_STRING }),
    });
})(PutObjectRequest = exports.PutObjectRequest || (exports.PutObjectRequest = {}));
var PutObjectAclOutput;
(function (PutObjectAclOutput) {
    /**
     * @internal
     */
    PutObjectAclOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutObjectAclOutput = exports.PutObjectAclOutput || (exports.PutObjectAclOutput = {}));
var PutObjectAclRequest;
(function (PutObjectAclRequest) {
    /**
     * @internal
     */
    PutObjectAclRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutObjectAclRequest = exports.PutObjectAclRequest || (exports.PutObjectAclRequest = {}));
var PutObjectLegalHoldOutput;
(function (PutObjectLegalHoldOutput) {
    /**
     * @internal
     */
    PutObjectLegalHoldOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutObjectLegalHoldOutput = exports.PutObjectLegalHoldOutput || (exports.PutObjectLegalHoldOutput = {}));
var PutObjectLegalHoldRequest;
(function (PutObjectLegalHoldRequest) {
    /**
     * @internal
     */
    PutObjectLegalHoldRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutObjectLegalHoldRequest = exports.PutObjectLegalHoldRequest || (exports.PutObjectLegalHoldRequest = {}));
var PutObjectLockConfigurationOutput;
(function (PutObjectLockConfigurationOutput) {
    /**
     * @internal
     */
    PutObjectLockConfigurationOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutObjectLockConfigurationOutput = exports.PutObjectLockConfigurationOutput || (exports.PutObjectLockConfigurationOutput = {}));
var PutObjectLockConfigurationRequest;
(function (PutObjectLockConfigurationRequest) {
    /**
     * @internal
     */
    PutObjectLockConfigurationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutObjectLockConfigurationRequest = exports.PutObjectLockConfigurationRequest || (exports.PutObjectLockConfigurationRequest = {}));
var PutObjectRetentionOutput;
(function (PutObjectRetentionOutput) {
    /**
     * @internal
     */
    PutObjectRetentionOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutObjectRetentionOutput = exports.PutObjectRetentionOutput || (exports.PutObjectRetentionOutput = {}));
var PutObjectRetentionRequest;
(function (PutObjectRetentionRequest) {
    /**
     * @internal
     */
    PutObjectRetentionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutObjectRetentionRequest = exports.PutObjectRetentionRequest || (exports.PutObjectRetentionRequest = {}));
var PutObjectTaggingOutput;
(function (PutObjectTaggingOutput) {
    /**
     * @internal
     */
    PutObjectTaggingOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutObjectTaggingOutput = exports.PutObjectTaggingOutput || (exports.PutObjectTaggingOutput = {}));
var PutObjectTaggingRequest;
(function (PutObjectTaggingRequest) {
    /**
     * @internal
     */
    PutObjectTaggingRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutObjectTaggingRequest = exports.PutObjectTaggingRequest || (exports.PutObjectTaggingRequest = {}));
var PutPublicAccessBlockRequest;
(function (PutPublicAccessBlockRequest) {
    /**
     * @internal
     */
    PutPublicAccessBlockRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutPublicAccessBlockRequest = exports.PutPublicAccessBlockRequest || (exports.PutPublicAccessBlockRequest = {}));
var ObjectAlreadyInActiveTierError;
(function (ObjectAlreadyInActiveTierError) {
    /**
     * @internal
     */
    ObjectAlreadyInActiveTierError.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ObjectAlreadyInActiveTierError = exports.ObjectAlreadyInActiveTierError || (exports.ObjectAlreadyInActiveTierError = {}));
var RestoreObjectOutput;
(function (RestoreObjectOutput) {
    /**
     * @internal
     */
    RestoreObjectOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RestoreObjectOutput = exports.RestoreObjectOutput || (exports.RestoreObjectOutput = {}));
var GlacierJobParameters;
(function (GlacierJobParameters) {
    /**
     * @internal
     */
    GlacierJobParameters.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GlacierJobParameters = exports.GlacierJobParameters || (exports.GlacierJobParameters = {}));
//# sourceMappingURL=models_0.js.map