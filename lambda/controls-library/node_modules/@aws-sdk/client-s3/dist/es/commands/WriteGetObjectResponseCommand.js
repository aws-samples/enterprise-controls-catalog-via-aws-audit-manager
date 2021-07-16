import { __extends } from "tslib";
import { WriteGetObjectResponseRequest } from "../models/models_1";
import { deserializeAws_restXmlWriteGetObjectResponseCommand, serializeAws_restXmlWriteGetObjectResponseCommand, } from "../protocols/Aws_restXml";
import { getBucketEndpointPlugin } from "@aws-sdk/middleware-bucket-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
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
var WriteGetObjectResponseCommand = /** @class */ (function (_super) {
    __extends(WriteGetObjectResponseCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function WriteGetObjectResponseCommand(input) {
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
    WriteGetObjectResponseCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getBucketEndpointPlugin(configuration));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "S3Client";
        var commandName = "WriteGetObjectResponseCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: WriteGetObjectResponseRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    WriteGetObjectResponseCommand.prototype.serialize = function (input, context) {
        return serializeAws_restXmlWriteGetObjectResponseCommand(input, context);
    };
    WriteGetObjectResponseCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restXmlWriteGetObjectResponseCommand(output, context);
    };
    return WriteGetObjectResponseCommand;
}($Command));
export { WriteGetObjectResponseCommand };
//# sourceMappingURL=WriteGetObjectResponseCommand.js.map