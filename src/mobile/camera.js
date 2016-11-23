/// <reference path="../../typings/globals/cordova/index.d.ts"/>
/// <reference path="../../typings/globals/cordova/plugins/camera/index.d.ts"/>
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
        navigator.camera.cleanup(onSuccess, onError);
    };
    AWCamera.prototype.getPicture = function (cameraSuccess, cameraError, cameraOptions) {
        navigator.camera.getPicture(cameraSuccess, cameraError, cameraOptions);
    };
    AWCamera.prototype.openGallery = function (options) {
        var _this = this;
        options = options || {
            destinationType: Camera.DestinationType.FILE_URI
        };
        options.sourceType = Camera.PictureSourceType.PHOTOLIBRARY;
        this.getPicture((function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })(), options);
    };
    AWCamera.prototype.takePicture = function (options) {
        var _this = this;
        options = options || {
            destinationType: Camera.DestinationType.FILE_URI,
            encodingType: Camera.EncodingType.JPEG,
            mediaType: Camera.MediaType.ALLMEDIA,
            correctOrientation: true,
            saveToPhotoAlbum: true
        };
        options.sourceType = Camera.PictureSourceType.CAMERA;
        this.getPicture((function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })(), options);
    };
    return AWCamera;
}(aw_plugin_1.AWPlugin));
exports.AWCamera = AWCamera;
