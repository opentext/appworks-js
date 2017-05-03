import { AsyncStorage, PersistentStorage } from './index';
export declare class DesktopStorage implements PersistentStorage {
    private desktopStorage;
    private static readonly PLUGIN_NOT_FOUND;
    constructor(desktopPlugin: AsyncStorage);
    persistLocalStorage(): Promise<any>;
    loadPersistentData(): Promise<any>;
}
