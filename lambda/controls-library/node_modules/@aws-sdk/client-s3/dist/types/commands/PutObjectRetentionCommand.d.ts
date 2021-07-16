import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";
import { PutObjectRetentionOutput, PutObjectRetentionRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface PutObjectRetentionCommandInput extends PutObjectRetentionRequest {
}
export interface PutObjectRetentionCommandOutput extends PutObjectRetentionOutput, __MetadataBearer {
}
/**
 * <p>Places an Object Retention configuration on an object. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lock.html">Locking Objects</a>.
 *          </p>
 *          <p>This action is not supported by Amazon S3 on Outposts.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, PutObjectRetentionCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, PutObjectRetentionCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * const client = new S3Client(config);
 * const command = new PutObjectRetentionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutObjectRetentionCommandInput} for command's `input` shape.
 * @see {@link PutObjectRetentionCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class PutObjectRetentionCommand extends $Command<PutObjectRetentionCommandInput, PutObjectRetentionCommandOutput, S3ClientResolvedConfig> {
    readonly input: PutObjectRetentionCommandInput;
    constructor(input: PutObjectRetentionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: S3ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutObjectRetentionCommandInput, PutObjectRetentionCommandOutput>;
    private serialize;
    private deserialize;
}
