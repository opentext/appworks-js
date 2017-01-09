export class MockLocalStorage implements Storage {
    length: number;
    [key: string]: any;
    [index: number]: string;

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