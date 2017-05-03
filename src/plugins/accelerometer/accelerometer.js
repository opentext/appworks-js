"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var plugin_1 = require("../../common/plugin");
var proxy_1 = require("../../common/proxy");
var AWAccelerometer = (function (_super) {
    __extends(AWAccelerometer, _super);
    function AWAccelerometer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AWAccelerometer.prototype.getCurrentAcceleration = function () {
        var _this = this;
        return proxy_1.AWProxy.accelerometer().getCurrentAcceleration((function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })());
    };
    AWAccelerometer.prototype.watchAcceleration = function (options) {
        var _this = this;
        return proxy_1.AWProxy.accelerometer().watchAcceleration((function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })(), options);
    };
    AWAccelerometer.prototype.clearWatch = function (watchId) {
        return proxy_1.AWProxy.accelerometer().clearWatch(watchId);
    };
    return AWAccelerometer;
}(plugin_1.AWPlugin));
exports.AWAccelerometer = AWAccelerometer;
//# sourceMappingURL=accelerometer.js.map