import {AWPlugin} from "../../common/plugin";
import {AWProxy} from "../../common/proxy";
import {noop} from "../../common/util";

export class AWCache extends AWPlugin {

    private options: any;

    constructor(options?: any) {
        super(noop, noop);
        this.options = options || {usePersistentStorage: false};
        this.preloadCache();
    }

    setItem(key: string, value: any): Promise<any> {
        return new Promise((resolve, reject) => {
            AWProxy.storage().setItem(key, value);
            if (this.usePersistentStorage()) {
                AWProxy.persistentStorage().persistLocalStorage()
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
                AWProxy.persistentStorage().persistLocalStorage()
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
                AWProxy.persistentStorage().persistLocalStorage()
                    .then(resolve, reject);
            } else {
                resolve();
            }
        });
    }

    private preloadCache() {
        if (this.usePersistentStorage())
            AWProxy.persistentStorage().loadPersistentData()
                .then(
                    () =>
                        console.log('AWCache: Successfully loaded persistent data into local storage'),
                    err =>
                        console.error(`AWCache: Failed to load persistent data into local storage - ${err.toString()}`)
                );
    }

    private usePersistentStorage(): boolean {
        return this.options.usePersistentStorage;
    }

}
