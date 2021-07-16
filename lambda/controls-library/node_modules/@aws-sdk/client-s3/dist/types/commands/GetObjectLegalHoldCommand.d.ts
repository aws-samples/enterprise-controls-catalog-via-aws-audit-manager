import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";
import { GetObjectLegalHoldOutput, GetObjectLegalHoldRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetObjectLegalHoldCommandInput extends GetObjectLegalHoldRequest {
}
export interface GetObjectLegalHoldCommandOutput extends GetObjectLegalHoldOutput, __MetadataBearer {
}
/**
 * <p>Gets an object's current Legal Hold status. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lock.html">Locking Objects</a>.</p>
 *          <p>This action is not supported by Amazon S3 on Outposts.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, GetObjectLegalHoldCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, GetObjectLegalHoldCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * const client = new S3Client(config);
 * const command = new GetObjectLegalHoldCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetObjectLegalHoldCommandInput} for command's `input` shape.
 * @see {@link GetObjectLegalHoldCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetObjectLegalHoldCommand extends $Command<GetObjectLegalHoldCommandInput, GetObjectLegalHoldCommandOutput, S3ClientResolvedConfig> {
    readonly input: GetObjectLegalHoldCommandInput;
    constructor(input: GetObjectLegalHoldCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: S3ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetObjectLegalHoldCommandInput, GetObjectLegalHoldCommandOutput>;
    private serialize;
    private deserialize;
}
