import {AWPlugin} from '../core/aw-plugin';
declare var LocalFileSystem;

export class AWCache extends AWPlugin {

    private options: any;

    constructor(options?: any) {

        super(() => {
        }, () => {
        });

        this.options = options || {
                usePersistentStorage: false
            };

        if (this.options.usePersistentStorage) {
            this.loadPersistentDataIntoLocalStorage();
        }
    }

    setItem(key: string, value: any) {
        // TODO
    }

    getItem(key: string) {
        // TODO
    }

    removeItem(key: string) {
        // TODO
    }

    clear() {
        // TODO
    }

    private readDataFromPersistentStorage(callback: any, errorCallback?: any) {
        // TODO
    }

    private writeLocalStorageDataToPersistentStorage() {
        // TODO
    }

    private writeDataToPersistentStorage(data) {
        // TODO
    }

    private loadPersistentDataIntoLocalStorage() {
        // TODO
    }
}
