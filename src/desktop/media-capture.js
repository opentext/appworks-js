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
        // TODO
    }
    AWMediaCapture.prototype.captureAudio = function (options) {
        // TODO
    };
    AWMediaCapture.prototype.captureImage = function (options) {
        // TODO
    };
    AWMediaCapture.prototype.captureVideo = function (options) {
        // TODO
    };
    return AWMediaCapture;
}(aw_plugin_1.AWPlugin));
exports.AWMediaCapture = AWMediaCapture;
