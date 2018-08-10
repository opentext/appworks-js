import { AsyncStorage, PersistentStorage } from "./index";
export declare class DesktopStorage implements PersistentStorage {
    private static readonly PLUGIN_NOT_FOUND;
    private desktopStorage;
    constructor(desktopPlugin: AsyncStorage);
    persistLocalStorage(): Promise<any>;
    loadPersistentData(): Promise<any>;
}
