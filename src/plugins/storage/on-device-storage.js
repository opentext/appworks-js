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
        var storage = proxy_1.AWProxy.storage()['storage'];
        for (i = 0; i < Object.keys(storage).length; i += 1) {
            key = Object.keys(storage)[i];
            value = storage[key];
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
    OnDeviceStorage.prototype.migrateCache = function (excludedKeys) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.readDataAWCacheFile().then(function (json) {
                var data;
                if (json && json !== '') {
                    data = JSON.parse(json);
                    for (var item in data) {
                        if (data.hasOwnProperty(item)) {
                            proxy_1.AWProxy.storage().setItem(item, data[item]);
                        }
                    }
                    proxy_1.AWProxy.persistentStorage().persistLocalStorage(excludedKeys)
                        .then(function () { return _this.deleteAWCacheFile().then(resolve, reject); }, reject);
                }
                resolve();
            }, function (error) {
                resolve();
            });
        });
    };
    OnDeviceStorage.prototype.readDataAWCacheFile = function () {
        return new Promise(function (resolve, reject) {
            proxy_1.AWProxy.requestFileSystem(proxy_1.AWProxy.localFileSystem().PERSISTENT, 0, gotFS, reject);
            function gotFS(fileSystem) {
                fileSystem.root.getFile('appworksjs.cache.json', {
                    create: false,
                    exclusive: false
                }, gotFileEntry, reject);
            }
            function gotFileEntry(entry) {
                entry.file(gotFile, reject);
            }
            function gotFile(file) {
                readAsText(file);
            }
            function readAsText(file) {
                var reader = new FileReader();
                reader.onloadend = function (evt) {
                    console.log(evt);
                    resolve(evt.target.result);
                };
                reader.readAsText(file);
            }
        });
    };
    OnDeviceStorage.prototype.deleteAWCacheFile = function () {
        return new Promise(function (resolve, reject) {
            proxy_1.AWProxy.requestFileSystem(proxy_1.AWProxy.localFileSystem().PERSISTENT, 0, gotFS, reject);
            function gotFS(fileSystem) {
                fileSystem.root.getFile('appworksjs.cache.json', { create: false, exclusive: false }, gotFileEntry, reject);
            }
            function gotFileEntry(fileEntry) {
                fileEntry.remove(resolve, reject);
            }
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