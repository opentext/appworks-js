/// <reference path="../../typings/globals/cordova/index.d.ts"/>
/// <reference path="../../typings/globals/cordova/plugins/devicemotion/index.d.ts"/>
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var aw_plugin_1 = require('../core/aw-plugin');
var AWAccelerometer = (function (_super) {
    __extends(AWAccelerometer, _super);
    function AWAccelerometer() {
        _super.apply(this, arguments);
    }
    AWAccelerometer.prototype.getCurrentAcceleration = function () {
        var _this = this;
        navigator.accelerometer.getCurrentAcceleration((function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })());
    };
    AWAccelerometer.prototype.watchAcceleration = function (options) {
        var _this = this;
        return navigator.accelerometer.watchAcceleration((function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })(), options);
    };
    AWAccelerometer.prototype.clearWatch = function (watchId) {
        navigator.accelerometer.clearWatch(watchId);
    };
    return AWAccelerometer;
}(aw_plugin_1.AWPlugin));
exports.AWAccelerometer = AWAccelerometer;
