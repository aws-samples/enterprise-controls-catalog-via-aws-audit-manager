import { __assign, __awaiter, __generator } from "tslib";
import { HttpRequest } from "@aws-sdk/protocol-http";
/**
 * @internal
 */
export var useRegionalEndpointMiddleware = function (config) {
    return function (next) {
        return function (args) { return __awaiter(void 0, void 0, void 0, function () {
            var request, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        request = args.request;
                        if (!HttpRequest.isInstance(request) || config.isCustomEndpoint)
                            return [2 /*return*/, next(__assign({}, args))];
                        if (!(request.hostname === "s3.amazonaws.com")) return [3 /*break*/, 1];
                        request.hostname = "s3.us-east-1.amazonaws.com";
                        return [3 /*break*/, 3];
                    case 1:
                        _a = "aws-global";
                        return [4 /*yield*/, config.region()];
                    case 2:
                        if (_a === (_b.sent())) {
                            request.hostname = "s3.amazonaws.com";
                        }
                        _b.label = 3;
                    case 3: return [2 /*return*/, next(__assign({}, args))];
                }
            });
        }); };
    };
};
/**
 * @internal
 */
export var useRegionalEndpointMiddlewareOptions = {
    step: "build",
    tags: ["USE_REGIONAL_ENDPOINT", "S3"],
    name: "useRegionalEndpointMiddleware",
    override: true,
};
/**
 * @internal
 */
export var getUseRegionalEndpointPlugin = function (config) { return ({
    applyToStack: function (clientStack) {
        clientStack.add(useRegionalEndpointMiddleware(config), useRegionalEndpointMiddlewareOptions);
    },
}); };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlLXJlZ2lvbmFsLWVuZHBvaW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3VzZS1yZWdpb25hbC1lbmRwb2ludC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBaUJyRDs7R0FFRztBQUNILE1BQU0sQ0FBQyxJQUFNLDZCQUE2QixHQUN4QyxVQUFDLE1BQTBCO0lBQzNCLE9BQUEsVUFBZ0MsSUFBK0I7UUFDL0QsT0FBQSxVQUFPLElBQWdDOzs7Ozt3QkFDN0IsT0FBTyxHQUFLLElBQUksUUFBVCxDQUFVO3dCQUN6QixJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsSUFBSSxNQUFNLENBQUMsZ0JBQWdCOzRCQUFFLHNCQUFPLElBQUksY0FBTSxJQUFJLEVBQUcsRUFBQzs2QkFDdEYsQ0FBQSxPQUFPLENBQUMsUUFBUSxLQUFLLGtCQUFrQixDQUFBLEVBQXZDLHdCQUF1Qzt3QkFDekMsT0FBTyxDQUFDLFFBQVEsR0FBRyw0QkFBNEIsQ0FBQzs7O3dCQUN2QyxLQUFBLFlBQVksQ0FBQTt3QkFBTSxxQkFBTSxNQUFNLENBQUMsTUFBTSxFQUFFLEVBQUE7O3dCQUEzQyxJQUFJLE9BQWlCLENBQUMsU0FBcUIsQ0FBQyxFQUFFOzRCQUNuRCxPQUFPLENBQUMsUUFBUSxHQUFHLGtCQUFrQixDQUFDO3lCQUN2Qzs7NEJBQ0Qsc0JBQU8sSUFBSSxjQUFNLElBQUksRUFBRyxFQUFDOzs7YUFDMUI7SUFURCxDQVNDO0FBVkQsQ0FVQyxDQUFDO0FBRUo7O0dBRUc7QUFDSCxNQUFNLENBQUMsSUFBTSxvQ0FBb0MsR0FBd0I7SUFDdkUsSUFBSSxFQUFFLE9BQU87SUFDYixJQUFJLEVBQUUsQ0FBQyx1QkFBdUIsRUFBRSxJQUFJLENBQUM7SUFDckMsSUFBSSxFQUFFLCtCQUErQjtJQUNyQyxRQUFRLEVBQUUsSUFBSTtDQUNmLENBQUM7QUFFRjs7R0FFRztBQUNILE1BQU0sQ0FBQyxJQUFNLDRCQUE0QixHQUFHLFVBQUMsTUFBMEIsSUFBMEIsT0FBQSxDQUFDO0lBQ2hHLFlBQVksRUFBRSxVQUFDLFdBQVc7UUFDeEIsV0FBVyxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsQ0FBQyxNQUFNLENBQUMsRUFBRSxvQ0FBb0MsQ0FBQyxDQUFDO0lBQy9GLENBQUM7Q0FDRixDQUFDLEVBSitGLENBSS9GLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwUmVxdWVzdCB9IGZyb20gXCJAYXdzLXNkay9wcm90b2NvbC1odHRwXCI7XG5pbXBvcnQge1xuICBCdWlsZEhhbmRsZXIsXG4gIEJ1aWxkSGFuZGxlckFyZ3VtZW50cyxcbiAgQnVpbGRIYW5kbGVyT3B0aW9ucyxcbiAgQnVpbGRIYW5kbGVyT3V0cHV0LFxuICBCdWlsZE1pZGRsZXdhcmUsXG4gIE1ldGFkYXRhQmVhcmVyLFxuICBQbHVnZ2FibGUsXG4gIFByb3ZpZGVyLFxufSBmcm9tIFwiQGF3cy1zZGsvdHlwZXNcIjtcblxudHlwZSBQcmV2aW91c2x5UmVzb2x2ZWQgPSB7XG4gIHJlZ2lvbjogUHJvdmlkZXI8c3RyaW5nPjtcbiAgaXNDdXN0b21FbmRwb2ludDogYm9vbGVhbjtcbn07XG5cbi8qKlxuICogQGludGVybmFsXG4gKi9cbmV4cG9ydCBjb25zdCB1c2VSZWdpb25hbEVuZHBvaW50TWlkZGxld2FyZSA9XG4gIChjb25maWc6IFByZXZpb3VzbHlSZXNvbHZlZCk6IEJ1aWxkTWlkZGxld2FyZTxhbnksIGFueT4gPT5cbiAgPE91dHB1dCBleHRlbmRzIE1ldGFkYXRhQmVhcmVyPihuZXh0OiBCdWlsZEhhbmRsZXI8YW55LCBPdXRwdXQ+KTogQnVpbGRIYW5kbGVyPGFueSwgT3V0cHV0PiA9PlxuICBhc3luYyAoYXJnczogQnVpbGRIYW5kbGVyQXJndW1lbnRzPGFueT4pOiBQcm9taXNlPEJ1aWxkSGFuZGxlck91dHB1dDxPdXRwdXQ+PiA9PiB7XG4gICAgY29uc3QgeyByZXF1ZXN0IH0gPSBhcmdzO1xuICAgIGlmICghSHR0cFJlcXVlc3QuaXNJbnN0YW5jZShyZXF1ZXN0KSB8fCBjb25maWcuaXNDdXN0b21FbmRwb2ludCkgcmV0dXJuIG5leHQoeyAuLi5hcmdzIH0pO1xuICAgIGlmIChyZXF1ZXN0Lmhvc3RuYW1lID09PSBcInMzLmFtYXpvbmF3cy5jb21cIikge1xuICAgICAgcmVxdWVzdC5ob3N0bmFtZSA9IFwiczMudXMtZWFzdC0xLmFtYXpvbmF3cy5jb21cIjtcbiAgICB9IGVsc2UgaWYgKFwiYXdzLWdsb2JhbFwiID09PSAoYXdhaXQgY29uZmlnLnJlZ2lvbigpKSkge1xuICAgICAgcmVxdWVzdC5ob3N0bmFtZSA9IFwiczMuYW1hem9uYXdzLmNvbVwiO1xuICAgIH1cbiAgICByZXR1cm4gbmV4dCh7IC4uLmFyZ3MgfSk7XG4gIH07XG5cbi8qKlxuICogQGludGVybmFsXG4gKi9cbmV4cG9ydCBjb25zdCB1c2VSZWdpb25hbEVuZHBvaW50TWlkZGxld2FyZU9wdGlvbnM6IEJ1aWxkSGFuZGxlck9wdGlvbnMgPSB7XG4gIHN0ZXA6IFwiYnVpbGRcIixcbiAgdGFnczogW1wiVVNFX1JFR0lPTkFMX0VORFBPSU5UXCIsIFwiUzNcIl0sXG4gIG5hbWU6IFwidXNlUmVnaW9uYWxFbmRwb2ludE1pZGRsZXdhcmVcIixcbiAgb3ZlcnJpZGU6IHRydWUsXG59O1xuXG4vKipcbiAqIEBpbnRlcm5hbFxuICovXG5leHBvcnQgY29uc3QgZ2V0VXNlUmVnaW9uYWxFbmRwb2ludFBsdWdpbiA9IChjb25maWc6IFByZXZpb3VzbHlSZXNvbHZlZCk6IFBsdWdnYWJsZTxhbnksIGFueT4gPT4gKHtcbiAgYXBwbHlUb1N0YWNrOiAoY2xpZW50U3RhY2spID0+IHtcbiAgICBjbGllbnRTdGFjay5hZGQodXNlUmVnaW9uYWxFbmRwb2ludE1pZGRsZXdhcmUoY29uZmlnKSwgdXNlUmVnaW9uYWxFbmRwb2ludE1pZGRsZXdhcmVPcHRpb25zKTtcbiAgfSxcbn0pO1xuIl19