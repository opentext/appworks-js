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
var plugin_1 = require("../../common/plugin");
var proxy_1 = require("../../common/proxy");
var util_1 = require("../../common/util");
var AWNotificationManager = (function (_super) {
    __extends(AWNotificationManager, _super);
    function AWNotificationManager() {
        return _super.call(this, util_1.noop, util_1.noop) || this;
    }
    AWNotificationManager.prototype.enablePushNotifications = function (handler, errorHandler, includeSeqNo) {
        proxy_1.AWProxy.exec(handler, errorHandler, "AWNotificationManager", "enablePushNotifications", proxy_1.AWProxy.isDesktopEnv() ? [handler, includeSeqNo] : [includeSeqNo]);
    };
    AWNotificationManager.prototype.disablePushNotifications = function () {
        proxy_1.AWProxy.exec(null, null, "AWNotificationManager", "disablePushNotifications", []);
    };
    AWNotificationManager.prototype.getNotifications = function (handler, errorHandler, includeSeqNo) {
        proxy_1.AWProxy.exec(handler, errorHandler, "AWNotificationManager", "getPushNotifications", [includeSeqNo]);
    };
    AWNotificationManager.prototype.getOpeningNotification = function (handler, errorHandler, includeSeqNo) {
        proxy_1.AWProxy.exec(handler, errorHandler, "AWNotificationManager", "getOpeningNotification", [includeSeqNo]);
    };
    AWNotificationManager.prototype.notificationDidLaunchApp = function (handler, errorHandler, includeSeqNo) {
        this.getOpeningNotification(handler, errorHandler, includeSeqNo);
    };
    AWNotificationManager.prototype.openListener = function (handler, errorHandler, includeSeqNo) {
        proxy_1.AWProxy.exec(handler, errorHandler, "AWNotificationManager", "openListener", proxy_1.AWProxy.isDesktopEnv() ? [handler, includeSeqNo] : [includeSeqNo]);
    };
    AWNotificationManager.prototype.didTapNotificationFromActivityView = function (handler, errorHandler, includeSeqNo) {
        this.openListener(handler, errorHandler, includeSeqNo);
    };
    AWNotificationManager.prototype.removeNotification = function (seqNo, handler, errorHandler) {
        proxy_1.AWProxy.exec(handler, errorHandler, "AWNotificationManager", "removeNotification", [seqNo]);
    };
    AWNotificationManager.prototype.alert = function (message, alertCallback, title, buttonName) {
        proxy_1.AWProxy.notification().alert(message, alertCallback, title, buttonName);
    };
    AWNotificationManager.prototype.beep = function (times) {
        proxy_1.AWProxy.notification().beep(times);
    };
    AWNotificationManager.prototype.confirm = function (message, confirmCallback, title, buttonLabels) {
        proxy_1.AWProxy.notification().confirm(message, confirmCallback, title, buttonLabels);
    };
    AWNotificationManager.prototype.prompt = function (message, promptCallback, title, buttonLabels, defaultText) {
        proxy_1.AWProxy.notification().prompt(message, promptCallback, title, buttonLabels, defaultText);
    };
    return AWNotificationManager;
}(plugin_1.AWPlugin));
exports.AWNotificationManager = AWNotificationManager;
//# sourceMappingURL=notifications.js.map