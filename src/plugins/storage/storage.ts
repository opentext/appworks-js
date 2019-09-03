import {MockLocalStorage} from '../../../test/mock/local-storage';
import {Storage} from './index';

/**
 * Web local storage wrapper that hooks into the native persistent layer on mobile and desktop
 * The local and persistent storage are kept in, sync with update being flushed, and the local web
 * storage always acting as the reference.
 */
export class AWStorage implements Storage {

  [key: string]: any;

  [index: number]: string;

  /**
   * Storage implementation.
   */
  private storage: Storage;

  constructor() {
    // resolve the local storage or fall back onto a mock impl
    if (typeof window !== 'undefined') {
      if (typeof window['awcache'] === 'undefined') {
        window['awcache'] = {};
      }
      this.storage = window['awcache'];
    } else {
      this.storage = new MockLocalStorage();
    }
  }

  get length(): number {
    return this.storage ? this.storage.length : -1;
  }

  clear(): void {
    this.storage = null;
  }

  getItem(key: string): any {
    return this.storage[key];
  }

  key(index: number): string {
    return this.storage.key(index);
  }

  removeItem(key: string): void {
    delete this.storage[key];
    return;
  }

  setItem(key: string, data: any): void {
    return this.storage[key] = data;
  }

}
