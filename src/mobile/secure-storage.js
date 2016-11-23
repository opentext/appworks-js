/// <reference path="../../typings/globals/cordova/index.d.ts"/>
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var aw_plugin_1 = require('../core/aw-plugin');
var SecureStorage = (function (_super) {
    __extends(SecureStorage, _super);
    function SecureStorage(successHandler, errorHandler) {
        _super.call(this, successHandler, errorHandler);
        this.seqNo = ++SecureStorage.idCounter;
        this.onprogress = null;
    }
    SecureStorage.prototype.store = function (url, target, options) {
        var _this = this;
        var args = [encodeURI(url), target, false, this.seqNo, options && options.headers], completionHandler = function () { return _this.successHandler; }, progressHandler = this.onprogress, progress;
        function newProgressEvent(result) {
            var pe = new ProgressEvent(null);
            pe.lengthComputable = result.lengthComputable;
            pe.loaded = result.loaded;
            pe.total = result.total;
            return pe;
        }
        progress = function (result) {
            if (typeof result.lengthComputable !== 'undefined') {
                if (progressHandler) {
                    progressHandler(newProgressEvent(result));
                }
            }
            else {
                if (completionHandler) {
                    completionHandler()(result);
                }
            }
        };
        cordova.exec(progress, (function () { return _this.errorHandler; })(), 'AWSecureStorage', 'store', args);
    };
    SecureStorage.prototype.retrieve = function (filename, options) {
        var _this = this;
        var args = [filename, options];
        cordova.exec((function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })(), 'AWSecureStorage', 'retrieve', args);
    };
    SecureStorage.prototype.remove = function (target) {
        var _this = this;
        var args = [target];
        cordova.exec((function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })(), 'AWSecureStorage', 'removeFile', args);
    };
    SecureStorage.prototype.fileExistsAtPath = function (target) {
        var _this = this;
        var args = [target];
        cordova.exec((function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })(), 'AWSecureStorage', 'fileExistsAtPath', args);
    };
    SecureStorage.idCounter = 0;
    return SecureStorage;
}(aw_plugin_1.AWPlugin));
exports.SecureStorage = SecureStorage;
var AWSecureStorage = (function (_super) {
    __extends(AWSecureStorage, _super);
    function AWSecureStorage() {
        _super.apply(this, arguments);
    }
    return AWSecureStorage;
}(SecureStorage));
exports.AWSecureStorage = AWSecureStorage;
