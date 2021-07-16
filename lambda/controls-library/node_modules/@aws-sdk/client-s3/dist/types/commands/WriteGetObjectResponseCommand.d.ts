/// <reference types="node" />
import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";
import { WriteGetObjectResponseRequest } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
declare type WriteGetObjectResponseCommandInputType = Omit<WriteGetObjectResponseRequest, "Body"> & {
    /**
     * For *`WriteGetObjectResponseRequest["Body"]`*, see {@link WriteGetObjectResponseRequest.Body}.
     */
    Body?: WriteGetObjectResponseRequest["Body"] | string | Uint8Array | Buffer;
};
/**
 * This interface extends from `WriteGetObjectResponseRequest` interface. There are more parameters than `Body` defined in {@link WriteGetObjectResponseRequest}
 */
export interface WriteGetObjectResponseCommandInput extends WriteGetObjectResponseCommandInputType {
}
export interface WriteGetObjectResponseCommandOutput extends __MetadataBearer {
}
/**
 * <p>Passes transformed
 *          objects to a <code>GetObject</code> operation when using Object Lambda Access Points. For information about
 *          Object Lambda Access Points, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/transforming-objects.html">Transforming objects with
 *             Object Lambda Access Points</a> in the <i>Amazon S3 User Guide</i>.</p>
 *          <p>This operation supports metadata that can be returned by <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObject.html">GetObject</a>, in addition to
 *             <code>RequestRoute</code>, <code>RequestToken</code>, <code>StatusCode</code>,
 *             <code>ErrorCode</code>, and <code>ErrorMessage</code>. The <code>GetObject</code>
 *          response metadata is supported so that the <code>WriteGetObjectResponse</code> caller,
 *          typically an AWS Lambda function, can provide the same metadata when it internally invokes
 *             <code>GetObject</code>. When <code>WriteGetObjectResponse</code> is called by a
 *          customer-owned Lambda function, the metadata returned to the end user
 *             <code>GetObject</code> call might differ from what Amazon S3 would normally return.</p>
 *          <p>AWS provides some prebuilt Lambda functions that you can use with S3 Object Lambda to detect and redact
 *           personally identifiable information (PII) and decompress S3 objects. These Lambda functions
 *           are available in the AWS Serverless Application Repository, and can be selected through the AWS Management Console when you create your
 *           Object Lambda Access Point.</p>
 *          <p>Example 1: PII Access Control - This Lambda function uses Amazon Comprehend, a natural language processing (NLP) service using machine learning to find insights and relationships in text. It automatically detects personally identifiable information (PII) such as names, addresses, dates, credit card numbers, and social security numbers from documents in your Amazon S3 bucket. </p>
 *          <p>Example 2: PII Redaction - This Lambda function uses Amazon Comprehend, a natural language processing (NLP) service using machine learning to find insights and relationships in text. It automatically redacts personally identifiable information (PII) such as names, addresses, dates, credit card numbers, and social security numbers from documents in your Amazon S3 bucket. </p>
 *          <p>Example 3: Decompression - The Lambda function S3ObjectLambdaDecompression, is equipped to decompress objects stored in S3 in one of six compressed file formats including bzip2, gzip, snappy, zlib, zstandard and ZIP. </p>
 *          <p>For information on how to view and use these functions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/olap-examples.html">Using AWS built Lambda functions</a> in the <i>Amazon S3 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, WriteGetObjectResponseCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, WriteGetObjectResponseCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * const client = new S3Client(config);
 * const command = new WriteGetObjectResponseCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link WriteGetObjectResponseCommandInput} for command's `input` shape.
 * @see {@link WriteGetObjectResponseCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class WriteGetObjectResponseCommand extends $Command<WriteGetObjectResponseCommandInput, WriteGetObjectResponseCommandOutput, S3ClientResolvedConfig> {
    readonly input: WriteGetObjectResponseCommandInput;
    constructor(input: WriteGetObjectResponseCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: S3ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<WriteGetObjectResponseCommandInput, WriteGetObjectResponseCommandOutput>;
    private serialize;
    private deserialize;
}
export {};
