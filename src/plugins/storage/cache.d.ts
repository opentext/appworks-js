import { AWPlugin } from '../../common/plugin';
export declare class AWCache extends AWPlugin {
    private options;
    private excludedKeys;
    constructor(options?: any);
    setExcludedKeys(_excludedKeys: string[]): void;
    setItem(key: string, value: any): Promise<any>;
    getItem(key: string): any;
    removeItem(key: string): Promise<any>;
    clear(): Promise<any>;
    private preloadCache();
    private usePersistentStorage();
}
