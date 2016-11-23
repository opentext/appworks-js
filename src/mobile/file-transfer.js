/// <reference path="../../typings/globals/cordova/index.d.ts"/>
/// <reference path="../../typings/globals/cordova/plugins/filesystem/index.d.ts"/>
/// <reference path="../../typings/globals/cordova/plugins/filetransfer/index.d.ts"/>
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
        this.fileTransfer = new FileTransfer();
        this.onprogress = null;
    }
    AWFileTransfer.prototype.abort = function () {
        this.fileTransfer.abort();
    };
    AWFileTransfer.prototype.download = function (url, target, options, shared) {
        var _this = this;
        var successHandler = this.successHandler, errorHandler = this.errorHandler;
        options = options || {};
        function gotSharedContainerUrl(containerUrl) {
            new FileTransfer().download(encodeURI(url), containerUrl + '/' + target, successHandler, errorHandler, false, options);
        }
        if (shared) {
            cordova.exec(gotSharedContainerUrl, (function () { return _this.errorHandler; })(), 'AWSharedDocumentProvider', 'containerForCurrentApp', []);
        }
        else {
            this.fileTransfer.download(encodeURI(url), cordova.file.documentsDirectory + '/' + target, successHandler, errorHandler, false, options);
        }
        return this.fileTransfer;
    };
    AWFileTransfer.prototype.progressHandler = function (handler) {
        this.fileTransfer.onprogress = handler;
    };
    AWFileTransfer.prototype.upload = function (source, url, options, shared) {
        var _this = this;
        var successHandler = this.successHandler, errorHandler = this.errorHandler;
        options = options || {};
        function gotSharedContainerUrl(containerUrl) {
            new FileTransfer().upload(containerUrl + '/' + source, encodeURI(url), successHandler, errorHandler, options, false);
        }
        if (shared) {
            cordova.exec(gotSharedContainerUrl, (function () { return _this.errorHandler; })(), 'AWSharedDocumentProvider', 'containerForCurrentApp', []);
        }
        else {
            this.fileTransfer.upload(cordova.file.documentsDirectory + '/' + source, encodeURI(url), successHandler, errorHandler, options, false);
        }
        return this.fileTransfer;
    };
    return AWFileTransfer;
}(aw_plugin_1.AWPlugin));
exports.AWFileTransfer = AWFileTransfer;
