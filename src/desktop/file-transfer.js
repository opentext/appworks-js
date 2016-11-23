"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var aw_plugin_1 = require('../core/aw-plugin');
var AWFileTransfer = (function (_super) {
    __extends(AWFileTransfer, _super);
    function AWFileTransfer(successHandler, errorHandler) {
        _super.call(this, successHandler, errorHandler);
        // TODO
    }
    AWFileTransfer.prototype.abort = function () {
        // TODO
    };
    AWFileTransfer.prototype.download = function (url, target, options, shared) {
        // TODO
    };
    AWFileTransfer.prototype.progressHandler = function (handler) {
        // TODO
    };
    AWFileTransfer.prototype.upload = function (source, url, options, shared) {
        // TODO
    };
    return AWFileTransfer;
}(aw_plugin_1.AWPlugin));
exports.AWFileTransfer = AWFileTransfer;
