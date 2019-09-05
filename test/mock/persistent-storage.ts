import {PersistentStorage} from "../../src/plugins/storage/index";

export class PersistentStorageMock implements PersistentStorage {

  setExcludedKeys(_excludedKeys: string[]) {
  }

  persistLocalStorage(): Promise<any> {
    return Promise.resolve();
  }

  loadPersistentData(): Promise<any> {
    return Promise.resolve();
  }

  migrateCache(): Promise<any> {
    return Promise.resolve();
  }
}
