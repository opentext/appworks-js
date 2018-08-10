import {Storage} from "../../src/plugins/storage/index";

export class MockLocalStorage implements Storage {
  length: number;

  [key: string]: any;

  [index: number]: string;

  // allow tests to set a value if they need to
  constructor(len?: number) {
    this.length = isNaN(len) ? 0 : len;
  }

  getItem(key: string): any {
    return null;
  }

  setItem(key: string, value: string): void {
  }

  removeItem(key: string): void {
  }

  clear(): void {
  }

  key(index: number): string {
    return null;
  }

}
