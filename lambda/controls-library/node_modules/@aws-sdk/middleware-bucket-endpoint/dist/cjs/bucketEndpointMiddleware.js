"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBucketEndpointPlugin = exports.bucketEndpointMiddlewareOptions = exports.bucketEndpointMiddleware = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const util_arn_parser_1 = require("@aws-sdk/util-arn-parser");
const bucketHostname_1 = require("./bucketHostname");
const bucketHostnameUtils_1 = require("./bucketHostnameUtils");
const bucketEndpointMiddleware = (options) => (next, context) => async (args) => {
    const { Bucket: bucketName } = args.input;
    let replaceBucketInPath = options.bucketEndpoint;
    const request = args.request;
    if (protocol_http_1.HttpRequest.isInstance(request)) {
        if (options.bucketEndpoint) {
            request.hostname = bucketName;
        }
        else if (util_arn_parser_1.validate(bucketName)) {
            const bucketArn = util_arn_parser_1.parse(bucketName);
            const clientRegion = bucketHostnameUtils_1.getPseudoRegion(await options.region());
            const { partition, signingRegion = clientRegion } = (await options.regionInfoProvider(clientRegion)) || {};
            const useArnRegion = await options.useArnRegion();
            const { hostname, bucketEndpoint, signingRegion: modifiedSigningRegion, signingService, } = bucketHostname_1.bucketHostname({
                bucketName: bucketArn,
                baseHostname: request.hostname,
                accelerateEndpoint: options.useAccelerateEndpoint,
                dualstackEndpoint: options.useDualstackEndpoint,
                pathStyleEndpoint: options.forcePathStyle,
                tlsCompatible: request.protocol === "https:",
                useArnRegion,
                clientPartition: partition,
                clientSigningRegion: signingRegion,
                clientRegion: clientRegion,
                isCustomEndpoint: options.isCustomEndpoint,
            });
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
        }
        else {
            const clientRegion = bucketHostnameUtils_1.getPseudoRegion(await options.region());
            const { hostname, bucketEndpoint } = bucketHostname_1.bucketHostname({
                bucketName,
                clientRegion,
                baseHostname: request.hostname,
                accelerateEndpoint: options.useAccelerateEndpoint,
                dualstackEndpoint: options.useDualstackEndpoint,
                pathStyleEndpoint: options.forcePathStyle,
                tlsCompatible: request.protocol === "https:",
                isCustomEndpoint: options.isCustomEndpoint,
            });
            request.hostname = hostname;
            replaceBucketInPath = bucketEndpoint;
        }
        if (replaceBucketInPath) {
            request.path = request.path.replace(/^(\/)?[^\/]+/, "");
            if (request.path === "") {
                request.path = "/";
            }
        }
    }
    return next({ ...args, request });
};
exports.bucketEndpointMiddleware = bucketEndpointMiddleware;
exports.bucketEndpointMiddlewareOptions = {
    tags: ["BUCKET_ENDPOINT"],
    name: "bucketEndpointMiddleware",
    relation: "before",
    toMiddleware: "hostHeaderMiddleware",
    override: true,
};
const getBucketEndpointPlugin = (options) => ({
    applyToStack: (clientStack) => {
        clientStack.addRelativeTo(exports.bucketEndpointMiddleware(options), exports.bucketEndpointMiddlewareOptions);
    },
});
exports.getBucketEndpointPlugin = getBucketEndpointPlugin;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVja2V0RW5kcG9pbnRNaWRkbGV3YXJlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2J1Y2tldEVuZHBvaW50TWlkZGxld2FyZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwwREFBcUQ7QUFXckQsOERBQXNGO0FBRXRGLHFEQUFrRDtBQUNsRCwrREFBd0Q7QUFHakQsTUFBTSx3QkFBd0IsR0FDbkMsQ0FBQyxPQUFxQyxFQUE2QixFQUFFLENBQ3JFLENBQ0UsSUFBK0IsRUFDL0IsT0FBZ0MsRUFDTCxFQUFFLENBQy9CLEtBQUssRUFBRSxJQUFnQyxFQUF1QyxFQUFFO0lBQzlFLE1BQU0sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQTJCLENBQUM7SUFDaEUsSUFBSSxtQkFBbUIsR0FBRyxPQUFPLENBQUMsY0FBYyxDQUFDO0lBQ2pELE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDN0IsSUFBSSwyQkFBVyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsRUFBRTtRQUNuQyxJQUFJLE9BQU8sQ0FBQyxjQUFjLEVBQUU7WUFDMUIsT0FBTyxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUM7U0FDL0I7YUFBTSxJQUFJLDBCQUFXLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDbEMsTUFBTSxTQUFTLEdBQUcsdUJBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUN2QyxNQUFNLFlBQVksR0FBRyxxQ0FBZSxDQUFDLE1BQU0sT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7WUFDN0QsTUFBTSxFQUFFLFNBQVMsRUFBRSxhQUFhLEdBQUcsWUFBWSxFQUFFLEdBQUcsQ0FBQyxNQUFNLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUMzRyxNQUFNLFlBQVksR0FBRyxNQUFNLE9BQU8sQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUNsRCxN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Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cFJlcXVlc3QgfSBmcm9tIFwiQGF3cy1zZGsvcHJvdG9jb2wtaHR0cFwiO1xuaW1wb3J0IHtcbiAgQnVpbGRIYW5kbGVyLFxuICBCdWlsZEhhbmRsZXJBcmd1bWVudHMsXG4gIEJ1aWxkSGFuZGxlck91dHB1dCxcbiAgQnVpbGRNaWRkbGV3YXJlLFxuICBIYW5kbGVyRXhlY3V0aW9uQ29udGV4dCxcbiAgTWV0YWRhdGFCZWFyZXIsXG4gIFBsdWdnYWJsZSxcbiAgUmVsYXRpdmVNaWRkbGV3YXJlT3B0aW9ucyxcbn0gZnJvbSBcIkBhd3Mtc2RrL3R5cGVzXCI7XG5pbXBvcnQgeyBwYXJzZSBhcyBwYXJzZUFybiwgdmFsaWRhdGUgYXMgdmFsaWRhdGVBcm4gfSBmcm9tIFwiQGF3cy1zZGsvdXRpbC1hcm4tcGFyc2VyXCI7XG5cbmltcG9ydCB7IGJ1Y2tldEhvc3RuYW1lIH0gZnJvbSBcIi4vYnVja2V0SG9zdG5hbWVcIjtcbmltcG9ydCB7IGdldFBzZXVkb1JlZ2lvbiB9IGZyb20gXCIuL2J1Y2tldEhvc3RuYW1lVXRpbHNcIjtcbmltcG9ydCB7IEJ1Y2tldEVuZHBvaW50UmVzb2x2ZWRDb25maWcgfSBmcm9tIFwiLi9jb25maWd1cmF0aW9uc1wiO1xuXG5leHBvcnQgY29uc3QgYnVja2V0RW5kcG9pbnRNaWRkbGV3YXJlID1cbiAgKG9wdGlvbnM6IEJ1Y2tldEVuZHBvaW50UmVzb2x2ZWRDb25maWcpOiBCdWlsZE1pZGRsZXdhcmU8YW55LCBhbnk+ID0+XG4gIDxPdXRwdXQgZXh0ZW5kcyBNZXRhZGF0YUJlYXJlcj4oXG4gICAgbmV4dDogQnVpbGRIYW5kbGVyPGFueSwgT3V0cHV0PixcbiAgICBjb250ZXh0OiBIYW5kbGVyRXhlY3V0aW9uQ29udGV4dFxuICApOiBCdWlsZEhhbmRsZXI8YW55LCBPdXRwdXQ+ID0+XG4gIGFzeW5jIChhcmdzOiBCdWlsZEhhbmRsZXJBcmd1bWVudHM8YW55Pik6IFByb21pc2U8QnVpbGRIYW5kbGVyT3V0cHV0PE91dHB1dD4+ID0+IHtcbiAgICBjb25zdCB7IEJ1Y2tldDogYnVja2V0TmFtZSB9ID0gYXJncy5pbnB1dCBhcyB7IEJ1Y2tldDogc3RyaW5nIH07XG4gICAgbGV0IHJlcGxhY2VCdWNrZXRJblBhdGggPSBvcHRpb25zLmJ1Y2tldEVuZHBvaW50O1xuICAgIGNvbnN0IHJlcXVlc3QgPSBhcmdzLnJlcXVlc3Q7XG4gICAgaWYgKEh0dHBSZXF1ZXN0LmlzSW5zdGFuY2UocmVxdWVzdCkpIHtcbiAgICAgIGlmIChvcHRpb25zLmJ1Y2tldEVuZHBvaW50KSB7XG4gICAgICAgIHJlcXVlc3QuaG9zdG5hbWUgPSBidWNrZXROYW1lO1xuICAgICAgfSBlbHNlIGlmICh2YWxpZGF0ZUFybihidWNrZXROYW1lKSkge1xuICAgICAgICBjb25zdCBidWNrZXRBcm4gPSBwYXJzZUFybihidWNrZXROYW1lKTtcbiAgICAgICAgY29uc3QgY2xpZW50UmVnaW9uID0gZ2V0UHNldWRvUmVnaW9uKGF3YWl0IG9wdGlvbnMucmVnaW9uKCkpO1xuICAgICAgICBjb25zdCB7IHBhcnRpdGlvbiwgc2lnbmluZ1JlZ2lvbiA9IGNsaWVudFJlZ2lvbiB9ID0gKGF3YWl0IG9wdGlvbnMucmVnaW9uSW5mb1Byb3ZpZGVyKGNsaWVudFJlZ2lvbikpIHx8IHt9O1xuICAgICAgICBjb25zdCB1c2VBcm5SZWdpb24gPSBhd2FpdCBvcHRpb25zLnVzZUFyblJlZ2lvbigpO1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgaG9zdG5hbWUsXG4gICAgICAgICAgYnVja2V0RW5kcG9pbnQsXG4gICAgICAgICAgc2lnbmluZ1JlZ2lvbjogbW9kaWZpZWRTaWduaW5nUmVnaW9uLFxuICAgICAgICAgIHNpZ25pbmdTZXJ2aWNlLFxuICAgICAgICB9ID0gYnVja2V0SG9zdG5hbWUoe1xuICAgICAgICAgIGJ1Y2tldE5hbWU6IGJ1Y2tldEFybixcbiAgICAgICAgICBiYXNlSG9zdG5hbWU6IHJlcXVlc3QuaG9zdG5hbWUsXG4gICAgICAgICAgYWNjZWxlcmF0ZUVuZHBvaW50OiBvcHRpb25zLnVzZUFjY2VsZXJhdGVFbmRwb2ludCxcbiAgICAgICAgICBkdWFsc3RhY2tFbmRwb2ludDogb3B0aW9ucy51c2VEdWFsc3RhY2tFbmRwb2ludCxcbiAgICAgICAgICBwYXRoU3R5bGVFbmRwb2ludDogb3B0aW9ucy5mb3JjZVBhdGhTdHlsZSxcbiAgICAgICAgICB0bHNDb21wYXRpYmxlOiByZXF1ZXN0LnByb3RvY29sID09PSBcImh0dHBzOlwiLFxuICAgICAgICAgIHVzZUFyblJlZ2lvbixcbiAgICAgICAgICBjbGllbnRQYXJ0aXRpb246IHBhcnRpdGlvbixcbiAgICAgICAgICBjbGllbnRTaWduaW5nUmVnaW9uOiBzaWduaW5nUmVnaW9uLFxuICAgICAgICAgIGNsaWVudFJlZ2lvbjogY2xpZW50UmVnaW9uLFxuICAgICAgICAgIGlzQ3VzdG9tRW5kcG9pbnQ6IG9wdGlvbnMuaXNDdXN0b21FbmRwb2ludCxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gSWYgdGhlIHJlcXVlc3QgbmVlZHMgdG8gdXNlIGEgcmVnaW9uIG9yIHNlcnZpY2UgbmFtZSBpbmZlcnJlZCBmcm9tIEFSTiB0aGF0IGRpZmZlcmVudCBmcm9tIGNsaWVudCByZWdpb24sIHdlXG4gICAgICAgIC8vIG5lZWQgdG8gc2V0IHRoZW0gaW4gdGhlIGhhbmRsZXIgY29udGV4dCBzbyB0aGUgc2lnbmVyIHdpbGwgdXNlIHRoZW1cbiAgICAgICAgaWYgKG1vZGlmaWVkU2lnbmluZ1JlZ2lvbiAmJiBtb2RpZmllZFNpZ25pbmdSZWdpb24gIT09IHNpZ25pbmdSZWdpb24pIHtcbiAgICAgICAgICBjb250ZXh0W1wic2lnbmluZ19yZWdpb25cIl0gPSBtb2RpZmllZFNpZ25pbmdSZWdpb247XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNpZ25pbmdTZXJ2aWNlICYmIHNpZ25pbmdTZXJ2aWNlICE9PSBcInMzXCIpIHtcbiAgICAgICAgICBjb250ZXh0W1wic2lnbmluZ19zZXJ2aWNlXCJdID0gc2lnbmluZ1NlcnZpY2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXF1ZXN0Lmhvc3RuYW1lID0gaG9zdG5hbWU7XG4gICAgICAgIHJlcGxhY2VCdWNrZXRJblBhdGggPSBidWNrZXRFbmRwb2ludDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGNsaWVudFJlZ2lvbiA9IGdldFBzZXVkb1JlZ2lvbihhd2FpdCBvcHRpb25zLnJlZ2lvbigpKTtcbiAgICAgICAgY29uc3QgeyBob3N0bmFtZSwgYnVja2V0RW5kcG9pbnQgfSA9IGJ1Y2tldEhvc3RuYW1lKHtcbiAgICAgICAgICBidWNrZXROYW1lLFxuICAgICAgICAgIGNsaWVudFJlZ2lvbixcbiAgICAgICAgICBiYXNlSG9zdG5hbWU6IHJlcXVlc3QuaG9zdG5hbWUsXG4gICAgICAgICAgYWNjZWxlcmF0ZUVuZHBvaW50OiBvcHRpb25zLnVzZUFjY2VsZXJhdGVFbmRwb2ludCxcbiAgICAgICAgICBkdWFsc3RhY2tFbmRwb2ludDogb3B0aW9ucy51c2VEdWFsc3RhY2tFbmRwb2ludCxcbiAgICAgICAgICBwYXRoU3R5bGVFbmRwb2ludDogb3B0aW9ucy5mb3JjZVBhdGhTdHlsZSxcbiAgICAgICAgICB0bHNDb21wYXRpYmxlOiByZXF1ZXN0LnByb3RvY29sID09PSBcImh0dHBzOlwiLFxuICAgICAgICAgIGlzQ3VzdG9tRW5kcG9pbnQ6IG9wdGlvbnMuaXNDdXN0b21FbmRwb2ludCxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmVxdWVzdC5ob3N0bmFtZSA9IGhvc3RuYW1lO1xuICAgICAgICByZXBsYWNlQnVja2V0SW5QYXRoID0gYnVja2V0RW5kcG9pbnQ7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZXBsYWNlQnVja2V0SW5QYXRoKSB7XG4gICAgICAgIHJlcXVlc3QucGF0aCA9IHJlcXVlc3QucGF0aC5yZXBsYWNlKC9eKFxcLyk/W15cXC9dKy8sIFwiXCIpO1xuICAgICAgICBpZiAocmVxdWVzdC5wYXRoID09PSBcIlwiKSB7XG4gICAgICAgICAgcmVxdWVzdC5wYXRoID0gXCIvXCI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbmV4dCh7IC4uLmFyZ3MsIHJlcXVlc3QgfSk7XG4gIH07XG5cbmV4cG9ydCBjb25zdCBidWNrZXRFbmRwb2ludE1pZGRsZXdhcmVPcHRpb25zOiBSZWxhdGl2ZU1pZGRsZXdhcmVPcHRpb25zID0ge1xuICB0YWdzOiBbXCJCVUNLRVRfRU5EUE9JTlRcIl0sXG4gIG5hbWU6IFwiYnVja2V0RW5kcG9pbnRNaWRkbGV3YXJlXCIsXG4gIHJlbGF0aW9uOiBcImJlZm9yZVwiLFxuICB0b01pZGRsZXdhcmU6IFwiaG9zdEhlYWRlck1pZGRsZXdhcmVcIixcbiAgb3ZlcnJpZGU6IHRydWUsXG59O1xuXG5leHBvcnQgY29uc3QgZ2V0QnVja2V0RW5kcG9pbnRQbHVnaW4gPSAob3B0aW9uczogQnVja2V0RW5kcG9pbnRSZXNvbHZlZENvbmZpZyk6IFBsdWdnYWJsZTxhbnksIGFueT4gPT4gKHtcbiAgYXBwbHlUb1N0YWNrOiAoY2xpZW50U3RhY2spID0+IHtcbiAgICBjbGllbnRTdGFjay5hZGRSZWxhdGl2ZVRvKGJ1Y2tldEVuZHBvaW50TWlkZGxld2FyZShvcHRpb25zKSwgYnVja2V0RW5kcG9pbnRNaWRkbGV3YXJlT3B0aW9ucyk7XG4gIH0sXG59KTtcbiJdfQ==