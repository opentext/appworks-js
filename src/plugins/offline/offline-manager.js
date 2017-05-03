"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var cache_1 = require("../storage/cache");
var plugin_1 = require("../../common/plugin");
var proxy_1 = require("../../common/proxy");
var util_1 = require("../../common/util");
var AWOfflineManager = (function (_super) {
    __extends(AWOfflineManager, _super);
    function AWOfflineManager(options) {
        var _this = _super.call(this, util_1.Util.noop, util_1.Util.noop) || this;
        var document;
        _this.cacheKey = '__appworksjs.deferredQueue';
        _this.cache = new cache_1.AWCache();
        _this.options = options || { preserveEvents: false };
        document = proxy_1.AWProxy.document();
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
            online: proxy_1.AWProxy.connection().type !== proxy_1.AWProxy.Connection().NONE,
            offline: proxy_1.AWProxy.connection().type === proxy_1.AWProxy.Connection().NONE,
            connection: proxy_1.AWProxy.connection()
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
}(plugin_1.AWPlugin));
exports.AWOfflineManager = AWOfflineManager;
