export class MockLocalStorage implements WindowLocalStorage {
    localStorage: this;
    length: number;
    [key: string]: any;
    [index: number]: string;

    getItem(key: string): any {
        return null;
    }

    setItem(key: string, value: string): void {
        return null;
    }

    removeItem(key: string): void {
        return null;
    }

    clear(): void {
        return null;
    }

    key(index: number): string {
        return null;
    }
}