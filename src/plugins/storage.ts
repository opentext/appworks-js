import {MockLocalStorage} from "../../test/mock/local-storage";

/**
 * Web local storage wrapper that hooks into the native persistent layer on mobile and desktop
 * The local and persistent storage are kept in, sync with update being flushed, and the local web
 * storage always acting as the reference.
 */
export class AWStorage implements Storage {

    [key: string]: any;
    [index: number]: string;

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

    clear(): void {
        this.storage.clear();
    }

    getItem(key: string): any {
        return this.storage.getItem(key);
    }

    key(index: number): string {
        return this.storage.key(index);
    }

    removeItem(key: string): void {
        return this.storage.removeItem(key);
    }

    setItem(key: string, data: any): void {
        return this.storage.setItem(key, data);
    }

}
