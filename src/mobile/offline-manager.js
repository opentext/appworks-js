/// <reference path="../../typings/globals/cordova/index.d.ts"/>
/// <reference path="../../typings/globals/cordova/plugins/networkinformation/index.d.ts"/>
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var aw_plugin_1 = require('../core/aw-plugin');
var cache_1 = require('./cache');
var AWOfflineManager = (function (_super) {
    __extends(AWOfflineManager, _super);
    function AWOfflineManager(options) {
        _super.call(this, function () {
        }, function () {
        });
        var _this = this;
        var queue;
        this.cacheKey = '__appworksjs.deferredQueue';
        this.cache = new cache_1.AWCache();
        this.options = options || { preserveEvents: false };
        // process deferred queue when network status changes
        document.addEventListener('online', function () {
            _this.processDeferredQueue();
        });
        // load the deferred queue into memory
        queue = this.cache.getItem(this.cacheKey);
        if (queue) {
            this.queue = JSON.parse(queue);
        }
        else {
            this.queue = [];
            this.saveQueue();
        }
        // process the deferred queue upon object instantiation if we are currently online
        if (this.networkStatus().online) {
            this.processDeferredQueue();
        }
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
            online: navigator.connection.type !== Connection.NONE,
            offline: navigator.connection.type === Connection.NONE,
            connection: navigator.connection
        };
    };
    AWOfflineManager.prototype.saveQueue = function () {
        this.cache.setItem(this.cacheKey, JSON.stringify(this.queue));
    };
    AWOfflineManager.prototype.processDeferredQueue = function () {
        var self = this;
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
    };
    AWOfflineManager.prototype.dispatchEvent = function (data) {
        var event = new CustomEvent(data.event, { detail: data.args });
        document.dispatchEvent(event);
    };
    return AWOfflineManager;
}(aw_plugin_1.AWPlugin));
exports.AWOfflineManager = AWOfflineManager;
