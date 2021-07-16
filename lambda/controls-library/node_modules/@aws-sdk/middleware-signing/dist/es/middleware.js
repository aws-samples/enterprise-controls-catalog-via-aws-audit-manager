import { __assign, __awaiter, __generator } from "tslib";
import { HttpRequest } from "@aws-sdk/protocol-http";
var isClockSkewed = function (newServerTime, systemClockOffset) {
    return Math.abs(getSkewCorrectedDate(systemClockOffset).getTime() - newServerTime) >= 300000;
};
var getSkewCorrectedDate = function (systemClockOffset) { return new Date(Date.now() + systemClockOffset); };
export function awsAuthMiddleware(options) {
    return function (next, context) {
        return function (args) {
            return __awaiter(this, void 0, void 0, function () {
                var signer, _a, output, _b, _c, headers, dateHeader, serverTime;
                var _d;
                return __generator(this, function (_e) {
                    switch (_e.label) {
                        case 0:
                            if (!HttpRequest.isInstance(args.request))
                                return [2 /*return*/, next(args)];
                            if (!(typeof options.signer === "function")) return [3 /*break*/, 2];
                            return [4 /*yield*/, options.signer()];
                        case 1:
                            _a = _e.sent();
                            return [3 /*break*/, 3];
                        case 2:
                            _a = options.signer;
                            _e.label = 3;
                        case 3:
                            signer = _a;
                            _b = next;
                            _c = [__assign({}, args)];
                            _d = {};
                            return [4 /*yield*/, signer.sign(args.request, {
                                    signingDate: new Date(Date.now() + options.systemClockOffset),
                                    signingRegion: context["signing_region"],
                                    signingService: context["signing_service"],
                                })];
                        case 4: return [4 /*yield*/, _b.apply(void 0, [__assign.apply(void 0, _c.concat([(_d.request = _e.sent(), _d)]))])];
                        case 5:
                            output = _e.sent();
                            headers = output.response.headers;
                            dateHeader = headers && (headers.date || headers.Date);
                            if (dateHeader) {
                                serverTime = Date.parse(dateHeader);
                                if (isClockSkewed(serverTime, options.systemClockOffset)) {
                                    options.systemClockOffset = serverTime - Date.now();
                                }
                            }
                            return [2 /*return*/, output];
                    }
                });
            });
        };
    };
}
export var awsAuthMiddlewareOptions = {
    name: "awsAuthMiddleware",
    tags: ["SIGNATURE", "AWSAUTH"],
    relation: "after",
    toMiddleware: "retryMiddleware",
    override: true,
};
export var getAwsAuthPlugin = function (options) { return ({
    applyToStack: function (clientStack) {
        clientStack.addRelativeTo(awsAuthMiddleware(options), awsAuthMiddlewareOptions);
    },
}); };
export var getSigV4AuthPlugin = getAwsAuthPlugin;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWlkZGxld2FyZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taWRkbGV3YXJlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFhckQsSUFBTSxhQUFhLEdBQUcsVUFBQyxhQUFxQixFQUFFLGlCQUF5QjtJQUNyRSxPQUFBLElBQUksQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxPQUFPLEVBQUUsR0FBRyxhQUFhLENBQUMsSUFBSSxNQUFNO0FBQXJGLENBQXFGLENBQUM7QUFFeEYsSUFBTSxvQkFBb0IsR0FBRyxVQUFDLGlCQUF5QixJQUFLLE9BQUEsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLGlCQUFpQixDQUFDLEVBQXhDLENBQXdDLENBQUM7QUFFckcsTUFBTSxVQUFVLGlCQUFpQixDQUMvQixPQUE4QjtJQUU5QixPQUFPLFVBQUMsSUFBb0MsRUFBRSxPQUFnQztRQUM1RSxPQUFBLFVBQWdCLElBQXFDOzs7Ozs7OzRCQUNuRCxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO2dDQUFFLHNCQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBQztpQ0FDOUMsQ0FBQSxPQUFPLE9BQU8sQ0FBQyxNQUFNLEtBQUssVUFBVSxDQUFBLEVBQXBDLHdCQUFvQzs0QkFBRyxxQkFBTSxPQUFPLENBQUMsTUFBTSxFQUFFLEVBQUE7OzRCQUF0QixLQUFBLFNBQXNCLENBQUE7Ozs0QkFBRyxLQUFBLE9BQU8sQ0FBQyxNQUFNLENBQUE7Ozs0QkFBdkYsTUFBTSxLQUFpRjs0QkFDeEUsS0FBQSxJQUFJLENBQUE7K0NBQ3BCLElBQUk7OzRCQUNFLHFCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtvQ0FDdkMsV0FBVyxFQUFFLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxPQUFPLENBQUMsaUJBQWlCLENBQUM7b0NBQzdELGFBQWEsRUFBRSxPQUFPLENBQUMsZ0JBQWdCLENBQUM7b0NBQ3hDLGNBQWMsRUFBRSxPQUFPLENBQUMsaUJBQWlCLENBQUM7aUNBQzNDLENBQUMsRUFBQTtnQ0FOVyxxQkFBTSxxREFFbkIsVUFBTyxHQUFFLFNBSVAsVUFDRixFQUFBOzs0QkFQSSxNQUFNLEdBQUcsU0FPYjs0QkFFTSxPQUFPLEdBQUssTUFBTSxDQUFDLFFBQWUsUUFBM0IsQ0FBNEI7NEJBQ3JDLFVBQVUsR0FBRyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQzs0QkFDN0QsSUFBSSxVQUFVLEVBQUU7Z0NBQ1IsVUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUM7Z0NBQzFDLElBQUksYUFBYSxDQUFDLFVBQVUsRUFBRSxPQUFPLENBQUMsaUJBQWlCLENBQUMsRUFBRTtvQ0FDeEQsT0FBTyxDQUFDLGlCQUFpQixHQUFHLFVBQVUsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7aUNBQ3JEOzZCQUNGOzRCQUVELHNCQUFPLE1BQU0sRUFBQzs7OztTQUNmO0lBdEJELENBc0JDLENBQUM7QUFDTixDQUFDO0FBRUQsTUFBTSxDQUFDLElBQU0sd0JBQXdCLEdBQThCO0lBQ2pFLElBQUksRUFBRSxtQkFBbUI7SUFDekIsSUFBSSxFQUFFLENBQUMsV0FBVyxFQUFFLFNBQVMsQ0FBQztJQUM5QixRQUFRLEVBQUUsT0FBTztJQUNqQixZQUFZLEVBQUUsaUJBQWlCO0lBQy9CLFFBQVEsRUFBRSxJQUFJO0NBQ2YsQ0FBQztBQUVGLE1BQU0sQ0FBQyxJQUFNLGdCQUFnQixHQUFHLFVBQUMsT0FBOEIsSUFBMEIsT0FBQSxDQUFDO0lBQ3hGLFlBQVksRUFBRSxVQUFDLFdBQVc7UUFDeEIsV0FBVyxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsRUFBRSx3QkFBd0IsQ0FBQyxDQUFDO0lBQ2xGLENBQUM7Q0FDRixDQUFDLEVBSnVGLENBSXZGLENBQUM7QUFFSCxNQUFNLENBQUMsSUFBTSxrQkFBa0IsR0FBRyxnQkFBZ0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBSZXF1ZXN0IH0gZnJvbSBcIkBhd3Mtc2RrL3Byb3RvY29sLWh0dHBcIjtcbmltcG9ydCB7XG4gIEZpbmFsaXplSGFuZGxlcixcbiAgRmluYWxpemVIYW5kbGVyQXJndW1lbnRzLFxuICBGaW5hbGl6ZUhhbmRsZXJPdXRwdXQsXG4gIEZpbmFsaXplUmVxdWVzdE1pZGRsZXdhcmUsXG4gIEhhbmRsZXJFeGVjdXRpb25Db250ZXh0LFxuICBQbHVnZ2FibGUsXG4gIFJlbGF0aXZlTWlkZGxld2FyZU9wdGlvbnMsXG59IGZyb20gXCJAYXdzLXNkay90eXBlc1wiO1xuXG5pbXBvcnQgeyBBd3NBdXRoUmVzb2x2ZWRDb25maWcgfSBmcm9tIFwiLi9jb25maWd1cmF0aW9uc1wiO1xuXG5jb25zdCBpc0Nsb2NrU2tld2VkID0gKG5ld1NlcnZlclRpbWU6IG51bWJlciwgc3lzdGVtQ2xvY2tPZmZzZXQ6IG51bWJlcikgPT5cbiAgTWF0aC5hYnMoZ2V0U2tld0NvcnJlY3RlZERhdGUoc3lzdGVtQ2xvY2tPZmZzZXQpLmdldFRpbWUoKSAtIG5ld1NlcnZlclRpbWUpID49IDMwMDAwMDtcblxuY29uc3QgZ2V0U2tld0NvcnJlY3RlZERhdGUgPSAoc3lzdGVtQ2xvY2tPZmZzZXQ6IG51bWJlcikgPT4gbmV3IERhdGUoRGF0ZS5ub3coKSArIHN5c3RlbUNsb2NrT2Zmc2V0KTtcblxuZXhwb3J0IGZ1bmN0aW9uIGF3c0F1dGhNaWRkbGV3YXJlPElucHV0IGV4dGVuZHMgb2JqZWN0LCBPdXRwdXQgZXh0ZW5kcyBvYmplY3Q+KFxuICBvcHRpb25zOiBBd3NBdXRoUmVzb2x2ZWRDb25maWdcbik6IEZpbmFsaXplUmVxdWVzdE1pZGRsZXdhcmU8SW5wdXQsIE91dHB1dD4ge1xuICByZXR1cm4gKG5leHQ6IEZpbmFsaXplSGFuZGxlcjxJbnB1dCwgT3V0cHV0PiwgY29udGV4dDogSGFuZGxlckV4ZWN1dGlvbkNvbnRleHQpOiBGaW5hbGl6ZUhhbmRsZXI8SW5wdXQsIE91dHB1dD4gPT5cbiAgICBhc3luYyBmdW5jdGlvbiAoYXJnczogRmluYWxpemVIYW5kbGVyQXJndW1lbnRzPElucHV0Pik6IFByb21pc2U8RmluYWxpemVIYW5kbGVyT3V0cHV0PE91dHB1dD4+IHtcbiAgICAgIGlmICghSHR0cFJlcXVlc3QuaXNJbnN0YW5jZShhcmdzLnJlcXVlc3QpKSByZXR1cm4gbmV4dChhcmdzKTtcbiAgICAgIGNvbnN0IHNpZ25lciA9IHR5cGVvZiBvcHRpb25zLnNpZ25lciA9PT0gXCJmdW5jdGlvblwiID8gYXdhaXQgb3B0aW9ucy5zaWduZXIoKSA6IG9wdGlvbnMuc2lnbmVyO1xuICAgICAgY29uc3Qgb3V0cHV0ID0gYXdhaXQgbmV4dCh7XG4gICAgICAgIC4uLmFyZ3MsXG4gICAgICAgIHJlcXVlc3Q6IGF3YWl0IHNpZ25lci5zaWduKGFyZ3MucmVxdWVzdCwge1xuICAgICAgICAgIHNpZ25pbmdEYXRlOiBuZXcgRGF0ZShEYXRlLm5vdygpICsgb3B0aW9ucy5zeXN0ZW1DbG9ja09mZnNldCksXG4gICAgICAgICAgc2lnbmluZ1JlZ2lvbjogY29udGV4dFtcInNpZ25pbmdfcmVnaW9uXCJdLFxuICAgICAgICAgIHNpZ25pbmdTZXJ2aWNlOiBjb250ZXh0W1wic2lnbmluZ19zZXJ2aWNlXCJdLFxuICAgICAgICB9KSxcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCB7IGhlYWRlcnMgfSA9IG91dHB1dC5yZXNwb25zZSBhcyBhbnk7XG4gICAgICBjb25zdCBkYXRlSGVhZGVyID0gaGVhZGVycyAmJiAoaGVhZGVycy5kYXRlIHx8IGhlYWRlcnMuRGF0ZSk7XG4gICAgICBpZiAoZGF0ZUhlYWRlcikge1xuICAgICAgICBjb25zdCBzZXJ2ZXJUaW1lID0gRGF0ZS5wYXJzZShkYXRlSGVhZGVyKTtcbiAgICAgICAgaWYgKGlzQ2xvY2tTa2V3ZWQoc2VydmVyVGltZSwgb3B0aW9ucy5zeXN0ZW1DbG9ja09mZnNldCkpIHtcbiAgICAgICAgICBvcHRpb25zLnN5c3RlbUNsb2NrT2Zmc2V0ID0gc2VydmVyVGltZSAtIERhdGUubm93KCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG91dHB1dDtcbiAgICB9O1xufVxuXG5leHBvcnQgY29uc3QgYXdzQXV0aE1pZGRsZXdhcmVPcHRpb25zOiBSZWxhdGl2ZU1pZGRsZXdhcmVPcHRpb25zID0ge1xuICBuYW1lOiBcImF3c0F1dGhNaWRkbGV3YXJlXCIsXG4gIHRhZ3M6IFtcIlNJR05BVFVSRVwiLCBcIkFXU0FVVEhcIl0sXG4gIHJlbGF0aW9uOiBcImFmdGVyXCIsXG4gIHRvTWlkZGxld2FyZTogXCJyZXRyeU1pZGRsZXdhcmVcIixcbiAgb3ZlcnJpZGU6IHRydWUsXG59O1xuXG5leHBvcnQgY29uc3QgZ2V0QXdzQXV0aFBsdWdpbiA9IChvcHRpb25zOiBBd3NBdXRoUmVzb2x2ZWRDb25maWcpOiBQbHVnZ2FibGU8YW55LCBhbnk+ID0+ICh7XG4gIGFwcGx5VG9TdGFjazogKGNsaWVudFN0YWNrKSA9PiB7XG4gICAgY2xpZW50U3RhY2suYWRkUmVsYXRpdmVUbyhhd3NBdXRoTWlkZGxld2FyZShvcHRpb25zKSwgYXdzQXV0aE1pZGRsZXdhcmVPcHRpb25zKTtcbiAgfSxcbn0pO1xuXG5leHBvcnQgY29uc3QgZ2V0U2lnVjRBdXRoUGx1Z2luID0gZ2V0QXdzQXV0aFBsdWdpbjtcbiJdfQ==