import { PersistentStorage } from "../../src/plugins/storage/index";
export declare class PersistentStorageMock implements PersistentStorage {
    persistLocalStorage(): Promise<any>;
    loadPersistentData(): Promise<any>;
}
