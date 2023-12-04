import { AsyncStorage, PersistentStorage } from './index';
export declare class DesktopStorage implements PersistentStorage {
    private static readonly PLUGIN_NOT_FOUND;
    private desktopStorage;
    constructor(desktopPlugin: AsyncStorage);
    persistLocalStorage(excludedKeys: string[]): Promise<any>;
    loadPersistentData(): Promise<void>;
    migrateCache(excludedKeys: string[]): Promise<void>;
}
