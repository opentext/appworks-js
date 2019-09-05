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
        var _this = _super.call(this, util_1.noop, util_1.noop) || this;
        _this.excludedKeys = [];
        _this.options = options || { usePersistentStorage: false };
        console.log("AWCache instantiate, don't forget to call preloadCache().then(function(){}, function(err){})");
        return _this;
    }
    AWCache.prototype.setExcludedKeys = function (_excludedKeys) {
        this.excludedKeys = _excludedKeys;
    };
    AWCache.prototype.setItem = function (key, value) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            proxy_1.AWProxy.storage().setItem(key, value);
            if (_this.usePersistentStorage()) {
                proxy_1.AWProxy.persistentStorage().persistLocalStorage(_this.excludedKeys)
                    .then(resolve, reject);
            }
            else {
                resolve();
            }
        });
    };
    AWCache.prototype.getItem = function (key) {
        var item = proxy_1.AWProxy.storage().getItem(key);
        return (typeof item === 'undefined' ? '' : item);
    };
    AWCache.prototype.removeItem = function (key) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            proxy_1.AWProxy.storage().removeItem(key);
            if (_this.usePersistentStorage()) {
                proxy_1.AWProxy.persistentStorage().persistLocalStorage(_this.excludedKeys)
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
                proxy_1.AWProxy.persistentStorage().persistLocalStorage(_this.excludedKeys)
                    .then(resolve, reject);
            }
            else {
                resolve();
            }
        });
    };
    AWCache.prototype.preloadCache = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.usePersistentStorage()) {
                _this.migrateCache(_this.excludedKeys).then(function () {
                    proxy_1.AWProxy.persistentStorage().loadPersistentData()
                        .then(function () {
                        console.log('AWCache: Successfully loaded persistent data into local storage');
                        resolve();
                    }, function (err) {
                        var error = "AWCache: Failed to load persistent data into local storage - " + err.toString();
                        console.error(error);
                        reject(error);
                    });
                }, reject);
            }
            else {
                resolve();
            }
        });
    };
    AWCache.prototype.migrateCache = function (excludedKeys) {
        return new Promise(function (resolve, reject) {
            proxy_1.AWProxy
                .persistentStorage()
                .migrateCache(excludedKeys)
                .then(resolve);
        });
    };
    AWCache.prototype.usePersistentStorage = function () {
        return this.options.usePersistentStorage;
    };
    return AWCache;
}(plugin_1.AWPlugin));
exports.AWCache = AWCache;
//# sourceMappingURL=cache.js.map