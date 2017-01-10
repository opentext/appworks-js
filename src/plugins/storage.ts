import {MockLocalStorage} from "../../test/mock/local-storage";
import {Promise} from "es6-promise";

/**
 * Async version of the {@link Storage} interface supplied by the Web Storage API.
 */
export interface AsyncStorage {
    length: number;
    clear(): Promise<any>;
    getItem(key: string): Promise<any>;
    key(index: number): Promise<string>;
    removeItem(key: string): Promise<any>;
    setItem(key: string, data: string): Promise<any>;
}

/**
 * Intermediary type to adapt the synchronous {@link Storage} API into a an asynchronous
 * one for use by {@link AWCache}. If window.localStorage is defined then this is what we
 * will wrap.
 */
export class AWStorage implements AsyncStorage {

    /**
     * Storage implementation.
     */
    private storage: Storage;

    constructor() {
        // resolve the local storage or fall back onto a mock impl
        this.storage = (typeof window !== 'undefined') ?
            window.localStorage : new MockLocalStorage();
    }

    get length(): number {
        return this.storage ? this.storage.length : -1;
    }

    clear(): Promise<any> {
        return this.doAsync(this.storage, this.storage.clear);
    }

    getItem(key: string): Promise<any> {
        return this.doAsync(this.storage, this.storage.getItem, [key]);
    }

    key(index: number): Promise<string> {
        return this.doAsync(this.storage, this.storage.key, [index]);
    }

    removeItem(key: string): Promise<any> {
        return this.doAsync(this.storage, this.storage.removeItem, [key]);
    }

    setItem(key: string, data: any): Promise<any> {
        return this.doAsync(this.storage, this.storage.setItem, [key, data]);
    }

    doAsync(thisArg: any, operation: Function, args?: any[]): Promise<any> {
        return new Promise((resolve, reject) => {
            try {
                resolve(operation.apply(thisArg, args));
            } catch (e) {
                reject(e);
            }
        });
    }

}
