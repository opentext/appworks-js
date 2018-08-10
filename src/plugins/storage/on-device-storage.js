"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var proxy_1 = require("../../common/proxy");
/**
 * The mobile environment implementation of persistent storage.
 */
var OnDeviceStorage = (function () {
    function OnDeviceStorage() {
    }
    OnDeviceStorage.prototype.persistLocalStorage = function () {
        var _this = this;
        var i, data = {}, key, value;
        var storage = proxy_1.AWProxy.storage();
        for (i = 0; i < storage.length; i += 1) {
            key = storage.key(i);
            value = storage.getItem(key);
            data[key] = value;
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
    OnDeviceStorage.prototype.readDataFromPersistentStorage = function () {
        return new Promise(function (resolve, reject) {
            proxy_1.AWProxy.requestFileSystem(proxy_1.AWProxy.localFileSystem().PERSISTENT, 0, gotFS, reject);
            function gotFS(fileSystem) {
                fileSystem.root.getFile("appworksjs.cache.json", {
                    create: true,
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
    OnDeviceStorage.prototype.writeDataToPersistentStorage = function (data) {
        return new Promise(function (resolve, reject) {
            proxy_1.AWProxy.requestFileSystem(proxy_1.AWProxy.localFileSystem().PERSISTENT, 0, gotFS, reject);
            function gotFS(fileSystem) {
                fileSystem.root.getFile("appworksjs.cache.json", { create: true, exclusive: false }, gotFileEntry, reject);
            }
            function gotFileEntry(fileEntry) {
                fileEntry.createWriter(gotFileWriter, reject);
            }
            function gotFileWriter(writer) {
                writer.onwriteend = function () {
                    console.info("cache data backed up successfully");
                };
                writer.write(data);
                resolve();
            }
        });
    };
    return OnDeviceStorage;
}());
exports.OnDeviceStorage = OnDeviceStorage;
//# sourceMappingURL=on-device-storage.js.map