import { Decoder, Encoder, Hash, InitializeHandlerOptions, InitializeMiddleware, Pluggable } from "@aws-sdk/types";
interface PreviouslyResolved {
    base64Encoder: Encoder;
    md5: {
        new (): Hash;
    };
    utf8Decoder: Decoder;
}
export declare function ssecMiddleware(options: PreviouslyResolved): InitializeMiddleware<any, any>;
export declare const ssecMiddlewareOptions: InitializeHandlerOptions;
export declare const getSsecPlugin: (config: PreviouslyResolved) => Pluggable<any, any>;
export {};
