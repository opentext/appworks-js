import {AWCache} from './cache';
import {AWPlugin} from '../plugin';
import {AWProxy} from '../proxy';
import {Util} from '../util';

export class AWOfflineManager extends AWPlugin {

    status: string;
    online: boolean;
    offline: boolean;
    cache: any;
    queue: any[];
    cacheKey: string;
    options: any;

    constructor(options?: any) {
        super(Util.noop, Util.noop);

        let _this = this;

        let queue;


        this.cacheKey = '__appworksjs.deferredQueue';
        this.cache = new AWCache();
        this.options = options || {preserveEvents: false};

        // process deferred queue when network status changes
        document.addEventListener('online', function () {
            _this.processDeferredQueue();
        });

        // load the deferred queue into memory
        queue = this.cache.getItem(this.cacheKey);
        if (queue) {
            this.queue = JSON.parse(queue);
        } else {
            this.queue = [];
            this.saveQueue();
        }

        // process the deferred queue upon object instantiation if we are currently online
        if (this.networkStatus().online) {
            this.processDeferredQueue();
        }
    }

    defer(eventName: string, args: any) {
        this.queue.push({
            event: eventName,
            args: JSON.stringify(args)
        });
        this.saveQueue();
        return (this.queue.length - 1);
    }

    cancel(id: number) {
        if (id > -1) {
            this.queue.splice(id, 1);
            this.saveQueue();
        }
    }

    networkStatus(): any {
        return {
            online: AWProxy.connection().type !== AWProxy.Connection().NONE,
            offline: AWProxy.connection().type === AWProxy.Connection().NONE,
            connection: AWProxy.connection()
        };
    }

    private saveQueue() {
        this.cache.setItem(this.cacheKey, JSON.stringify(this.queue));
    }

    private processDeferredQueue() {
        let self = this;

        console.info('appworks.js: processing deferred queue');

        setTimeout(function () {
            self.queue.forEach(function (deferred) {
                self.dispatchEvent(deferred);
            });
            if (!self.options.preserveEvents) {
                self.queue = [];
                self.saveQueue();
            }
        }, 5000);
    }

    private dispatchEvent(data?: any) {
        let event = new CustomEvent(data.event, {detail: data.args});
        document.dispatchEvent(event);
    }
}