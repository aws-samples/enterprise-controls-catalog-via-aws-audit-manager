import { HttpHandler, HttpRequest, HttpResponse } from "@aws-sdk/protocol-http";
import { HttpHandlerOptions } from "@aws-sdk/types";
/**
 * Represents the http2 options that can be passed to a node http2 client.
 */
export interface NodeHttp2HandlerOptions {
    /**
     * The maximum time in milliseconds that a stream may remain idle before it
     * is closed.
     */
    requestTimeout?: number;
    /**
     * The maximum time in milliseconds that a session or socket may remain idle
     * before it is closed.
     * https://nodejs.org/docs/latest-v12.x/api/http2.html#http2_http2session_and_sockets
     */
    sessionTimeout?: number;
}
export declare class NodeHttp2Handler implements HttpHandler {
    private readonly requestTimeout?;
    private readonly sessionTimeout?;
    private readonly connectionPool;
    readonly metadata: {
        handlerProtocol: string;
    };
    constructor({ requestTimeout, sessionTimeout }?: NodeHttp2HandlerOptions);
    destroy(): void;
    handle(request: HttpRequest, { abortSignal }?: HttpHandlerOptions): Promise<{
        response: HttpResponse;
    }>;
    private getSession;
    /**
     * Destroy a session immediately and remove it from the http2 pool.
     *
     * This check ensures that the session is only closed once
     * and that an event on one session does not close a different session.
     */
    private destroySession;
}
