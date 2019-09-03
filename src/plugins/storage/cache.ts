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

  setItem(key: string, value: any): Promise<any> {
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
    return AWProxy.storage().getItem(key);
  }

  removeItem(key: string): Promise<any> {
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

  clear(): Promise<any> {
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

  preloadCache(): Promise<any> {
    return new Promise((resolve, reject) => {
      if (this.usePersistentStorage()) {
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
      };
    });
  }

  private usePersistentStorage(): boolean {
    return this.options.usePersistentStorage;
  }

}
