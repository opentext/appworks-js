import {PersistentStorage} from "../../src/plugins/storage/index";

export class PersistentStorageMock implements PersistentStorage {

  setExcludedKeys(_excludedKeys: string[]) {
  }

  persistLocalStorage(): Promise<void> {
    return Promise.resolve<void>();
  }

  loadPersistentData(): Promise<void> {
    return Promise.resolve<void>();
  }

  migrateCache(): Promise<void> {
    return Promise.resolve<void>();
  }
}
