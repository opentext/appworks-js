import {AWPlugin} from '../../common/plugin';
import {AWProxy} from '../../common/proxy';
import {noop} from '../../common/util';

export class AWCache extends AWPlugin {

  private options: any;
  private excludedKeys: string[] = [];

  constructor(options?: any) {
    super(noop, noop);
    this.options = options || {usePersistentStorage: false};
    console.log("AWCache instantiate, don't forget to call preloadCache().then(function(){}, function(err){})");
  }

  setExcludedKeys(_excludedKeys: string[]) {
    this.excludedKeys = _excludedKeys;
  }

  setItem(key: string, value: any): Promise<void> {
    return new Promise((resolve, reject) => {
      AWProxy.storage().setItem(key, value);
      if (this.usePersistentStorage()) {
        AWProxy.persistentStorage().persistLocalStorage(this.excludedKeys)
          .then(resolve, reject);
      } else {
        resolve();
      }
    });
  }

  getItem(key: string): any {
    let item = AWProxy.storage().getItem(key);
    return (typeof item === 'undefined' ? '' : item);
  }

  removeItem(key: string): Promise<void> {
    return new Promise((resolve, reject) => {
      AWProxy.storage().removeItem(key);
      if (this.usePersistentStorage()) {
        AWProxy.persistentStorage().persistLocalStorage(this.excludedKeys)
          .then(resolve, reject);
      } else {
        resolve();
      }
    });
  }

  clear(): Promise<void> {
    return new Promise((resolve, reject) => {
      AWProxy.storage().clear();
      if (this.usePersistentStorage()) {
        AWProxy.persistentStorage().persistLocalStorage(this.excludedKeys)
          .then(resolve, reject);
      } else {
        resolve();
      }
    });
  }

  preloadCache(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (this.usePersistentStorage()) {
        this.migrateCache(this.excludedKeys).then(() => {
          AWProxy.persistentStorage().loadPersistentData()
            .then(
                () => {
                  console.log('AWCache: Successfully loaded persistent data into local storage');
                  resolve();
                },
                err => {
                  let error = `AWCache: Failed to load persistent data into local storage - ${err.toString()}`
                  console.error(error);
                  reject(error);
                }
            );
          }, reject);
      } else {
        resolve();
      }
    });
  }

  migrateCache(excludedKeys: string[]): Promise<any> {
    return new Promise((resolve, reject) => {
      AWProxy
          .persistentStorage()
          .migrateCache(excludedKeys)
          .then(resolve);
    });
  }

  private usePersistentStorage(): boolean {
    return this.options.usePersistentStorage;
  }

}
