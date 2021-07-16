import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";
import { GetBucketLocationOutput, GetBucketLocationRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetBucketLocationCommandInput extends GetBucketLocationRequest {
}
export interface GetBucketLocationCommandOutput extends GetBucketLocationOutput, __MetadataBearer {
}
/**
 * <p>Returns the Region the bucket resides in. You set the bucket's Region using the
 *             <code>LocationConstraint</code> request parameter in a <code>CreateBucket</code>
 *          request. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_CreateBucket.html">CreateBucket</a>.</p>
 *
 *          <p> To use this implementation of the operation, you must be the bucket owner.</p>
 *
 *          <p>The following operations are related to <code>GetBucketLocation</code>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObject.html">GetObject</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_CreateBucket.html">CreateBucket</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, GetBucketLocationCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, GetBucketLocationCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * const client = new S3Client(config);
 * const command = new GetBucketLocationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetBucketLocationCommandInput} for command's `input` shape.
 * @see {@link GetBucketLocationCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetBucketLocationCommand extends $Command<GetBucketLocationCommandInput, GetBucketLocationCommandOutput, S3ClientResolvedConfig> {
    readonly input: GetBucketLocationCommandInput;
    constructor(input: GetBucketLocationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: S3ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetBucketLocationCommandInput, GetBucketLocationCommandOutput>;
    private serialize;
    private deserialize;
}
