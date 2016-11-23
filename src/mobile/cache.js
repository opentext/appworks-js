/// <reference path="../../typings/globals/cordova/index.d.ts"/>
/// <reference path="../../typings/globals/cordova/plugins/filesystem/index.d.ts"/>
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
        var result = window.localStorage.setItem(key, value);
        if (this.options.usePersistentStorage) {
            this.writeLocalStorageDataToPersistentStorage();
        }
        return result;
    };
    AWCache.prototype.getItem = function (key) {
        var result = window.localStorage.getItem(key);
        return result;
    };
    AWCache.prototype.removeItem = function (key) {
        var result = window.localStorage.removeItem(key);
        if (this.options.usePersistentStorage) {
            this.writeLocalStorageDataToPersistentStorage();
        }
        return result;
    };
    AWCache.prototype.clear = function () {
        var result = window.localStorage.clear();
        if (this.options.usePersistentStorage) {
            this.writeLocalStorageDataToPersistentStorage();
        }
        return result;
    };
    AWCache.prototype.readDataFromPersistentStorage = function (callback, errorCallback) {
        var fail = function (error) {
            console.error(error.code);
        };
        if (typeof errorCallback === 'function') {
            fail = errorCallback;
        }
        if (typeof callback !== 'function') {
            callback = function () {
            };
        }
        window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, gotFS, fail);
        function gotFS(fileSystem) {
            fileSystem.root.getFile('appworksjs.cache.json', { create: true, exclusive: false }, gotFileEntry, fail);
        }
        function gotFileEntry(entry) {
            entry.file(gotFile, fail);
        }
        function gotFile(file) {
            readAsText(file);
        }
        function readAsText(file) {
            var reader = new FileReader();
            reader.onloadend = function (evt) {
                console.log(evt);
                callback(evt.target.result);
            };
            reader.readAsText(file);
        }
    };
    AWCache.prototype.writeLocalStorageDataToPersistentStorage = function () {
        var i, data = {}, key, value;
        for (i = 0; i < window.localStorage.length; i += 1) {
            key = window.localStorage.key(i);
            value = window.localStorage.getItem(key);
            data[key] = value;
        }
        this.writeDataToPersistentStorage(JSON.stringify(data));
    };
    AWCache.prototype.writeDataToPersistentStorage = function (data) {
        window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, gotFS, fail);
        function gotFS(fileSystem) {
            fileSystem.root.getFile('appworksjs.cache.json', { create: true, exclusive: false }, gotFileEntry, fail);
        }
        function gotFileEntry(fileEntry) {
            fileEntry.createWriter(gotFileWriter, fail);
        }
        function gotFileWriter(writer) {
            writer.onwriteend = function () {
                console.info('cache data backed up successfully');
            };
            writer.write(data);
        }
        function fail(error) {
            console.log(error.code);
        }
    };
    AWCache.prototype.loadPersistentDataIntoLocalStorage = function () {
        this.readDataFromPersistentStorage(function (json) {
            var data;
            if (json) {
                data = JSON.parse(json);
                for (var item in data) {
                    window.localStorage.setItem(item, data[item]);
                }
            }
        });
    };
    return AWCache;
}(aw_plugin_1.AWPlugin));
exports.AWCache = AWCache;
