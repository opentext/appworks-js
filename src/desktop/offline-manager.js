"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var aw_plugin_1 = require('../core/aw-plugin');
var AWOfflineManager = (function (_super) {
    __extends(AWOfflineManager, _super);
    function AWOfflineManager(options) {
        _super.call(this, function () {
        }, function () {
        });
        // TODO
    }
    AWOfflineManager.prototype.defer = function (eventName, args) {
        // TODO
    };
    AWOfflineManager.prototype.cancel = function (id) {
        // TODO
    };
    AWOfflineManager.prototype.networkStatus = function () {
        // TODO
    };
    AWOfflineManager.prototype.saveQueue = function () {
        // TODO
    };
    AWOfflineManager.prototype.processDeferredQueue = function () {
        // TODO
    };
    AWOfflineManager.prototype.dispatchEvent = function (data) {
        // TODO
    };
    return AWOfflineManager;
}(aw_plugin_1.AWPlugin));
exports.AWOfflineManager = AWOfflineManager;
