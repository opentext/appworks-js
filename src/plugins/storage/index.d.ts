export * from './desktop-storage';
export * from './on-device-storage';
export * from './cache';
export * from './storage';
export * from './secure-storage';
/**
 * Desktop persistent storage.
 */
export interface PersistentStorage {
    persistLocalStorage(excludedKeys: string[]): Promise<any>;
    loadPersistentData(): Promise<any>;
}
/**
 * Async version of the {@link Storage} interface supplied by the Web Storage API.
 * The desktop environment supplies an async storage solution as it is Electron based (nodejs).
 */
export interface AsyncStorage {
    length: number;
    clear(): Promise<any>;
    getItem(key: string): Promise<any>;
    key(index: number): Promise<string>;
    removeItem(key: string): Promise<any>;
    setItem(key: string, data: string): Promise<any>;
    getData(): any;
}
export interface Storage {
    readonly length: number;
    clear(): void;
    getItem(key: string): string | null;
    key(index: number): string | null;
    removeItem(key: string): void;
    setItem(key: string, data: string): void;
    [key: string]: any;
    [index: number]: string;
}
