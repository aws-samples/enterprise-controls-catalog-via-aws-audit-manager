"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.waitUntilObjectExists = exports.waitForObjectExists = void 0;
const HeadObjectCommand_1 = require("../commands/HeadObjectCommand");
const util_waiter_1 = require("@aws-sdk/util-waiter");
const checkState = async (client, input) => {
    let reason;
    try {
        let result = await client.send(new HeadObjectCommand_1.HeadObjectCommand(input));
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
 *  @deprecated Use waitUntilObjectExists instead. waitForObjectExists does not throw error in non-success cases.
 */
const waitForObjectExists = async (params, input) => {
    const serviceDefaults = { minDelay: 5, maxDelay: 120 };
    return util_waiter_1.createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
exports.waitForObjectExists = waitForObjectExists;
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to HeadObjectCommand for polling.
 */
const waitUntilObjectExists = async (params, input) => {
    const serviceDefaults = { minDelay: 5, maxDelay: 120 };
    const result = await util_waiter_1.createWaiter({ ...serviceDefaults, ...params }, input, checkState);
    return util_waiter_1.checkExceptions(result);
};
exports.waitUntilObjectExists = waitUntilObjectExists;
//# sourceMappingURL=waitForObjectExists.js.map