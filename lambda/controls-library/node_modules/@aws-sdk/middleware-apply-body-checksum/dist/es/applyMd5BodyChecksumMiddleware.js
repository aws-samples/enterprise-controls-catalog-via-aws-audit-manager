import { __assign, __awaiter, __generator, __values } from "tslib";
import { isArrayBuffer } from "@aws-sdk/is-array-buffer";
import { HttpRequest } from "@aws-sdk/protocol-http";
export function applyMd5BodyChecksumMiddleware(options) {
    var _this = this;
    return function (next) {
        return function (args) { return __awaiter(_this, void 0, void 0, function () {
            var request, body, headers, digest, hash, _a, _b, _c, _d, _e;
            var _f, _g;
            return __generator(this, function (_h) {
                switch (_h.label) {
                    case 0:
                        request = args.request;
                        if (!HttpRequest.isInstance(request)) return [3 /*break*/, 2];
                        body = request.body, headers = request.headers;
                        if (!!hasHeader("Content-MD5", headers)) return [3 /*break*/, 2];
                        digest = void 0;
                        if (body === undefined || typeof body === "string" || ArrayBuffer.isView(body) || isArrayBuffer(body)) {
                            hash = new options.md5();
                            hash.update(body || "");
                            digest = hash.digest();
                        }
                        else {
                            digest = options.streamHasher(options.md5, body);
                        }
                        _a = [__assign({}, request)];
                        _f = {};
                        _b = [__assign({}, headers)];
                        _g = {};
                        _c = "Content-MD5";
                        _e = (_d = options).base64Encoder;
                        return [4 /*yield*/, digest];
                    case 1:
                        request = __assign.apply(void 0, _a.concat([(_f.headers = __assign.apply(void 0, _b.concat([(_g[_c] = _e.apply(_d, [_h.sent()]), _g)])), _f)]));
                        _h.label = 2;
                    case 2: return [2 /*return*/, next(__assign(__assign({}, args), { request: request }))];
                }
            });
        }); };
    };
}
export var applyMd5BodyChecksumMiddlewareOptions = {
    name: "applyMd5BodyChecksumMiddleware",
    step: "build",
    tags: ["SET_CONTENT_MD5", "BODY_CHECKSUM"],
    override: true,
};
export var getApplyMd5BodyChecksumPlugin = function (config) { return ({
    applyToStack: function (clientStack) {
        clientStack.add(applyMd5BodyChecksumMiddleware(config), applyMd5BodyChecksumMiddlewareOptions);
    },
}); };
function hasHeader(soughtHeader, headers) {
    var e_1, _a;
    soughtHeader = soughtHeader.toLowerCase();
    try {
        for (var _b = __values(Object.keys(headers)), _c = _b.next(); !_c.done; _c = _b.next()) {
            var headerName = _c.value;
            if (soughtHeader === headerName.toLowerCase()) {
                return true;
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return false;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwbHlNZDVCb2R5Q2hlY2tzdW1NaWRkbGV3YXJlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2FwcGx5TWQ1Qm9keUNoZWNrc3VtTWlkZGxld2FyZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQWNyRCxNQUFNLFVBQVUsOEJBQThCLENBQUMsT0FBc0M7SUFBckYsaUJBOEJDO0lBN0JDLE9BQU8sVUFBZ0MsSUFBK0I7UUFDcEUsT0FBQSxVQUFPLElBQWdDOzs7Ozs7d0JBQy9CLE9BQU8sR0FBSyxJQUFJLFFBQVQsQ0FBVTs2QkFDbkIsV0FBVyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsRUFBL0Isd0JBQStCO3dCQUN6QixJQUFJLEdBQWMsT0FBTyxLQUFyQixFQUFFLE9BQU8sR0FBSyxPQUFPLFFBQVosQ0FBYTs2QkFDOUIsQ0FBQyxTQUFTLENBQUMsYUFBYSxFQUFFLE9BQU8sQ0FBQyxFQUFsQyx3QkFBa0M7d0JBQ2hDLE1BQU0sU0FBcUIsQ0FBQzt3QkFDaEMsSUFBSSxJQUFJLEtBQUssU0FBUyxJQUFJLE9BQU8sSUFBSSxLQUFLLFFBQVEsSUFBSSxXQUFXLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLGFBQWEsQ0FBQyxJQUFJLENBQUMsRUFBRTs0QkFDL0YsSUFBSSxHQUFHLElBQUksT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFDOzRCQUMvQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQzs0QkFDeEIsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQzt5QkFDeEI7NkJBQU07NEJBQ0wsTUFBTSxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQzt5QkFDbEQ7MkNBR0ksT0FBTzs7MkNBRUwsT0FBTzs7d0JBQ1YsS0FBQSxhQUFhLENBQUE7d0JBQUUsS0FBQSxDQUFBLEtBQUEsT0FBTyxDQUFBLENBQUMsYUFBYSxDQUFBO3dCQUFDLHFCQUFNLE1BQU0sRUFBQTs7d0JBSnJELE9BQU8sc0NBRUwsVUFBTyxzQ0FFTCxNQUFhLEdBQUUsY0FBc0IsU0FBWSxFQUFDLGdCQUVyRCxDQUFDOzs0QkFHTixzQkFBTyxJQUFJLHVCQUNOLElBQUksS0FDUCxPQUFPLFNBQUEsSUFDUCxFQUFDOzs7YUFDSjtJQTNCRCxDQTJCQyxDQUFDO0FBQ04sQ0FBQztBQUVELE1BQU0sQ0FBQyxJQUFNLHFDQUFxQyxHQUF3QjtJQUN4RSxJQUFJLEVBQUUsZ0NBQWdDO0lBQ3RDLElBQUksRUFBRSxPQUFPO0lBQ2IsSUFBSSxFQUFFLENBQUMsaUJBQWlCLEVBQUUsZUFBZSxDQUFDO0lBQzFDLFFBQVEsRUFBRSxJQUFJO0NBQ2YsQ0FBQztBQUVGLE1BQU0sQ0FBQyxJQUFNLDZCQUE2QixHQUFHLFVBQUMsTUFBcUMsSUFBMEIsT0FBQSxDQUFDO0lBQzVHLFlBQVksRUFBRSxVQUFDLFdBQVc7UUFDeEIsV0FBVyxDQUFDLEdBQUcsQ0FBQyw4QkFBOEIsQ0FBQyxNQUFNLENBQUMsRUFBRSxxQ0FBcUMsQ0FBQyxDQUFDO0lBQ2pHLENBQUM7Q0FDRixDQUFDLEVBSjJHLENBSTNHLENBQUM7QUFFSCxTQUFTLFNBQVMsQ0FBQyxZQUFvQixFQUFFLE9BQWtCOztJQUN6RCxZQUFZLEdBQUcsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDOztRQUMxQyxLQUF5QixJQUFBLEtBQUEsU0FBQSxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFBLGdCQUFBLDRCQUFFO1lBQTFDLElBQU0sVUFBVSxXQUFBO1lBQ25CLElBQUksWUFBWSxLQUFLLFVBQVUsQ0FBQyxXQUFXLEVBQUUsRUFBRTtnQkFDN0MsT0FBTyxJQUFJLENBQUM7YUFDYjtTQUNGOzs7Ozs7Ozs7SUFFRCxPQUFPLEtBQUssQ0FBQztBQUNmLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpc0FycmF5QnVmZmVyIH0gZnJvbSBcIkBhd3Mtc2RrL2lzLWFycmF5LWJ1ZmZlclwiO1xuaW1wb3J0IHsgSHR0cFJlcXVlc3QgfSBmcm9tIFwiQGF3cy1zZGsvcHJvdG9jb2wtaHR0cFwiO1xuaW1wb3J0IHtcbiAgQnVpbGRIYW5kbGVyLFxuICBCdWlsZEhhbmRsZXJBcmd1bWVudHMsXG4gIEJ1aWxkSGFuZGxlck9wdGlvbnMsXG4gIEJ1aWxkSGFuZGxlck91dHB1dCxcbiAgQnVpbGRNaWRkbGV3YXJlLFxuICBIZWFkZXJCYWcsXG4gIE1ldGFkYXRhQmVhcmVyLFxuICBQbHVnZ2FibGUsXG59IGZyb20gXCJAYXdzLXNkay90eXBlc1wiO1xuXG5pbXBvcnQgeyBNZDVCb2R5Q2hlY2tzdW1SZXNvbHZlZENvbmZpZyB9IGZyb20gXCIuL21kNUNvbmZpZ3VyYXRpb25cIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGFwcGx5TWQ1Qm9keUNoZWNrc3VtTWlkZGxld2FyZShvcHRpb25zOiBNZDVCb2R5Q2hlY2tzdW1SZXNvbHZlZENvbmZpZyk6IEJ1aWxkTWlkZGxld2FyZTxhbnksIGFueT4ge1xuICByZXR1cm4gPE91dHB1dCBleHRlbmRzIE1ldGFkYXRhQmVhcmVyPihuZXh0OiBCdWlsZEhhbmRsZXI8YW55LCBPdXRwdXQ+KTogQnVpbGRIYW5kbGVyPGFueSwgT3V0cHV0PiA9PlxuICAgIGFzeW5jIChhcmdzOiBCdWlsZEhhbmRsZXJBcmd1bWVudHM8YW55Pik6IFByb21pc2U8QnVpbGRIYW5kbGVyT3V0cHV0PE91dHB1dD4+ID0+IHtcbiAgICAgIGxldCB7IHJlcXVlc3QgfSA9IGFyZ3M7XG4gICAgICBpZiAoSHR0cFJlcXVlc3QuaXNJbnN0YW5jZShyZXF1ZXN0KSkge1xuICAgICAgICBjb25zdCB7IGJvZHksIGhlYWRlcnMgfSA9IHJlcXVlc3Q7XG4gICAgICAgIGlmICghaGFzSGVhZGVyKFwiQ29udGVudC1NRDVcIiwgaGVhZGVycykpIHtcbiAgICAgICAgICBsZXQgZGlnZXN0OiBQcm9taXNlPFVpbnQ4QXJyYXk+O1xuICAgICAgICAgIGlmIChib2R5ID09PSB1bmRlZmluZWQgfHwgdHlwZW9mIGJvZHkgPT09IFwic3RyaW5nXCIgfHwgQXJyYXlCdWZmZXIuaXNWaWV3KGJvZHkpIHx8IGlzQXJyYXlCdWZmZXIoYm9keSkpIHtcbiAgICAgICAgICAgIGNvbnN0IGhhc2ggPSBuZXcgb3B0aW9ucy5tZDUoKTtcbiAgICAgICAgICAgIGhhc2gudXBkYXRlKGJvZHkgfHwgXCJcIik7XG4gICAgICAgICAgICBkaWdlc3QgPSBoYXNoLmRpZ2VzdCgpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkaWdlc3QgPSBvcHRpb25zLnN0cmVhbUhhc2hlcihvcHRpb25zLm1kNSwgYm9keSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmVxdWVzdCA9IHtcbiAgICAgICAgICAgIC4uLnJlcXVlc3QsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgIC4uLmhlYWRlcnMsXG4gICAgICAgICAgICAgIFwiQ29udGVudC1NRDVcIjogb3B0aW9ucy5iYXNlNjRFbmNvZGVyKGF3YWl0IGRpZ2VzdCksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBuZXh0KHtcbiAgICAgICAgLi4uYXJncyxcbiAgICAgICAgcmVxdWVzdCxcbiAgICAgIH0pO1xuICAgIH07XG59XG5cbmV4cG9ydCBjb25zdCBhcHBseU1kNUJvZHlDaGVja3N1bU1pZGRsZXdhcmVPcHRpb25zOiBCdWlsZEhhbmRsZXJPcHRpb25zID0ge1xuICBuYW1lOiBcImFwcGx5TWQ1Qm9keUNoZWNrc3VtTWlkZGxld2FyZVwiLFxuICBzdGVwOiBcImJ1aWxkXCIsXG4gIHRhZ3M6IFtcIlNFVF9DT05URU5UX01ENVwiLCBcIkJPRFlfQ0hFQ0tTVU1cIl0sXG4gIG92ZXJyaWRlOiB0cnVlLFxufTtcblxuZXhwb3J0IGNvbnN0IGdldEFwcGx5TWQ1Qm9keUNoZWNrc3VtUGx1Z2luID0gKGNvbmZpZzogTWQ1Qm9keUNoZWNrc3VtUmVzb2x2ZWRDb25maWcpOiBQbHVnZ2FibGU8YW55LCBhbnk+ID0+ICh7XG4gIGFwcGx5VG9TdGFjazogKGNsaWVudFN0YWNrKSA9PiB7XG4gICAgY2xpZW50U3RhY2suYWRkKGFwcGx5TWQ1Qm9keUNoZWNrc3VtTWlkZGxld2FyZShjb25maWcpLCBhcHBseU1kNUJvZHlDaGVja3N1bU1pZGRsZXdhcmVPcHRpb25zKTtcbiAgfSxcbn0pO1xuXG5mdW5jdGlvbiBoYXNIZWFkZXIoc291Z2h0SGVhZGVyOiBzdHJpbmcsIGhlYWRlcnM6IEhlYWRlckJhZyk6IGJvb2xlYW4ge1xuICBzb3VnaHRIZWFkZXIgPSBzb3VnaHRIZWFkZXIudG9Mb3dlckNhc2UoKTtcbiAgZm9yIChjb25zdCBoZWFkZXJOYW1lIG9mIE9iamVjdC5rZXlzKGhlYWRlcnMpKSB7XG4gICAgaWYgKHNvdWdodEhlYWRlciA9PT0gaGVhZGVyTmFtZS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG4iXX0=