"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.waitUntilBucketNotExists = exports.waitForBucketNotExists = void 0;
const HeadBucketCommand_1 = require("../commands/HeadBucketCommand");
const util_waiter_1 = require("@aws-sdk/util-waiter");
const checkState = async (client, input) => {
    let reason;
    try {
        let result = await client.send(new HeadBucketCommand_1.HeadBucketCommand(input));
        reason = result;
    }
    catch (exception) {
        reason = exception;
        if (exception.name && exception.name == "NotFound") {
            return { state: util_waiter_1.WaiterState.SUCCESS, reason };
        }
    }
    return { state: util_waiter_1.WaiterState.RETRY, reason };
};
/**
 *
 *  @deprecated Use waitUntilBucketNotExists instead. waitForBucketNotExists does not throw error in non-success cases.
 */
const waitForBucketNotExists = async (params, input) => {
    const serviceDefaults = { minDelay: 5, maxDelay: 120 };
    return util_waiter_1.createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
exports.waitForBucketNotExists = waitForBucketNotExists;
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to HeadBucketCommand for polling.
 */
const waitUntilBucketNotExists = async (params, input) => {
    const serviceDefaults = { minDelay: 5, maxDelay: 120 };
    const result = await util_waiter_1.createWaiter({ ...serviceDefaults, ...params }, input, checkState);
    return util_waiter_1.checkExceptions(result);
};
exports.waitUntilBucketNotExists = waitUntilBucketNotExists;
//# sourceMappingURL=waitForBucketNotExists.js.map