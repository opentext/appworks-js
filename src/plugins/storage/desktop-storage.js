"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var proxy_1 = require("../../common/proxy");
var DesktopStorage = (function () {
    function DesktopStorage(desktopPlugin) {
        this.desktopStorage = desktopPlugin;
    }
    DesktopStorage.prototype.persistLocalStorage = function (excludedKeys) {
        var _this = this;
        if (this.desktopStorage === null) {
            return Promise.reject(DesktopStorage.PLUGIN_NOT_FOUND);
        }
        return new Promise(function (resolve, reject) {
            var i, data = [], key, value;
            var storage = proxy_1.AWProxy.storage();
            for (i = 0; i < storage.length; i += 1) {
                key = storage.key(i);
                value = storage.getItem(key);
                if (excludedKeys.indexOf(key) === -1) {
                    data.push({ key: key, value: value });
                }
            }
            var setter = function (obj) { return _this.desktopStorage.setItem(obj.key, obj.value); };
            Promise.all(data.map(setter)).then(resolve, reject);
        });
    };
    DesktopStorage.prototype.loadPersistentData = function () {
        var _this = this;
        if (this.desktopStorage === null) {
            return Promise.reject(DesktopStorage.PLUGIN_NOT_FOUND);
        }
        return new Promise(function (resolve, reject) {
            try {
                // get data is actually synchronous
                var data = _this.desktopStorage.getData();
                var storage = proxy_1.AWProxy.storage();
                for (var key in data) {
                    if (data.hasOwnProperty(key)) {
                        storage.setItem(key, data[key]);
                    }
                }
                resolve();
            }
            catch (e) {
                reject(e);
            }
        });
    };
    DesktopStorage.prototype.migrateCache = function (excludedKeys) {
        if (this.desktopStorage === null) {
            return Promise.reject(DesktopStorage.PLUGIN_NOT_FOUND);
        }
        return Promise.resolve();
    };
    return DesktopStorage;
}());
DesktopStorage.PLUGIN_NOT_FOUND = new Error('Unable to resolve AWStorage desktop plugin');
exports.DesktopStorage = DesktopStorage;
//# sourceMappingURL=desktop-storage.js.map