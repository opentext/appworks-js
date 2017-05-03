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
import { AWPlugin } from "../../common/plugin";
import { AWProxy } from "../../common/proxy";
var AWFileTransfer = (function (_super) {
    __extends(AWFileTransfer, _super);
    function AWFileTransfer(successHandler, errorHandler) {
        var _this = _super.call(this, successHandler, errorHandler) || this;
        _this.fileTransfer = AWProxy.filetransfer();
        _this.onprogress = null;
        return _this;
    }
    AWFileTransfer.prototype.abort = function () {
        this.fileTransfer.abort();
    };
    AWFileTransfer.prototype.download = function (url, target, options, shared) {
        var _this = this;
        var successHandler = this.successHandler, errorHandler = this.errorHandler;
        options = options || {};
        if (shared && !AWProxy.isDesktopEnv()) {
            AWProxy.exec(gotSharedContainerUrl, (function () { return _this.errorHandler; })(), 'AWSharedDocumentProvider', 'containerForCurrentApp', []);
        }
        else {
            this.fileTransfer.download(encodeURI(url), this.toEnvFilePath(target), successHandler, errorHandler, false, options);
        }
        return this.fileTransfer;
        function gotSharedContainerUrl(containerUrl) {
            AWProxy.filetransfer().download(encodeURI(url), containerUrl + '/' + target, successHandler, errorHandler, false, options);
        }
    };
    AWFileTransfer.prototype.progressHandler = function (handler) {
        this.fileTransfer.onprogress = handler;
    };
    AWFileTransfer.prototype.upload = function (source, url, options, shared) {
        var _this = this;
        var successHandler = this.successHandler, errorHandler = this.errorHandler;
        options = options || {};
        if (shared && !AWProxy.isDesktopEnv()) {
            AWProxy.exec(gotSharedContainerUrl, (function () { return _this.errorHandler; })(), 'AWSharedDocumentProvider', 'containerForCurrentApp', []);
        }
        else {
            this.fileTransfer.upload(this.toEnvFilePath(source), encodeURI(url), successHandler, errorHandler, options, false);
        }
        return this.fileTransfer;
        function gotSharedContainerUrl(containerUrl) {
            AWProxy.filetransfer().upload(
            // valid use of slash here as shared container is a mobile only concept
            containerUrl + '/' + source, encodeURI(url), successHandler, errorHandler, options, false);
        }
    };
    AWFileTransfer.prototype.toEnvFilePath = function (fileUrl) {
        // use a path relative to the Cordova defined sandbox in a mobile environment
        return AWProxy.isDesktopEnv() ? fileUrl : AWProxy.file().documentsDirectory + '/' + fileUrl;
    };
    return AWFileTransfer;
}(AWPlugin));
export { AWFileTransfer };
//# sourceMappingURL=file-transfer.js.map