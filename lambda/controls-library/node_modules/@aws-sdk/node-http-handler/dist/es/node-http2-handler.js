import { __assign, __read, __values } from "tslib";
import { HttpResponse } from "@aws-sdk/protocol-http";
import { buildQueryString } from "@aws-sdk/querystring-builder";
import { connect, constants } from "http2";
import { getTransformedHeaders } from "./get-transformed-headers";
import { writeRequestBody } from "./write-request-body";
var NodeHttp2Handler = /** @class */ (function () {
    function NodeHttp2Handler(_a) {
        var _b = _a === void 0 ? {} : _a, requestTimeout = _b.requestTimeout, sessionTimeout = _b.sessionTimeout;
        this.metadata = { handlerProtocol: "h2" };
        this.requestTimeout = requestTimeout;
        this.sessionTimeout = sessionTimeout;
        this.connectionPool = new Map();
    }
    NodeHttp2Handler.prototype.destroy = function () {
        var e_1, _a;
        try {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            for (var _b = __values(this.connectionPool), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = __read(_c.value, 2), _ = _d[0], http2Session = _d[1];
                http2Session.destroy();
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        this.connectionPool.clear();
    };
    NodeHttp2Handler.prototype.handle = function (request, _a) {
        var _this = this;
        var _b = _a === void 0 ? {} : _a, abortSignal = _b.abortSignal;
        return new Promise(function (resolve, rejectOriginal) {
            var _a;
            // It's redundant to track fulfilled because promises use the first resolution/rejection
            // but avoids generating unnecessary stack traces in the "close" event handler.
            var fulfilled = false;
            var reject = function (err) {
                fulfilled = true;
                rejectOriginal(err);
            };
            // if the request was already aborted, prevent doing extra work
            if (abortSignal === null || abortSignal === void 0 ? void 0 : abortSignal.aborted) {
                var abortError = new Error("Request aborted");
                abortError.name = "AbortError";
                reject(abortError);
                return;
            }
            var hostname = request.hostname, method = request.method, port = request.port, protocol = request.protocol, path = request.path, query = request.query;
            var queryString = buildQueryString(query || {});
            // create the http2 request
            var req = _this.getSession(protocol + "//" + hostname + (port ? ":" + port : "")).request(__assign(__assign({}, request.headers), (_a = {}, _a[constants.HTTP2_HEADER_PATH] = queryString ? path + "?" + queryString : path, _a[constants.HTTP2_HEADER_METHOD] = method, _a)));
            req.on("response", function (headers) {
                var httpResponse = new HttpResponse({
                    statusCode: headers[":status"] || -1,
                    headers: getTransformedHeaders(headers),
                    body: req,
                });
                fulfilled = true;
                resolve({ response: httpResponse });
            });
            var requestTimeout = _this.requestTimeout;
            if (requestTimeout) {
                req.setTimeout(requestTimeout, function () {
                    req.close();
                    var timeoutError = new Error("Stream timed out because of no activity for " + requestTimeout + " ms");
                    timeoutError.name = "TimeoutError";
                    reject(timeoutError);
                });
            }
            if (abortSignal) {
                abortSignal.onabort = function () {
                    req.close();
                    var abortError = new Error("Request aborted");
                    abortError.name = "AbortError";
                    reject(abortError);
                };
            }
            // Set up handlers for errors
            req.on("frameError", reject);
            req.on("error", reject);
            req.on("goaway", reject);
            req.on("aborted", reject);
            // The HTTP/2 error code used when closing the stream can be retrieved using the
            // http2stream.rstCode property. If the code is any value other than NGHTTP2_NO_ERROR (0),
            // an 'error' event will have also been emitted.
            req.on("close", function () {
                if (!fulfilled) {
                    reject(new Error("Unexpected error: http2 request did not get a response"));
                }
            });
            writeRequestBody(req, request);
        });
    };
    NodeHttp2Handler.prototype.getSession = function (authority) {
        var _this = this;
        var connectionPool = this.connectionPool;
        var existingSession = connectionPool.get(authority);
        if (existingSession)
            return existingSession;
        var newSession = connect(authority);
        connectionPool.set(authority, newSession);
        var destroySessionCb = function () {
            _this.destroySession(authority, newSession);
        };
        newSession.on("goaway", destroySessionCb);
        newSession.on("error", destroySessionCb);
        newSession.on("frameError", destroySessionCb);
        var sessionTimeout = this.sessionTimeout;
        if (sessionTimeout) {
            newSession.setTimeout(sessionTimeout, function () {
                if (connectionPool.get(authority) === newSession) {
                    newSession.close();
                    connectionPool.delete(authority);
                }
            });
        }
        return newSession;
    };
    /**
     * Destroy a session immediately and remove it from the http2 pool.
     *
     * This check ensures that the session is only closed once
     * and that an event on one session does not close a different session.
     */
    NodeHttp2Handler.prototype.destroySession = function (authority, session) {
        if (this.connectionPool.get(authority) !== session) {
            // Already closed?
            return;
        }
        this.connectionPool.delete(authority);
        session.removeAllListeners("goaway");
        session.removeAllListeners("error");
        session.removeAllListeners("frameError");
        if (!session.destroyed) {
            session.destroy();
        }
    };
    return NodeHttp2Handler;
}());
export { NodeHttp2Handler };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm9kZS1odHRwMi1oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL25vZGUtaHR0cDItaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUE0QixZQUFZLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNoRixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUVoRSxPQUFPLEVBQXNCLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxPQUFPLENBQUM7QUFFL0QsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFvQnhEO0lBTUUsMEJBQVksRUFBZ0U7WUFBaEUscUJBQThELEVBQUUsS0FBQSxFQUE5RCxjQUFjLG9CQUFBLEVBQUUsY0FBYyxvQkFBQTtRQUY1QixhQUFRLEdBQUcsRUFBRSxlQUFlLEVBQUUsSUFBSSxFQUFFLENBQUM7UUFHbkQsSUFBSSxDQUFDLGNBQWMsR0FBRyxjQUFjLENBQUM7UUFDckMsSUFBSSxDQUFDLGNBQWMsR0FBRyxjQUFjLENBQUM7UUFDckMsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLEdBQUcsRUFBOEIsQ0FBQztJQUM5RCxDQUFDO0lBRUQsa0NBQU8sR0FBUDs7O1lBQ0UsNkRBQTZEO1lBQzdELEtBQWdDLElBQUEsS0FBQSxTQUFBLElBQUksQ0FBQyxjQUFjLENBQUEsZ0JBQUEsNEJBQUU7Z0JBQTFDLElBQUEsS0FBQSxtQkFBaUIsRUFBaEIsQ0FBQyxRQUFBLEVBQUUsWUFBWSxRQUFBO2dCQUN6QixZQUFZLENBQUMsT0FBTyxFQUFFLENBQUM7YUFDeEI7Ozs7Ozs7OztRQUNELElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDOUIsQ0FBQztJQUVELGlDQUFNLEdBQU4sVUFBTyxPQUFvQixFQUFFLEVBQXdDO1FBQXJF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IGZyb20gXCJAYXdzLXNkay9wcm90b2NvbC1odHRwXCI7XG5pbXBvcnQgeyBidWlsZFF1ZXJ5U3RyaW5nIH0gZnJvbSBcIkBhd3Mtc2RrL3F1ZXJ5c3RyaW5nLWJ1aWxkZXJcIjtcbmltcG9ydCB7IEh0dHBIYW5kbGVyT3B0aW9ucyB9IGZyb20gXCJAYXdzLXNkay90eXBlc1wiO1xuaW1wb3J0IHsgQ2xpZW50SHR0cDJTZXNzaW9uLCBjb25uZWN0LCBjb25zdGFudHMgfSBmcm9tIFwiaHR0cDJcIjtcblxuaW1wb3J0IHsgZ2V0VHJhbnNmb3JtZWRIZWFkZXJzIH0gZnJvbSBcIi4vZ2V0LXRyYW5zZm9ybWVkLWhlYWRlcnNcIjtcbmltcG9ydCB7IHdyaXRlUmVxdWVzdEJvZHkgfSBmcm9tIFwiLi93cml0ZS1yZXF1ZXN0LWJvZHlcIjtcblxuLyoqXG4gKiBSZXByZXNlbnRzIHRoZSBodHRwMiBvcHRpb25zIHRoYXQgY2FuIGJlIHBhc3NlZCB0byBhIG5vZGUgaHR0cDIgY2xpZW50LlxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5vZGVIdHRwMkhhbmRsZXJPcHRpb25zIHtcbiAgLyoqXG4gICAqIFRoZSBtYXhpbXVtIHRpbWUgaW4gbWlsbGlzZWNvbmRzIHRoYXQgYSBzdHJlYW0gbWF5IHJlbWFpbiBpZGxlIGJlZm9yZSBpdFxuICAgKiBpcyBjbG9zZWQuXG4gICAqL1xuICByZXF1ZXN0VGltZW91dD86IG51bWJlcjtcblxuICAvKipcbiAgICogVGhlIG1heGltdW0gdGltZSBpbiBtaWxsaXNlY29uZHMgdGhhdCBhIHNlc3Npb24gb3Igc29ja2V0IG1heSByZW1haW4gaWRsZVxuICAgKiBiZWZvcmUgaXQgaXMgY2xvc2VkLlxuICAgKiBodHRwczovL25vZGVqcy5vcmcvZG9jcy9sYXRlc3QtdjEyLngvYXBpL2h0dHAyLmh0bWwjaHR0cDJfaHR0cDJzZXNzaW9uX2FuZF9zb2NrZXRzXG4gICAqL1xuICBzZXNzaW9uVGltZW91dD86IG51bWJlcjtcbn1cblxuZXhwb3J0IGNsYXNzIE5vZGVIdHRwMkhhbmRsZXIgaW1wbGVtZW50cyBIdHRwSGFuZGxlciB7XG4gIHByaXZhdGUgcmVhZG9ubHkgcmVxdWVzdFRpbWVvdXQ/OiBudW1iZXI7XG4gIHByaXZhdGUgcmVhZG9ubHkgc2Vzc2lvblRpbWVvdXQ/OiBudW1iZXI7XG4gIHByaXZhdGUgcmVhZG9ubHkgY29ubmVjdGlvblBvb2w6IE1hcDxzdHJpbmcsIENsaWVudEh0dHAyU2Vzc2lvbj47XG4gIHB1YmxpYyByZWFkb25seSBtZXRhZGF0YSA9IHsgaGFuZGxlclByb3RvY29sOiBcImgyXCIgfTtcblxuICBjb25zdHJ1Y3Rvcih7IHJlcXVlc3RUaW1lb3V0LCBzZXNzaW9uVGltZW91dCB9OiBOb2RlSHR0cDJIYW5kbGVyT3B0aW9ucyA9IHt9KSB7XG4gICAgdGhpcy5yZXF1ZXN0VGltZW91dCA9IHJlcXVlc3RUaW1lb3V0O1xuICAgIHRoaXMuc2Vzc2lvblRpbWVvdXQgPSBzZXNzaW9uVGltZW91dDtcbiAgICB0aGlzLmNvbm5lY3Rpb25Qb29sID0gbmV3IE1hcDxzdHJpbmcsIENsaWVudEh0dHAyU2Vzc2lvbj4oKTtcbiAgfVxuXG4gIGRlc3Ryb3koKTogdm9pZCB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgIGZvciAoY29uc3QgW18sIGh0dHAyU2Vzc2lvbl0gb2YgdGhpcy5jb25uZWN0aW9uUG9vbCkge1xuICAgICAgaHR0cDJTZXNzaW9uLmRlc3Ryb3koKTtcbiAgICB9XG4gICAgdGhpcy5jb25uZWN0aW9uUG9vbC5jbGVhcigpO1xuICB9XG5cbiAgaGFuZGxlKHJlcXVlc3Q6IEh0dHBSZXF1ZXN0LCB7IGFib3J0U2lnbmFsIH06IEh0dHBIYW5kbGVyT3B0aW9ucyA9IHt9KTogUHJvbWlzZTx7IHJlc3BvbnNlOiBIdHRwUmVzcG9uc2UgfT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0T3JpZ2luYWwpID0+IHtcbiAgICAgIC8vIEl0J3MgcmVkdW5kYW50IHRvIHRyYWNrIGZ1bGZpbGxlZCBiZWNhdXNlIHByb21pc2VzIHVzZSB0aGUgZmlyc3QgcmVzb2x1dGlvbi9yZWplY3Rpb25cbiAgICAgIC8vIGJ1dCBhdm9pZHMgZ2VuZXJhdGluZyB1bm5lY2Vzc2FyeSBzdGFjayB0cmFjZXMgaW4gdGhlIFwiY2xvc2VcIiBldmVudCBoYW5kbGVyLlxuICAgICAgbGV0IGZ1bGZpbGxlZCA9IGZhbHNlO1xuICAgICAgY29uc3QgcmVqZWN0ID0gKGVycjogRXJyb3IpID0+IHtcbiAgICAgICAgZnVsZmlsbGVkID0gdHJ1ZTtcbiAgICAgICAgcmVqZWN0T3JpZ2luYWwoZXJyKTtcbiAgICAgIH07XG4gICAgICAvLyBpZiB0aGUgcmVxdWVzdCB3YXMgYWxyZWFkeSBhYm9ydGVkLCBwcmV2ZW50IGRvaW5nIGV4dHJhIHdvcmtcbiAgICAgIGlmIChhYm9ydFNpZ25hbD8uYWJvcnRlZCkge1xuICAgICAgICBjb25zdCBhYm9ydEVycm9yID0gbmV3IEVycm9yKFwiUmVxdWVzdCBhYm9ydGVkXCIpO1xuICAgICAgICBhYm9ydEVycm9yLm5hbWUgPSBcIkFib3J0RXJyb3JcIjtcbiAgICAgICAgcmVqZWN0KGFib3J0RXJyb3IpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHsgaG9zdG5hbWUsIG1ldGhvZCwgcG9ydCwgcHJvdG9jb2wsIHBhdGgsIHF1ZXJ5IH0gPSByZXF1ZXN0O1xuICAgICAgY29uc3QgcXVlcnlTdHJpbmcgPSBidWlsZFF1ZXJ5U3RyaW5nKHF1ZXJ5IHx8IHt9KTtcblxuICAgICAgLy8gY3JlYXRlIHRoZSBodHRwMiByZXF1ZXN0XG4gICAgICBjb25zdCByZXEgPSB0aGlzLmdldFNlc3Npb24oYCR7cHJvdG9jb2x9Ly8ke2hvc3RuYW1lfSR7cG9ydCA/IGA6JHtwb3J0fWAgOiBcIlwifWApLnJlcXVlc3Qoe1xuICAgICAgICAuLi5yZXF1ZXN0LmhlYWRlcnMsXG4gICAgICAgIFtjb25zdGFudHMuSFRUUDJfSEVBREVSX1BBVEhdOiBxdWVyeVN0cmluZyA/IGAke3BhdGh9PyR7cXVlcnlTdHJpbmd9YCA6IHBhdGgsXG4gICAgICAgIFtjb25zdGFudHMuSFRUUDJfSEVBREVSX01FVEhPRF06IG1ldGhvZCxcbiAgICAgIH0pO1xuXG4gICAgICByZXEub24oXCJyZXNwb25zZVwiLCAoaGVhZGVycykgPT4ge1xuICAgICAgICBjb25zdCBodHRwUmVzcG9uc2UgPSBuZXcgSHR0cFJlc3BvbnNlKHtcbiAgICAgICAgICBzdGF0dXNDb2RlOiBoZWFkZXJzW1wiOnN0YXR1c1wiXSB8fCAtMSxcbiAgICAgICAgICBoZWFkZXJzOiBnZXRUcmFuc2Zvcm1lZEhlYWRlcnMoaGVhZGVycyksXG4gICAgICAgICAgYm9keTogcmVxLFxuICAgICAgICB9KTtcbiAgICAgICAgZnVsZmlsbGVkID0gdHJ1ZTtcbiAgICAgICAgcmVzb2x2ZSh7IHJlc3BvbnNlOiBodHRwUmVzcG9uc2UgfSk7XG4gICAgICB9KTtcblxuICAgICAgY29uc3QgcmVxdWVzdFRpbWVvdXQgPSB0aGlzLnJlcXVlc3RUaW1lb3V0O1xuICAgICAgaWYgKHJlcXVlc3RUaW1lb3V0KSB7XG4gICAgICAgIHJlcS5zZXRUaW1lb3V0KHJlcXVlc3RUaW1lb3V0LCAoKSA9PiB7XG4gICAgICAgICAgcmVxLmNsb3NlKCk7XG4gICAgICAgICAgY29uc3QgdGltZW91dEVycm9yID0gbmV3IEVycm9yKGBTdHJlYW0gdGltZWQgb3V0IGJlY2F1c2Ugb2Ygbm8gYWN0aXZpdHkgZm9yICR7cmVxdWVzdFRpbWVvdXR9IG1zYCk7XG4gICAgICAgICAgdGltZW91dEVycm9yLm5hbWUgPSBcIlRpbWVvdXRFcnJvclwiO1xuICAgICAgICAgIHJlamVjdCh0aW1lb3V0RXJyb3IpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKGFib3J0U2lnbmFsKSB7XG4gICAgICAgIGFib3J0U2lnbmFsLm9uYWJvcnQgPSAoKSA9PiB7XG4gICAgICAgICAgcmVxLmNsb3NlKCk7XG4gICAgICAgICAgY29uc3QgYWJvcnRFcnJvciA9IG5ldyBFcnJvcihcIlJlcXVlc3QgYWJvcnRlZFwiKTtcbiAgICAgICAgICBhYm9ydEVycm9yLm5hbWUgPSBcIkFib3J0RXJyb3JcIjtcbiAgICAgICAgICByZWplY3QoYWJvcnRFcnJvcik7XG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIC8vIFNldCB1cCBoYW5kbGVycyBmb3IgZXJyb3JzXG4gICAgICByZXEub24oXCJmcmFtZUVycm9yXCIsIHJlamVjdCk7XG4gICAgICByZXEub24oXCJlcnJvclwiLCByZWplY3QpO1xuICAgICAgcmVxLm9uKFwiZ29hd2F5XCIsIHJlamVjdCk7XG4gICAgICByZXEub24oXCJhYm9ydGVkXCIsIHJlamVjdCk7XG5cbiAgICAgIC8vIFRoZSBIVFRQLzIgZXJyb3IgY29kZSB1c2VkIHdoZW4gY2xvc2luZyB0aGUgc3RyZWFtIGNhbiBiZSByZXRyaWV2ZWQgdXNpbmcgdGhlXG4gICAgICAvLyBodHRwMnN0cmVhbS5yc3RDb2RlIHByb3BlcnR5LiBJZiB0aGUgY29kZSBpcyBhbnkgdmFsdWUgb3RoZXIgdGhhbiBOR0hUVFAyX05PX0VSUk9SICgwKSxcbiAgICAgIC8vIGFuICdlcnJvcicgZXZlbnQgd2lsbCBoYXZlIGFsc28gYmVlbiBlbWl0dGVkLlxuICAgICAgcmVxLm9uKFwiY2xvc2VcIiwgKCkgPT4ge1xuICAgICAgICBpZiAoIWZ1bGZpbGxlZCkge1xuICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoXCJVbmV4cGVjdGVkIGVycm9yOiBodHRwMiByZXF1ZXN0IGRpZCBub3QgZ2V0IGEgcmVzcG9uc2VcIikpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHdyaXRlUmVxdWVzdEJvZHkocmVxLCByZXF1ZXN0KTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0U2Vzc2lvbihhdXRob3JpdHk6IHN0cmluZyk6IENsaWVudEh0dHAyU2Vzc2lvbiB7XG4gICAgY29uc3QgY29ubmVjdGlvblBvb2wgPSB0aGlzLmNvbm5lY3Rpb25Qb29sO1xuICAgIGNvbnN0IGV4aXN0aW5nU2Vzc2lvbiA9IGNvbm5lY3Rpb25Qb29sLmdldChhdXRob3JpdHkpO1xuICAgIGlmIChleGlzdGluZ1Nlc3Npb24pIHJldHVybiBleGlzdGluZ1Nlc3Npb247XG5cbiAgICBjb25zdCBuZXdTZXNzaW9uID0gY29ubmVjdChhdXRob3JpdHkpO1xuICAgIGNvbm5lY3Rpb25Qb29sLnNldChhdXRob3JpdHksIG5ld1Nlc3Npb24pO1xuICAgIGNvbnN0IGRlc3Ryb3lTZXNzaW9uQ2IgPSAoKSA9PiB7XG4gICAgICB0aGlzLmRlc3Ryb3lTZXNzaW9uKGF1dGhvcml0eSwgbmV3U2Vzc2lvbik7XG4gICAgfTtcbiAgICBuZXdTZXNzaW9uLm9uKFwiZ29hd2F5XCIsIGRlc3Ryb3lTZXNzaW9uQ2IpO1xuICAgIG5ld1Nlc3Npb24ub24oXCJlcnJvclwiLCBkZXN0cm95U2Vzc2lvbkNiKTtcbiAgICBuZXdTZXNzaW9uLm9uKFwiZnJhbWVFcnJvclwiLCBkZXN0cm95U2Vzc2lvbkNiKTtcblxuICAgIGNvbnN0IHNlc3Npb25UaW1lb3V0ID0gdGhpcy5zZXNzaW9uVGltZW91dDtcbiAgICBpZiAoc2Vzc2lvblRpbWVvdXQpIHtcbiAgICAgIG5ld1Nlc3Npb24uc2V0VGltZW91dChzZXNzaW9uVGltZW91dCwgKCkgPT4ge1xuICAgICAgICBpZiAoY29ubmVjdGlvblBvb2wuZ2V0KGF1dGhvcml0eSkgPT09IG5ld1Nlc3Npb24pIHtcbiAgICAgICAgICBuZXdTZXNzaW9uLmNsb3NlKCk7XG4gICAgICAgICAgY29ubmVjdGlvblBvb2wuZGVsZXRlKGF1dGhvcml0eSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gbmV3U2Vzc2lvbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXN0cm95IGEgc2Vzc2lvbiBpbW1lZGlhdGVseSBhbmQgcmVtb3ZlIGl0IGZyb20gdGhlIGh0dHAyIHBvb2wuXG4gICAqXG4gICAqIFRoaXMgY2hlY2sgZW5zdXJlcyB0aGF0IHRoZSBzZXNzaW9uIGlzIG9ubHkgY2xvc2VkIG9uY2VcbiAgICogYW5kIHRoYXQgYW4gZXZlbnQgb24gb25lIHNlc3Npb24gZG9lcyBub3QgY2xvc2UgYSBkaWZmZXJlbnQgc2Vzc2lvbi5cbiAgICovXG4gIHByaXZhdGUgZGVzdHJveVNlc3Npb24oYXV0aG9yaXR5OiBzdHJpbmcsIHNlc3Npb246IENsaWVudEh0dHAyU2Vzc2lvbik6IHZvaWQge1xuICAgIGlmICh0aGlzLmNvbm5lY3Rpb25Qb29sLmdldChhdXRob3JpdHkpICE9PSBzZXNzaW9uKSB7XG4gICAgICAvLyBBbHJlYWR5IGNsb3NlZD9cbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5jb25uZWN0aW9uUG9vbC5kZWxldGUoYXV0aG9yaXR5KTtcbiAgICBzZXNzaW9uLnJlbW92ZUFsbExpc3RlbmVycyhcImdvYXdheVwiKTtcbiAgICBzZXNzaW9uLnJlbW92ZUFsbExpc3RlbmVycyhcImVycm9yXCIpO1xuICAgIHNlc3Npb24ucmVtb3ZlQWxsTGlzdGVuZXJzKFwiZnJhbWVFcnJvclwiKTtcbiAgICBpZiAoIXNlc3Npb24uZGVzdHJveWVkKSB7XG4gICAgICBzZXNzaW9uLmRlc3Ryb3koKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==