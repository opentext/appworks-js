var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { AWCache } from "../storage/cache";
import { AWPlugin } from "../../common/plugin";
import { AWProxy } from "../../common/proxy";
import { Util } from "../../common/util";
var AWOfflineManager = (function (_super) {
    __extends(AWOfflineManager, _super);
    function AWOfflineManager(options) {
        var _this = _super.call(this, Util.noop, Util.noop) || this;
        var document;
        _this.cacheKey = '__appworksjs.deferredQueue';
        _this.cache = new AWCache();
        _this.options = options || { preserveEvents: false };
        document = AWProxy.document();
        // process deferred queue when network status changes
        document.addEventListener('online', function () {
            _this.processDeferredQueue();
        });
        var queue = _this.cache.getItem(_this.cacheKey);
        if (queue) {
            _this.queue = JSON.parse(queue);
        }
        else {
            _this.queue = [];
            _this.saveQueue();
        }
        // process the deferred queue upon object instantiation if we are currently online
        if (_this.networkStatus().online) {
            _this.processDeferredQueue();
        }
        return _this;
    }
    AWOfflineManager.prototype.defer = function (eventName, args) {
        this.queue.push({
            event: eventName,
            args: JSON.stringify(args)
        });
        this.saveQueue();
        return (this.queue.length - 1);
    };
    AWOfflineManager.prototype.cancel = function (id) {
        if (id > -1) {
            this.queue.splice(id, 1);
            this.saveQueue();
        }
    };
    AWOfflineManager.prototype.networkStatus = function () {
        return {
            online: AWProxy.connection().type !== AWProxy.Connection().NONE,
            offline: AWProxy.connection().type === AWProxy.Connection().NONE,
            connection: AWProxy.connection()
        };
    };
    AWOfflineManager.prototype.saveQueue = function () {
        this.cache.setItem(this.cacheKey, JSON.stringify(this.queue));
    };
    AWOfflineManager.prototype.processDeferredQueue = function () {
        var self = this;
        setTimeout(function () {
            self.queue.forEach(function (deferred) {
                self.dispatchEvent(deferred);
            });
            if (!self.options.preserveEvents) {
                self.queue = [];
                self.saveQueue();
            }
        }, 5000);
    };
    AWOfflineManager.prototype.dispatchEvent = function (data) {
        var event = new CustomEvent(data.event, { detail: data.args });
        document.dispatchEvent(event);
    };
    return AWOfflineManager;
}(AWPlugin));
export { AWOfflineManager };
//# sourceMappingURL=offline-manager.js.map