"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StandardRetryStrategy = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const service_error_classification_1 = require("@aws-sdk/service-error-classification");
const uuid_1 = require("uuid");
const config_1 = require("./config");
const constants_1 = require("./constants");
const defaultRetryQuota_1 = require("./defaultRetryQuota");
const delayDecider_1 = require("./delayDecider");
const retryDecider_1 = require("./retryDecider");
class StandardRetryStrategy {
    constructor(maxAttemptsProvider, options) {
        var _a, _b, _c;
        this.maxAttemptsProvider = maxAttemptsProvider;
        this.mode = config_1.RETRY_MODES.STANDARD;
        this.retryDecider = (_a = options === null || options === void 0 ? void 0 : options.retryDecider) !== null && _a !== void 0 ? _a : retryDecider_1.defaultRetryDecider;
        this.delayDecider = (_b = options === null || options === void 0 ? void 0 : options.delayDecider) !== null && _b !== void 0 ? _b : delayDecider_1.defaultDelayDecider;
        this.retryQuota = (_c = options === null || options === void 0 ? void 0 : options.retryQuota) !== null && _c !== void 0 ? _c : defaultRetryQuota_1.getDefaultRetryQuota(constants_1.INITIAL_RETRY_TOKENS);
    }
    shouldRetry(error, attempts, maxAttempts) {
        return attempts < maxAttempts && this.retryDecider(error) && this.retryQuota.hasRetryTokens(error);
    }
    async getMaxAttempts() {
        let maxAttempts;
        try {
            maxAttempts = await this.maxAttemptsProvider();
        }
        catch (error) {
            maxAttempts = config_1.DEFAULT_MAX_ATTEMPTS;
        }
        return maxAttempts;
    }
    async retry(next, args, options) {
        let retryTokenAmount;
        let attempts = 0;
        let totalDelay = 0;
        const maxAttempts = await this.getMaxAttempts();
        const { request } = args;
        if (protocol_http_1.HttpRequest.isInstance(request)) {
            request.headers[constants_1.INVOCATION_ID_HEADER] = uuid_1.v4();
        }
        while (true) {
            try {
                if (protocol_http_1.HttpRequest.isInstance(request)) {
                    request.headers[constants_1.REQUEST_HEADER] = `attempt=${attempts + 1}; max=${maxAttempts}`;
                }
                if (options === null || options === void 0 ? void 0 : options.beforeRequest) {
                    await options.beforeRequest();
                }
                const { response, output } = await next(args);
                if (options === null || options === void 0 ? void 0 : options.afterRequest) {
                    options.afterRequest(response);
                }
                this.retryQuota.releaseRetryTokens(retryTokenAmount);
                output.$metadata.attempts = attempts + 1;
                output.$metadata.totalRetryDelay = totalDelay;
                return { response, output };
            }
            catch (e) {
                const err = asSdkError(e);
                attempts++;
                if (this.shouldRetry(err, attempts, maxAttempts)) {
                    retryTokenAmount = this.retryQuota.retrieveRetryTokens(err);
                    const delay = this.delayDecider(service_error_classification_1.isThrottlingError(err) ? constants_1.THROTTLING_RETRY_DELAY_BASE : constants_1.DEFAULT_RETRY_DELAY_BASE, attempts);
                    totalDelay += delay;
                    await new Promise((resolve) => setTimeout(resolve, delay));
                    continue;
                }
                if (!err.$metadata) {
                    err.$metadata = {};
                }
                err.$metadata.attempts = attempts;
                err.$metadata.totalRetryDelay = totalDelay;
                throw err;
            }
        }
    }
}
exports.StandardRetryStrategy = StandardRetryStrategy;
const asSdkError = (error) => {
    if (error instanceof Error)
        return error;
    if (error instanceof Object)
        return Object.assign(new Error(), error);
    if (typeof error === "string")
        return new Error(error);
    return new Error(`AWS SDK error wrapper for ${error}`);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RhbmRhcmRSZXRyeVN0cmF0ZWd5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL1N0YW5kYXJkUmV0cnlTdHJhdGVneS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwwREFBcUQ7QUFDckQsd0ZBQTBFO0FBRzFFLCtCQUEwQjtBQUUxQixxQ0FBNkQ7QUFDN0QsMkNBTXFCO0FBQ3JCLDJEQUEyRDtBQUMzRCxpREFBcUQ7QUFDckQsaURBQXFEO0FBWXJELE1BQWEscUJBQXFCO0lBTWhDLFlBQTZCLG1CQUFxQyxFQUFFLE9BQXNDOztRQUE3RSx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQWtCO1FBRjNELFNBQUksR0FBVyxvQkFBVyxDQUFDLFFBQVEsQ0FBQztRQUd6QyxJQUFJLENBQUMsWUFBWSxHQUFHLE1BQUEsT0FBTyxhQUFQLE9BQU8sdUJBQVAsT0FBTyxDQUFFLFlBQVksbUNBQUksa0NBQW1CLENBQUM7UUFDakUsSUFBSSxDQUFDLFlBQVksR0FBRyxNQUFBLE9BQU8sYUFBUCxPQUFPLHVCQUFQLE9BQU8sQ0FBRSxZQUFZLG1DQUFJLGtDQUFtQixDQUFDO1FBQ2pFLElBQUksQ0FBQyxVQUFVLEdBQUcsTUFBQSxPQUFPLGFBQVAsT0FBTyx1QkFBUCxPQUFPLENBQUUsVUFBVSxtQ0FBSSx3Q0FBb0IsQ0FBQyxnQ0FBb0IsQ0FBQyxDQUFDO0lBQ3RGLENBQUM7SUFFTyxXQUFXLENBQUMsS0FBZSxFQUFFLFFBQWdCLEVBQUUsV0FBbUI7UUFDeEUsT0FBTyxRQUFRLEdBQUcsV0FBVyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDckcsQ0FBQztJQUVPLEtBQUssQ0FBQyxjQUFjO1FBQzFCLElBQUksV0FBbUIsQ0FBQztRQUN4QixJQUFJO1lBQ0YsV0FBVyxHQUFHLE1BQU0sSUFBSSxDQUFDLG1CQUFtQixFQUFF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QUVELE1BQU0sVUFBVSxHQUFHLENBQUMsS0FBYyxFQUFZLEVBQUU7SUFDOUMsSUFBSSxLQUFLLFlBQVksS0FBSztRQUFFLE9BQU8sS0FBSyxDQUFDO0lBQ3pDLElBQUksS0FBSyxZQUFZLE1BQU07UUFBRSxPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxLQUFLLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUN0RSxJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVE7UUFBRSxPQUFPLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3ZELE9BQU8sSUFBSSxLQUFLLENBQUMsNkJBQTZCLEtBQUssRUFBRSxDQUFDLENBQUM7QUFDekQsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cFJlcXVlc3QgfSBmcm9tIFwiQGF3cy1zZGsvcHJvdG9jb2wtaHR0cFwiO1xuaW1wb3J0IHsgaXNUaHJvdHRsaW5nRXJyb3IgfSBmcm9tIFwiQGF3cy1zZGsvc2VydmljZS1lcnJvci1jbGFzc2lmaWNhdGlvblwiO1xuaW1wb3J0IHsgU2RrRXJyb3IgfSBmcm9tIFwiQGF3cy1zZGsvc21pdGh5LWNsaWVudFwiO1xuaW1wb3J0IHsgRmluYWxpemVIYW5kbGVyLCBGaW5hbGl6ZUhhbmRsZXJBcmd1bWVudHMsIE1ldGFkYXRhQmVhcmVyLCBQcm92aWRlciwgUmV0cnlTdHJhdGVneSB9IGZyb20gXCJAYXdzLXNkay90eXBlc1wiO1xuaW1wb3J0IHsgdjQgfSBmcm9tIFwidXVpZFwiO1xuXG5pbXBvcnQgeyBERUZBVUxUX01BWF9BVFRFTVBUUywgUkVUUllfTU9ERVMgfSBmcm9tIFwiLi9jb25maWdcIjtcbmltcG9ydCB7XG4gIERFRkFVTFRfUkVUUllfREVMQVlfQkFTRSxcbiAgSU5JVElBTF9SRVRSWV9UT0tFTlMsXG4gIElOVk9DQVRJT05fSURfSEVBREVSLFxuICBSRVFVRVNUX0hFQURFUixcbiAgVEhST1RUTElOR19SRVRSWV9ERUxBWV9CQVNFLFxufSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGdldERlZmF1bHRSZXRyeVF1b3RhIH0gZnJvbSBcIi4vZGVmYXVsdFJldHJ5UXVvdGFcIjtcbmltcG9ydCB7IGRlZmF1bHREZWxheURlY2lkZXIgfSBmcm9tIFwiLi9kZWxheURlY2lkZXJcIjtcbmltcG9ydCB7IGRlZmF1bHRSZXRyeURlY2lkZXIgfSBmcm9tIFwiLi9yZXRyeURlY2lkZXJcIjtcbmltcG9ydCB7IERlbGF5RGVjaWRlciwgUmV0cnlEZWNpZGVyLCBSZXRyeVF1b3RhIH0gZnJvbSBcIi4vdHlwZXNcIjtcblxuLyoqXG4gKiBTdHJhdGVneSBvcHRpb25zIHRvIGJlIHBhc3NlZCB0byBTdGFuZGFyZFJldHJ5U3RyYXRlZ3lcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBTdGFuZGFyZFJldHJ5U3RyYXRlZ3lPcHRpb25zIHtcbiAgcmV0cnlEZWNpZGVyPzogUmV0cnlEZWNpZGVyO1xuICBkZWxheURlY2lkZXI/OiBEZWxheURlY2lkZXI7XG4gIHJldHJ5UXVvdGE/OiBSZXRyeVF1b3RhO1xufVxuXG5leHBvcnQgY2xhc3MgU3RhbmRhcmRSZXRyeVN0cmF0ZWd5IGltcGxlbWVudHMgUmV0cnlTdHJhdGVneSB7XG4gIHByaXZhdGUgcmV0cnlEZWNpZGVyOiBSZXRyeURlY2lkZXI7XG4gIHByaXZhdGUgZGVsYXlEZWNpZGVyOiBEZWxheURlY2lkZXI7XG4gIHByaXZhdGUgcmV0cnlRdW90YTogUmV0cnlRdW90YTtcbiAgcHVibGljIG1vZGU6IHN0cmluZyA9IFJFVFJZX01PREVTLlNUQU5EQVJEO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgbWF4QXR0ZW1wdHNQcm92aWRlcjogUHJvdmlkZXI8bnVtYmVyPiwgb3B0aW9ucz86IFN0YW5kYXJkUmV0cnlTdHJhdGVneU9wdGlvbnMpIHtcbiAgICB0aGlzLnJldHJ5RGVjaWRlciA9IG9wdGlvbnM/LnJldHJ5RGVjaWRlciA/PyBkZWZhdWx0UmV0cnlEZWNpZGVyO1xuICAgIHRoaXMuZGVsYXlEZWNpZGVyID0gb3B0aW9ucz8uZGVsYXlEZWNpZGVyID8/IGRlZmF1bHREZWxheURlY2lkZXI7XG4gICAgdGhpcy5yZXRyeVF1b3RhID0gb3B0aW9ucz8ucmV0cnlRdW90YSA/PyBnZXREZWZhdWx0UmV0cnlRdW90YShJTklUSUFMX1JFVFJZX1RPS0VOUyk7XG4gIH1cblxuICBwcml2YXRlIHNob3VsZFJldHJ5KGVycm9yOiBTZGtFcnJvciwgYXR0ZW1wdHM6IG51bWJlciwgbWF4QXR0ZW1wdHM6IG51bWJlcikge1xuICAgIHJldHVybiBhdHRlbXB0cyA8IG1heEF0dGVtcHRzICYmIHRoaXMucmV0cnlEZWNpZGVyKGVycm9yKSAmJiB0aGlzLnJldHJ5UXVvdGEuaGFzUmV0cnlUb2tlbnMoZXJyb3IpO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBnZXRNYXhBdHRlbXB0cygpIHtcbiAgICBsZXQgbWF4QXR0ZW1wdHM6IG51bWJlcjtcbiAgICB0cnkge1xuICAgICAgbWF4QXR0ZW1wdHMgPSBhd2FpdCB0aGlzLm1heEF0dGVtcHRzUHJvdmlkZXIoKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgbWF4QXR0ZW1wdHMgPSBERUZBVUxUX01BWF9BVFRFTVBUUztcbiAgICB9XG4gICAgcmV0dXJuIG1heEF0dGVtcHRzO1xuICB9XG5cbiAgYXN5bmMgcmV0cnk8SW5wdXQgZXh0ZW5kcyBvYmplY3QsIE91cHV0IGV4dGVuZHMgTWV0YWRhdGFCZWFyZXI+KFxuICAgIG5leHQ6IEZpbmFsaXplSGFuZGxlcjxJbnB1dCwgT3VwdXQ+LFxuICAgIGFyZ3M6IEZpbmFsaXplSGFuZGxlckFyZ3VtZW50czxJbnB1dD4sXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIGJlZm9yZVJlcXVlc3Q6IEZ1bmN0aW9uO1xuICAgICAgYWZ0ZXJSZXF1ZXN0OiBGdW5jdGlvbjtcbiAgICB9XG4gICkge1xuICAgIGxldCByZXRyeVRva2VuQW1vdW50O1xuICAgIGxldCBhdHRlbXB0cyA9IDA7XG4gICAgbGV0IHRvdGFsRGVsYXkgPSAwO1xuXG4gICAgY29uc3QgbWF4QXR0ZW1wdHMgPSBhd2FpdCB0aGlzLmdldE1heEF0dGVtcHRzKCk7XG5cbiAgICBjb25zdCB7IHJlcXVlc3QgfSA9IGFyZ3M7XG4gICAgaWYgKEh0dHBSZXF1ZXN0LmlzSW5zdGFuY2UocmVxdWVzdCkpIHtcbiAgICAgIHJlcXVlc3QuaGVhZGVyc1tJTlZPQ0FUSU9OX0lEX0hFQURFUl0gPSB2NCgpO1xuICAgIH1cblxuICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICB0cnkge1xuICAgICAgICBpZiAoSHR0cFJlcXVlc3QuaXNJbnN0YW5jZShyZXF1ZXN0KSkge1xuICAgICAgICAgIHJlcXVlc3QuaGVhZGVyc1tSRVFVRVNUX0hFQURFUl0gPSBgYXR0ZW1wdD0ke2F0dGVtcHRzICsgMX07IG1heD0ke21heEF0dGVtcHRzfWA7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob3B0aW9ucz8uYmVmb3JlUmVxdWVzdCkge1xuICAgICAgICAgIGF3YWl0IG9wdGlvbnMuYmVmb3JlUmVxdWVzdCgpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHsgcmVzcG9uc2UsIG91dHB1dCB9ID0gYXdhaXQgbmV4dChhcmdzKTtcbiAgICAgICAgaWYgKG9wdGlvbnM/LmFmdGVyUmVxdWVzdCkge1xuICAgICAgICAgIG9wdGlvbnMuYWZ0ZXJSZXF1ZXN0KHJlc3BvbnNlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucmV0cnlRdW90YS5yZWxlYXNlUmV0cnlUb2tlbnMocmV0cnlUb2tlbkFtb3VudCk7XG4gICAgICAgIG91dHB1dC4kbWV0YWRhdGEuYXR0ZW1wdHMgPSBhdHRlbXB0cyArIDE7XG4gICAgICAgIG91dHB1dC4kbWV0YWRhdGEudG90YWxSZXRyeURlbGF5ID0gdG90YWxEZWxheTtcblxuICAgICAgICByZXR1cm4geyByZXNwb25zZSwgb3V0cHV0IH07XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnN0IGVyciA9IGFzU2RrRXJyb3IoZSk7XG4gICAgICAgIGF0dGVtcHRzKys7XG4gICAgICAgIGlmICh0aGlzLnNob3VsZFJldHJ5KGVyciBhcyBTZGtFcnJvciwgYXR0ZW1wdHMsIG1heEF0dGVtcHRzKSkge1xuICAgICAgICAgIHJldHJ5VG9rZW5BbW91bnQgPSB0aGlzLnJldHJ5UXVvdGEucmV0cmlldmVSZXRyeVRva2VucyhlcnIpO1xuICAgICAgICAgIGNvbnN0IGRlbGF5ID0gdGhpcy5kZWxheURlY2lkZXIoXG4gICAgICAgICAgICBpc1Rocm90dGxpbmdFcnJvcihlcnIpID8gVEhST1RUTElOR19SRVRSWV9ERUxBWV9CQVNFIDogREVGQVVMVF9SRVRSWV9ERUxBWV9CQVNFLFxuICAgICAgICAgICAgYXR0ZW1wdHNcbiAgICAgICAgICApO1xuICAgICAgICAgIHRvdGFsRGVsYXkgKz0gZGVsYXk7XG5cbiAgICAgICAgICBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dChyZXNvbHZlLCBkZWxheSkpO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFlcnIuJG1ldGFkYXRhKSB7XG4gICAgICAgICAgZXJyLiRtZXRhZGF0YSA9IHt9O1xuICAgICAgICB9XG5cbiAgICAgICAgZXJyLiRtZXRhZGF0YS5hdHRlbXB0cyA9IGF0dGVtcHRzO1xuICAgICAgICBlcnIuJG1ldGFkYXRhLnRvdGFsUmV0cnlEZWxheSA9IHRvdGFsRGVsYXk7XG4gICAgICAgIHRocm93IGVycjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuY29uc3QgYXNTZGtFcnJvciA9IChlcnJvcjogdW5rbm93bik6IFNka0Vycm9yID0+IHtcbiAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHJldHVybiBlcnJvcjtcbiAgaWYgKGVycm9yIGluc3RhbmNlb2YgT2JqZWN0KSByZXR1cm4gT2JqZWN0LmFzc2lnbihuZXcgRXJyb3IoKSwgZXJyb3IpO1xuICBpZiAodHlwZW9mIGVycm9yID09PSBcInN0cmluZ1wiKSByZXR1cm4gbmV3IEVycm9yKGVycm9yKTtcbiAgcmV0dXJuIG5ldyBFcnJvcihgQVdTIFNESyBlcnJvciB3cmFwcGVyIGZvciAke2Vycm9yfWApO1xufTtcbiJdfQ==