"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var proxy_1 = require("../../common/proxy");
/**
 * The mobile environment implementation of persistent storage.
 */
var OnDeviceStorage = (function () {
    function OnDeviceStorage() {
    }
    OnDeviceStorage.prototype.persistLocalStorage = function (excludedKeys) {
        var _this = this;
        var i, data = {}, key, value;
        var storage = proxy_1.AWProxy.storage();
        for (i = 0; i < storage.length; i += 1) {
            key = storage.key(i);
            value = storage.getItem(key);
            if (excludedKeys.indexOf(key) === -1) {
                data[key] = value;
            }
        }
        return new Promise(function (resolve, reject) {
            _this.writeDataToPersistentStorage(JSON.stringify(data)).then(resolve, reject);
        });
    };
    OnDeviceStorage.prototype.loadPersistentData = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            proxy_1.AWProxy.storage().clear();
            _this.readDataFromPersistentStorage().then(function (json) {
                var data;
                if (json) {
                    data = JSON.parse(json);
                    for (var item in data) {
                        if (data.hasOwnProperty(item)) {
                            proxy_1.AWProxy.storage().setItem(item, data[item]);
                        }
                    }
                    resolve();
                }
            }, reject);
        });
    };
    OnDeviceStorage.prototype.readDataFromPersistentStorage = function () {
        return new Promise(function (resolve, reject) {
            proxy_1.AWProxy.exec(resolve, reject, 'AWCache', 'getAllCacheData', []);
        });
    };
    OnDeviceStorage.prototype.writeDataToPersistentStorage = function (data) {
        return new Promise(function (resolve, reject) {
            proxy_1.AWProxy.exec(resolve, reject, 'AWCache', 'setAllCacheData', [data]);
        });
    };
    return OnDeviceStorage;
}());
exports.OnDeviceStorage = OnDeviceStorage;
//# sourceMappingURL=on-device-storage.js.map