import { PersistentStorage } from "../../src/plugins/storage/index";
export declare class PersistentStorageMock implements PersistentStorage {
    setExcludedKeys(_excludedKeys: string[]): void;
    persistLocalStorage(): Promise<any>;
    loadPersistentData(): Promise<any>;
    migrateCache(): Promise<any>;
}
