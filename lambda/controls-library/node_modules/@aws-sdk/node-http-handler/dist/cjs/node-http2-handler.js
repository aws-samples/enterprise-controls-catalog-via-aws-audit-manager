"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodeHttp2Handler = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const querystring_builder_1 = require("@aws-sdk/querystring-builder");
const http2_1 = require("http2");
const get_transformed_headers_1 = require("./get-transformed-headers");
const write_request_body_1 = require("./write-request-body");
class NodeHttp2Handler {
    constructor({ requestTimeout, sessionTimeout } = {}) {
        this.metadata = { handlerProtocol: "h2" };
        this.requestTimeout = requestTimeout;
        this.sessionTimeout = sessionTimeout;
        this.connectionPool = new Map();
    }
    destroy() {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        for (const [_, http2Session] of this.connectionPool) {
            http2Session.destroy();
        }
        this.connectionPool.clear();
    }
    handle(request, { abortSignal } = {}) {
        return new Promise((resolve, rejectOriginal) => {
            // It's redundant to track fulfilled because promises use the first resolution/rejection
            // but avoids generating unnecessary stack traces in the "close" event handler.
            let fulfilled = false;
            const reject = (err) => {
                fulfilled = true;
                rejectOriginal(err);
            };
            // if the request was already aborted, prevent doing extra work
            if (abortSignal === null || abortSignal === void 0 ? void 0 : abortSignal.aborted) {
                const abortError = new Error("Request aborted");
                abortError.name = "AbortError";
                reject(abortError);
                return;
            }
            const { hostname, method, port, protocol, path, query } = request;
            const queryString = querystring_builder_1.buildQueryString(query || {});
            // create the http2 request
            const req = this.getSession(`${protocol}//${hostname}${port ? `:${port}` : ""}`).request({
                ...request.headers,
                [http2_1.constants.HTTP2_HEADER_PATH]: queryString ? `${path}?${queryString}` : path,
                [http2_1.constants.HTTP2_HEADER_METHOD]: method,
            });
            req.on("response", (headers) => {
                const httpResponse = new protocol_http_1.HttpResponse({
                    statusCode: headers[":status"] || -1,
                    headers: get_transformed_headers_1.getTransformedHeaders(headers),
                    body: req,
                });
                fulfilled = true;
                resolve({ response: httpResponse });
            });
            const requestTimeout = this.requestTimeout;
            if (requestTimeout) {
                req.setTimeout(requestTimeout, () => {
                    req.close();
                    const timeoutError = new Error(`Stream timed out because of no activity for ${requestTimeout} ms`);
                    timeoutError.name = "TimeoutError";
                    reject(timeoutError);
                });
            }
            if (abortSignal) {
                abortSignal.onabort = () => {
                    req.close();
                    const abortError = new Error("Request aborted");
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
            req.on("close", () => {
                if (!fulfilled) {
                    reject(new Error("Unexpected error: http2 request did not get a response"));
                }
            });
            write_request_body_1.writeRequestBody(req, request);
        });
    }
    getSession(authority) {
        const connectionPool = this.connectionPool;
        const existingSession = connectionPool.get(authority);
        if (existingSession)
            return existingSession;
        const newSession = http2_1.connect(authority);
        connectionPool.set(authority, newSession);
        const destroySessionCb = () => {
            this.destroySession(authority, newSession);
        };
        newSession.on("goaway", destroySessionCb);
        newSession.on("error", destroySessionCb);
        newSession.on("frameError", destroySessionCb);
        const sessionTimeout = this.sessionTimeout;
        if (sessionTimeout) {
            newSession.setTimeout(sessionTimeout, () => {
                if (connectionPool.get(authority) === newSession) {
                    newSession.close();
                    connectionPool.delete(authority);
                }
            });
        }
        return newSession;
    }
    /**
     * Destroy a session immediately and remove it from the http2 pool.
     *
     * This check ensures that the session is only closed once
     * and that an event on one session does not close a different session.
     */
    destroySession(authority, session) {
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
    }
}
exports.NodeHttp2Handler = NodeHttp2Handler;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm9kZS1odHRwMi1oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL25vZGUtaHR0cDItaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwwREFBZ0Y7QUFDaEYsc0VBQWdFO0FBRWhFLGlDQUErRDtBQUUvRCx1RUFBa0U7QUFDbEUsNkRBQXdEO0FBb0J4RCxNQUFhLGdCQUFnQjtJQU0zQixZQUFZLEVBQUUsY0FBYyxFQUFFLGNBQWMsS0FBOEIsRUFBRTtRQUY1RCxhQUFRLEdBQUcsRUFBRSxlQUFlLEVBQUUsSUFBSSxFQUFFLENBQUM7UUFHbkQsSUFBSSxDQUFDLGNBQWMsR0FBRyxjQUFjLENBQUM7UUFDckMsSUFBSSxDQUFDLGNBQWMsR0FBRyxjQUFjLENBQUM7UUFDckMsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLEdBQUcsRUFBOEIsQ0FBQztJQUM5RCxDQUFDO0lBRUQsT0FBTztRQUNMLDZEQUE2RDtRQUM3RCxLQUFLLE1BQU0sQ0FBQyxDQUFDLEVBQUUsWUFBWSxDQUFDLElBQUksSUFBSSxDQUFDLGNBQWMsRUFBRTtZQUNuRCxZQUFZLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDeEI7UUFDRCxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzlCLENBQUM7SUFFRCxNQUFNLENBQUMsT0FBb0IsRUFBRSxFQUFFLFdBQVcsS0FBeUIsRUFBRTtRQUNuRSxPQUFPLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLGNBQWMsRUFBRSxFQUFFO1lBQzdDLHdGQUF3RjtZQUN4RiwrRUFBK0U7WUFDL0UsSUFBSSxTQUFTLEdBQUcsS0FBSyxDQUFDO1lBQ3RCLE1BQU0sTUFBTSxHQUFHLENBQUMsR0FBVSxFQUFFLEVBQUU7Z0JBQzVCLFNBQVMsR0FBRyxJQUFJLENBQUM7Z0JBQ2pCLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN0QixDQUFDLENBQUM7WUFDRiwrREFBK0Q7WUFD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aEQsVUFBVSxDQUFDLEtBQUssRUFBRSxDQUFDO29CQUNuQixjQUFjLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2lCQUNsQztZQUNILENBQUMsQ0FBQyxDQUFDO1NBQ0o7UUFDRCxPQUFPLFVBQVUsQ0FBQztJQUNwQixDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSyxjQUFjLENBQUMsU0FBaUIsRUFBRSxPQUEyQjtRQUNuRSxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxLQUFLLE9BQU8sRUFBRTtZQUNsRCxrQkFBa0I7WUFDbEIsT0FBTztTQUNSO1FBQ0QsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDdEMsT0FBTyxDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3JDLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNwQyxPQUFPLENBQUMsa0JBQWtCLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUU7WUFDdEIsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQ25CO0lBQ0gsQ0FBQztDQUNGO0FBM0lELDRDQTJJQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBIYW5kbGVyLCBIdHRwUmVxdWVzdCwgSHR0cFJlc3BvbnNlIH0gZnJvbSBcIkBhd3Mtc2RrL3Byb3RvY29sLWh0dHBcIjtcbmltcG9ydCB7IGJ1aWxkUXVlcnlTdHJpbmcgfSBmcm9tIFwiQGF3cy1zZGsvcXVlcnlzdHJpbmctYnVpbGRlclwiO1xuaW1wb3J0IHsgSHR0cEhhbmRsZXJPcHRpb25zIH0gZnJvbSBcIkBhd3Mtc2RrL3R5cGVzXCI7XG5pbXBvcnQgeyBDbGllbnRIdHRwMlNlc3Npb24sIGNvbm5lY3QsIGNvbnN0YW50cyB9IGZyb20gXCJodHRwMlwiO1xuXG5pbXBvcnQgeyBnZXRUcmFuc2Zvcm1lZEhlYWRlcnMgfSBmcm9tIFwiLi9nZXQtdHJhbnNmb3JtZWQtaGVhZGVyc1wiO1xuaW1wb3J0IHsgd3JpdGVSZXF1ZXN0Qm9keSB9IGZyb20gXCIuL3dyaXRlLXJlcXVlc3QtYm9keVwiO1xuXG4vKipcbiAqIFJlcHJlc2VudHMgdGhlIGh0dHAyIG9wdGlvbnMgdGhhdCBjYW4gYmUgcGFzc2VkIHRvIGEgbm9kZSBodHRwMiBjbGllbnQuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTm9kZUh0dHAySGFuZGxlck9wdGlvbnMge1xuICAvKipcbiAgICogVGhlIG1heGltdW0gdGltZSBpbiBtaWxsaXNlY29uZHMgdGhhdCBhIHN0cmVhbSBtYXkgcmVtYWluIGlkbGUgYmVmb3JlIGl0XG4gICAqIGlzIGNsb3NlZC5cbiAgICovXG4gIHJlcXVlc3RUaW1lb3V0PzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBUaGUgbWF4aW11bSB0aW1lIGluIG1pbGxpc2Vjb25kcyB0aGF0IGEgc2Vzc2lvbiBvciBzb2NrZXQgbWF5IHJlbWFpbiBpZGxlXG4gICAqIGJlZm9yZSBpdCBpcyBjbG9zZWQuXG4gICAqIGh0dHBzOi8vbm9kZWpzLm9yZy9kb2NzL2xhdGVzdC12MTIueC9hcGkvaHR0cDIuaHRtbCNodHRwMl9odHRwMnNlc3Npb25fYW5kX3NvY2tldHNcbiAgICovXG4gIHNlc3Npb25UaW1lb3V0PzogbnVtYmVyO1xufVxuXG5leHBvcnQgY2xhc3MgTm9kZUh0dHAySGFuZGxlciBpbXBsZW1lbnRzIEh0dHBIYW5kbGVyIHtcbiAgcHJpdmF0ZSByZWFkb25seSByZXF1ZXN0VGltZW91dD86IG51bWJlcjtcbiAgcHJpdmF0ZSByZWFkb25seSBzZXNzaW9uVGltZW91dD86IG51bWJlcjtcbiAgcHJpdmF0ZSByZWFkb25seSBjb25uZWN0aW9uUG9vbDogTWFwPHN0cmluZywgQ2xpZW50SHR0cDJTZXNzaW9uPjtcbiAgcHVibGljIHJlYWRvbmx5IG1ldGFkYXRhID0geyBoYW5kbGVyUHJvdG9jb2w6IFwiaDJcIiB9O1xuXG4gIGNvbnN0cnVjdG9yKHsgcmVxdWVzdFRpbWVvdXQsIHNlc3Npb25UaW1lb3V0IH06IE5vZGVIdHRwMkhhbmRsZXJPcHRpb25zID0ge30pIHtcbiAgICB0aGlzLnJlcXVlc3RUaW1lb3V0ID0gcmVxdWVzdFRpbWVvdXQ7XG4gICAgdGhpcy5zZXNzaW9uVGltZW91dCA9IHNlc3Npb25UaW1lb3V0O1xuICAgIHRoaXMuY29ubmVjdGlvblBvb2wgPSBuZXcgTWFwPHN0cmluZywgQ2xpZW50SHR0cDJTZXNzaW9uPigpO1xuICB9XG5cbiAgZGVzdHJveSgpOiB2b2lkIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgZm9yIChjb25zdCBbXywgaHR0cDJTZXNzaW9uXSBvZiB0aGlzLmNvbm5lY3Rpb25Qb29sKSB7XG4gICAgICBodHRwMlNlc3Npb24uZGVzdHJveSgpO1xuICAgIH1cbiAgICB0aGlzLmNvbm5lY3Rpb25Qb29sLmNsZWFyKCk7XG4gIH1cblxuICBoYW5kbGUocmVxdWVzdDogSHR0cFJlcXVlc3QsIHsgYWJvcnRTaWduYWwgfTogSHR0cEhhbmRsZXJPcHRpb25zID0ge30pOiBQcm9taXNlPHsgcmVzcG9uc2U6IEh0dHBSZXNwb25zZSB9PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3RPcmlnaW5hbCkgPT4ge1xuICAgICAgLy8gSXQncyByZWR1bmRhbnQgdG8gdHJhY2sgZnVsZmlsbGVkIGJlY2F1c2UgcHJvbWlzZXMgdXNlIHRoZSBmaXJzdCByZXNvbHV0aW9uL3JlamVjdGlvblxuICAgICAgLy8gYnV0IGF2b2lkcyBnZW5lcmF0aW5nIHVubmVjZXNzYXJ5IHN0YWNrIHRyYWNlcyBpbiB0aGUgXCJjbG9zZVwiIGV2ZW50IGhhbmRsZXIuXG4gICAgICBsZXQgZnVsZmlsbGVkID0gZmFsc2U7XG4gICAgICBjb25zdCByZWplY3QgPSAoZXJyOiBFcnJvcikgPT4ge1xuICAgICAgICBmdWxmaWxsZWQgPSB0cnVlO1xuICAgICAgICByZWplY3RPcmlnaW5hbChlcnIpO1xuICAgICAgfTtcbiAgICAgIC8vIGlmIHRoZSByZXF1ZXN0IHdhcyBhbHJlYWR5IGFib3J0ZWQsIHByZXZlbnQgZG9pbmcgZXh0cmEgd29ya1xuICAgICAgaWYgKGFib3J0U2lnbmFsPy5hYm9ydGVkKSB7XG4gICAgICAgIGNvbnN0IGFib3J0RXJyb3IgPSBuZXcgRXJyb3IoXCJSZXF1ZXN0IGFib3J0ZWRcIik7XG4gICAgICAgIGFib3J0RXJyb3IubmFtZSA9IFwiQWJvcnRFcnJvclwiO1xuICAgICAgICByZWplY3QoYWJvcnRFcnJvcik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgeyBob3N0bmFtZSwgbWV0aG9kLCBwb3J0LCBwcm90b2NvbCwgcGF0aCwgcXVlcnkgfSA9IHJlcXVlc3Q7XG4gICAgICBjb25zdCBxdWVyeVN0cmluZyA9IGJ1aWxkUXVlcnlTdHJpbmcocXVlcnkgfHwge30pO1xuXG4gICAgICAvLyBjcmVhdGUgdGhlIGh0dHAyIHJlcXVlc3RcbiAgICAgIGNvbnN0IHJlcSA9IHRoaXMuZ2V0U2Vzc2lvbihgJHtwcm90b2NvbH0vLyR7aG9zdG5hbWV9JHtwb3J0ID8gYDoke3BvcnR9YCA6IFwiXCJ9YCkucmVxdWVzdCh7XG4gICAgICAgIC4uLnJlcXVlc3QuaGVhZGVycyxcbiAgICAgICAgW2NvbnN0YW50cy5IVFRQMl9IRUFERVJfUEFUSF06IHF1ZXJ5U3RyaW5nID8gYCR7cGF0aH0/JHtxdWVyeVN0cmluZ31gIDogcGF0aCxcbiAgICAgICAgW2NvbnN0YW50cy5IVFRQMl9IRUFERVJfTUVUSE9EXTogbWV0aG9kLFxuICAgICAgfSk7XG5cbiAgICAgIHJlcS5vbihcInJlc3BvbnNlXCIsIChoZWFkZXJzKSA9PiB7XG4gICAgICAgIGNvbnN0IGh0dHBSZXNwb25zZSA9IG5ldyBIdHRwUmVzcG9uc2Uoe1xuICAgICAgICAgIHN0YXR1c0NvZGU6IGhlYWRlcnNbXCI6c3RhdHVzXCJdIHx8IC0xLFxuICAgICAgICAgIGhlYWRlcnM6IGdldFRyYW5zZm9ybWVkSGVhZGVycyhoZWFkZXJzKSxcbiAgICAgICAgICBib2R5OiByZXEsXG4gICAgICAgIH0pO1xuICAgICAgICBmdWxmaWxsZWQgPSB0cnVlO1xuICAgICAgICByZXNvbHZlKHsgcmVzcG9uc2U6IGh0dHBSZXNwb25zZSB9KTtcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCByZXF1ZXN0VGltZW91dCA9IHRoaXMucmVxdWVzdFRpbWVvdXQ7XG4gICAgICBpZiAocmVxdWVzdFRpbWVvdXQpIHtcbiAgICAgICAgcmVxLnNldFRpbWVvdXQocmVxdWVzdFRpbWVvdXQsICgpID0+IHtcbiAgICAgICAgICByZXEuY2xvc2UoKTtcbiAgICAgICAgICBjb25zdCB0aW1lb3V0RXJyb3IgPSBuZXcgRXJyb3IoYFN0cmVhbSB0aW1lZCBvdXQgYmVjYXVzZSBvZiBubyBhY3Rpdml0eSBmb3IgJHtyZXF1ZXN0VGltZW91dH0gbXNgKTtcbiAgICAgICAgICB0aW1lb3V0RXJyb3IubmFtZSA9IFwiVGltZW91dEVycm9yXCI7XG4gICAgICAgICAgcmVqZWN0KHRpbWVvdXRFcnJvcik7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAoYWJvcnRTaWduYWwpIHtcbiAgICAgICAgYWJvcnRTaWduYWwub25hYm9ydCA9ICgpID0+IHtcbiAgICAgICAgICByZXEuY2xvc2UoKTtcbiAgICAgICAgICBjb25zdCBhYm9ydEVycm9yID0gbmV3IEVycm9yKFwiUmVxdWVzdCBhYm9ydGVkXCIpO1xuICAgICAgICAgIGFib3J0RXJyb3IubmFtZSA9IFwiQWJvcnRFcnJvclwiO1xuICAgICAgICAgIHJlamVjdChhYm9ydEVycm9yKTtcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgLy8gU2V0IHVwIGhhbmRsZXJzIGZvciBlcnJvcnNcbiAgICAgIHJlcS5vbihcImZyYW1lRXJyb3JcIiwgcmVqZWN0KTtcbiAgICAgIHJlcS5vbihcImVycm9yXCIsIHJlamVjdCk7XG4gICAgICByZXEub24oXCJnb2F3YXlcIiwgcmVqZWN0KTtcbiAgICAgIHJlcS5vbihcImFib3J0ZWRcIiwgcmVqZWN0KTtcblxuICAgICAgLy8gVGhlIEhUVFAvMiBlcnJvciBjb2RlIHVzZWQgd2hlbiBjbG9zaW5nIHRoZSBzdHJlYW0gY2FuIGJlIHJldHJpZXZlZCB1c2luZyB0aGVcbiAgICAgIC8vIGh0dHAyc3RyZWFtLnJzdENvZGUgcHJvcGVydHkuIElmIHRoZSBjb2RlIGlzIGFueSB2YWx1ZSBvdGhlciB0aGFuIE5HSFRUUDJfTk9fRVJST1IgKDApLFxuICAgICAgLy8gYW4gJ2Vycm9yJyBldmVudCB3aWxsIGhhdmUgYWxzbyBiZWVuIGVtaXR0ZWQuXG4gICAgICByZXEub24oXCJjbG9zZVwiLCAoKSA9PiB7XG4gICAgICAgIGlmICghZnVsZmlsbGVkKSB7XG4gICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihcIlVuZXhwZWN0ZWQgZXJyb3I6IGh0dHAyIHJlcXVlc3QgZGlkIG5vdCBnZXQgYSByZXNwb25zZVwiKSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgd3JpdGVSZXF1ZXN0Qm9keShyZXEsIHJlcXVlc3QpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRTZXNzaW9uKGF1dGhvcml0eTogc3RyaW5nKTogQ2xpZW50SHR0cDJTZXNzaW9uIHtcbiAgICBjb25zdCBjb25uZWN0aW9uUG9vbCA9IHRoaXMuY29ubmVjdGlvblBvb2w7XG4gICAgY29uc3QgZXhpc3RpbmdTZXNzaW9uID0gY29ubmVjdGlvblBvb2wuZ2V0KGF1dGhvcml0eSk7XG4gICAgaWYgKGV4aXN0aW5nU2Vzc2lvbikgcmV0dXJuIGV4aXN0aW5nU2Vzc2lvbjtcblxuICAgIGNvbnN0IG5ld1Nlc3Npb24gPSBjb25uZWN0KGF1dGhvcml0eSk7XG4gICAgY29ubmVjdGlvblBvb2wuc2V0KGF1dGhvcml0eSwgbmV3U2Vzc2lvbik7XG4gICAgY29uc3QgZGVzdHJveVNlc3Npb25DYiA9ICgpID0+IHtcbiAgICAgIHRoaXMuZGVzdHJveVNlc3Npb24oYXV0aG9yaXR5LCBuZXdTZXNzaW9uKTtcbiAgICB9O1xuICAgIG5ld1Nlc3Npb24ub24oXCJnb2F3YXlcIiwgZGVzdHJveVNlc3Npb25DYik7XG4gICAgbmV3U2Vzc2lvbi5vbihcImVycm9yXCIsIGRlc3Ryb3lTZXNzaW9uQ2IpO1xuICAgIG5ld1Nlc3Npb24ub24oXCJmcmFtZUVycm9yXCIsIGRlc3Ryb3lTZXNzaW9uQ2IpO1xuXG4gICAgY29uc3Qgc2Vzc2lvblRpbWVvdXQgPSB0aGlzLnNlc3Npb25UaW1lb3V0O1xuICAgIGlmIChzZXNzaW9uVGltZW91dCkge1xuICAgICAgbmV3U2Vzc2lvbi5zZXRUaW1lb3V0KHNlc3Npb25UaW1lb3V0LCAoKSA9PiB7XG4gICAgICAgIGlmIChjb25uZWN0aW9uUG9vbC5nZXQoYXV0aG9yaXR5KSA9PT0gbmV3U2Vzc2lvbikge1xuICAgICAgICAgIG5ld1Nlc3Npb24uY2xvc2UoKTtcbiAgICAgICAgICBjb25uZWN0aW9uUG9vbC5kZWxldGUoYXV0aG9yaXR5KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBuZXdTZXNzaW9uO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc3Ryb3kgYSBzZXNzaW9uIGltbWVkaWF0ZWx5IGFuZCByZW1vdmUgaXQgZnJvbSB0aGUgaHR0cDIgcG9vbC5cbiAgICpcbiAgICogVGhpcyBjaGVjayBlbnN1cmVzIHRoYXQgdGhlIHNlc3Npb24gaXMgb25seSBjbG9zZWQgb25jZVxuICAgKiBhbmQgdGhhdCBhbiBldmVudCBvbiBvbmUgc2Vzc2lvbiBkb2VzIG5vdCBjbG9zZSBhIGRpZmZlcmVudCBzZXNzaW9uLlxuICAgKi9cbiAgcHJpdmF0ZSBkZXN0cm95U2Vzc2lvbihhdXRob3JpdHk6IHN0cmluZywgc2Vzc2lvbjogQ2xpZW50SHR0cDJTZXNzaW9uKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY29ubmVjdGlvblBvb2wuZ2V0KGF1dGhvcml0eSkgIT09IHNlc3Npb24pIHtcbiAgICAgIC8vIEFscmVhZHkgY2xvc2VkP1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmNvbm5lY3Rpb25Qb29sLmRlbGV0ZShhdXRob3JpdHkpO1xuICAgIHNlc3Npb24ucmVtb3ZlQWxsTGlzdGVuZXJzKFwiZ29hd2F5XCIpO1xuICAgIHNlc3Npb24ucmVtb3ZlQWxsTGlzdGVuZXJzKFwiZXJyb3JcIik7XG4gICAgc2Vzc2lvbi5yZW1vdmVBbGxMaXN0ZW5lcnMoXCJmcmFtZUVycm9yXCIpO1xuICAgIGlmICghc2Vzc2lvbi5kZXN0cm95ZWQpIHtcbiAgICAgIHNlc3Npb24uZGVzdHJveSgpO1xuICAgIH1cbiAgfVxufVxuIl19