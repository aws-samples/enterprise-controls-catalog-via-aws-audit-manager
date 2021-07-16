import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";
import { GetObjectAclOutput, GetObjectAclRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetObjectAclCommandInput extends GetObjectAclRequest {
}
export interface GetObjectAclCommandOutput extends GetObjectAclOutput, __MetadataBearer {
}
/**
 * <p>Returns the access control list (ACL) of an object. To use this operation, you must have
 *             <code>READ_ACP</code> access to the object.</p>
 *          <p>This action is not supported by Amazon S3 on Outposts.</p>
 *             <p>
 *             <b>Versioning</b>
 *          </p>
 *          <p>By default, GET returns ACL information about the current version of an object. To
 *          return ACL information about a different version, use the versionId subresource.</p>
 *
 *          <p>The following operations are related to <code>GetObjectAcl</code>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObject.html">GetObject</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteObject.html">DeleteObject</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObject.html">PutObject</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, GetObjectAclCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, GetObjectAclCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * const client = new S3Client(config);
 * const command = new GetObjectAclCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetObjectAclCommandInput} for command's `input` shape.
 * @see {@link GetObjectAclCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetObjectAclCommand extends $Command<GetObjectAclCommandInput, GetObjectAclCommandOutput, S3ClientResolvedConfig> {
    readonly input: GetObjectAclCommandInput;
    constructor(input: GetObjectAclCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: S3ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetObjectAclCommandInput, GetObjectAclCommandOutput>;
    private serialize;
    private deserialize;
}
