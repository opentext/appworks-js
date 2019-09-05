"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var local_storage_1 = require("../../../test/mock/local-storage");
/**
 * Web local storage wrapper that hooks into the native persistent layer on mobile and desktop
 * The local and persistent storage are kept in, sync with update being flushed, and the local web
 * storage always acting as the reference.
 */
var AWStorage = (function () {
    function AWStorage() {
        // resolve the local storage or fall back onto a mock impl
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
    Object.defineProperty(AWStorage.prototype, "length", {
        get: function () {
            return this.storage ? this.storage.length : -1;
        },
        enumerable: true,
        configurable: true
    });
    AWStorage.prototype.clear = function () {
        var keys = Object.keys(this.storage);
        for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
            var key = keys_1[_i];
            this.removeItem(key);
        }
        return;
    };
    AWStorage.prototype.getItem = function (key) {
        return this.storage[key];
    };
    AWStorage.prototype.key = function (index) {
        return this.storage.key(index);
    };
    AWStorage.prototype.removeItem = function (key) {
        delete this.storage[key];
        return;
    };
    AWStorage.prototype.setItem = function (key, data) {
        return this.storage[key] = data;
    };
    return AWStorage;
}());
exports.AWStorage = AWStorage;
//# sourceMappingURL=storage.js.map