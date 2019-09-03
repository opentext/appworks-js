import {AWProxy} from '../../common/proxy';
import {PersistentStorage} from './index';

/**
 * The mobile environment implementation of persistent storage.
 */
export class OnDeviceStorage implements PersistentStorage {

  persistLocalStorage(excludedKeys: string[]): Promise<any> {
    let i,
      data = {},
      key,
      value;

    const storage = AWProxy.storage()['storage'];
    for (i = 0; i < Object.keys(storage).length; i += 1) {
      key = Object.keys(storage)[i];
      value = storage[key];
      if (excludedKeys.indexOf(key) === -1) {
        data[key] = value;
      }
    }
    return new Promise((resolve, reject) => {
      this.writeDataToPersistentStorage(JSON.stringify(data)).then(resolve, reject);
    });
  }

  loadPersistentData(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.readDataFromPersistentStorage().then(
        (json) => {
          let data;
          if (json) {
            data = JSON.parse(json);
            for (let item in data) {
              if (data.hasOwnProperty(item)) {
                AWProxy.storage().setItem(item, data[item]);
              }
            }
            resolve();
          }
        }, reject);
    });
  }

  readDataFromPersistentStorage(): Promise<any> {
    return new Promise((resolve, reject) => {
      AWProxy.exec(
        resolve,
        reject,
        'AWCache',
        'getAllCacheData',
        []
      );
    });
  }

  private writeDataToPersistentStorage(data): Promise<any> {
    return new Promise((resolve, reject) => {
      AWProxy.exec(
          resolve,
          reject,
          'AWCache',
          'setAllCacheData',
          [data]
      );
    });
  }

}
