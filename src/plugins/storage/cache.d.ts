import { AWPlugin } from '../../common/plugin';
export declare class AWCache extends AWPlugin {
    private options;
    private excludedKeys;
    constructor(options?: any);
    setExcludedKeys(_excludedKeys: string[]): void;
    setItem(key: string, value: any): Promise<void>;
    getItem(key: string): any;
    removeItem(key: string): Promise<void>;
    clear(): Promise<void>;
    preloadCache(): Promise<void>;
    migrateCache(excludedKeys: string[]): Promise<any>;
    private usePersistentStorage();
}
