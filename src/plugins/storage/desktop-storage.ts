import {AWProxy} from "../../proxy";
import {AsyncStorage, PersistentStorage} from './index';

export class DesktopStorage implements PersistentStorage {

    private desktopStorage: AsyncStorage;

    private static readonly PLUGIN_NOT_FOUND: Error = new Error('Unable to resolve AWStorage desktop plugin');

    constructor(desktopPlugin: AsyncStorage) {
        this.desktopStorage = desktopPlugin;
    }

    persistLocalStorage(): Promise<any> {
        if (this.desktopStorage === null) {
            return Promise.reject(DesktopStorage.PLUGIN_NOT_FOUND);
        }

        return new Promise((resolve, reject) => {
            let i,
                data = [],
                key,
                value;

            const storage = AWProxy.storage();
            for (i = 0; i < storage.length; i += 1) {
                key = storage.key(i);
                value = storage.getItem(key);
                data.push({key: key, value: value});
            }

            const setter = obj => this.desktopStorage.setItem(obj.key, obj.value);
            Promise.all(data.map(setter)).then(resolve, reject);
        });
    }

    loadPersistentData(): Promise<any> {
        if (this.desktopStorage === null) {
            return Promise.reject(DesktopStorage.PLUGIN_NOT_FOUND);
        }
        return new Promise((resolve, reject) => {
            try {
                // get data is actually synchronous
                const data = this.desktopStorage.getData();
                const storage = AWProxy.storage();
                for (let key in data) {
                    if (data.hasOwnProperty(key)) {
                        storage.setItem(key, data[key]);
                    }
                }
                resolve();
            } catch (e) {
                reject(e);
            }
        });
    }

}