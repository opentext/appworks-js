/// <reference path="../../typings/globals/cordova/index.d.ts"/>
/// <reference path="../../typings/globals/cordova/plugins/filesystem/index.d.ts"/>

import {AWPlugin} from '../core/aw-plugin';

export class AWCache extends AWPlugin {

    private options: any;

    constructor(options?: any) {

        super(() => {
        }, () => {
        });

        this.options = options || {
                usePersistentStorage: false
            };

        if (this.options.usePersistentStorage) {
            this.loadPersistentDataIntoLocalStorage();
        }
    }

    setItem(key: string, value: any) {
        let result = window.localStorage.setItem(key, value);
        if (this.options.usePersistentStorage) {
            this.writeLocalStorageDataToPersistentStorage();
        }
        return result;
    }

    getItem(key: string) {
        let result = window.localStorage.getItem(key);
        return result;
    }

    removeItem(key: string) {
        let result = window.localStorage.removeItem(key);
        if (this.options.usePersistentStorage) {
            this.writeLocalStorageDataToPersistentStorage();
        }
        return result;
    }

    clear() {
        let result = window.localStorage.clear();
        if (this.options.usePersistentStorage) {
            this.writeLocalStorageDataToPersistentStorage();
        }
        return result;
    }

    private readDataFromPersistentStorage(callback: any, errorCallback?: any) {

        let fail = function (error) {
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

        function gotFS(fileSystem: any) {
            fileSystem.root.getFile('appworksjs.cache.json', {create: true, exclusive: false}, gotFileEntry, fail);
        }

        function gotFileEntry(entry: any) {
            entry.file(gotFile, fail);
        }

        function gotFile(file: any) {
            readAsText(file);
        }

        function readAsText(file: any) {
            let reader = new FileReader();
            reader.onloadend = function (evt) {
                console.log(evt);
                callback((<FileReader>evt.target).result);
            };
            reader.readAsText(file);
        }
    }

    private writeLocalStorageDataToPersistentStorage() {
        let i,
            data = {},
            key,
            value;
        for (i = 0; i < window.localStorage.length; i += 1) {
            key = window.localStorage.key(i);
            value = window.localStorage.getItem(key);
            data[key] = value;
        }
        this.writeDataToPersistentStorage(JSON.stringify(data));
    }

    private writeDataToPersistentStorage(data) {
        window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, gotFS, fail);

        function gotFS(fileSystem) {
            fileSystem.root.getFile('appworksjs.cache.json', {create: true, exclusive: false}, gotFileEntry, fail);
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

    }

    private loadPersistentDataIntoLocalStorage() {
        this.readDataFromPersistentStorage(function (json) {
            let data;
            if (json) {
                data = JSON.parse(json);
                for (let item in data) {
                    window.localStorage.setItem(item, data[item]);
                }
            }
        });
    }
}
