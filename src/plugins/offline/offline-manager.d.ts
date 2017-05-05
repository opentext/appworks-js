import { AWPlugin } from "../../common/plugin";
export declare class AWOfflineManager extends AWPlugin {
    status: string;
    online: boolean;
    offline: boolean;
    cache: any;
    queue: any[];
    cacheKey: string;
    options: any;
    constructor(options?: any);
    defer(eventName: string, args: any): number;
    cancel(id: number): void;
    networkStatus(): any;
    private saveQueue();
    private processDeferredQueue();
    private dispatchEvent(data?);
}
