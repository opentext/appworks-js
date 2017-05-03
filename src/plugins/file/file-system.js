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
import { Util } from "../../common/util";
var AWFileSystem = (function (_super) {
    __extends(AWFileSystem, _super);
    function AWFileSystem() {
        var _this = _super.call(this, Util.noop, Util.noop) || this;
        _this.desktopEnvError = new Error('This method is only available in the AppWorks Desktop environment');
        return _this;
    }
    AWFileSystem.prototype.getPath = function (name, successCallback, errorCallback) {
        this.validateEnv();
        AWProxy.exec(successCallback, errorCallback, 'AWFileSystem', 'getPath', [name]);
    };
    AWFileSystem.prototype.exists = function (path, successCallback, errorCallback) {
        this.validateEnv();
        AWProxy.exec(successCallback, errorCallback, 'AWFileSystem', 'exists', [path]);
    };
    AWFileSystem.prototype.isDir = function (path, successCallback, errorCallback) {
        this.validateEnv();
        AWProxy.exec(successCallback, errorCallback, 'AWFileSystem', 'isDir', [path]);
    };
    AWFileSystem.prototype.createFile = function (path, successCallback, errorCallback) {
        this.validateEnv();
        AWProxy.exec(successCallback, errorCallback, 'AWFileSystem', 'createFile', [path]);
    };
    AWFileSystem.prototype.createDirectory = function (path, successCallback, errorCallback) {
        this.validateEnv();
        AWProxy.exec(successCallback, errorCallback, 'AWFileSystem', 'createDirectory', [path]);
    };
    AWFileSystem.prototype.copy = function (from, to, successCallback, errorCallback) {
        this.validateEnv();
        AWProxy.exec(successCallback, errorCallback, 'AWFileSystem', 'copy', [from, to]);
    };
    AWFileSystem.prototype.open = function (path, successCallback, errorCallback) {
        this.validateEnv();
        AWProxy.exec(successCallback, errorCallback, 'AWFileSystem', 'open', [path]);
    };
    AWFileSystem.prototype.reveal = function (path, successCallback, errorCallback) {
        this.validateEnv();
        AWProxy.exec(successCallback, errorCallback, 'AWFileSystem', 'reveal', [path]);
    };
    AWFileSystem.prototype.getDetails = function (path, successCallback, errorCallback) {
        this.validateEnv();
        AWProxy.exec(successCallback, errorCallback, 'AWFileSystem', 'getDetails', [path]);
    };
    AWFileSystem.prototype.listDirContents = function (path, successCallback, errorCallback) {
        this.validateEnv();
        AWProxy.exec(successCallback, errorCallback, 'AWFileSystem', 'listDirContents', [path]);
    };
    AWFileSystem.prototype.showSaveDialog = function (opts, successCallback, errorCallback) {
        this.validateEnv();
        AWProxy.exec(successCallback, errorCallback, 'AWFileSystem', 'showSaveDialog', [opts]);
    };
    AWFileSystem.prototype.showDirSelector = function (opts, successCallback, errorCallback) {
        this.validateEnv();
        AWProxy.exec(successCallback, errorCallback, 'AWFileSystem', 'showDirSelector', [opts]);
    };
    AWFileSystem.prototype.showFileSelector = function (opts, successCallback, errorCallback) {
        this.validateEnv();
        AWProxy.exec(successCallback, errorCallback, 'AWFileSystem', 'showFileSelector', [opts]);
    };
    /**
     * The methods of this class should only be called from within an AppWorks desktop
     * environment.
     */
    AWFileSystem.prototype.validateEnv = function () {
        if (!AWProxy.isDesktopEnv()) {
            throw this.desktopEnvError;
        }
    };
    return AWFileSystem;
}(AWPlugin));
export { AWFileSystem };
//# sourceMappingURL=file-system.js.map