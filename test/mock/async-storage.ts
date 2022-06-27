import {AsyncStorage} from "../../src/plugins/storage/index";

export class MockAsyncStorage implements AsyncStorage {
  length: number;

  clear(): Promise<void> {
    return Promise.resolve();
  }

  getItem(key: string): Promise<void> {
    return Promise.resolve();
  }

  key(index: number): Promise<string> {
    return Promise.resolve("");
  }

  removeItem(key: string): Promise<void> {
    return Promise.resolve();
  }

  setItem(key: string, data: string): Promise<void> {
    return Promise.resolve();
  }

  getData(): any {
    return undefined;
  }

}
