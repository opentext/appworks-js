import { Storage } from './index';
/**
 * Web local storage wrapper that hooks into the native persistent layer on mobile and desktop
 * The local and persistent storage are kept in, sync with update being flushed, and the local web
 * storage always acting as the reference.
 */
export declare class AWStorage implements Storage {
    [key: string]: any;
    [index: number]: string;
    /**
     * Storage implementation.
     */
    private storage;
    constructor();
    readonly length: number;
    clear(): void;
    getItem(key: string): any;
    key(index: number): string;
    removeItem(key: string): void;
    setItem(key: string, data: any): void;
}
