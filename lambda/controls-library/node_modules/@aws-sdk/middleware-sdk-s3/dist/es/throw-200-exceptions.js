import { __awaiter, __generator } from "tslib";
import { HttpResponse } from "@aws-sdk/protocol-http";
/**
 * In case of an internal error/terminated connection, S3 operations may return 200 errors. CopyObject, UploadPartCopy,
 * CompleteMultipartUpload may return empty payload or payload with only xml Preamble.
 * @internal
 */
export var throw200ExceptionsMiddleware = function (config) {
    return function (next) {
        return function (args) { return __awaiter(void 0, void 0, void 0, function () {
            var result, response, statusCode, body, bodyBytes, bodyString, err;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, next(args)];
                    case 1:
                        result = _a.sent();
                        response = result.response;
                        if (!HttpResponse.isInstance(response))
                            return [2 /*return*/, result];
                        statusCode = response.statusCode, body = response.body;
                        if (statusCode < 200 && statusCode >= 300)
                            return [2 /*return*/, result];
                        return [4 /*yield*/, collectBody(body, config)];
                    case 2:
                        bodyBytes = _a.sent();
                        return [4 /*yield*/, collectBodyString(bodyBytes, config)];
                    case 3:
                        bodyString = _a.sent();
                        if (bodyBytes.length === 0) {
                            err = new Error("S3 aborted request");
                            err.name = "InternalError";
                            throw err;
                        }
                        if (bodyString && bodyString.match("<Error>")) {
                            // Set the error code to 4XX so that error deserializer can parse them
                            response.statusCode = 400;
                        }
                        // Body stream is consumed and paused at this point. So replace the response.body to the collected bytes.
                        // So that the deserializer can consume the body as normal.
                        response.body = bodyBytes;
                        return [2 /*return*/, result];
                }
            });
        }); };
    };
};
// Collect low-level response body stream to Uint8Array.
var collectBody = function (streamBody, context) {
    if (streamBody === void 0) { streamBody = new Uint8Array(); }
    if (streamBody instanceof Uint8Array) {
        return Promise.resolve(streamBody);
    }
    return context.streamCollector(streamBody) || Promise.resolve(new Uint8Array());
};
// Encode Uint8Array data into string with utf-8.
var collectBodyString = function (streamBody, context) {
    return collectBody(streamBody, context).then(function (body) { return context.utf8Encoder(body); });
};
/**
 * @internal
 */
export var throw200ExceptionsMiddlewareOptions = {
    relation: "after",
    toMiddleware: "deserializerMiddleware",
    tags: ["THROW_200_EXCEPTIONS", "S3"],
    name: "throw200ExceptionsMiddleware",
    override: true,
};
/**
 *
 * @internal
 */
export var getThrow200ExceptionsPlugin = function (config) { return ({
    applyToStack: function (clientStack) {
        clientStack.addRelativeTo(throw200ExceptionsMiddleware(config), throw200ExceptionsMiddlewareOptions);
    },
}); };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhyb3ctMjAwLWV4Y2VwdGlvbnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdGhyb3ctMjAwLWV4Y2VwdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQVF0RDs7OztHQUlHO0FBQ0gsTUFBTSxDQUFDLElBQU0sNEJBQTRCLEdBQ3ZDLFVBQUMsTUFBMEI7SUFDM0IsT0FBQSxVQUFDLElBQUk7UUFDTCxPQUFBLFVBQU8sSUFBSTs7Ozs0QkFDTSxxQkFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUE7O3dCQUF6QixNQUFNLEdBQUcsU0FBZ0I7d0JBQ3ZCLFFBQVEsR0FBSyxNQUFNLFNBQVgsQ0FBWTt3QkFDNUIsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDOzRCQUFFLHNCQUFPLE1BQU0sRUFBQzt3QkFDOUMsVUFBVSxHQUFXLFFBQVEsV0FBbkIsRUFBRSxJQUFJLEdBQUssUUFBUSxLQUFiLENBQWM7d0JBQ3RDLElBQUksVUFBVSxHQUFHLEdBQUcsSUFBSSxVQUFVLElBQUksR0FBRzs0QkFBRSxzQkFBTyxNQUFNLEVBQUM7d0JBR3ZDLHFCQUFNLFdBQVcsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLEVBQUE7O3dCQUEzQyxTQUFTLEdBQUcsU0FBK0I7d0JBQzlCLHFCQUFNLGlCQUFpQixDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUMsRUFBQTs7d0JBQXZELFVBQVUsR0FBRyxTQUEwQzt3QkFDN0QsSUFBSSxTQUFTLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTs0QkFDcEIsR0FBRyxHQUFHLElBQUksS0FBSyxDQUFDLG9CQUFvQixDQUFDLENBQUM7NEJBQzVDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsZUFBZSxDQUFDOzRCQUMzQixNQUFNLEdBQUcsQ0FBQzt5QkFDWDt3QkFDRCxJQUFJLFVBQVUsSUFBSSxVQUFVLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxFQUFFOzRCQUM3QyxzRUFBc0U7NEJBQ3RFLFFBQVEsQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDO3lCQUMzQjt3QkFFRCx5R0FBeUc7d0JBQ3pHLDJEQUEyRDt3QkFDM0QsUUFBUSxDQUFDLElBQUksR0FBRyxTQUFTLENBQUM7d0JBQzFCLHNCQUFPLE1BQU0sRUFBQzs7O2FBQ2Y7SUF4QkQsQ0F3QkM7QUF6QkQsQ0F5QkMsQ0FBQztBQUVKLHdEQUF3RDtBQUN4RCxJQUFNLFdBQVcsR0FBRyxVQUFDLFVBQWtDLEVBQUUsT0FBMkI7SUFBL0QsMkJBQUEsRUFBQSxpQkFBc0IsVUFBVSxFQUFFO0lBQ3JELElBQUksVUFBVSxZQUFZLFVBQVUsRUFBRTtRQUNwQyxPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7S0FDcEM7SUFDRCxPQUFPLE9BQU8sQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLFVBQVUsRUFBRSxDQUFDLENBQUM7QUFDbEYsQ0FBQyxDQUFDO0FBRUYsaURBQWlEO0FBQ2pELElBQU0saUJBQWlCLEdBQUcsVUFBQyxVQUFlLEVBQUUsT0FBMkI7SUFDckUsT0FBQSxXQUFXLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLElBQUksSUFBSyxPQUFBLE9BQU8sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQXpCLENBQXlCLENBQUM7QUFBMUUsQ0FBMEUsQ0FBQztBQUU3RTs7R0FFRztBQUNILE1BQU0sQ0FBQyxJQUFNLG1DQUFtQyxHQUE4QjtJQUM1RSxRQUFRLEVBQUUsT0FBTztJQUNqQixZQUFZLEVBQUUsd0JBQXdCO0lBQ3RDLElBQUksRUFBRSxDQUFDLHNCQUFzQixFQUFFLElBQUksQ0FBQztJQUNwQyxJQUFJLEVBQUUsOEJBQThCO0lBQ3BDLFFBQVEsRUFBRSxJQUFJO0NBQ2YsQ0FBQztBQUVGOzs7R0FHRztBQUNILE1BQU0sQ0FBQyxJQUFNLDJCQUEyQixHQUFHLFVBQUMsTUFBMEIsSUFBMEIsT0FBQSxDQUFDO0lBQy9GLFlBQVksRUFBRSxVQUFDLFdBQVc7UUFDeEIsV0FBVyxDQUFDLGFBQWEsQ0FBQyw0QkFBNEIsQ0FBQyxNQUFNLENBQUMsRUFBRSxtQ0FBbUMsQ0FBQyxDQUFDO0lBQ3ZHLENBQUM7Q0FDRixDQUFDLEVBSjhGLENBSTlGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwUmVzcG9uc2UgfSBmcm9tIFwiQGF3cy1zZGsvcHJvdG9jb2wtaHR0cFwiO1xuaW1wb3J0IHsgRGVzZXJpYWxpemVNaWRkbGV3YXJlLCBFbmNvZGVyLCBQbHVnZ2FibGUsIFJlbGF0aXZlTWlkZGxld2FyZU9wdGlvbnMsIFN0cmVhbUNvbGxlY3RvciB9IGZyb20gXCJAYXdzLXNkay90eXBlc1wiO1xuXG50eXBlIFByZXZpb3VzbHlSZXNvbHZlZCA9IHtcbiAgc3RyZWFtQ29sbGVjdG9yOiBTdHJlYW1Db2xsZWN0b3I7XG4gIHV0ZjhFbmNvZGVyOiBFbmNvZGVyO1xufTtcblxuLyoqXG4gKiBJbiBjYXNlIG9mIGFuIGludGVybmFsIGVycm9yL3Rlcm1pbmF0ZWQgY29ubmVjdGlvbiwgUzMgb3BlcmF0aW9ucyBtYXkgcmV0dXJuIDIwMCBlcnJvcnMuIENvcHlPYmplY3QsIFVwbG9hZFBhcnRDb3B5LFxuICogQ29tcGxldGVNdWx0aXBhcnRVcGxvYWQgbWF5IHJldHVybiBlbXB0eSBwYXlsb2FkIG9yIHBheWxvYWQgd2l0aCBvbmx5IHhtbCBQcmVhbWJsZS5cbiAqIEBpbnRlcm5hbFxuICovXG5leHBvcnQgY29uc3QgdGhyb3cyMDBFeGNlcHRpb25zTWlkZGxld2FyZSA9XG4gIChjb25maWc6IFByZXZpb3VzbHlSZXNvbHZlZCk6IERlc2VyaWFsaXplTWlkZGxld2FyZTxhbnksIGFueT4gPT5cbiAgKG5leHQpID0+XG4gIGFzeW5jIChhcmdzKSA9PiB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbmV4dChhcmdzKTtcbiAgICBjb25zdCB7IHJlc3BvbnNlIH0gPSByZXN1bHQ7XG4gICAgaWYgKCFIdHRwUmVzcG9uc2UuaXNJbnN0YW5jZShyZXNwb25zZSkpIHJldHVybiByZXN1bHQ7XG4gICAgY29uc3QgeyBzdGF0dXNDb2RlLCBib2R5IH0gPSByZXNwb25zZTtcbiAgICBpZiAoc3RhdHVzQ29kZSA8IDIwMCAmJiBzdGF0dXNDb2RlID49IDMwMCkgcmV0dXJuIHJlc3VsdDtcblxuICAgIC8vIFRocm93IDJYWCByZXNwb25zZSB0aGF0J3MgZWl0aGVyIGFuIGVycm9yIG9yIGhhcyBlbXB0eSBib2R5LlxuICAgIGNvbnN0IGJvZHlCeXRlcyA9IGF3YWl0IGNvbGxlY3RCb2R5KGJvZHksIGNvbmZpZyk7XG4gICAgY29uc3QgYm9keVN0cmluZyA9IGF3YWl0IGNvbGxlY3RCb2R5U3RyaW5nKGJvZHlCeXRlcywgY29uZmlnKTtcbiAgICBpZiAoYm9keUJ5dGVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgY29uc3QgZXJyID0gbmV3IEVycm9yKFwiUzMgYWJvcnRlZCByZXF1ZXN0XCIpO1xuICAgICAgZXJyLm5hbWUgPSBcIkludGVybmFsRXJyb3JcIjtcbiAgICAgIHRocm93IGVycjtcbiAgICB9XG4gICAgaWYgKGJvZHlTdHJpbmcgJiYgYm9keVN0cmluZy5tYXRjaChcIjxFcnJvcj5cIikpIHtcbiAgICAgIC8vIFNldCB0aGUgZXJyb3IgY29kZSB0byA0WFggc28gdGhhdCBlcnJvciBkZXNlcmlhbGl6ZXIgY2FuIHBhcnNlIHRoZW1cbiAgICAgIHJlc3BvbnNlLnN0YXR1c0NvZGUgPSA0MDA7XG4gICAgfVxuXG4gICAgLy8gQm9keSBzdHJlYW0gaXMgY29uc3VtZWQgYW5kIHBhdXNlZCBhdCB0aGlzIHBvaW50LiBTbyByZXBsYWNlIHRoZSByZXNwb25zZS5ib2R5IHRvIHRoZSBjb2xsZWN0ZWQgYnl0ZXMuXG4gICAgLy8gU28gdGhhdCB0aGUgZGVzZXJpYWxpemVyIGNhbiBjb25zdW1lIHRoZSBib2R5IGFzIG5vcm1hbC5cbiAgICByZXNwb25zZS5ib2R5ID0gYm9keUJ5dGVzO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbi8vIENvbGxlY3QgbG93LWxldmVsIHJlc3BvbnNlIGJvZHkgc3RyZWFtIHRvIFVpbnQ4QXJyYXkuXG5jb25zdCBjb2xsZWN0Qm9keSA9IChzdHJlYW1Cb2R5OiBhbnkgPSBuZXcgVWludDhBcnJheSgpLCBjb250ZXh0OiBQcmV2aW91c2x5UmVzb2x2ZWQpOiBQcm9taXNlPFVpbnQ4QXJyYXk+ID0+IHtcbiAgaWYgKHN0cmVhbUJvZHkgaW5zdGFuY2VvZiBVaW50OEFycmF5KSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShzdHJlYW1Cb2R5KTtcbiAgfVxuICByZXR1cm4gY29udGV4dC5zdHJlYW1Db2xsZWN0b3Ioc3RyZWFtQm9keSkgfHwgUHJvbWlzZS5yZXNvbHZlKG5ldyBVaW50OEFycmF5KCkpO1xufTtcblxuLy8gRW5jb2RlIFVpbnQ4QXJyYXkgZGF0YSBpbnRvIHN0cmluZyB3aXRoIHV0Zi04LlxuY29uc3QgY29sbGVjdEJvZHlTdHJpbmcgPSAoc3RyZWFtQm9keTogYW55LCBjb250ZXh0OiBQcmV2aW91c2x5UmVzb2x2ZWQpOiBQcm9taXNlPHN0cmluZz4gPT5cbiAgY29sbGVjdEJvZHkoc3RyZWFtQm9keSwgY29udGV4dCkudGhlbigoYm9keSkgPT4gY29udGV4dC51dGY4RW5jb2Rlcihib2R5KSk7XG5cbi8qKlxuICogQGludGVybmFsXG4gKi9cbmV4cG9ydCBjb25zdCB0aHJvdzIwMEV4Y2VwdGlvbnNNaWRkbGV3YXJlT3B0aW9uczogUmVsYXRpdmVNaWRkbGV3YXJlT3B0aW9ucyA9IHtcbiAgcmVsYXRpb246IFwiYWZ0ZXJcIixcbiAgdG9NaWRkbGV3YXJlOiBcImRlc2VyaWFsaXplck1pZGRsZXdhcmVcIixcbiAgdGFnczogW1wiVEhST1dfMjAwX0VYQ0VQVElPTlNcIiwgXCJTM1wiXSxcbiAgbmFtZTogXCJ0aHJvdzIwMEV4Y2VwdGlvbnNNaWRkbGV3YXJlXCIsXG4gIG92ZXJyaWRlOiB0cnVlLFxufTtcblxuLyoqXG4gKlxuICogQGludGVybmFsXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRUaHJvdzIwMEV4Y2VwdGlvbnNQbHVnaW4gPSAoY29uZmlnOiBQcmV2aW91c2x5UmVzb2x2ZWQpOiBQbHVnZ2FibGU8YW55LCBhbnk+ID0+ICh7XG4gIGFwcGx5VG9TdGFjazogKGNsaWVudFN0YWNrKSA9PiB7XG4gICAgY2xpZW50U3RhY2suYWRkUmVsYXRpdmVUbyh0aHJvdzIwMEV4Y2VwdGlvbnNNaWRkbGV3YXJlKGNvbmZpZyksIHRocm93MjAwRXhjZXB0aW9uc01pZGRsZXdhcmVPcHRpb25zKTtcbiAgfSxcbn0pO1xuIl19