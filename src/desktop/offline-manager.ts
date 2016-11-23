import {AWPlugin} from '../core/aw-plugin';
import {AWCache} from './cache';

export class AWOfflineManager extends AWPlugin {

    status: string;
    online: boolean;
    offline: boolean;
    cache: any;
    queue: any[];
    cacheKey: string;
    options: any;

    constructor(options?: any) {
        super(() => {
        }, () => {
        });

        // TODO
    }

    defer(eventName: string, args: any) {
        // TODO
    }

    cancel(id: number) {
        // TODO
    }

    networkStatus(): any {
        // TODO
    }

    private saveQueue() {
        // TODO
    }

    private processDeferredQueue() {
        // TODO
    }

    private dispatchEvent(data?: any) {
        // TODO
    }
}