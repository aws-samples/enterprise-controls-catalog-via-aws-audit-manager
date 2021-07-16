import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";
import { HeadBucketRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface HeadBucketCommandInput extends HeadBucketRequest {
}
export interface HeadBucketCommandOutput extends __MetadataBearer {
}
/**
 * <p>This action is useful to determine if a bucket exists and you have permission to
 *          access it. The action returns a <code>200 OK</code> if the bucket exists and you have
 *          permission to access it.</p>
 *
 *
 *          <p>If the bucket does not exist or you do not have permission to access it, the <code>HEAD</code> request
 *          returns a generic <code>404 Not Found</code> or <code>403 Forbidden</code> code. A message body is not
 *          included, so you cannot determine the exception beyond these error codes.</p>
 *
 *          <p>To use this operation, you must have permissions to perform the
 *             <code>s3:ListBucket</code> action. The bucket owner has this permission by default and
 *          can grant this permission to others. For more information about permissions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-with-s3-actions.html#using-with-s3-actions-related-to-bucket-subresources">Permissions Related to Bucket Subresource Operations</a> and <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-access-control.html">Managing Access Permissions to Your Amazon S3
 *             Resources</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, HeadBucketCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, HeadBucketCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * const client = new S3Client(config);
 * const command = new HeadBucketCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link HeadBucketCommandInput} for command's `input` shape.
 * @see {@link HeadBucketCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class HeadBucketCommand extends $Command<HeadBucketCommandInput, HeadBucketCommandOutput, S3ClientResolvedConfig> {
    readonly input: HeadBucketCommandInput;
    constructor(input: HeadBucketCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: S3ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<HeadBucketCommandInput, HeadBucketCommandOutput>;
    private serialize;
    private deserialize;
}
