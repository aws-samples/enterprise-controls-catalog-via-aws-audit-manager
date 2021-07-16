import { __awaiter, __generator } from "tslib";
import { HttpRequest } from "@aws-sdk/protocol-http";
import { isThrottlingError } from "@aws-sdk/service-error-classification";
import { v4 } from "uuid";
import { DEFAULT_MAX_ATTEMPTS, RETRY_MODES } from "./config";
import { DEFAULT_RETRY_DELAY_BASE, INITIAL_RETRY_TOKENS, INVOCATION_ID_HEADER, REQUEST_HEADER, THROTTLING_RETRY_DELAY_BASE, } from "./constants";
import { getDefaultRetryQuota } from "./defaultRetryQuota";
import { defaultDelayDecider } from "./delayDecider";
import { defaultRetryDecider } from "./retryDecider";
var StandardRetryStrategy = /** @class */ (function () {
    function StandardRetryStrategy(maxAttemptsProvider, options) {
        var _a, _b, _c;
        this.maxAttemptsProvider = maxAttemptsProvider;
        this.mode = RETRY_MODES.STANDARD;
        this.retryDecider = (_a = options === null || options === void 0 ? void 0 : options.retryDecider) !== null && _a !== void 0 ? _a : defaultRetryDecider;
        this.delayDecider = (_b = options === null || options === void 0 ? void 0 : options.delayDecider) !== null && _b !== void 0 ? _b : defaultDelayDecider;
        this.retryQuota = (_c = options === null || options === void 0 ? void 0 : options.retryQuota) !== null && _c !== void 0 ? _c : getDefaultRetryQuota(INITIAL_RETRY_TOKENS);
    }
    StandardRetryStrategy.prototype.shouldRetry = function (error, attempts, maxAttempts) {
        return attempts < maxAttempts && this.retryDecider(error) && this.retryQuota.hasRetryTokens(error);
    };
    StandardRetryStrategy.prototype.getMaxAttempts = function () {
        return __awaiter(this, void 0, void 0, function () {
            var maxAttempts, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.maxAttemptsProvider()];
                    case 1:
                        maxAttempts = _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        maxAttempts = DEFAULT_MAX_ATTEMPTS;
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/, maxAttempts];
                }
            });
        });
    };
    StandardRetryStrategy.prototype.retry = function (next, args, options) {
        return __awaiter(this, void 0, void 0, function () {
            var retryTokenAmount, attempts, totalDelay, maxAttempts, request, _loop_1, this_1, state_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        attempts = 0;
                        totalDelay = 0;
                        return [4 /*yield*/, this.getMaxAttempts()];
                    case 1:
                        maxAttempts = _a.sent();
                        request = args.request;
                        if (HttpRequest.isInstance(request)) {
                            request.headers[INVOCATION_ID_HEADER] = v4();
                        }
                        _loop_1 = function () {
                            var _b, response, output, e_1, err, delay_1;
                            return __generator(this, function (_c) {
                                switch (_c.label) {
                                    case 0:
                                        _c.trys.push([0, 4, , 7]);
                                        if (HttpRequest.isInstance(request)) {
                                            request.headers[REQUEST_HEADER] = "attempt=" + (attempts + 1) + "; max=" + maxAttempts;
                                        }
                                        if (!(options === null || options === void 0 ? void 0 : options.beforeRequest)) return [3 /*break*/, 2];
                                        return [4 /*yield*/, options.beforeRequest()];
                                    case 1:
                                        _c.sent();
                                        _c.label = 2;
                                    case 2: return [4 /*yield*/, next(args)];
                                    case 3:
                                        _b = _c.sent(), response = _b.response, output = _b.output;
                                        if (options === null || options === void 0 ? void 0 : options.afterRequest) {
                                            options.afterRequest(response);
                                        }
                                        this_1.retryQuota.releaseRetryTokens(retryTokenAmount);
                                        output.$metadata.attempts = attempts + 1;
                                        output.$metadata.totalRetryDelay = totalDelay;
                                        return [2 /*return*/, { value: { response: response, output: output } }];
                                    case 4:
                                        e_1 = _c.sent();
                                        err = asSdkError(e_1);
                                        attempts++;
                                        if (!this_1.shouldRetry(err, attempts, maxAttempts)) return [3 /*break*/, 6];
                                        retryTokenAmount = this_1.retryQuota.retrieveRetryTokens(err);
                                        delay_1 = this_1.delayDecider(isThrottlingError(err) ? THROTTLING_RETRY_DELAY_BASE : DEFAULT_RETRY_DELAY_BASE, attempts);
                                        totalDelay += delay_1;
                                        return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, delay_1); })];
                                    case 5:
                                        _c.sent();
                                        return [2 /*return*/, "continue"];
                                    case 6:
                                        if (!err.$metadata) {
                                            err.$metadata = {};
                                        }
                                        err.$metadata.attempts = attempts;
                                        err.$metadata.totalRetryDelay = totalDelay;
                                        throw err;
                                    case 7: return [2 /*return*/];
                                }
                            });
                        };
                        this_1 = this;
                        _a.label = 2;
                    case 2:
                        if (!true) return [3 /*break*/, 4];
                        return [5 /*yield**/, _loop_1()];
                    case 3:
                        state_1 = _a.sent();
                        if (typeof state_1 === "object")
                            return [2 /*return*/, state_1.value];
                        return [3 /*break*/, 2];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return StandardRetryStrategy;
}());
export { StandardRetryStrategy };
var asSdkError = function (error) {
    if (error instanceof Error)
        return error;
    if (error instanceof Object)
        return Object.assign(new Error(), error);
    if (typeof error === "string")
        return new Error(error);
    return new Error("AWS SDK error wrapper for " + error);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RhbmRhcmRSZXRyeVN0cmF0ZWd5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL1N0YW5kYXJkUmV0cnlTdHJhdGVneS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBRzFFLE9BQU8sRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFMUIsT0FBTyxFQUFFLG9CQUFvQixFQUFFLFdBQVcsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUM3RCxPQUFPLEVBQ0wsd0JBQXdCLEVBQ3hCLG9CQUFvQixFQUNwQixvQkFBb0IsRUFDcEIsY0FBYyxFQUNkLDJCQUEyQixHQUM1QixNQUFNLGFBQWEsQ0FBQztBQUNyQixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQVlyRDtJQU1FLCtCQUE2QixtQkFBcUMsRUFBRSxPQUFzQzs7UUFBN0Usd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFrQjtRQUYzRCxTQUFJLEdBQVcsV0FBVyxDQUFDLFFBQVEsQ0FBQztRQUd6QyxJQUFJLENBQUMsWUFBWSxHQUFHLE1BQUEsT0FBTyxhQUFQLE9BQU8sdUJBQVAsT0FBTyxDQUFFLFlBQVksbUNBQUksbUJBQW1CLENBQUM7UUFDakUsSUFBSSxDQUFDLFlBQVksR0FBRyxNQUFBLE9BQU8sYUFBUCxPQUFPLHVCQUFQLE9BQU8sQ0FBRSxZQUFZLG1DQUFJLG1CQUFtQixDQUFDO1FBQ2pFLElBQUksQ0FBQyxVQUFVLEdBQUcsTUFBQSxPQUFPLGFBQVAsT0FBTyx1QkFBUCxPQUFPLENBQUUsVUFBVSxtQ0FBSSxvQkFBb0Is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U0FBUyxFQUFFOzRDQUNsQixHQUFHLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQzt5Q0FDcEI7d0NBRUQsR0FBRyxDQUFDLFNBQVMsQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO3dDQUNsQyxHQUFHLENBQUMsU0FBUyxDQUFDLGVBQWUsR0FBRyxVQUFVLENBQUM7d0NBQzNDLE1BQU0sR0FBRyxDQUFDOzs7Ozs7Ozs2QkF4Q1AsSUFBSTs7Ozs7Ozs7Ozs7S0EyQ1o7SUFDSCw0QkFBQztBQUFELENBQUMsQUF6RkQsSUF5RkM7O0FBRUQsSUFBTSxVQUFVLEdBQUcsVUFBQyxLQUFjO0lBQ2hDLElBQUksS0FBSyxZQUFZLEtBQUs7UUFBRSxPQUFPLEtBQUssQ0FBQztJQUN6QyxJQUFJLEtBQUssWUFBWSxNQUFNO1FBQUUsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDdEUsSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRO1FBQUUsT0FBTyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN2RCxPQUFPLElBQUksS0FBSyxDQUFDLCtCQUE2QixLQUFPLENBQUMsQ0FBQztBQUN6RCxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwUmVxdWVzdCB9IGZyb20gXCJAYXdzLXNkay9wcm90b2NvbC1odHRwXCI7XG5pbXBvcnQgeyBpc1Rocm90dGxpbmdFcnJvciB9IGZyb20gXCJAYXdzLXNkay9zZXJ2aWNlLWVycm9yLWNsYXNzaWZpY2F0aW9uXCI7XG5pbXBvcnQgeyBTZGtFcnJvciB9IGZyb20gXCJAYXdzLXNkay9zbWl0aHktY2xpZW50XCI7XG5pbXBvcnQgeyBGaW5hbGl6ZUhhbmRsZXIsIEZpbmFsaXplSGFuZGxlckFyZ3VtZW50cywgTWV0YWRhdGFCZWFyZXIsIFByb3ZpZGVyLCBSZXRyeVN0cmF0ZWd5IH0gZnJvbSBcIkBhd3Mtc2RrL3R5cGVzXCI7XG5pbXBvcnQgeyB2NCB9IGZyb20gXCJ1dWlkXCI7XG5cbmltcG9ydCB7IERFRkFVTFRfTUFYX0FUVEVNUFRTLCBSRVRSWV9NT0RFUyB9IGZyb20gXCIuL2NvbmZpZ1wiO1xuaW1wb3J0IHtcbiAgREVGQVVMVF9SRVRSWV9ERUxBWV9CQVNFLFxuICBJTklUSUFMX1JFVFJZX1RPS0VOUyxcbiAgSU5WT0NBVElPTl9JRF9IRUFERVIsXG4gIFJFUVVFU1RfSEVBREVSLFxuICBUSFJPVFRMSU5HX1JFVFJZX0RFTEFZX0JBU0UsXG59IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgZ2V0RGVmYXVsdFJldHJ5UXVvdGEgfSBmcm9tIFwiLi9kZWZhdWx0UmV0cnlRdW90YVwiO1xuaW1wb3J0IHsgZGVmYXVsdERlbGF5RGVjaWRlciB9IGZyb20gXCIuL2RlbGF5RGVjaWRlclwiO1xuaW1wb3J0IHsgZGVmYXVsdFJldHJ5RGVjaWRlciB9IGZyb20gXCIuL3JldHJ5RGVjaWRlclwiO1xuaW1wb3J0IHsgRGVsYXlEZWNpZGVyLCBSZXRyeURlY2lkZXIsIFJldHJ5UXVvdGEgfSBmcm9tIFwiLi90eXBlc1wiO1xuXG4vKipcbiAqIFN0cmF0ZWd5IG9wdGlvbnMgdG8gYmUgcGFzc2VkIHRvIFN0YW5kYXJkUmV0cnlTdHJhdGVneVxuICovXG5leHBvcnQgaW50ZXJmYWNlIFN0YW5kYXJkUmV0cnlTdHJhdGVneU9wdGlvbnMge1xuICByZXRyeURlY2lkZXI/OiBSZXRyeURlY2lkZXI7XG4gIGRlbGF5RGVjaWRlcj86IERlbGF5RGVjaWRlcjtcbiAgcmV0cnlRdW90YT86IFJldHJ5UXVvdGE7XG59XG5cbmV4cG9ydCBjbGFzcyBTdGFuZGFyZFJldHJ5U3RyYXRlZ3kgaW1wbGVtZW50cyBSZXRyeVN0cmF0ZWd5IHtcbiAgcHJpdmF0ZSByZXRyeURlY2lkZXI6IFJldHJ5RGVjaWRlcjtcbiAgcHJpdmF0ZSBkZWxheURlY2lkZXI6IERlbGF5RGVjaWRlcjtcbiAgcHJpdmF0ZSByZXRyeVF1b3RhOiBSZXRyeVF1b3RhO1xuICBwdWJsaWMgbW9kZTogc3RyaW5nID0gUkVUUllfTU9ERVMuU1RBTkRBUkQ7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBtYXhBdHRlbXB0c1Byb3ZpZGVyOiBQcm92aWRlcjxudW1iZXI+LCBvcHRpb25zPzogU3RhbmRhcmRSZXRyeVN0cmF0ZWd5T3B0aW9ucykge1xuICAgIHRoaXMucmV0cnlEZWNpZGVyID0gb3B0aW9ucz8ucmV0cnlEZWNpZGVyID8/IGRlZmF1bHRSZXRyeURlY2lkZXI7XG4gICAgdGhpcy5kZWxheURlY2lkZXIgPSBvcHRpb25zPy5kZWxheURlY2lkZXIgPz8gZGVmYXVsdERlbGF5RGVjaWRlcjtcbiAgICB0aGlzLnJldHJ5UXVvdGEgPSBvcHRpb25zPy5yZXRyeVF1b3RhID8/IGdldERlZmF1bHRSZXRyeVF1b3RhKElOSVRJQUxfUkVUUllfVE9LRU5TKTtcbiAgfVxuXG4gIHByaXZhdGUgc2hvdWxkUmV0cnkoZXJyb3I6IFNka0Vycm9yLCBhdHRlbXB0czogbnVtYmVyLCBtYXhBdHRlbXB0czogbnVtYmVyKSB7XG4gICAgcmV0dXJuIGF0dGVtcHRzIDwgbWF4QXR0ZW1wdHMgJiYgdGhpcy5yZXRyeURlY2lkZXIoZXJyb3IpICYmIHRoaXMucmV0cnlRdW90YS5oYXNSZXRyeVRva2VucyhlcnJvcik7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIGdldE1heEF0dGVtcHRzKCkge1xuICAgIGxldCBtYXhBdHRlbXB0czogbnVtYmVyO1xuICAgIHRyeSB7XG4gICAgICBtYXhBdHRlbXB0cyA9IGF3YWl0IHRoaXMubWF4QXR0ZW1wdHNQcm92aWRlcigpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBtYXhBdHRlbXB0cyA9IERFRkFVTFRfTUFYX0FUVEVNUFRTO1xuICAgIH1cbiAgICByZXR1cm4gbWF4QXR0ZW1wdHM7XG4gIH1cblxuICBhc3luYyByZXRyeTxJbnB1dCBleHRlbmRzIG9iamVjdCwgT3VwdXQgZXh0ZW5kcyBNZXRhZGF0YUJlYXJlcj4oXG4gICAgbmV4dDogRmluYWxpemVIYW5kbGVyPElucHV0LCBPdXB1dD4sXG4gICAgYXJnczogRmluYWxpemVIYW5kbGVyQXJndW1lbnRzPElucHV0PixcbiAgICBvcHRpb25zPzoge1xuICAgICAgYmVmb3JlUmVxdWVzdDogRnVuY3Rpb247XG4gICAgICBhZnRlclJlcXVlc3Q6IEZ1bmN0aW9uO1xuICAgIH1cbiAgKSB7XG4gICAgbGV0IHJldHJ5VG9rZW5BbW91bnQ7XG4gICAgbGV0IGF0dGVtcHRzID0gMDtcbiAgICBsZXQgdG90YWxEZWxheSA9IDA7XG5cbiAgICBjb25zdCBtYXhBdHRlbXB0cyA9IGF3YWl0IHRoaXMuZ2V0TWF4QXR0ZW1wdHMoKTtcblxuICAgIGNvbnN0IHsgcmVxdWVzdCB9ID0gYXJncztcbiAgICBpZiAoSHR0cFJlcXVlc3QuaXNJbnN0YW5jZShyZXF1ZXN0KSkge1xuICAgICAgcmVxdWVzdC5oZWFkZXJzW0lOVk9DQVRJT05fSURfSEVBREVSXSA9IHY0KCk7XG4gICAgfVxuXG4gICAgd2hpbGUgKHRydWUpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmIChIdHRwUmVxdWVzdC5pc0luc3RhbmNlKHJlcXVlc3QpKSB7XG4gICAgICAgICAgcmVxdWVzdC5oZWFkZXJzW1JFUVVFU1RfSEVBREVSXSA9IGBhdHRlbXB0PSR7YXR0ZW1wdHMgKyAxfTsgbWF4PSR7bWF4QXR0ZW1wdHN9YDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvcHRpb25zPy5iZWZvcmVSZXF1ZXN0KSB7XG4gICAgICAgICAgYXdhaXQgb3B0aW9ucy5iZWZvcmVSZXF1ZXN0KCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyByZXNwb25zZSwgb3V0cHV0IH0gPSBhd2FpdCBuZXh0KGFyZ3MpO1xuICAgICAgICBpZiAob3B0aW9ucz8uYWZ0ZXJSZXF1ZXN0KSB7XG4gICAgICAgICAgb3B0aW9ucy5hZnRlclJlcXVlc3QocmVzcG9uc2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5yZXRyeVF1b3RhLnJlbGVhc2VSZXRyeVRva2VucyhyZXRyeVRva2VuQW1vdW50KTtcbiAgICAgICAgb3V0cHV0LiRtZXRhZGF0YS5hdHRlbXB0cyA9IGF0dGVtcHRzICsgMTtcbiAgICAgICAgb3V0cHV0LiRtZXRhZGF0YS50b3RhbFJldHJ5RGVsYXkgPSB0b3RhbERlbGF5O1xuXG4gICAgICAgIHJldHVybiB7IHJlc3BvbnNlLCBvdXRwdXQgfTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc3QgZXJyID0gYXNTZGtFcnJvcihlKTtcbiAgICAgICAgYXR0ZW1wdHMrKztcbiAgICAgICAgaWYgKHRoaXMuc2hvdWxkUmV0cnkoZXJyIGFzIFNka0Vycm9yLCBhdHRlbXB0cywgbWF4QXR0ZW1wdHMpKSB7XG4gICAgICAgICAgcmV0cnlUb2tlbkFtb3VudCA9IHRoaXMucmV0cnlRdW90YS5yZXRyaWV2ZVJldHJ5VG9rZW5zKGVycik7XG4gICAgICAgICAgY29uc3QgZGVsYXkgPSB0aGlzLmRlbGF5RGVjaWRlcihcbiAgICAgICAgICAgIGlzVGhyb3R0bGluZ0Vycm9yKGVycikgPyBUSFJPVFRMSU5HX1JFVFJZX0RFTEFZX0JBU0UgOiBERUZBVUxUX1JFVFJZX0RFTEFZX0JBU0UsXG4gICAgICAgICAgICBhdHRlbXB0c1xuICAgICAgICAgICk7XG4gICAgICAgICAgdG90YWxEZWxheSArPSBkZWxheTtcblxuICAgICAgICAgIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIGRlbGF5KSk7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWVyci4kbWV0YWRhdGEpIHtcbiAgICAgICAgICBlcnIuJG1ldGFkYXRhID0ge307XG4gICAgICAgIH1cblxuICAgICAgICBlcnIuJG1ldGFkYXRhLmF0dGVtcHRzID0gYXR0ZW1wdHM7XG4gICAgICAgIGVyci4kbWV0YWRhdGEudG90YWxSZXRyeURlbGF5ID0gdG90YWxEZWxheTtcbiAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5jb25zdCBhc1Nka0Vycm9yID0gKGVycm9yOiB1bmtub3duKTogU2RrRXJyb3IgPT4ge1xuICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikgcmV0dXJuIGVycm9yO1xuICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBPYmplY3QpIHJldHVybiBPYmplY3QuYXNzaWduKG5ldyBFcnJvcigpLCBlcnJvcik7XG4gIGlmICh0eXBlb2YgZXJyb3IgPT09IFwic3RyaW5nXCIpIHJldHVybiBuZXcgRXJyb3IoZXJyb3IpO1xuICByZXR1cm4gbmV3IEVycm9yKGBBV1MgU0RLIGVycm9yIHdyYXBwZXIgZm9yICR7ZXJyb3J9YCk7XG59O1xuIl19