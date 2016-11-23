"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var aw_plugin_1 = require('../core/aw-plugin');
var AWCache = (function (_super) {
    __extends(AWCache, _super);
    function AWCache(options) {
        _super.call(this, function () {
        }, function () {
        });
        this.options = options || {
            usePersistentStorage: false
        };
        if (this.options.usePersistentStorage) {
            this.loadPersistentDataIntoLocalStorage();
        }
    }
    AWCache.prototype.setItem = function (key, value) {
        // TODO
    };
    AWCache.prototype.getItem = function (key) {
        // TODO
    };
    AWCache.prototype.removeItem = function (key) {
        // TODO
    };
    AWCache.prototype.clear = function () {
        // TODO
    };
    AWCache.prototype.readDataFromPersistentStorage = function (callback, errorCallback) {
        // TODO
    };
    AWCache.prototype.writeLocalStorageDataToPersistentStorage = function () {
        // TODO
    };
    AWCache.prototype.writeDataToPersistentStorage = function (data) {
        // TODO
    };
    AWCache.prototype.loadPersistentDataIntoLocalStorage = function () {
        // TODO
    };
    return AWCache;
}(aw_plugin_1.AWPlugin));
exports.AWCache = AWCache;
