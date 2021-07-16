import { __extends } from "tslib";
import { HeadBucketRequest } from "../models/models_0";
import { deserializeAws_restXmlHeadBucketCommand, serializeAws_restXmlHeadBucketCommand, } from "../protocols/Aws_restXml";
import { getBucketEndpointPlugin } from "@aws-sdk/middleware-bucket-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
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
var HeadBucketCommand = /** @class */ (function (_super) {
    __extends(HeadBucketCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function HeadBucketCommand(input) {
        var _this = 
        // Start section: command_constructor
        _super.call(this) || this;
        _this.input = input;
        return _this;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    HeadBucketCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getBucketEndpointPlugin(configuration));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "S3Client";
        var commandName = "HeadBucketCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: HeadBucketRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    HeadBucketCommand.prototype.serialize = function (input, context) {
        return serializeAws_restXmlHeadBucketCommand(input, context);
    };
    HeadBucketCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restXmlHeadBucketCommand(output, context);
    };
    return HeadBucketCommand;
}($Command));
export { HeadBucketCommand };
//# sourceMappingURL=HeadBucketCommand.js.map