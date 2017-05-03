import { AWPlugin } from "../../common/plugin";
export declare class AWCache extends AWPlugin {
    private options;
    constructor(options?: any);
    setItem(key: string, value: any): Promise<any>;
    getItem(key: string): any;
    removeItem(key: string): Promise<any>;
    clear(): Promise<any>;
    private preloadCache();
    private usePersistentStorage();
}
