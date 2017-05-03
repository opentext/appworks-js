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
import { AWPlugin } from '../../common/plugin';
import { AWProxy } from '../../common/proxy';
import { Util } from '../../common/util';
var AWNotificationManager = (function (_super) {
    __extends(AWNotificationManager, _super);
    function AWNotificationManager() {
        return _super.call(this, Util.noop, Util.noop) || this;
    }
    AWNotificationManager.prototype.enablePushNotifications = function (handler, errorHandler) {
        AWProxy.exec(handler, errorHandler, 'AWNotificationManager', 'enablePushNotifications', AWProxy.isDesktopEnv() ? [handler] : []);
    };
    AWNotificationManager.prototype.disablePushNotifications = function () {
        AWProxy.exec(null, null, 'AWNotificationManager', 'disablePushNotifications', []);
    };
    AWNotificationManager.prototype.getNotifications = function (handler, errorHandler) {
        AWProxy.exec(handler, errorHandler, 'AWNotificationManager', 'getPushNotifications', []);
    };
    AWNotificationManager.prototype.getOpeningNotification = function (handler, errorHandler) {
        AWProxy.exec(handler, errorHandler, 'AWNotificationManager', 'getOpeningNotification', []);
    };
    AWNotificationManager.prototype.notificationDidLaunchApp = function (handler, errorHandler) {
        this.getOpeningNotification(handler, errorHandler);
    };
    AWNotificationManager.prototype.openListener = function (handler, errorHandler) {
        AWProxy.exec(handler, errorHandler, 'AWNotificationManager', 'openListener', AWProxy.isDesktopEnv() ? [handler] : []);
    };
    AWNotificationManager.prototype.didTapNotificationFromActivityView = function (handler, errorHandler) {
        this.openListener(handler, errorHandler);
    };
    AWNotificationManager.prototype.removeNotification = function (seqNo, handler, errorHandler) {
        AWProxy.exec(handler, errorHandler, 'AWNotificationManager', 'removeNotification', [seqNo]);
    };
    AWNotificationManager.prototype.alert = function (message, alertCallback, title, buttonName) {
        AWProxy.notification().alert(message, alertCallback, title, buttonName);
    };
    AWNotificationManager.prototype.beep = function (times) {
        AWProxy.notification().beep(times);
    };
    AWNotificationManager.prototype.confirm = function (message, confirmCallback, title, buttonLabels) {
        AWProxy.notification().confirm(message, confirmCallback, title, buttonLabels);
    };
    AWNotificationManager.prototype.prompt = function (message, promptCallback, title, buttonLabels, defaultText) {
        AWProxy.notification().prompt(message, promptCallback, title, buttonLabels, defaultText);
    };
    return AWNotificationManager;
}(AWPlugin));
export { AWNotificationManager };
//# sourceMappingURL=notifications.js.map