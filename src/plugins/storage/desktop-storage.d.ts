import { AsyncStorage, PersistentStorage } from './index';
export declare class DesktopStorage implements PersistentStorage {
    private static readonly PLUGIN_NOT_FOUND;
    private desktopStorage;
    excludedKeys: string[];
    constructor(desktopPlugin: AsyncStorage);
    setExcludedKeys(_excludedKeys: string[]): void;
    persistLocalStorage(): Promise<any>;
    loadPersistentData(): Promise<any>;
}
