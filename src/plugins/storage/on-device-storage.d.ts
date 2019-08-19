import { PersistentStorage } from './index';
/**
 * The mobile environment implementation of persistent storage.
 */
export declare class OnDeviceStorage implements PersistentStorage {
    persistLocalStorage(excludedKeys: string[]): Promise<any>;
    loadPersistentData(): Promise<any>;
    readDataFromPersistentStorage(): Promise<any>;
    private writeDataToPersistentStorage(data);
}
