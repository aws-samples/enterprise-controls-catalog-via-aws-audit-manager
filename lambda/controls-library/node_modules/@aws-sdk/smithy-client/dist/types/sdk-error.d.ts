import { MetadataBearer } from "@aws-sdk/types";
import { SmithyException } from "./exception";
export declare type SdkError = Error & Partial<SmithyException> & Partial<MetadataBearer>;
