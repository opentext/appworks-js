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
var util_1 = require("../../common/util");
var AWFileSystem = (function (_super) {
    __extends(AWFileSystem, _super);
    function AWFileSystem() {
        var _this = _super.call(this, util_1.noop, util_1.noop) || this;
        _this.desktopEnvError = new Error('This method is only available in the AppWorks Desktop environment');
        return _this;
    }
    AWFileSystem.prototype.getPath = function (name, successCallback, errorCallback) {
        this.validateEnv();
        proxy_1.AWProxy.exec(successCallback, errorCallback, 'AWFileSystem', 'getPath', [name]);
    };
    AWFileSystem.prototype.exists = function (path, successCallback, errorCallback) {
        this.validateEnv();
        proxy_1.AWProxy.exec(successCallback, errorCallback, 'AWFileSystem', 'exists', [path]);
    };
    AWFileSystem.prototype.isDir = function (path, successCallback, errorCallback) {
        this.validateEnv();
        proxy_1.AWProxy.exec(successCallback, errorCallback, 'AWFileSystem', 'isDir', [path]);
    };
    AWFileSystem.prototype.isOpen = function (path, successCallback, errorCallback) {
        this.validateEnv();
        proxy_1.AWProxy.exec(successCallback, errorCallback, 'AWFileSystem', 'isOpen', [path]);
    };
    AWFileSystem.prototype.setReadOnly = function (path, successCallback, errorCallback) {
        this.validateEnv();
        proxy_1.AWProxy.exec(successCallback, errorCallback, 'AWFileSystem', 'setReadOnly', [path]);
    };
    AWFileSystem.prototype.createFile = function (path, successCallback, errorCallback, data, append) {
        this.validateEnv();
        proxy_1.AWProxy.exec(successCallback, errorCallback, 'AWFileSystem', 'createFile', [path, data, append]);
    };
    AWFileSystem.prototype.readFile = function (path, successCallback, errorCallback) {
        this.validateEnv();
        proxy_1.AWProxy.exec(successCallback, errorCallback, 'AWFileSystem', 'readFile', [path]);
    };
    AWFileSystem.prototype.createDirectory = function (path, successCallback, errorCallback) {
        this.validateEnv();
        proxy_1.AWProxy.exec(successCallback, errorCallback, 'AWFileSystem', 'createDirectory', [path]);
    };
    AWFileSystem.prototype.copy = function (from, to, successCallback, errorCallback) {
        this.validateEnv();
        proxy_1.AWProxy.exec(successCallback, errorCallback, 'AWFileSystem', 'copy', [from, to]);
    };
    AWFileSystem.prototype.open = function (path, successCallback, errorCallback) {
        this.validateEnv();
        proxy_1.AWProxy.exec(successCallback, errorCallback, 'AWFileSystem', 'open', [path]);
    };
    AWFileSystem.prototype.reveal = function (path, successCallback, errorCallback) {
        this.validateEnv();
        proxy_1.AWProxy.exec(successCallback, errorCallback, 'AWFileSystem', 'reveal', [path]);
    };
    AWFileSystem.prototype.updateLastModifiedDate = function (path, date, successCallback, errorCallback) {
        this.validateEnv();
        proxy_1.AWProxy.exec(successCallback, errorCallback, 'AWFileSystem', 'updateLastModifiedDate', [path, date]);
    };
    AWFileSystem.prototype.getDetails = function (path, successCallback, errorCallback) {
        this.validateEnv();
        proxy_1.AWProxy.exec(successCallback, errorCallback, 'AWFileSystem', 'getDetails', [path]);
    };
    AWFileSystem.prototype.listDirContents = function (path, successCallback, errorCallback) {
        this.validateEnv();
        proxy_1.AWProxy.exec(successCallback, errorCallback, 'AWFileSystem', 'listDirContents', [path]);
    };
    AWFileSystem.prototype.showSaveDialog = function (opts, successCallback, errorCallback) {
        this.validateEnv();
        proxy_1.AWProxy.exec(successCallback, errorCallback, 'AWFileSystem', 'showSaveDialog', [opts]);
    };
    AWFileSystem.prototype.showDirSelector = function (opts, successCallback, errorCallback) {
        this.validateEnv();
        proxy_1.AWProxy.exec(successCallback, errorCallback, 'AWFileSystem', 'showDirSelector', [opts]);
    };
    AWFileSystem.prototype.showFileSelector = function (opts, successCallback, errorCallback) {
        this.validateEnv();
        proxy_1.AWProxy.exec(successCallback, errorCallback, 'AWFileSystem', 'showFileSelector', [opts]);
    };
    AWFileSystem.prototype.onFileOpen = function (openFileCallback, successCallback, errorCallback) {
        this.validateEnv();
        proxy_1.AWProxy.exec(successCallback, errorCallback, 'AWFileSystem', 'onFileOpen', [openFileCallback]);
    };
    AWFileSystem.prototype.remove = function (path, successCallback, errorCallback) {
        this.validateEnv();
        proxy_1.AWProxy.exec(successCallback, errorCallback, 'AWFileSystem', 'remove', [path]);
    };
    /**
     * The methods of this class should only be called from within an AppWorks desktop
     * environment.
     */
    AWFileSystem.prototype.validateEnv = function () {
        if (!proxy_1.AWProxy.isDesktopEnv()) {
            throw this.desktopEnvError;
        }
    };
    return AWFileSystem;
}(plugin_1.AWPlugin));
exports.AWFileSystem = AWFileSystem;
//# sourceMappingURL=file-system.js.map