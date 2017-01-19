import {AsyncStorage} from "../../src/plugins/desktop-storage";
export class MockAsyncStorage implements AsyncStorage {

    length: number;

    clear(): Promise<any> {
        return Promise.resolve();
    }

    getItem(key: string): Promise<any> {
        return Promise.resolve();
    }

    key(index: number): Promise<string> {
        return Promise.resolve();
    }

    removeItem(key: string): Promise<any> {
        return Promise.resolve();
    }

    setItem(key: string, data: string): Promise<any> {
        return Promise.resolve();
    }

    getData(): any {
        return undefined;
    }

}