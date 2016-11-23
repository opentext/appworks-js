/// <reference path="../../typings/globals/cordova/index.d.ts"/>
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var aw_plugin_1 = require('../core/aw-plugin');
var AWLocation = (function (_super) {
    __extends(AWLocation, _super);
    function AWLocation() {
        _super.apply(this, arguments);
    }
    AWLocation.prototype.getCurrentPosition = function (options) {
        var _this = this;
        navigator.geolocation.getCurrentPosition((function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })(), options);
    };
    AWLocation.prototype.watchPosition = function (options) {
        var _this = this;
        return navigator.geolocation.watchPosition((function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })(), options);
    };
    AWLocation.prototype.clearWatch = function (watchId) {
        navigator.geolocation.clearWatch(watchId);
    };
    return AWLocation;
}(aw_plugin_1.AWPlugin));
exports.AWLocation = AWLocation;
