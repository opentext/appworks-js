import { PersistentStorage } from './index';
/**
 * The mobile environment implementation of persistent storage.
 */
export declare class OnDeviceStorage implements PersistentStorage {
    persistLocalStorage(excludedKeys: string[]): Promise<any>;
    loadPersistentData(): Promise<any>;
    migrateCache(excludedKeys: string[]): Promise<any>;
    private readDataAWCacheFile();
    private deleteAWCacheFile();
    private readDataFromPersistentStorage();
    private writeDataToPersistentStorage(data);
}
