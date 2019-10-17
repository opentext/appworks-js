"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var local_storage_1 = require("../../../test/mock/local-storage");
/**
 * Web local storage wrapper that hooks into the native persistent layer on mobile and desktop
 * The local and persistent storage are kept in, sync with update being flushed, and the local web
 * storage always acting as the reference.
 */
var AWStorage = (function () {
    function AWStorage(isMobileEnv) {
        this.isMobileEnv = isMobileEnv;
        // resolve the local storage or fall back onto a mock impl
        if (this.isMobileEnv) {
            if (typeof window !== 'undefined') {
                if (typeof window['awcache'] === 'undefined') {
                    window['awcache'] = {};
                }
                this.storage = window['awcache'];
            }
            else {
                this.storage = new local_storage_1.MockLocalStorage();
            }
        }
        else {
            this.storage = (typeof window !== 'undefined') ?
                window.localStorage : new local_storage_1.MockLocalStorage();
        }
    }
    Object.defineProperty(AWStorage.prototype, "length", {
        get: function () {
            return this.storage ? this.storage.length : -1;
        },
        enumerable: true,
        configurable: true
    });
    AWStorage.prototype.clear = function () {
        if (this.isMobileEnv) {
            var keys = Object.keys(this.storage);
            for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                var key = keys_1[_i];
                this.removeItem(key);
            }
        }
        else {
            this.storage.clear();
        }
    };
    AWStorage.prototype.getItem = function (key) {
        if (this.isMobileEnv) {
            return this.storage[key];
        }
        else {
            return this.storage.getItem(key);
        }
    };
    AWStorage.prototype.key = function (index) {
        return this.storage.key(index);
    };
    AWStorage.prototype.removeItem = function (key) {
        if (this.isMobileEnv) {
            delete this.storage[key];
        }
        else {
            return this.storage.removeItem(key);
        }
    };
    AWStorage.prototype.setItem = function (key, data) {
        if (this.isMobileEnv) {
            return this.storage[key] = data;
        }
        else {
            return this.storage.setItem(key, data);
        }
    };
    return AWStorage;
}());
exports.AWStorage = AWStorage;
//# sourceMappingURL=storage.js.map