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
var AWCache = (function (_super) {
    __extends(AWCache, _super);
    function AWCache(options) {
        var _this = _super.call(this, util_1.Util.noop, util_1.Util.noop) || this;
        _this.options = options || { usePersistentStorage: false };
        _this.preloadCache();
        return _this;
    }
    AWCache.prototype.setItem = function (key, value) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            proxy_1.AWProxy.storage().setItem(key, value);
            if (_this.usePersistentStorage()) {
                proxy_1.AWProxy.persistentStorage().persistLocalStorage()
                    .then(resolve, reject);
            }
            else {
                resolve();
            }
        });
    };
    AWCache.prototype.getItem = function (key) {
        return proxy_1.AWProxy.storage().getItem(key);
    };
    AWCache.prototype.removeItem = function (key) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            proxy_1.AWProxy.storage().removeItem(key);
            if (_this.usePersistentStorage()) {
                proxy_1.AWProxy.persistentStorage().persistLocalStorage()
                    .then(resolve, reject);
            }
            else {
                resolve();
            }
        });
    };
    AWCache.prototype.clear = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            proxy_1.AWProxy.storage().clear();
            if (_this.usePersistentStorage()) {
                proxy_1.AWProxy.persistentStorage().persistLocalStorage()
                    .then(resolve, reject);
            }
            else {
                resolve();
            }
        });
    };
    AWCache.prototype.preloadCache = function () {
        if (this.usePersistentStorage())
            proxy_1.AWProxy.persistentStorage().loadPersistentData()
                .then(function () {
                return console.log('AWCache: Successfully loaded persistent data into local storage');
            }, function (err) {
                return console.error("AWCache: Failed to load persistent data into local storage - " + err.toString());
            });
    };
    AWCache.prototype.usePersistentStorage = function () {
        return this.options.usePersistentStorage;
    };
    return AWCache;
}(plugin_1.AWPlugin));
exports.AWCache = AWCache;
//# sourceMappingURL=cache.js.map