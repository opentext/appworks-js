"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var aw_plugin_1 = require('../core/aw-plugin');
var AWCamera = (function (_super) {
    __extends(AWCamera, _super);
    function AWCamera() {
        _super.apply(this, arguments);
    }
    AWCamera.prototype.cleanup = function (onSuccess, onError) {
        // TODO
    };
    AWCamera.prototype.getPicture = function (cameraSuccess, cameraError, cameraOptions) {
        // TODO
    };
    AWCamera.prototype.openGallery = function (options) {
        // TODO
    };
    AWCamera.prototype.takePicture = function (options) {
        // TODO
    };
    return AWCamera;
}(aw_plugin_1.AWPlugin));
exports.AWCamera = AWCamera;
