import { __assign, __awaiter, __generator } from "tslib";
import { HttpRequest } from "@aws-sdk/protocol-http";
import { parse as parseArn, validate as validateArn } from "@aws-sdk/util-arn-parser";
import { bucketHostname } from "./bucketHostname";
import { getPseudoRegion } from "./bucketHostnameUtils";
export var bucketEndpointMiddleware = function (options) {
    return function (next, context) {
        return function (args) { return __awaiter(void 0, void 0, void 0, function () {
            var bucketName, replaceBucketInPath, request, bucketArn, clientRegion, _a, _b, partition, _c, signingRegion, useArnRegion, _d, hostname, bucketEndpoint, modifiedSigningRegion, signingService, clientRegion, _e, _f, hostname, bucketEndpoint;
            return __generator(this, function (_g) {
                switch (_g.label) {
                    case 0:
                        bucketName = args.input.Bucket;
                        replaceBucketInPath = options.bucketEndpoint;
                        request = args.request;
                        if (!HttpRequest.isInstance(request)) return [3 /*break*/, 8];
                        if (!options.bucketEndpoint) return [3 /*break*/, 1];
                        request.hostname = bucketName;
                        return [3 /*break*/, 7];
                    case 1:
                        if (!validateArn(bucketName)) return [3 /*break*/, 5];
                        bucketArn = parseArn(bucketName);
                        _a = getPseudoRegion;
                        return [4 /*yield*/, options.region()];
                    case 2:
                        clientRegion = _a.apply(void 0, [_g.sent()]);
                        return [4 /*yield*/, options.regionInfoProvider(clientRegion)];
                    case 3:
                        _b = (_g.sent()) || {}, partition = _b.partition, _c = _b.signingRegion, signingRegion = _c === void 0 ? clientRegion : _c;
                        return [4 /*yield*/, options.useArnRegion()];
                    case 4:
                        useArnRegion = _g.sent();
                        _d = bucketHostname({
                            bucketName: bucketArn,
                            baseHostname: request.hostname,
                            accelerateEndpoint: options.useAccelerateEndpoint,
                            dualstackEndpoint: options.useDualstackEndpoint,
                            pathStyleEndpoint: options.forcePathStyle,
                            tlsCompatible: request.protocol === "https:",
                            useArnRegion: useArnRegion,
                            clientPartition: partition,
                            clientSigningRegion: signingRegion,
                            clientRegion: clientRegion,
                            isCustomEndpoint: options.isCustomEndpoint,
                        }), hostname = _d.hostname, bucketEndpoint = _d.bucketEndpoint, modifiedSigningRegion = _d.signingRegion, signingService = _d.signingService;
                        // If the request needs to use a region or service name inferred from ARN that different from client region, we
                        // need to set them in the handler context so the signer will use them
                        if (modifiedSigningRegion && modifiedSigningRegion !== signingRegion) {
                            context["signing_region"] = modifiedSigningRegion;
                        }
                        if (signingService && signingService !== "s3") {
                            context["signing_service"] = signingService;
                        }
                        request.hostname = hostname;
                        replaceBucketInPath = bucketEndpoint;
                        return [3 /*break*/, 7];
                    case 5:
                        _e = getPseudoRegion;
                        return [4 /*yield*/, options.region()];
                    case 6:
                        clientRegion = _e.apply(void 0, [_g.sent()]);
                        _f = bucketHostname({
                            bucketName: bucketName,
                            clientRegion: clientRegion,
                            baseHostname: request.hostname,
                            accelerateEndpoint: options.useAccelerateEndpoint,
                            dualstackEndpoint: options.useDualstackEndpoint,
                            pathStyleEndpoint: options.forcePathStyle,
                            tlsCompatible: request.protocol === "https:",
                            isCustomEndpoint: options.isCustomEndpoint,
                        }), hostname = _f.hostname, bucketEndpoint = _f.bucketEndpoint;
                        request.hostname = hostname;
                        replaceBucketInPath = bucketEndpoint;
                        _g.label = 7;
                    case 7:
                        if (replaceBucketInPath) {
                            request.path = request.path.replace(/^(\/)?[^\/]+/, "");
                            if (request.path === "") {
                                request.path = "/";
                            }
                        }
                        _g.label = 8;
                    case 8: return [2 /*return*/, next(__assign(__assign({}, args), { request: request }))];
                }
            });
        }); };
    };
};
export var bucketEndpointMiddlewareOptions = {
    tags: ["BUCKET_ENDPOINT"],
    name: "bucketEndpointMiddleware",
    relation: "before",
    toMiddleware: "hostHeaderMiddleware",
    override: true,
};
export var getBucketEndpointPlugin = function (options) { return ({
    applyToStack: function (clientStack) {
        clientStack.addRelativeTo(bucketEndpointMiddleware(options), bucketEndpointMiddlewareOptions);
    },
}); };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVja2V0RW5kcG9pbnRNaWRkbGV3YXJlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2J1Y2tldEVuZHBvaW50TWlkZGxld2FyZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBV3JELE9BQU8sRUFBRSxLQUFLLElBQUksUUFBUSxFQUFFLFFBQVEsSUFBSSxXQUFXLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUV0RixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDbEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBR3hELE1BQU0sQ0FBQyxJQUFNLHdCQUF3QixHQUNuQyxVQUFDLE9BQXFDO0lBQ3RDLE9BQUEsVUFDRSxJQUErQixFQUMvQixPQUFnQztRQUVsQyxPQUFBLFVBQU8sSUFBZ0M7Ozs7O3dCQUNyQixVQUFVLEdBQUssSUFBSSxDQUFDLEtBQTJCLE9BQXJDLENBQXNDO3dCQUM1RCxtQkFBbUIsR0FBRyxPQUFPLENBQUMsY0FBYyxDQUFDO3dCQUMzQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQzs2QkFDekIsV0FBVyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsRUFBL0Isd0JBQStCOzZCQUM3QixPQUFPLENBQUMsY0FBYyxFQUF0Qix3QkFBc0I7d0JBQ3hCLE9BQU8sQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDOzs7NkJBQ3JCLFdBQVcsQ0FBQyxVQUFVLENBQUMsRUFBdkIsd0JBQXVCO3dCQUMxQixTQUFTLEdBQUcsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO3dCQUNsQixLQUFBLGVBQWUsQ0FBQTt3QkFBQyxxQkFBTSxPQUFPLENBQUMsTUFBTSxFQUFFLEVBQUE7O3dCQUFyRCxZQUFZLEdBQUcsa0JBQWdCLFNBQXNCLEVBQUM7d0JBQ1AscUJBQU0sT0FBTyxDQUFDLGtCQUFrQixD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QUFRLEVBQUUsSUFBSTtDQUNmLENBQUM7QUFFRixNQUFNLENBQUMsSUFBTSx1QkFBdUIsR0FBRyxVQUFDLE9BQXFDLElBQTBCLE9BQUEsQ0FBQztJQUN0RyxZQUFZLEVBQUUsVUFBQyxXQUFXO1FBQ3hCLFdBQVcsQ0FBQyxhQUFhLENBQUMsd0JBQXdCLENBQUMsT0FBTyxDQUFDLEVBQUUsK0JBQStCLENBQUMsQ0FBQztJQUNoRyxDQUFDO0NBQ0YsQ0FBQyxFQUpxRyxDQUlyRyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cFJlcXVlc3QgfSBmcm9tIFwiQGF3cy1zZGsvcHJvdG9jb2wtaHR0cFwiO1xuaW1wb3J0IHtcbiAgQnVpbGRIYW5kbGVyLFxuICBCdWlsZEhhbmRsZXJBcmd1bWVudHMsXG4gIEJ1aWxkSGFuZGxlck91dHB1dCxcbiAgQnVpbGRNaWRkbGV3YXJlLFxuICBIYW5kbGVyRXhlY3V0aW9uQ29udGV4dCxcbiAgTWV0YWRhdGFCZWFyZXIsXG4gIFBsdWdnYWJsZSxcbiAgUmVsYXRpdmVNaWRkbGV3YXJlT3B0aW9ucyxcbn0gZnJvbSBcIkBhd3Mtc2RrL3R5cGVzXCI7XG5pbXBvcnQgeyBwYXJzZSBhcyBwYXJzZUFybiwgdmFsaWRhdGUgYXMgdmFsaWRhdGVBcm4gfSBmcm9tIFwiQGF3cy1zZGsvdXRpbC1hcm4tcGFyc2VyXCI7XG5cbmltcG9ydCB7IGJ1Y2tldEhvc3RuYW1lIH0gZnJvbSBcIi4vYnVja2V0SG9zdG5hbWVcIjtcbmltcG9ydCB7IGdldFBzZXVkb1JlZ2lvbiB9IGZyb20gXCIuL2J1Y2tldEhvc3RuYW1lVXRpbHNcIjtcbmltcG9ydCB7IEJ1Y2tldEVuZHBvaW50UmVzb2x2ZWRDb25maWcgfSBmcm9tIFwiLi9jb25maWd1cmF0aW9uc1wiO1xuXG5leHBvcnQgY29uc3QgYnVja2V0RW5kcG9pbnRNaWRkbGV3YXJlID1cbiAgKG9wdGlvbnM6IEJ1Y2tldEVuZHBvaW50UmVzb2x2ZWRDb25maWcpOiBCdWlsZE1pZGRsZXdhcmU8YW55LCBhbnk+ID0+XG4gIDxPdXRwdXQgZXh0ZW5kcyBNZXRhZGF0YUJlYXJlcj4oXG4gICAgbmV4dDogQnVpbGRIYW5kbGVyPGFueSwgT3V0cHV0PixcbiAgICBjb250ZXh0OiBIYW5kbGVyRXhlY3V0aW9uQ29udGV4dFxuICApOiBCdWlsZEhhbmRsZXI8YW55LCBPdXRwdXQ+ID0+XG4gIGFzeW5jIChhcmdzOiBCdWlsZEhhbmRsZXJBcmd1bWVudHM8YW55Pik6IFByb21pc2U8QnVpbGRIYW5kbGVyT3V0cHV0PE91dHB1dD4+ID0+IHtcbiAgICBjb25zdCB7IEJ1Y2tldDogYnVja2V0TmFtZSB9ID0gYXJncy5pbnB1dCBhcyB7IEJ1Y2tldDogc3RyaW5nIH07XG4gICAgbGV0IHJlcGxhY2VCdWNrZXRJblBhdGggPSBvcHRpb25zLmJ1Y2tldEVuZHBvaW50O1xuICAgIGNvbnN0IHJlcXVlc3QgPSBhcmdzLnJlcXVlc3Q7XG4gICAgaWYgKEh0dHBSZXF1ZXN0LmlzSW5zdGFuY2UocmVxdWVzdCkpIHtcbiAgICAgIGlmIChvcHRpb25zLmJ1Y2tldEVuZHBvaW50KSB7XG4gICAgICAgIHJlcXVlc3QuaG9zdG5hbWUgPSBidWNrZXROYW1lO1xuICAgICAgfSBlbHNlIGlmICh2YWxpZGF0ZUFybihidWNrZXROYW1lKSkge1xuICAgICAgICBjb25zdCBidWNrZXRBcm4gPSBwYXJzZUFybihidWNrZXROYW1lKTtcbiAgICAgICAgY29uc3QgY2xpZW50UmVnaW9uID0gZ2V0UHNldWRvUmVnaW9uKGF3YWl0IG9wdGlvbnMucmVnaW9uKCkpO1xuICAgICAgICBjb25zdCB7IHBhcnRpdGlvbiwgc2lnbmluZ1JlZ2lvbiA9IGNsaWVudFJlZ2lvbiB9ID0gKGF3YWl0IG9wdGlvbnMucmVnaW9uSW5mb1Byb3ZpZGVyKGNsaWVudFJlZ2lvbikpIHx8IHt9O1xuICAgICAgICBjb25zdCB1c2VBcm5SZWdpb24gPSBhd2FpdCBvcHRpb25zLnVzZUFyblJlZ2lvbigpO1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgaG9zdG5hbWUsXG4gICAgICAgICAgYnVja2V0RW5kcG9pbnQsXG4gICAgICAgICAgc2lnbmluZ1JlZ2lvbjogbW9kaWZpZWRTaWduaW5nUmVnaW9uLFxuICAgICAgICAgIHNpZ25pbmdTZXJ2aWNlLFxuICAgICAgICB9ID0gYnVja2V0SG9zdG5hbWUoe1xuICAgICAgICAgIGJ1Y2tldE5hbWU6IGJ1Y2tldEFybixcbiAgICAgICAgICBiYXNlSG9zdG5hbWU6IHJlcXVlc3QuaG9zdG5hbWUsXG4gICAgICAgICAgYWNjZWxlcmF0ZUVuZHBvaW50OiBvcHRpb25zLnVzZUFjY2VsZXJhdGVFbmRwb2ludCxcbiAgICAgICAgICBkdWFsc3RhY2tFbmRwb2ludDogb3B0aW9ucy51c2VEdWFsc3RhY2tFbmRwb2ludCxcbiAgICAgICAgICBwYXRoU3R5bGVFbmRwb2ludDogb3B0aW9ucy5mb3JjZVBhdGhTdHlsZSxcbiAgICAgICAgICB0bHNDb21wYXRpYmxlOiByZXF1ZXN0LnByb3RvY29sID09PSBcImh0dHBzOlwiLFxuICAgICAgICAgIHVzZUFyblJlZ2lvbixcbiAgICAgICAgICBjbGllbnRQYXJ0aXRpb246IHBhcnRpdGlvbixcbiAgICAgICAgICBjbGllbnRTaWduaW5nUmVnaW9uOiBzaWduaW5nUmVnaW9uLFxuICAgICAgICAgIGNsaWVudFJlZ2lvbjogY2xpZW50UmVnaW9uLFxuICAgICAgICAgIGlzQ3VzdG9tRW5kcG9pbnQ6IG9wdGlvbnMuaXNDdXN0b21FbmRwb2ludCxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gSWYgdGhlIHJlcXVlc3QgbmVlZHMgdG8gdXNlIGEgcmVnaW9uIG9yIHNlcnZpY2UgbmFtZSBpbmZlcnJlZCBmcm9tIEFSTiB0aGF0IGRpZmZlcmVudCBmcm9tIGNsaWVudCByZWdpb24sIHdlXG4gICAgICAgIC8vIG5lZWQgdG8gc2V0IHRoZW0gaW4gdGhlIGhhbmRsZXIgY29udGV4dCBzbyB0aGUgc2lnbmVyIHdpbGwgdXNlIHRoZW1cbiAgICAgICAgaWYgKG1vZGlmaWVkU2lnbmluZ1JlZ2lvbiAmJiBtb2RpZmllZFNpZ25pbmdSZWdpb24gIT09IHNpZ25pbmdSZWdpb24pIHtcbiAgICAgICAgICBjb250ZXh0W1wic2lnbmluZ19yZWdpb25cIl0gPSBtb2RpZmllZFNpZ25pbmdSZWdpb247XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNpZ25pbmdTZXJ2aWNlICYmIHNpZ25pbmdTZXJ2aWNlICE9PSBcInMzXCIpIHtcbiAgICAgICAgICBjb250ZXh0W1wic2lnbmluZ19zZXJ2aWNlXCJdID0gc2lnbmluZ1NlcnZpY2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXF1ZXN0Lmhvc3RuYW1lID0gaG9zdG5hbWU7XG4gICAgICAgIHJlcGxhY2VCdWNrZXRJblBhdGggPSBidWNrZXRFbmRwb2ludDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGNsaWVudFJlZ2lvbiA9IGdldFBzZXVkb1JlZ2lvbihhd2FpdCBvcHRpb25zLnJlZ2lvbigpKTtcbiAgICAgICAgY29uc3QgeyBob3N0bmFtZSwgYnVja2V0RW5kcG9pbnQgfSA9IGJ1Y2tldEhvc3RuYW1lKHtcbiAgICAgICAgICBidWNrZXROYW1lLFxuICAgICAgICAgIGNsaWVudFJlZ2lvbixcbiAgICAgICAgICBiYXNlSG9zdG5hbWU6IHJlcXVlc3QuaG9zdG5hbWUsXG4gICAgICAgICAgYWNjZWxlcmF0ZUVuZHBvaW50OiBvcHRpb25zLnVzZUFjY2VsZXJhdGVFbmRwb2ludCxcbiAgICAgICAgICBkdWFsc3RhY2tFbmRwb2ludDogb3B0aW9ucy51c2VEdWFsc3RhY2tFbmRwb2ludCxcbiAgICAgICAgICBwYXRoU3R5bGVFbmRwb2ludDogb3B0aW9ucy5mb3JjZVBhdGhTdHlsZSxcbiAgICAgICAgICB0bHNDb21wYXRpYmxlOiByZXF1ZXN0LnByb3RvY29sID09PSBcImh0dHBzOlwiLFxuICAgICAgICAgIGlzQ3VzdG9tRW5kcG9pbnQ6IG9wdGlvbnMuaXNDdXN0b21FbmRwb2ludCxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmVxdWVzdC5ob3N0bmFtZSA9IGhvc3RuYW1lO1xuICAgICAgICByZXBsYWNlQnVja2V0SW5QYXRoID0gYnVja2V0RW5kcG9pbnQ7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZXBsYWNlQnVja2V0SW5QYXRoKSB7XG4gICAgICAgIHJlcXVlc3QucGF0aCA9IHJlcXVlc3QucGF0aC5yZXBsYWNlKC9eKFxcLyk/W15cXC9dKy8sIFwiXCIpO1xuICAgICAgICBpZiAocmVxdWVzdC5wYXRoID09PSBcIlwiKSB7XG4gICAgICAgICAgcmVxdWVzdC5wYXRoID0gXCIvXCI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbmV4dCh7IC4uLmFyZ3MsIHJlcXVlc3QgfSk7XG4gIH07XG5cbmV4cG9ydCBjb25zdCBidWNrZXRFbmRwb2ludE1pZGRsZXdhcmVPcHRpb25zOiBSZWxhdGl2ZU1pZGRsZXdhcmVPcHRpb25zID0ge1xuICB0YWdzOiBbXCJCVUNLRVRfRU5EUE9JTlRcIl0sXG4gIG5hbWU6IFwiYnVja2V0RW5kcG9pbnRNaWRkbGV3YXJlXCIsXG4gIHJlbGF0aW9uOiBcImJlZm9yZVwiLFxuICB0b01pZGRsZXdhcmU6IFwiaG9zdEhlYWRlck1pZGRsZXdhcmVcIixcbiAgb3ZlcnJpZGU6IHRydWUsXG59O1xuXG5leHBvcnQgY29uc3QgZ2V0QnVja2V0RW5kcG9pbnRQbHVnaW4gPSAob3B0aW9uczogQnVja2V0RW5kcG9pbnRSZXNvbHZlZENvbmZpZyk6IFBsdWdnYWJsZTxhbnksIGFueT4gPT4gKHtcbiAgYXBwbHlUb1N0YWNrOiAoY2xpZW50U3RhY2spID0+IHtcbiAgICBjbGllbnRTdGFjay5hZGRSZWxhdGl2ZVRvKGJ1Y2tldEVuZHBvaW50TWlkZGxld2FyZShvcHRpb25zKSwgYnVja2V0RW5kcG9pbnRNaWRkbGV3YXJlT3B0aW9ucyk7XG4gIH0sXG59KTtcbiJdfQ==