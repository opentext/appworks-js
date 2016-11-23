/// <reference path="../../typings/globals/cordova/index.d.ts"/>
/// <reference path="../../typings/globals/cordova/plugins/deviceorientation/index.d.ts"/>
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var aw_plugin_1 = require('../core/aw-plugin');
var AWCompass = (function (_super) {
    __extends(AWCompass, _super);
    function AWCompass() {
        _super.apply(this, arguments);
    }
    AWCompass.prototype.getCurrentHeading = function () {
        var _this = this;
        navigator.compass.getCurrentHeading((function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })());
    };
    AWCompass.prototype.watchHeading = function (options) {
        var _this = this;
        return navigator.compass.watchHeading((function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })(), options);
    };
    AWCompass.prototype.clearWatch = function (watchId) {
        navigator.compass.clearWatch(watchId);
    };
    return AWCompass;
}(aw_plugin_1.AWPlugin));
exports.AWCompass = AWCompass;
