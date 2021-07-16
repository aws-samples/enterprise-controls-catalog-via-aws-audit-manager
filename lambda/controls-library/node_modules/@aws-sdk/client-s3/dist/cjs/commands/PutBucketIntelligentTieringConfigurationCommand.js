"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PutBucketIntelligentTieringConfigurationCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restXml_1 = require("../protocols/Aws_restXml");
const middleware_bucket_endpoint_1 = require("@aws-sdk/middleware-bucket-endpoint");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Puts a S3 Intelligent-Tiering configuration to the specified bucket.
 *       You can have up to 1,000 S3 Intelligent-Tiering configurations per bucket.</p>
 *          <p>The S3 Intelligent-Tiering storage class is designed to optimize storage costs by automatically moving data to the most cost-effective storage access tier, without additional operational overhead. S3 Intelligent-Tiering delivers automatic cost savings by moving data between access tiers, when access patterns change.</p>
 *          <p>The S3 Intelligent-Tiering storage class is suitable for objects larger than 128 KB that you plan to store for at least 30 days. If the size of an object is less than 128 KB, it is not eligible for auto-tiering. Smaller objects can be stored, but they are always charged at the frequent access tier rates in the S3 Intelligent-Tiering storage class. </p>
 *          <p>If you delete an object before the end of the 30-day minimum storage duration period, you are charged for 30 days. For more information, see  <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/storage-class-intro.html#sc-dynamic-data-access">Storage class for automatically optimizing frequently and infrequently accessed objects</a>.</p>
 *          <p>Operations related to
 *             <code>PutBucketIntelligentTieringConfiguration</code> include: </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucketIntelligentTieringConfiguration.html">DeleteBucketIntelligentTieringConfiguration</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketIntelligentTieringConfiguration.html">GetBucketIntelligentTieringConfiguration</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListBucketIntelligentTieringConfigurations.html">ListBucketIntelligentTieringConfigurations</a>
 *                </p>
 *             </li>
 *          </ul>
 *          <note>
 *             <p>You only need S3 Intelligent-Tiering enabled on a bucket if you want to automatically
 *             move objects stored in the S3 Intelligent-Tiering storage class to the
 *             Archive Access or Deep Archive Access tier.</p>
 *          </note>
 *
 *          <p class="title">
 *             <b>Special Errors</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p class="title">
 *                   <b>HTTP 400 Bad Request Error</b>
 *                </p>
 *                <ul>
 *                   <li>
 *                      <p>
 *                         <i>Code:</i> InvalidArgument</p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <i>Cause:</i> Invalid Argument</p>
 *                   </li>
 *                </ul>
 *             </li>
 *             <li>
 *                <p class="title">
 *                   <b>HTTP 400 Bad Request Error</b>
 *                </p>
 *                <ul>
 *                   <li>
 *                      <p>
 *                         <i>Code:</i> TooManyConfigurations</p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <i>Cause:</i> You are attempting to create a new configuration
 *                      but have already reached the 1,000-configuration limit. </p>
 *                   </li>
 *                </ul>
 *             </li>
 *             <li>
 *                <p class="title">
 *                   <b>HTTP 403 Forbidden Error</b>
 *                </p>
 *                <ul>
 *                   <li>
 *                      <p>
 *                         <i>Code:</i> AccessDenied</p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <i>Cause:</i> You are not the owner of the specified bucket,
 *                      or you do not have the <code>s3:PutIntelligentTieringConfiguration</code> bucket
 *                      permission to set the configuration on the bucket. </p>
 *                   </li>
 *                </ul>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, PutBucketIntelligentTieringConfigurationCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, PutBucketIntelligentTieringConfigurationCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * const client = new S3Client(config);
 * const command = new PutBucketIntelligentTieringConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutBucketIntelligentTieringConfigurationCommandInput} for command's `input` shape.
 * @see {@link PutBucketIntelligentTieringConfigurationCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for command's `input` shape.
 *
 */
class PutBucketIntelligentTieringConfigurationCommand extends smithy_client_1.Command {
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
        const commandName = "PutBucketIntelligentTieringConfigurationCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.PutBucketIntelligentTieringConfigurationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: (output) => output,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restXml_1.serializeAws_restXmlPutBucketIntelligentTieringConfigurationCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restXml_1.deserializeAws_restXmlPutBucketIntelligentTieringConfigurationCommand(output, context);
    }
}
exports.PutBucketIntelligentTieringConfigurationCommand = PutBucketIntelligentTieringConfigurationCommand;
//# sourceMappingURL=PutBucketIntelligentTieringConfigurationCommand.js.map