import { Storage } from "../../src/plugins/storage/index";
export declare class MockLocalStorage implements Storage {
    length: number;
    [key: string]: any;
    [index: number]: string;
    constructor(len?: number);
    getItem(key: string): any;
    setItem(key: string, value: string): void;
    removeItem(key: string): void;
    clear(): void;
    key(index: number): string;
}
