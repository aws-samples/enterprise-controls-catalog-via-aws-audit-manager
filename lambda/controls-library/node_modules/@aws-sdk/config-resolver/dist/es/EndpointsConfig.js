import { __assign, __awaiter, __generator } from "tslib";
export var resolveEndpointsConfig = function (input) {
    var _a;
    return (__assign(__assign({}, input), { tls: (_a = input.tls) !== null && _a !== void 0 ? _a : true, endpoint: input.endpoint ? normalizeEndpoint(input) : function () { return getEndPointFromRegion(input); }, isCustomEndpoint: input.endpoint ? true : false }));
};
var normalizeEndpoint = function (input) {
    var endpoint = input.endpoint, urlParser = input.urlParser;
    if (typeof endpoint === "string") {
        var promisified_1 = Promise.resolve(urlParser(endpoint));
        return function () { return promisified_1; };
    }
    else if (typeof endpoint === "object") {
        var promisified_2 = Promise.resolve(endpoint);
        return function () { return promisified_2; };
    }
    return endpoint;
};
var getEndPointFromRegion = function (input) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, tls, region, dnsHostRegex, hostname;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = input.tls, tls = _a === void 0 ? true : _a;
                return [4 /*yield*/, input.region()];
            case 1:
                region = _c.sent();
                dnsHostRegex = new RegExp(/^([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9-]{0,61}[a-zA-Z0-9])$/);
                if (!dnsHostRegex.test(region)) {
                    throw new Error("Invalid region in client config");
                }
                return [4 /*yield*/, input.regionInfoProvider(region)];
            case 2:
                hostname = ((_b = (_c.sent())) !== null && _b !== void 0 ? _b : {}).hostname;
                if (!hostname) {
                    throw new Error("Cannot resolve hostname from client config");
                }
                return [2 /*return*/, input.urlParser((tls ? "https:" : "http:") + "//" + hostname)];
        }
    });
}); };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRW5kcG9pbnRzQ29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL0VuZHBvaW50c0NvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBZ0NBLE1BQU0sQ0FBQyxJQUFNLHNCQUFzQixHQUFHLFVBQ3BDLEtBQW9EOztJQUNwQixPQUFBLHVCQUM3QixLQUFLLEtBQ1IsR0FBRyxFQUFFLE1BQUEsS0FBSyxDQUFDLEdBQUcsbUNBQUksSUFBSSxFQUN0QixRQUFRLEVBQUUsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQU0sT0FBQSxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsRUFBNUIsQ0FBNEIsRUFDeEYsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQy9DLENBQUE7Q0FBQSxDQUFDO0FBRUgsSUFBTSxpQkFBaUIsR0FBRyxVQUFDLEtBQWdEO0lBQ2pFLElBQUEsUUFBUSxHQUFnQixLQUFLLFNBQXJCLEVBQUUsU0FBUyxHQUFLLEtBQUssVUFBVixDQUFXO0lBQ3RDLElBQUksT0FBTyxRQUFRLEtBQUssUUFBUSxFQUFFO1FBQ2hDLElBQU0sYUFBVyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDekQsT0FBTyxjQUFNLE9BQUEsYUFBVyxFQUFYLENBQVcsQ0FBQztLQUMxQjtTQUFNLElBQUksT0FBTyxRQUFRLEtBQUssUUFBUSxFQUFFO1FBQ3ZDLElBQU0sYUFBVyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDOUMsT0FBTyxjQUFNLE9BQUEsYUFBVyxFQUFYLENBQVcsQ0FBQztLQUMxQjtJQUNELE9BQU8sUUFBUyxDQUFDO0FBQ25CLENBQUMsQ0FBQztBQUVGLElBQU0scUJBQXFCLEdBQUcsVUFBTyxLQUFnRDs7Ozs7O2dCQUMzRSxLQUFlLEtBQUssSUFBVixFQUFWLEdBQUcsbUJBQUcsSUFBSSxLQUFBLENBQVc7Z0JBQ2QscUJBQU0sS0FBSyxDQUFDLE1BQU0sRUFBRSxFQUFBOztnQkFBN0IsTUFBTSxHQUFHLFNBQW9CO2dCQUU3QixZQUFZLEdBQUcsSUFBSSxNQUFNLENBQUMsMERBQTBELENBQUMsQ0FBQztnQkFDNUYsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUU7b0JBQzlCLE1BQU0sSUFBSSxLQUFLLENBQUMsaUNBQWlDLENBQUMsQ0FBQztpQkFDcEQ7Z0JBRXFCLHFCQUFNLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsRUFBQTs7Z0JBQXBELFFBQVEsR0FBSyxDQUFBLE1BQUEsQ0FBQyxTQUFzQyxDQUFDLG1DQUFJLEVBQUUsQ0FBQSxTQUFuRDtnQkFDaEIsSUFBSSxDQUFDLFFBQVEsRUFBRTtvQkFDYixNQUFNLElBQUksS0FBSyxDQUFDLDRDQUE0QyxDQUFDLENBQUM7aUJBQy9EO2dCQUVELHNCQUFPLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsT0FBTyxXQUFLLFFBQVUsQ0FBQyxFQUFDOzs7S0FDcEUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVuZHBvaW50LCBQcm92aWRlciwgUmVnaW9uSW5mb1Byb3ZpZGVyLCBVcmxQYXJzZXIgfSBmcm9tIFwiQGF3cy1zZGsvdHlwZXNcIjtcblxuZXhwb3J0IGludGVyZmFjZSBFbmRwb2ludHNJbnB1dENvbmZpZyB7XG4gIC8qKlxuICAgKiBUaGUgZnVsbHkgcXVhbGlmaWVkIGVuZHBvaW50IG9mIHRoZSB3ZWJzZXJ2aWNlLiBUaGlzIGlzIG9ubHkgcmVxdWlyZWQgd2hlbiB1c2luZyBhIGN1c3RvbSBlbmRwb2ludCAoZm9yIGV4YW1wbGUsIHdoZW4gdXNpbmcgYSBsb2NhbCB2ZXJzaW9uIG9mIFMzKS5cbiAgICovXG4gIGVuZHBvaW50Pzogc3RyaW5nIHwgRW5kcG9pbnQgfCBQcm92aWRlcjxFbmRwb2ludD47XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgVExTIGlzIGVuYWJsZWQgZm9yIHJlcXVlc3RzLlxuICAgKi9cbiAgdGxzPzogYm9vbGVhbjtcbn1cblxuaW50ZXJmYWNlIFByZXZpb3VzbHlSZXNvbHZlZCB7XG4gIHJlZ2lvbkluZm9Qcm92aWRlcjogUmVnaW9uSW5mb1Byb3ZpZGVyO1xuICB1cmxQYXJzZXI6IFVybFBhcnNlcjtcbiAgcmVnaW9uOiBQcm92aWRlcjxzdHJpbmc+O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEVuZHBvaW50c1Jlc29sdmVkQ29uZmlnIGV4dGVuZHMgUmVxdWlyZWQ8RW5kcG9pbnRzSW5wdXRDb25maWc+IHtcbiAgLyoqXG4gICAqIFJlc29sdmVkIHZhbHVlIGZvciBpbnB1dCB7QGxpbmsgRW5kcG9pbnRzUmVzb2x2ZWRDb25maWcuZW5kcG9pbnR9XG4gICAqL1xuICBlbmRwb2ludDogUHJvdmlkZXI8RW5kcG9pbnQ+O1xuICAvKipcbiAgICogV2hldGhlciB0aGUgZW5kcG9pbnQgaXMgc3BlY2lmaWVkIGJ5IGNhbGxlci5cbiAgICogQGludGVybmFsXG4gICAqL1xuICBpc0N1c3RvbUVuZHBvaW50OiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgcmVzb2x2ZUVuZHBvaW50c0NvbmZpZyA9IDxUPihcbiAgaW5wdXQ6IFQgJiBFbmRwb2ludHNJbnB1dENvbmZpZyAmIFByZXZpb3VzbHlSZXNvbHZlZFxuKTogVCAmIEVuZHBvaW50c1Jlc29sdmVkQ29uZmlnID0+ICh7XG4gIC4uLmlucHV0LFxuICB0bHM6IGlucHV0LnRscyA/PyB0cnVlLFxuICBlbmRwb2ludDogaW5wdXQuZW5kcG9pbnQgPyBub3JtYWxpemVFbmRwb2ludChpbnB1dCkgOiAoKSA9PiBnZXRFbmRQb2ludEZyb21SZWdpb24oaW5wdXQpLFxuICBpc0N1c3RvbUVuZHBvaW50OiBpbnB1dC5lbmRwb2ludCA/IHRydWUgOiBmYWxzZSxcbn0pO1xuXG5jb25zdCBub3JtYWxpemVFbmRwb2ludCA9IChpbnB1dDogRW5kcG9pbnRzSW5wdXRDb25maWcgJiBQcmV2aW91c2x5UmVzb2x2ZWQpOiBQcm92aWRlcjxFbmRwb2ludD4gPT4ge1xuICBjb25zdCB7IGVuZHBvaW50LCB1cmxQYXJzZXIgfSA9IGlucHV0O1xuICBpZiAodHlwZW9mIGVuZHBvaW50ID09PSBcInN0cmluZ1wiKSB7XG4gICAgY29uc3QgcHJvbWlzaWZpZWQgPSBQcm9taXNlLnJlc29sdmUodXJsUGFyc2VyKGVuZHBvaW50KSk7XG4gICAgcmV0dXJuICgpID0+IHByb21pc2lmaWVkO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBlbmRwb2ludCA9PT0gXCJvYmplY3RcIikge1xuICAgIGNvbnN0IHByb21pc2lmaWVkID0gUHJvbWlzZS5yZXNvbHZlKGVuZHBvaW50KTtcbiAgICByZXR1cm4gKCkgPT4gcHJvbWlzaWZpZWQ7XG4gIH1cbiAgcmV0dXJuIGVuZHBvaW50ITtcbn07XG5cbmNvbnN0IGdldEVuZFBvaW50RnJvbVJlZ2lvbiA9IGFzeW5jIChpbnB1dDogRW5kcG9pbnRzSW5wdXRDb25maWcgJiBQcmV2aW91c2x5UmVzb2x2ZWQpID0+IHtcbiAgY29uc3QgeyB0bHMgPSB0cnVlIH0gPSBpbnB1dDtcbiAgY29uc3QgcmVnaW9uID0gYXdhaXQgaW5wdXQucmVnaW9uKCk7XG5cbiAgY29uc3QgZG5zSG9zdFJlZ2V4ID0gbmV3IFJlZ0V4cCgvXihbYS16QS1aMC05XXxbYS16QS1aMC05XVthLXpBLVowLTktXXswLDYxfVthLXpBLVowLTldKSQvKTtcbiAgaWYgKCFkbnNIb3N0UmVnZXgudGVzdChyZWdpb24pKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCByZWdpb24gaW4gY2xpZW50IGNvbmZpZ1wiKTtcbiAgfVxuXG4gIGNvbnN0IHsgaG9zdG5hbWUgfSA9IChhd2FpdCBpbnB1dC5yZWdpb25JbmZvUHJvdmlkZXIocmVnaW9uKSkgPz8ge307XG4gIGlmICghaG9zdG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgcmVzb2x2ZSBob3N0bmFtZSBmcm9tIGNsaWVudCBjb25maWdcIik7XG4gIH1cblxuICByZXR1cm4gaW5wdXQudXJsUGFyc2VyKGAke3RscyA/IFwiaHR0cHM6XCIgOiBcImh0dHA6XCJ9Ly8ke2hvc3RuYW1lfWApO1xufTtcbiJdfQ==