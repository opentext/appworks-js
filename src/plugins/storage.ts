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
        return new Promise((resolve, reject) => {
            try {
                this.storage.clear();
                resolve();
            } catch (e) {
                reject(e);
            }
        });
    }

    getItem(key: string): Promise<any> {
        return new Promise((resolve, reject) => {
            try {
                resolve(this.storage.getItem(key));
            } catch (e) {
                reject(e);
            }
        });
    }

    key(index: number): Promise<string> {
        return new Promise((resolve, reject) => {
            try {
                resolve(this.storage.key(index));
            } catch (e) {
                reject(e);
            }
        });
    }

    removeItem(key: string): Promise<any> {
        return new Promise((resolve, reject) => {
            try {
                this.storage.removeItem(key);
                resolve();
            } catch (e) {
                reject(e);
            }
        });
    }

    setItem(key: string, data: any): Promise<any> {
        return new Promise((resolve, reject) => {
            try {
                this.storage.setItem(key, data);
                resolve();
            } catch (e) {
                reject(e);
            }
        });
    }

}
