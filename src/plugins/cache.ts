import {AWPlugin} from "../plugin";
import {AWProxy} from "../proxy";
import {Util} from "../util";
import {Promise} from "es6-promise";

export class AWCache extends AWPlugin {

    private options: any;

    constructor(options?: any) {
        super(Util.noop, Util.noop);
        this.options = options || {usePersistentStorage: false};
        if (this.usePersistentStorage())
            this.loadPersistentDataIntoLocalStorage();
    }

    setItem(key: string, value: any): Promise<any> {
        return new Promise((resolve, reject) => {
            AWProxy.storage().setItem(key, value).then(() => {
                if (this.usePersistentStorage())
                    this.writeLocalStorageDataToPersistentStorage();
                resolve();
            }, reject);
        });
    }

    getItem(key: string): Promise<any> {
        return AWProxy.storage().getItem(key);
    }

    removeItem(key: string): Promise<any> {
        return new Promise((resolve, reject) => {
            AWProxy.storage().removeItem(key).then(() => {
                if (this.usePersistentStorage())
                    this.writeLocalStorageDataToPersistentStorage();
                resolve();
            }, reject);
        });
    }

    clear(): Promise<any> {
        return new Promise((resolve, reject) => {
            AWProxy.storage().clear().then(() => {
                if (this.usePersistentStorage())
                    this.writeLocalStorageDataToPersistentStorage();
                resolve();
            }, reject);
        });
    }

    private readDataFromPersistentStorage(callback: any, errorCallback?: any) {
        let fail = function (error) {
            console.error(error.code);
        };

        if (typeof errorCallback === 'function') {
            fail = errorCallback;
        }

        if (typeof callback !== 'function') {
            callback = Util.noop;
        }

        AWProxy.requestFileSystem(AWProxy.localFileSystem().PERSISTENT, 0, gotFS, fail);

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
        for (i = 0; i < AWProxy.storage().length; i += 1) {
            key = AWProxy.storage().key(i);
            value = AWProxy.storage().getItem(key);
            data[key] = value;
        }
        this.writeDataToPersistentStorage(JSON.stringify(data));
    }

    private writeDataToPersistentStorage(data) {
        AWProxy.requestFileSystem(AWProxy.localFileSystem().PERSISTENT, 0, gotFS, fail);

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

    private usePersistentStorage(): boolean {
        return !AWProxy.isDesktopEnv() && this.options.usePersistentStorage;
    }

}
