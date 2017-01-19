import {PersistentStorage} from "../../src/plugins/cache";

export class PersistentStorageMock implements PersistentStorage {

    persistLocalStorage(): Promise<any> {
        return Promise.resolve();
    }

    loadPersistentData(): Promise<any> {
        return Promise.resolve();
    }

}