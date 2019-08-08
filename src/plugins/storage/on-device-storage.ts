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

    const storage = AWProxy.storage();
    for (i = 0; i < storage.length; i += 1) {
      key = storage.key(i);
      value = storage.getItem(key);
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
      AWProxy.requestFileSystem(AWProxy.localFileSystem().PERSISTENT, 0, gotFS, reject);

      function gotFS(fileSystem: any) {
        fileSystem.root.getFile('appworksjs.cache.json', {
          create: true,
          exclusive: false
        }, gotFileEntry, reject);
      }

      function gotFileEntry(entry: any) {
        entry.file(gotFile, reject);
      }

      function gotFile(file: any) {
        readAsText(file);
      }

      function readAsText(file: any) {
        let reader = new FileReader();
        reader.onloadend = function (evt) {
          console.log(evt);
          resolve((<FileReader>evt.target).result);
        };
        reader.readAsText(file);
      }
    });
  }

  private writeDataToPersistentStorage(data): Promise<any> {
    return new Promise((resolve, reject) => {
      AWProxy.requestFileSystem(AWProxy.localFileSystem().PERSISTENT, 0, gotFS, reject);

      function gotFS(fileSystem) {
        fileSystem.root.getFile(
          'appworksjs.cache.json',
          {create: true, exclusive: false},
          gotFileEntry,
          reject);
      }

      function gotFileEntry(fileEntry) {
        fileEntry.createWriter(gotFileWriter, reject);
      }

      function gotFileWriter(writer) {
        writer.onwriteend = function () {
          console.info('cache data backed up successfully');
        };
        writer.write(data);
        resolve();
      }

    });
  }

}
