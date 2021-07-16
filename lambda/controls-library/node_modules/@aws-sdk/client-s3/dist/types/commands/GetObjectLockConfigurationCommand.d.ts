import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";
import { GetObjectLockConfigurationOutput, GetObjectLockConfigurationRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetObjectLockConfigurationCommandInput extends GetObjectLockConfigurationRequest {
}
export interface GetObjectLockConfigurationCommandOutput extends GetObjectLockConfigurationOutput, __MetadataBearer {
}
/**
 * <p>Gets the Object Lock configuration for a bucket. The rule specified in the Object Lock
 *          configuration will be applied by default to every new object placed in the specified
 *          bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lock.html">Locking
 *             Objects</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, GetObjectLockConfigurationCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, GetObjectLockConfigurationCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * const client = new S3Client(config);
 * const command = new GetObjectLockConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetObjectLockConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetObjectLockConfigurationCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetObjectLockConfigurationCommand extends $Command<GetObjectLockConfigurationCommandInput, GetObjectLockConfigurationCommandOutput, S3ClientResolvedConfig> {
    readonly input: GetObjectLockConfigurationCommandInput;
    constructor(input: GetObjectLockConfigurationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: S3ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetObjectLockConfigurationCommandInput, GetObjectLockConfigurationCommandOutput>;
    private serialize;
    private deserialize;
}
