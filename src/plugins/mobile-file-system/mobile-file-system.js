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
var AWMobileFileSystem = (function (_super) {
    __extends(AWMobileFileSystem, _super);
    function AWMobileFileSystem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // File listing
    AWMobileFileSystem.prototype.list = function (directory, shared, success, error) {
        var args = [directory, shared];
        proxy_1.AWProxy.exec(success, error, "AWMobileFileSystem", "list", args);
    };
    // Imports
    AWMobileFileSystem.prototype.listImports = function (success, error) {
        var args = [];
        proxy_1.AWProxy.exec(success, error, "AWMobileFileSystem", "listImports", args);
    };
    AWMobileFileSystem.prototype.moveImport = function (source, destination, desintationShared, success, error) {
        var args = [source, destination, desintationShared];
        proxy_1.AWProxy.exec(success, error, "AWMobileFileSystem", "moveImport", args);
    };
    // File IO
    AWMobileFileSystem.prototype.exists = function (source, shared, success, error) {
        var args = [source, shared];
        proxy_1.AWProxy.exec(success, error, "AWMobileFileSystem", "exists", args);
    };
    AWMobileFileSystem.prototype.isOpen = function (source, shared, success, error) {
        var args = [source, shared];
        proxy_1.AWProxy.exec(success, error, "AWMobileFileSystem", "isOpen", args);
    };
    AWMobileFileSystem.prototype.rename = function (source, destination, shared, success, error) {
        var args = [source, destination, shared];
        proxy_1.AWProxy.exec(success, error, "AWMobileFileSystem", "rename", args);
    };
    AWMobileFileSystem.prototype.copy = function (source, sourceShared, destination, destinationShared, success, error) {
        var args = [source, sourceShared, destination, destinationShared];
        proxy_1.AWProxy.exec(success, error, "AWMobileFileSystem", "copy", args);
    };
    AWMobileFileSystem.prototype.move = function (source, sourceShared, destination, destinationShared, success, error) {
        var args = [source, sourceShared, destination, destinationShared];
        proxy_1.AWProxy.exec(success, error, "AWMobileFileSystem", "move", args);
    };
    AWMobileFileSystem.prototype.remove = function (source, shared, success, error) {
        var args = [source, shared];
        proxy_1.AWProxy.exec(success, error, "AWMobileFileSystem", "remove", args);
    };
    AWMobileFileSystem.prototype.read = function (source, shared, success, error) {
        var args = [source, shared];
        proxy_1.AWProxy.exec(success, error, "AWMobileFileSystem", "read", args);
    };
    // File sharing
    AWMobileFileSystem.prototype.open = function (source, shared, success, error) {
        var args = [source, shared];
        proxy_1.AWProxy.exec(success, error, "AWMobileFileSystem", "open", args);
    };
    AWMobileFileSystem.prototype.share = function (source, shared, success, error) {
        var args = [source, shared];
        proxy_1.AWProxy.exec(success, error, "AWMobileFileSystem", "share", args);
    };
    AWMobileFileSystem.prototype.quicklook = function (source, shared, success, error) {
        var args = [source, shared];
        proxy_1.AWProxy.exec(success, error, "AWMobileFileSystem", "quicklook", args);
    };
    // File transfer
    AWMobileFileSystem.prototype.download = function (source, destination, headers, shared, success, error) {
        var args = [source, destination, headers, shared];
        proxy_1.AWProxy.exec(success, error, "AWMobileFileSystem", "download", args);
    };
    AWMobileFileSystem.prototype.upload = function (source, destination, fileParameterName, formData, headers, shared, success, error) {
        var args = [source, destination, fileParameterName, formData, headers, shared];
        proxy_1.AWProxy.exec(success, error, "AWMobileFileSystem", "upload", args);
    };
    return AWMobileFileSystem;
}(plugin_1.AWPlugin));
exports.AWMobileFileSystem = AWMobileFileSystem;
//# sourceMappingURL=mobile-file-system.js.map