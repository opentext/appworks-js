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
        // TODO
    }
    SecureStorage.prototype.store = function (url, target, options) {
        // TODO
    };
    SecureStorage.prototype.retrieve = function (filename, options) {
        // TODO
    };
    SecureStorage.prototype.remove = function (target) {
        // TODO
    };
    SecureStorage.prototype.fileExistsAtPath = function (target) {
        // TODO
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
