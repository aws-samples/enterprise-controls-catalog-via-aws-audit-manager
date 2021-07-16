import { __assign, __awaiter, __generator } from "tslib";
import { HttpRequest } from "@aws-sdk/protocol-http";
export function addExpectContinueMiddleware(options) {
    var _this = this;
    return function (next) {
        return function (args) { return __awaiter(_this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_a) {
                request = args.request;
                if (HttpRequest.isInstance(request) && request.body && options.runtime === "node") {
                    request.headers = __assign(__assign({}, request.headers), { Expect: "100-continue" });
                }
                return [2 /*return*/, next(__assign(__assign({}, args), { request: request }))];
            });
        }); };
    };
}
export var addExpectContinueMiddlewareOptions = {
    step: "build",
    tags: ["SET_EXPECT_HEADER", "EXPECT_HEADER"],
    name: "addExpectContinueMiddleware",
    override: true,
};
export var getAddExpectContinuePlugin = function (options) { return ({
    applyToStack: function (clientStack) {
        clientStack.add(addExpectContinueMiddleware(options), addExpectContinueMiddlewareOptions);
    },
}); };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQWVyRCxNQUFNLFVBQVUsMkJBQTJCLENBQUMsT0FBMkI7SUFBdkUsaUJBZUM7SUFkQyxPQUFPLFVBQWdDLElBQStCO1FBQ3BFLE9BQUEsVUFBTyxJQUFnQzs7O2dCQUM3QixPQUFPLEdBQUssSUFBSSxRQUFULENBQVU7Z0JBQ3pCLElBQUksV0FBVyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsSUFBSSxPQUFPLENBQUMsSUFBSSxJQUFJLE9BQU8sQ0FBQyxPQUFPLEtBQUssTUFBTSxFQUFFO29CQUNqRixPQUFPLENBQUMsT0FBTyx5QkFDVixPQUFPLENBQUMsT0FBTyxLQUNsQixNQUFNLEVBQUUsY0FBYyxHQUN2QixDQUFDO2lCQUNIO2dCQUNELHNCQUFPLElBQUksdUJBQ04sSUFBSSxLQUNQLE9BQU8sU0FBQSxJQUNQLEVBQUM7O2FBQ0o7SUFaRCxDQVlDLENBQUM7QUFDTixDQUFDO0FBRUQsTUFBTSxDQUFDLElBQU0sa0NBQWtDLEdBQXdCO0lBQ3JFLElBQUksRUFBRSxPQUFPO0lBQ2IsSUFBSSxFQUFFLENBQUMsbUJBQW1CLEVBQUUsZUFBZSxDQUFDO0lBQzVDLElBQUksRUFBRSw2QkFBNkI7SUFDbkMsUUFBUSxFQUFFLElBQUk7Q0FDZixDQUFDO0FBRUYsTUFBTSxDQUFDLElBQU0sMEJBQTBCLEdBQUcsVUFBQyxPQUEyQixJQUEwQixPQUFBLENBQUM7SUFDL0YsWUFBWSxFQUFFLFVBQUMsV0FBVztRQUN4QixXQUFXLENBQUMsR0FBRyxDQUFDLDJCQUEyQixDQUFDLE9BQU8sQ0FBQyxFQUFFLGtDQUFrQyxDQUFDLENBQUM7SUFDNUYsQ0FBQztDQUNGLENBQUMsRUFKOEYsQ0FJOUYsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBSZXF1ZXN0IH0gZnJvbSBcIkBhd3Mtc2RrL3Byb3RvY29sLWh0dHBcIjtcbmltcG9ydCB7XG4gIEJ1aWxkSGFuZGxlcixcbiAgQnVpbGRIYW5kbGVyQXJndW1lbnRzLFxuICBCdWlsZEhhbmRsZXJPcHRpb25zLFxuICBCdWlsZEhhbmRsZXJPdXRwdXQsXG4gIEJ1aWxkTWlkZGxld2FyZSxcbiAgTWV0YWRhdGFCZWFyZXIsXG4gIFBsdWdnYWJsZSxcbn0gZnJvbSBcIkBhd3Mtc2RrL3R5cGVzXCI7XG5cbmludGVyZmFjZSBQcmV2aW91c2x5UmVzb2x2ZWQge1xuICBydW50aW1lOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRFeHBlY3RDb250aW51ZU1pZGRsZXdhcmUob3B0aW9uczogUHJldmlvdXNseVJlc29sdmVkKTogQnVpbGRNaWRkbGV3YXJlPGFueSwgYW55PiB7XG4gIHJldHVybiA8T3V0cHV0IGV4dGVuZHMgTWV0YWRhdGFCZWFyZXI+KG5leHQ6IEJ1aWxkSGFuZGxlcjxhbnksIE91dHB1dD4pOiBCdWlsZEhhbmRsZXI8YW55LCBPdXRwdXQ+ID0+XG4gICAgYXN5bmMgKGFyZ3M6IEJ1aWxkSGFuZGxlckFyZ3VtZW50czxhbnk+KTogUHJvbWlzZTxCdWlsZEhhbmRsZXJPdXRwdXQ8T3V0cHV0Pj4gPT4ge1xuICAgICAgY29uc3QgeyByZXF1ZXN0IH0gPSBhcmdzO1xuICAgICAgaWYgKEh0dHBSZXF1ZXN0LmlzSW5zdGFuY2UocmVxdWVzdCkgJiYgcmVxdWVzdC5ib2R5ICYmIG9wdGlvbnMucnVudGltZSA9PT0gXCJub2RlXCIpIHtcbiAgICAgICAgcmVxdWVzdC5oZWFkZXJzID0ge1xuICAgICAgICAgIC4uLnJlcXVlc3QuaGVhZGVycyxcbiAgICAgICAgICBFeHBlY3Q6IFwiMTAwLWNvbnRpbnVlXCIsXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICByZXR1cm4gbmV4dCh7XG4gICAgICAgIC4uLmFyZ3MsXG4gICAgICAgIHJlcXVlc3QsXG4gICAgICB9KTtcbiAgICB9O1xufVxuXG5leHBvcnQgY29uc3QgYWRkRXhwZWN0Q29udGludWVNaWRkbGV3YXJlT3B0aW9uczogQnVpbGRIYW5kbGVyT3B0aW9ucyA9IHtcbiAgc3RlcDogXCJidWlsZFwiLFxuICB0YWdzOiBbXCJTRVRfRVhQRUNUX0hFQURFUlwiLCBcIkVYUEVDVF9IRUFERVJcIl0sXG4gIG5hbWU6IFwiYWRkRXhwZWN0Q29udGludWVNaWRkbGV3YXJlXCIsXG4gIG92ZXJyaWRlOiB0cnVlLFxufTtcblxuZXhwb3J0IGNvbnN0IGdldEFkZEV4cGVjdENvbnRpbnVlUGx1Z2luID0gKG9wdGlvbnM6IFByZXZpb3VzbHlSZXNvbHZlZCk6IFBsdWdnYWJsZTxhbnksIGFueT4gPT4gKHtcbiAgYXBwbHlUb1N0YWNrOiAoY2xpZW50U3RhY2spID0+IHtcbiAgICBjbGllbnRTdGFjay5hZGQoYWRkRXhwZWN0Q29udGludWVNaWRkbGV3YXJlKG9wdGlvbnMpLCBhZGRFeHBlY3RDb250aW51ZU1pZGRsZXdhcmVPcHRpb25zKTtcbiAgfSxcbn0pO1xuIl19