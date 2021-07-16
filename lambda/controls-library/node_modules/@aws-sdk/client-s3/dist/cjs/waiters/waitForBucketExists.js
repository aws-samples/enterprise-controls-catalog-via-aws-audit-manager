"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.waitUntilBucketExists = exports.waitForBucketExists = void 0;
const HeadBucketCommand_1 = require("../commands/HeadBucketCommand");
const util_waiter_1 = require("@aws-sdk/util-waiter");
const checkState = async (client, input) => {
    let reason;
    try {
        let result = await client.send(new HeadBucketCommand_1.HeadBucketCommand(input));
        reason = result;
        return { state: util_waiter_1.WaiterState.SUCCESS, reason };
    }
    catch (exception) {
        reason = exception;
        if (exception.name && exception.name == "NotFound") {
            return { state: util_waiter_1.WaiterState.RETRY, reason };
        }
    }
    return { state: util_waiter_1.WaiterState.RETRY, reason };
};
/**
 *
 *  @deprecated Use waitUntilBucketExists instead. waitForBucketExists does not throw error in non-success cases.
 */
const waitForBucketExists = async (params, input) => {
    const serviceDefaults = { minDelay: 5, maxDelay: 120 };
    return util_waiter_1.createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
exports.waitForBucketExists = waitForBucketExists;
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to HeadBucketCommand for polling.
 */
const waitUntilBucketExists = async (params, input) => {
    const serviceDefaults = { minDelay: 5, maxDelay: 120 };
    const result = await util_waiter_1.createWaiter({ ...serviceDefaults, ...params }, input, checkState);
    return util_waiter_1.checkExceptions(result);
};
exports.waitUntilBucketExists = waitUntilBucketExists;
//# sourceMappingURL=waitForBucketExists.js.map