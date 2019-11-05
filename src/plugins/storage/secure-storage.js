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
var SecureStorage = (function (_super) {
    __extends(SecureStorage, _super);
    function SecureStorage(successHandler, errorHandler) {
        var _this = _super.call(this, successHandler, errorHandler) || this;
        _this.seqNo = ++SecureStorage.idCounter;
        _this.onprogress = null;
        return _this;
    }
    SecureStorage.prototype.store = function (url, target, options, encodeUri) {
        var _this = this;
        if (encodeUri === void 0) { encodeUri = true; }
        var args = [encodeUri ? encodeURI(url) : url, target, false, this.seqNo, options && options.headers], completionHandler = function () { return _this.successHandler; }, progressHandler = this.onprogress, progress;
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
        proxy_1.AWProxy.exec(progress, (function () { return _this.errorHandler; })(), 'AWSecureStorage', 'store', args);
    };
    SecureStorage.prototype.retrieve = function (filename, options) {
        var _this = this;
        var args = [filename, options];
        proxy_1.AWProxy.exec((function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })(), 'AWSecureStorage', 'retrieve', args);
    };
    SecureStorage.prototype.remove = function (target) {
        var _this = this;
        var args = [target];
        proxy_1.AWProxy.exec((function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })(), 'AWSecureStorage', 'removeFile', args);
    };
    SecureStorage.prototype.fileExistsAtPath = function (target) {
        var _this = this;
        var args = [target];
        proxy_1.AWProxy.exec((function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })(), 'AWSecureStorage', 'fileExistsAtPath', args);
    };
    return SecureStorage;
}(plugin_1.AWPlugin));
SecureStorage.idCounter = 0;
exports.SecureStorage = SecureStorage;
var AWSecureStorage = (function (_super) {
    __extends(AWSecureStorage, _super);
    function AWSecureStorage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return AWSecureStorage;
}(SecureStorage));
exports.AWSecureStorage = AWSecureStorage;
//# sourceMappingURL=secure-storage.js.map