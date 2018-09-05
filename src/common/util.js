"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Collection of utility functions
 */
var proxy_1 = require("./proxy");
function noop() {
}
exports.noop = noop;
function isFunction(functionToCheck) {
    var getType = {};
    return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
}
exports.isFunction = isFunction;
function isDesktopEnv() {
    return proxy_1.AWProxy.isDesktopEnv();
}
exports.isDesktopEnv = isDesktopEnv;
function isMobileEnv() {
    return proxy_1.AWProxy.isMobileEnv();
}
exports.isMobileEnv = isMobileEnv;
//# sourceMappingURL=util.js.map