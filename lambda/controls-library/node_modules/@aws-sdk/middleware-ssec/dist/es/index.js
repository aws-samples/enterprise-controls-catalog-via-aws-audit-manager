import { __assign, __awaiter, __generator, __values } from "tslib";
export function ssecMiddleware(options) {
    var _this = this;
    return function (next) {
        return function (args) { return __awaiter(_this, void 0, void 0, function () {
            var input, properties, properties_1, properties_1_1, prop, value, valueView, encoded, hash, _a, _b, _c, _d, e_1_1;
            var e_1, _e, _f;
            return __generator(this, function (_g) {
                switch (_g.label) {
                    case 0:
                        input = __assign({}, args.input);
                        properties = [
                            {
                                target: "SSECustomerKey",
                                hash: "SSECustomerKeyMD5",
                            },
                            {
                                target: "CopySourceSSECustomerKey",
                                hash: "CopySourceSSECustomerKeyMD5",
                            },
                        ];
                        _g.label = 1;
                    case 1:
                        _g.trys.push([1, 6, 7, 8]);
                        properties_1 = __values(properties), properties_1_1 = properties_1.next();
                        _g.label = 2;
                    case 2:
                        if (!!properties_1_1.done) return [3 /*break*/, 5];
                        prop = properties_1_1.value;
                        value = input[prop.target];
                        if (!value) return [3 /*break*/, 4];
                        valueView = ArrayBuffer.isView(value)
                            ? new Uint8Array(value.buffer, value.byteOffset, value.byteLength)
                            : typeof value === "string"
                                ? options.utf8Decoder(value)
                                : new Uint8Array(value);
                        encoded = options.base64Encoder(valueView);
                        hash = new options.md5();
                        hash.update(valueView);
                        _a = [__assign({}, input)];
                        _f = {}, _f[prop.target] = encoded;
                        _b = prop.hash;
                        _d = (_c = options).base64Encoder;
                        return [4 /*yield*/, hash.digest()];
                    case 3:
                        input = __assign.apply(void 0, _a.concat([(_f[_b] = _d.apply(_c, [_g.sent()]), _f)]));
                        _g.label = 4;
                    case 4:
                        properties_1_1 = properties_1.next();
                        return [3 /*break*/, 2];
                    case 5: return [3 /*break*/, 8];
                    case 6:
                        e_1_1 = _g.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 8];
                    case 7:
                        try {
                            if (properties_1_1 && !properties_1_1.done && (_e = properties_1.return)) _e.call(properties_1);
                        }
                        finally { if (e_1) throw e_1.error; }
                        return [7 /*endfinally*/];
                    case 8: return [2 /*return*/, next(__assign(__assign({}, args), { input: input }))];
                }
            });
        }); };
    };
}
export var ssecMiddlewareOptions = {
    name: "ssecMiddleware",
    step: "initialize",
    tags: ["SSE"],
    override: true,
};
export var getSsecPlugin = function (config) { return ({
    applyToStack: function (clientStack) {
        clientStack.add(ssecMiddleware(config), ssecMiddlewareOptions);
    },
}); };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQW1CQSxNQUFNLFVBQVUsY0FBYyxDQUFDLE9BQTJCO0lBQTFELGlCQXVDQztJQXRDQyxPQUFPLFVBQWdDLElBQW9DO1FBQ3pFLE9BQUEsVUFBTyxJQUFxQzs7Ozs7O3dCQUN0QyxLQUFLLGdCQUFRLElBQUksQ0FBQyxLQUFLLENBQUUsQ0FBQzt3QkFDeEIsVUFBVSxHQUFHOzRCQUNqQjtnQ0FDRSxNQUFNLEVBQUUsZ0JBQWdCO2dDQUN4QixJQUFJLEVBQUUsbUJBQW1COzZCQUMxQjs0QkFDRDtnQ0FDRSxNQUFNLEVBQUUsMEJBQTBCO2dDQUNsQyxJQUFJLEVBQUUsNkJBQTZCOzZCQUNwQzt5QkFDRixDQUFDOzs7O3dCQUVpQixlQUFBLFNBQUEsVUFBVSxDQUFBOzs7O3dCQUFsQixJQUFJO3dCQUNQLEtBQUssR0FBNEIsS0FBYSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQzs2QkFDOUQsS0FBSyxFQUFMLHdCQUFLO3dCQUNELFNBQVMsR0FBRyxXQUFXLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQzs0QkFDekMsQ0FBQyxDQUFDLElBQUksVUFBVSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDOzRCQUNsRSxDQUFDLENBQUMsT0FBTyxLQUFLLEtBQUssUUFBUTtnQ0FDM0IsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDO2dDQUM1QixDQUFDLENBQUMsSUFBSSxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7d0JBQ3BCLE9BQU8sR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDO3dCQUMzQyxJQUFJLEdBQUcsSUFBSSxPQUFPLENBQUMsR0FBRyxFQUFFLENBQUM7d0JBQy9CLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7MkNBRWpCLEtBQWE7b0NBQ2hCLElBQUksQ0FBQyxNQUFNLElBQUcsT0FBTzt3QkFDckIsS0FBQSxJQUFJLENBQUMsSUFBSSxDQUFBO3dCQUFHLEtBQUEsQ0FBQSxLQUFBLE9BQU8sQ0FBQSxDQUFDLGFBQWEsQ0FBQTt3QkFBQyxxQkFBTSxJQUFJLENBQUMsTUFBTSxFQUFFLEVBQUE7O3dCQUh4RCxLQUFLLCtDQUdVLGNBQXNCLFNBQW1CLEVBQUMsUUFDeEQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs0QkFJTixzQkFBTyxJQUFJLHVCQUNOLElBQUksS0FDUCxLQUFLLE9BQUEsSUFDTCxFQUFDOzs7YUFDSjtJQXBDRCxDQW9DQyxDQUFDO0FBQ04sQ0FBQztBQUVELE1BQU0sQ0FBQyxJQUFNLHFCQUFxQixHQUE2QjtJQUM3RCxJQUFJLEVBQUUsZ0JBQWdCO0lBQ3RCLElBQUksRUFBRSxZQUFZO0lBQ2xCLElBQUksRUFBRSxDQUFDLEtBQUssQ0FBQztJQUNiLFFBQVEsRUFBRSxJQUFJO0NBQ2YsQ0FBQztBQUVGLE1BQU0sQ0FBQyxJQUFNLGFBQWEsR0FBRyxVQUFDLE1BQTBCLElBQTBCLE9BQUEsQ0FBQztJQUNqRixZQUFZLEVBQUUsVUFBQyxXQUFXO1FBQ3hCLFdBQVcsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxFQUFFLHFCQUFxQixDQUFDLENBQUM7SUFDakUsQ0FBQztDQUNGLENBQUMsRUFKZ0YsQ0FJaEYsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIERlY29kZXIsXG4gIEVuY29kZXIsXG4gIEhhc2gsXG4gIEluaXRpYWxpemVIYW5kbGVyLFxuICBJbml0aWFsaXplSGFuZGxlckFyZ3VtZW50cyxcbiAgSW5pdGlhbGl6ZUhhbmRsZXJPcHRpb25zLFxuICBJbml0aWFsaXplSGFuZGxlck91dHB1dCxcbiAgSW5pdGlhbGl6ZU1pZGRsZXdhcmUsXG4gIE1ldGFkYXRhQmVhcmVyLFxuICBQbHVnZ2FibGUsXG4gIFNvdXJjZURhdGEsXG59IGZyb20gXCJAYXdzLXNkay90eXBlc1wiO1xuaW50ZXJmYWNlIFByZXZpb3VzbHlSZXNvbHZlZCB7XG4gIGJhc2U2NEVuY29kZXI6IEVuY29kZXI7XG4gIG1kNTogeyBuZXcgKCk6IEhhc2ggfTtcbiAgdXRmOERlY29kZXI6IERlY29kZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzc2VjTWlkZGxld2FyZShvcHRpb25zOiBQcmV2aW91c2x5UmVzb2x2ZWQpOiBJbml0aWFsaXplTWlkZGxld2FyZTxhbnksIGFueT4ge1xuICByZXR1cm4gPE91dHB1dCBleHRlbmRzIE1ldGFkYXRhQmVhcmVyPihuZXh0OiBJbml0aWFsaXplSGFuZGxlcjxhbnksIE91dHB1dD4pOiBJbml0aWFsaXplSGFuZGxlcjxhbnksIE91dHB1dD4gPT5cbiAgICBhc3luYyAoYXJnczogSW5pdGlhbGl6ZUhhbmRsZXJBcmd1bWVudHM8YW55Pik6IFByb21pc2U8SW5pdGlhbGl6ZUhhbmRsZXJPdXRwdXQ8T3V0cHV0Pj4gPT4ge1xuICAgICAgbGV0IGlucHV0ID0geyAuLi5hcmdzLmlucHV0IH07XG4gICAgICBjb25zdCBwcm9wZXJ0aWVzID0gW1xuICAgICAgICB7XG4gICAgICAgICAgdGFyZ2V0OiBcIlNTRUN1c3RvbWVyS2V5XCIsXG4gICAgICAgICAgaGFzaDogXCJTU0VDdXN0b21lcktleU1ENVwiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGFyZ2V0OiBcIkNvcHlTb3VyY2VTU0VDdXN0b21lcktleVwiLFxuICAgICAgICAgIGhhc2g6IFwiQ29weVNvdXJjZVNTRUN1c3RvbWVyS2V5TUQ1XCIsXG4gICAgICAgIH0sXG4gICAgICBdO1xuXG4gICAgICBmb3IgKGNvbnN0IHByb3Agb2YgcHJvcGVydGllcykge1xuICAgICAgICBjb25zdCB2YWx1ZTogU291cmNlRGF0YSB8IHVuZGVmaW5lZCA9IChpbnB1dCBhcyBhbnkpW3Byb3AudGFyZ2V0XTtcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgY29uc3QgdmFsdWVWaWV3ID0gQXJyYXlCdWZmZXIuaXNWaWV3KHZhbHVlKVxuICAgICAgICAgICAgPyBuZXcgVWludDhBcnJheSh2YWx1ZS5idWZmZXIsIHZhbHVlLmJ5dGVPZmZzZXQsIHZhbHVlLmJ5dGVMZW5ndGgpXG4gICAgICAgICAgICA6IHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIlxuICAgICAgICAgICAgPyBvcHRpb25zLnV0ZjhEZWNvZGVyKHZhbHVlKVxuICAgICAgICAgICAgOiBuZXcgVWludDhBcnJheSh2YWx1ZSk7XG4gICAgICAgICAgY29uc3QgZW5jb2RlZCA9IG9wdGlvbnMuYmFzZTY0RW5jb2Rlcih2YWx1ZVZpZXcpO1xuICAgICAgICAgIGNvbnN0IGhhc2ggPSBuZXcgb3B0aW9ucy5tZDUoKTtcbiAgICAgICAgICBoYXNoLnVwZGF0ZSh2YWx1ZVZpZXcpO1xuICAgICAgICAgIGlucHV0ID0ge1xuICAgICAgICAgICAgLi4uKGlucHV0IGFzIGFueSksXG4gICAgICAgICAgICBbcHJvcC50YXJnZXRdOiBlbmNvZGVkLFxuICAgICAgICAgICAgW3Byb3AuaGFzaF06IG9wdGlvbnMuYmFzZTY0RW5jb2Rlcihhd2FpdCBoYXNoLmRpZ2VzdCgpKSxcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBuZXh0KHtcbiAgICAgICAgLi4uYXJncyxcbiAgICAgICAgaW5wdXQsXG4gICAgICB9KTtcbiAgICB9O1xufVxuXG5leHBvcnQgY29uc3Qgc3NlY01pZGRsZXdhcmVPcHRpb25zOiBJbml0aWFsaXplSGFuZGxlck9wdGlvbnMgPSB7XG4gIG5hbWU6IFwic3NlY01pZGRsZXdhcmVcIixcbiAgc3RlcDogXCJpbml0aWFsaXplXCIsXG4gIHRhZ3M6IFtcIlNTRVwiXSxcbiAgb3ZlcnJpZGU6IHRydWUsXG59O1xuXG5leHBvcnQgY29uc3QgZ2V0U3NlY1BsdWdpbiA9IChjb25maWc6IFByZXZpb3VzbHlSZXNvbHZlZCk6IFBsdWdnYWJsZTxhbnksIGFueT4gPT4gKHtcbiAgYXBwbHlUb1N0YWNrOiAoY2xpZW50U3RhY2spID0+IHtcbiAgICBjbGllbnRTdGFjay5hZGQoc3NlY01pZGRsZXdhcmUoY29uZmlnKSwgc3NlY01pZGRsZXdhcmVPcHRpb25zKTtcbiAgfSxcbn0pO1xuIl19