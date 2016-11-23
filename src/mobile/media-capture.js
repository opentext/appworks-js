/// <reference path="../../typings/globals/cordova/index.d.ts"/>
/// <reference path="../../typings/globals/cordova/plugins/mediacapture/index.d.ts"/>
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var aw_plugin_1 = require('../core/aw-plugin');
var AWMediaCapture = (function (_super) {
    __extends(AWMediaCapture, _super);
    function AWMediaCapture(successHandler, errorHandler) {
        _super.call(this, successHandler, errorHandler);
        this.supportedAudioModes = navigator.device.capture.supportedAudioModes;
        this.supportedImageModes = navigator.device.capture.supportedImageModes;
        this.supportedVideoModes = navigator.device.capture.supportedVideoModes;
    }
    AWMediaCapture.prototype.captureAudio = function (options) {
        var _this = this;
        navigator.device.capture.captureAudio((function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })(), options);
    };
    AWMediaCapture.prototype.captureImage = function (options) {
        var _this = this;
        navigator.device.capture.captureImage((function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })(), options);
    };
    AWMediaCapture.prototype.captureVideo = function (options) {
        var _this = this;
        navigator.device.capture.captureVideo((function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })(), options);
    };
    return AWMediaCapture;
}(aw_plugin_1.AWPlugin));
exports.AWMediaCapture = AWMediaCapture;
