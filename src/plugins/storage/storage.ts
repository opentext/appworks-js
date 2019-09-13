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
  private isMobileEnv: boolean;

  constructor(isMobileEnv: boolean) {
    this.isMobileEnv = isMobileEnv;
    // resolve the local storage or fall back onto a mock impl
    if (this.isMobileEnv) {
      if (typeof window !== 'undefined') {
        if (typeof window['awcache'] === 'undefined') {
          window['awcache'] = {};
        }
        this.storage = window['awcache'];
      } else {
        this.storage = new MockLocalStorage();
      }
    } else {
      this.storage = (typeof window !== 'undefined') ?
          window.localStorage : new MockLocalStorage();
    }
  }

  get length(): number {
    return this.storage ? this.storage.length : -1;
  }

  clear(): void {
    if (this.isMobileEnv) {
      let keys = Object.keys(this.storage);
      for (let key of keys) {
        this.removeItem(key);
      }
    } else {
      this.storage.clear();
    }
  }

  getItem(key: string): any {
    if (this.isMobileEnv) {
      return this.storage[key];
    } else {
      return this.storage.getItem(key);
    }
  }

  key(index: number): string {
    return this.storage.key(index);
  }

  removeItem(key: string): void {
    if (this.isMobileEnv) {
      delete this.storage[key];
    } else {
      return this.storage.removeItem(key);
    }
  }

  setItem(key: string, data: any): void {
    if (this.isMobileEnv) {
      return this.storage[key] = data;
    } else {
      return this.storage.setItem(key, data);
    }
  }

}
