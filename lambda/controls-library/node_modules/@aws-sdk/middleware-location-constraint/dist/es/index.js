import { __assign, __awaiter, __generator } from "tslib";
/**
 * This middleware modifies the input on S3 CreateBucket requests.  If the LocationConstraint has not been set, this
 * middleware will set a LocationConstraint to match the configured region.  The CreateBucketConfiguration will be
 * removed entirely on requests to the us-east-1 region.
 */
export function locationConstraintMiddleware(options) {
    var _this = this;
    return function (next) {
        return function (args) { return __awaiter(_this, void 0, void 0, function () {
            var CreateBucketConfiguration, region;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        CreateBucketConfiguration = args.input.CreateBucketConfiguration;
                        return [4 /*yield*/, options.region()];
                    case 1:
                        region = _a.sent();
                        if (!CreateBucketConfiguration || !CreateBucketConfiguration.LocationConstraint) {
                            args = __assign(__assign({}, args), { input: __assign(__assign({}, args.input), { CreateBucketConfiguration: region === "us-east-1" ? undefined : { LocationConstraint: region } }) });
                        }
                        return [2 /*return*/, next(args)];
                }
            });
        }); };
    };
}
export var locationConstraintMiddlewareOptions = {
    step: "initialize",
    tags: ["LOCATION_CONSTRAINT", "CREATE_BUCKET_CONFIGURATION"],
    name: "locationConstraintMiddleware",
    override: true,
};
export var getLocationConstraintPlugin = function (config) { return ({
    applyToStack: function (clientStack) {
        clientStack.add(locationConstraintMiddleware(config), locationConstraintMiddlewareOptions);
    },
}); };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQVlBOzs7O0dBSUc7QUFFSCxNQUFNLFVBQVUsNEJBQTRCLENBQzFDLE9BQXlDO0lBRDNDLGlCQW9CQztJQWpCQyxPQUFPLFVBQWdDLElBQW9DO1FBQ3pFLE9BQUEsVUFBTyxJQUFxQzs7Ozs7d0JBQ2xDLHlCQUF5QixHQUFLLElBQUksQ0FBQyxLQUFLLDBCQUFmLENBQWdCO3dCQUVsQyxxQkFBTSxPQUFPLENBQUMsTUFBTSxFQUFFLEVBQUE7O3dCQUEvQixNQUFNLEdBQUcsU0FBc0I7d0JBQ3JDLElBQUksQ0FBQyx5QkFBeUIsSUFBSSxDQUFDLHlCQUF5QixDQUFDLGtCQUFrQixFQUFFOzRCQUMvRSxJQUFJLHlCQUNDLElBQUksS0FDUCxLQUFLLHdCQUNBLElBQUksQ0FBQyxLQUFLLEtBQ2IseUJBQXlCLEVBQUUsTUFBTSxLQUFLLFdBQVcsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sRUFBRSxNQUVqRyxDQUFDO3lCQUNIO3dCQUVELHNCQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBQzs7O2FBQ25CO0lBZkQsQ0FlQyxDQUFDO0FBQ04sQ0FBQztBQUVELE1BQU0sQ0FBQyxJQUFNLG1DQUFtQyxHQUE2QjtJQUMzRSxJQUFJLEVBQUUsWUFBWTtJQUNsQixJQUFJLEVBQUUsQ0FBQyxxQkFBcUIsRUFBRSw2QkFBNkIsQ0FBQztJQUM1RCxJQUFJLEVBQUUsOEJBQThCO0lBQ3BDLFFBQVEsRUFBRSxJQUFJO0NBQ2YsQ0FBQztBQUVGLE1BQU0sQ0FBQyxJQUFNLDJCQUEyQixHQUFHLFVBQUMsTUFBd0MsSUFBMEIsT0FBQSxDQUFDO0lBQzdHLFlBQVksRUFBRSxVQUFDLFdBQVc7UUFDeEIsV0FBVyxDQUFDLEdBQUcsQ0FBQyw0QkFBNEIsQ0FBQyxNQUFNLENBQUMsRUFBRSxtQ0FBbUMsQ0FBQyxDQUFDO0lBQzdGLENBQUM7Q0FDRixDQUFDLEVBSjRHLENBSTVHLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBJbml0aWFsaXplSGFuZGxlcixcbiAgSW5pdGlhbGl6ZUhhbmRsZXJBcmd1bWVudHMsXG4gIEluaXRpYWxpemVIYW5kbGVyT3B0aW9ucyxcbiAgSW5pdGlhbGl6ZUhhbmRsZXJPdXRwdXQsXG4gIEluaXRpYWxpemVNaWRkbGV3YXJlLFxuICBNZXRhZGF0YUJlYXJlcixcbiAgUGx1Z2dhYmxlLFxufSBmcm9tIFwiQGF3cy1zZGsvdHlwZXNcIjtcblxuaW1wb3J0IHsgTG9jYXRpb25Db25zdHJhaW50UmVzb2x2ZWRDb25maWcgfSBmcm9tIFwiLi9jb25maWd1cmF0aW9uXCI7XG5cbi8qKlxuICogVGhpcyBtaWRkbGV3YXJlIG1vZGlmaWVzIHRoZSBpbnB1dCBvbiBTMyBDcmVhdGVCdWNrZXQgcmVxdWVzdHMuICBJZiB0aGUgTG9jYXRpb25Db25zdHJhaW50IGhhcyBub3QgYmVlbiBzZXQsIHRoaXNcbiAqIG1pZGRsZXdhcmUgd2lsbCBzZXQgYSBMb2NhdGlvbkNvbnN0cmFpbnQgdG8gbWF0Y2ggdGhlIGNvbmZpZ3VyZWQgcmVnaW9uLiAgVGhlIENyZWF0ZUJ1Y2tldENvbmZpZ3VyYXRpb24gd2lsbCBiZVxuICogcmVtb3ZlZCBlbnRpcmVseSBvbiByZXF1ZXN0cyB0byB0aGUgdXMtZWFzdC0xIHJlZ2lvbi5cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gbG9jYXRpb25Db25zdHJhaW50TWlkZGxld2FyZShcbiAgb3B0aW9uczogTG9jYXRpb25Db25zdHJhaW50UmVzb2x2ZWRDb25maWdcbik6IEluaXRpYWxpemVNaWRkbGV3YXJlPGFueSwgYW55PiB7XG4gIHJldHVybiA8T3V0cHV0IGV4dGVuZHMgTWV0YWRhdGFCZWFyZXI+KG5leHQ6IEluaXRpYWxpemVIYW5kbGVyPGFueSwgT3V0cHV0Pik6IEluaXRpYWxpemVIYW5kbGVyPGFueSwgT3V0cHV0PiA9PlxuICAgIGFzeW5jIChhcmdzOiBJbml0aWFsaXplSGFuZGxlckFyZ3VtZW50czxhbnk+KTogUHJvbWlzZTxJbml0aWFsaXplSGFuZGxlck91dHB1dDxPdXRwdXQ+PiA9PiB7XG4gICAgICBjb25zdCB7IENyZWF0ZUJ1Y2tldENvbmZpZ3VyYXRpb24gfSA9IGFyZ3MuaW5wdXQ7XG4gICAgICAvL0FmdGVyIHJlZ2lvbiBjb25maWcgcmVzb2x1dGlvbiwgcmVnaW9uIGlzIGEgUHJvdmlkZXI8c3RyaW5nPlxuICAgICAgY29uc3QgcmVnaW9uID0gYXdhaXQgb3B0aW9ucy5yZWdpb24oKTtcbiAgICAgIGlmICghQ3JlYXRlQnVja2V0Q29uZmlndXJhdGlvbiB8fCAhQ3JlYXRlQnVja2V0Q29uZmlndXJhdGlvbi5Mb2NhdGlvbkNvbnN0cmFpbnQpIHtcbiAgICAgICAgYXJncyA9IHtcbiAgICAgICAgICAuLi5hcmdzLFxuICAgICAgICAgIGlucHV0OiB7XG4gICAgICAgICAgICAuLi5hcmdzLmlucHV0LFxuICAgICAgICAgICAgQ3JlYXRlQnVja2V0Q29uZmlndXJhdGlvbjogcmVnaW9uID09PSBcInVzLWVhc3QtMVwiID8gdW5kZWZpbmVkIDogeyBMb2NhdGlvbkNvbnN0cmFpbnQ6IHJlZ2lvbiB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBuZXh0KGFyZ3MpO1xuICAgIH07XG59XG5cbmV4cG9ydCBjb25zdCBsb2NhdGlvbkNvbnN0cmFpbnRNaWRkbGV3YXJlT3B0aW9uczogSW5pdGlhbGl6ZUhhbmRsZXJPcHRpb25zID0ge1xuICBzdGVwOiBcImluaXRpYWxpemVcIixcbiAgdGFnczogW1wiTE9DQVRJT05fQ09OU1RSQUlOVFwiLCBcIkNSRUFURV9CVUNLRVRfQ09ORklHVVJBVElPTlwiXSxcbiAgbmFtZTogXCJsb2NhdGlvbkNvbnN0cmFpbnRNaWRkbGV3YXJlXCIsXG4gIG92ZXJyaWRlOiB0cnVlLFxufTtcblxuZXhwb3J0IGNvbnN0IGdldExvY2F0aW9uQ29uc3RyYWludFBsdWdpbiA9IChjb25maWc6IExvY2F0aW9uQ29uc3RyYWludFJlc29sdmVkQ29uZmlnKTogUGx1Z2dhYmxlPGFueSwgYW55PiA9PiAoe1xuICBhcHBseVRvU3RhY2s6IChjbGllbnRTdGFjaykgPT4ge1xuICAgIGNsaWVudFN0YWNrLmFkZChsb2NhdGlvbkNvbnN0cmFpbnRNaWRkbGV3YXJlKGNvbmZpZyksIGxvY2F0aW9uQ29uc3RyYWludE1pZGRsZXdhcmVPcHRpb25zKTtcbiAgfSxcbn0pO1xuIl19