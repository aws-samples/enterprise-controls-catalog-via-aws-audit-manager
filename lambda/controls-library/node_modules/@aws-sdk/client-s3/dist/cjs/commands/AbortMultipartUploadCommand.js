"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbortMultipartUploadCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restXml_1 = require("../protocols/Aws_restXml");
const middleware_bucket_endpoint_1 = require("@aws-sdk/middleware-bucket-endpoint");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>This action aborts a multipart upload. After a multipart upload is aborted, no
 *          additional parts can be uploaded using that upload ID. The storage consumed by any
 *          previously uploaded parts will be freed. However, if any part uploads are currently in
 *          progress, those part uploads might or might not succeed. As a result, it might be necessary
 *          to abort a given multipart upload multiple times in order to completely free all storage
 *          consumed by all parts. </p>
 *          <p>To verify that all parts have been removed, so you don't get charged for the part
 *          storage, you should call the <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListParts.html">ListParts</a> action and ensure that
 *          the parts list is empty.</p>
 *          <p>For information about permissions required to use the multipart upload, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/mpuAndPermissions.html">Multipart Upload and
 *          Permissions</a>.</p>
 *          <p>The following operations are related to <code>AbortMultipartUpload</code>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_CreateMultipartUpload.html">CreateMultipartUpload</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_UploadPart.html">UploadPart</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_CompleteMultipartUpload.html">CompleteMultipartUpload</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListParts.html">ListParts</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListMultipartUploads.html">ListMultipartUploads</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, AbortMultipartUploadCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, AbortMultipartUploadCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * const client = new S3Client(config);
 * const command = new AbortMultipartUploadCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AbortMultipartUploadCommandInput} for command's `input` shape.
 * @see {@link AbortMultipartUploadCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for command's `input` shape.
 *
 */
class AbortMultipartUploadCommand extends smithy_client_1.Command {
    // Start section: command_properties
    // End section: command_properties
    constructor(input) {
        // Start section: command_constructor
        super();
        this.input = input;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(middleware_serde_1.getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(middleware_bucket_endpoint_1.getBucketEndpointPlugin(configuration));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "S3Client";
        const commandName = "AbortMultipartUploadCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.AbortMultipartUploadRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.AbortMultipartUploadOutput.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restXml_1.serializeAws_restXmlAbortMultipartUploadCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restXml_1.deserializeAws_restXmlAbortMultipartUploadCommand(output, context);
    }
}
exports.AbortMultipartUploadCommand = AbortMultipartUploadCommand;
//# sourceMappingURL=AbortMultipartUploadCommand.js.map