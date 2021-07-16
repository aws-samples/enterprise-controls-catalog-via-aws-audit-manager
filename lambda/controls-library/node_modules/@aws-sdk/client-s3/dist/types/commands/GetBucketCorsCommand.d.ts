import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";
import { GetBucketCorsOutput, GetBucketCorsRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetBucketCorsCommandInput extends GetBucketCorsRequest {
}
export interface GetBucketCorsCommandOutput extends GetBucketCorsOutput, __MetadataBearer {
}
/**
 * <p>Returns the cors configuration information set for the bucket.</p>
 *
 *          <p> To use this operation, you must have permission to perform the s3:GetBucketCORS action.
 *          By default, the bucket owner has this permission and can grant it to others.</p>
 *
 *          <p> For more information about cors, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/cors.html"> Enabling
 *             Cross-Origin Resource Sharing</a>.</p>
 *
 *          <p>The following operations are related to <code>GetBucketCors</code>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketCors.html">PutBucketCors</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucketCors.html">DeleteBucketCors</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, GetBucketCorsCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, GetBucketCorsCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * const client = new S3Client(config);
 * const command = new GetBucketCorsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetBucketCorsCommandInput} for command's `input` shape.
 * @see {@link GetBucketCorsCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetBucketCorsCommand extends $Command<GetBucketCorsCommandInput, GetBucketCorsCommandOutput, S3ClientResolvedConfig> {
    readonly input: GetBucketCorsCommandInput;
    constructor(input: GetBucketCorsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: S3ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetBucketCorsCommandInput, GetBucketCorsCommandOutput>;
    private serialize;
    private deserialize;
}
