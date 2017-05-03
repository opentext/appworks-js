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
var AWCache = (function (_super) {
    __extends(AWCache, _super);
    function AWCache(options) {
        var _this = _super.call(this, Util.noop, Util.noop) || this;
        _this.options = options || { usePersistentStorage: false };
        _this.preloadCache();
        return _this;
    }
    AWCache.prototype.setItem = function (key, value) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            AWProxy.storage().setItem(key, value);
            if (_this.usePersistentStorage()) {
                AWProxy.persistentStorage().persistLocalStorage()
                    .then(resolve, reject);
            }
            else {
                resolve();
            }
        });
    };
    AWCache.prototype.getItem = function (key) {
        return AWProxy.storage().getItem(key);
    };
    AWCache.prototype.removeItem = function (key) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            AWProxy.storage().removeItem(key);
            if (_this.usePersistentStorage()) {
                AWProxy.persistentStorage().persistLocalStorage()
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
            AWProxy.storage().clear();
            if (_this.usePersistentStorage()) {
                AWProxy.persistentStorage().persistLocalStorage()
                    .then(resolve, reject);
            }
            else {
                resolve();
            }
        });
    };
    AWCache.prototype.preloadCache = function () {
        if (this.usePersistentStorage())
            AWProxy.persistentStorage().loadPersistentData()
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
}(AWPlugin));
export { AWCache };
//# sourceMappingURL=cache.js.map