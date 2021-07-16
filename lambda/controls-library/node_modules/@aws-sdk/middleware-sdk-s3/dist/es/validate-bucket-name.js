import { __assign, __awaiter, __generator } from "tslib";
import { validate as validateArn } from "@aws-sdk/util-arn-parser";
/**
 * @internal
 */
export function validateBucketNameMiddleware() {
    var _this = this;
    return function (next) {
        return function (args) { return __awaiter(_this, void 0, void 0, function () {
            var Bucket, err;
            return __generator(this, function (_a) {
                Bucket = args.input.Bucket;
                if (typeof Bucket === "string" && !validateArn(Bucket) && Bucket.indexOf("/") >= 0) {
                    err = new Error("Bucket name shouldn't contain '/', received '" + Bucket + "'");
                    err.name = "InvalidBucketName";
                    throw err;
                }
                return [2 /*return*/, next(__assign({}, args))];
            });
        }); };
    };
}
/**
 * @internal
 */
export var validateBucketNameMiddlewareOptions = {
    step: "initialize",
    tags: ["VALIDATE_BUCKET_NAME"],
    name: "validateBucketNameMiddleware",
    override: true,
};
/**
 * @internal
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export var getValidateBucketNamePlugin = function (unused) { return ({
    applyToStack: function (clientStack) {
        clientStack.add(validateBucketNameMiddleware(), validateBucketNameMiddlewareOptions);
    },
}); };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGUtYnVja2V0LW5hbWUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdmFsaWRhdGUtYnVja2V0LW5hbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQVNBLE9BQU8sRUFBRSxRQUFRLElBQUksV0FBVyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFFbkU7O0dBRUc7QUFDSCxNQUFNLFVBQVUsNEJBQTRCO0lBQTVDLGlCQWFDO0lBWkMsT0FBTyxVQUFnQyxJQUFvQztRQUN6RSxPQUFBLFVBQU8sSUFBcUM7OztnQkFFL0IsTUFBTSxHQUNiLElBQUksYUFEUyxDQUNSO2dCQUNULElBQUksT0FBTyxNQUFNLEtBQUssUUFBUSxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFO29CQUM1RSxHQUFHLEdBQUcsSUFBSSxLQUFLLENBQUMsa0RBQWdELE1BQU0sTUFBRyxDQUFDLENBQUM7b0JBQ2pGLEdBQUcsQ0FBQyxJQUFJLEdBQUcsbUJBQW1CLENBQUM7b0JBQy9CLE1BQU0sR0FBRyxDQUFDO2lCQUNYO2dCQUNELHNCQUFPLElBQUksY0FBTSxJQUFJLEVBQUcsRUFBQzs7YUFDMUI7SUFWRCxDQVVDLENBQUM7QUFDTixDQUFDO0FBRUQ7O0dBRUc7QUFDSCxNQUFNLENBQUMsSUFBTSxtQ0FBbUMsR0FBNkI7SUFDM0UsSUFBSSxFQUFFLFlBQVk7SUFDbEIsSUFBSSxFQUFFLENBQUMsc0JBQXNCLENBQUM7SUFDOUIsSUFBSSxFQUFFLDhCQUE4QjtJQUNwQyxRQUFRLEVBQUUsSUFBSTtDQUNmLENBQUM7QUFFRjs7R0FFRztBQUNILDZEQUE2RDtBQUM3RCxNQUFNLENBQUMsSUFBTSwyQkFBMkIsR0FBRyxVQUFDLE1BQVcsSUFBMEIsT0FBQSxDQUFDO0lBQ2hGLFlBQVksRUFBRSxVQUFDLFdBQVc7UUFDeEIsV0FBVyxDQUFDLEdBQUcsQ0FBQyw0QkFBNEIsRUFBRSxFQUFFLG1DQUFtQyxDQUFDLENBQUM7SUFDdkYsQ0FBQztDQUNGLENBQUMsRUFKK0UsQ0FJL0UsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEluaXRpYWxpemVIYW5kbGVyLFxuICBJbml0aWFsaXplSGFuZGxlckFyZ3VtZW50cyxcbiAgSW5pdGlhbGl6ZUhhbmRsZXJPcHRpb25zLFxuICBJbml0aWFsaXplSGFuZGxlck91dHB1dCxcbiAgSW5pdGlhbGl6ZU1pZGRsZXdhcmUsXG4gIE1ldGFkYXRhQmVhcmVyLFxuICBQbHVnZ2FibGUsXG59IGZyb20gXCJAYXdzLXNkay90eXBlc1wiO1xuaW1wb3J0IHsgdmFsaWRhdGUgYXMgdmFsaWRhdGVBcm4gfSBmcm9tIFwiQGF3cy1zZGsvdXRpbC1hcm4tcGFyc2VyXCI7XG5cbi8qKlxuICogQGludGVybmFsXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZUJ1Y2tldE5hbWVNaWRkbGV3YXJlKCk6IEluaXRpYWxpemVNaWRkbGV3YXJlPGFueSwgYW55PiB7XG4gIHJldHVybiA8T3V0cHV0IGV4dGVuZHMgTWV0YWRhdGFCZWFyZXI+KG5leHQ6IEluaXRpYWxpemVIYW5kbGVyPGFueSwgT3V0cHV0Pik6IEluaXRpYWxpemVIYW5kbGVyPGFueSwgT3V0cHV0PiA9PlxuICAgIGFzeW5jIChhcmdzOiBJbml0aWFsaXplSGFuZGxlckFyZ3VtZW50czxhbnk+KTogUHJvbWlzZTxJbml0aWFsaXplSGFuZGxlck91dHB1dDxPdXRwdXQ+PiA9PiB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIGlucHV0OiB7IEJ1Y2tldCB9LFxuICAgICAgfSA9IGFyZ3M7XG4gICAgICBpZiAodHlwZW9mIEJ1Y2tldCA9PT0gXCJzdHJpbmdcIiAmJiAhdmFsaWRhdGVBcm4oQnVja2V0KSAmJiBCdWNrZXQuaW5kZXhPZihcIi9cIikgPj0gMCkge1xuICAgICAgICBjb25zdCBlcnIgPSBuZXcgRXJyb3IoYEJ1Y2tldCBuYW1lIHNob3VsZG4ndCBjb250YWluICcvJywgcmVjZWl2ZWQgJyR7QnVja2V0fSdgKTtcbiAgICAgICAgZXJyLm5hbWUgPSBcIkludmFsaWRCdWNrZXROYW1lXCI7XG4gICAgICAgIHRocm93IGVycjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBuZXh0KHsgLi4uYXJncyB9KTtcbiAgICB9O1xufVxuXG4vKipcbiAqIEBpbnRlcm5hbFxuICovXG5leHBvcnQgY29uc3QgdmFsaWRhdGVCdWNrZXROYW1lTWlkZGxld2FyZU9wdGlvbnM6IEluaXRpYWxpemVIYW5kbGVyT3B0aW9ucyA9IHtcbiAgc3RlcDogXCJpbml0aWFsaXplXCIsXG4gIHRhZ3M6IFtcIlZBTElEQVRFX0JVQ0tFVF9OQU1FXCJdLFxuICBuYW1lOiBcInZhbGlkYXRlQnVja2V0TmFtZU1pZGRsZXdhcmVcIixcbiAgb3ZlcnJpZGU6IHRydWUsXG59O1xuXG4vKipcbiAqIEBpbnRlcm5hbFxuICovXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG5leHBvcnQgY29uc3QgZ2V0VmFsaWRhdGVCdWNrZXROYW1lUGx1Z2luID0gKHVudXNlZDogYW55KTogUGx1Z2dhYmxlPGFueSwgYW55PiA9PiAoe1xuICBhcHBseVRvU3RhY2s6IChjbGllbnRTdGFjaykgPT4ge1xuICAgIGNsaWVudFN0YWNrLmFkZCh2YWxpZGF0ZUJ1Y2tldE5hbWVNaWRkbGV3YXJlKCksIHZhbGlkYXRlQnVja2V0TmFtZU1pZGRsZXdhcmVPcHRpb25zKTtcbiAgfSxcbn0pO1xuIl19