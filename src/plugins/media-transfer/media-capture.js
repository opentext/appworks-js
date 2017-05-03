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
var AWMediaCapture = (function (_super) {
    __extends(AWMediaCapture, _super);
    function AWMediaCapture(successHandler, errorHandler) {
        var _this = _super.call(this, successHandler, errorHandler) || this;
        _this.supportedAudioModes = proxy_1.AWProxy.device().capture.supportedAudioModes;
        _this.supportedImageModes = proxy_1.AWProxy.device().capture.supportedImageModes;
        _this.supportedVideoModes = proxy_1.AWProxy.device().capture.supportedVideoModes;
        return _this;
    }
    AWMediaCapture.prototype.captureAudio = function (options) {
        var _this = this;
        proxy_1.AWProxy.device().capture.captureAudio((function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })(), options);
    };
    AWMediaCapture.prototype.captureImage = function (options) {
        var _this = this;
        proxy_1.AWProxy.device().capture.captureImage((function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })(), options);
    };
    AWMediaCapture.prototype.captureVideo = function (options) {
        var _this = this;
        proxy_1.AWProxy.device().capture.captureVideo((function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })(), options);
    };
    return AWMediaCapture;
}(plugin_1.AWPlugin));
exports.AWMediaCapture = AWMediaCapture;
//# sourceMappingURL=media-capture.js.map