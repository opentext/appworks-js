/// <reference path="../../typings/globals/cordova/index.d.ts"/>
/// <reference path="../../typings/globals/cordova/plugins/dialogs/index.d.ts"/>
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var aw_plugin_1 = require('../core/aw-plugin');
var AWNotificationManager = (function (_super) {
    __extends(AWNotificationManager, _super);
    function AWNotificationManager() {
        _super.call(this, function () { }, function () { });
    }
    AWNotificationManager.prototype.enablePushNotifications = function (handler, errorHandler) {
        cordova.exec(handler, errorHandler, 'AWNotificationManager', 'enablePushNotifications', []);
    };
    AWNotificationManager.prototype.disablePushNotifications = function () {
        cordova.exec(null, null, 'AWNotificationManager', 'disablePushNotifications', []);
    };
    AWNotificationManager.prototype.getNotifications = function (handler, errorHandler) {
        cordova.exec(handler, errorHandler, 'AWNotificationManager', 'getPushNotifications', []);
    };
    AWNotificationManager.prototype.getOpeningNotification = function (handler, errorHandler) {
        cordova.exec(handler, errorHandler, 'AWNotificationManager', 'getOpeningNotification', []);
    };
    AWNotificationManager.prototype.notificationDidLaunchApp = function (handler, errorHandler) {
        this.getOpeningNotification(handler, errorHandler);
    };
    AWNotificationManager.prototype.openListener = function (handler, errorHandler) {
        cordova.exec(handler, errorHandler, 'AWNotificationManager', 'openListener', []);
    };
    AWNotificationManager.prototype.didTapNotificationFromActivityView = function (handler, errorHandler) {
        this.openListener(handler, errorHandler);
    };
    AWNotificationManager.alert = function (message, alertCallback, title, buttonName) {
        navigator.notification.alert(message, alertCallback, title, buttonName);
    };
    AWNotificationManager.beep = function (times) {
        navigator.notification.beep(times);
    };
    AWNotificationManager.confirm = function (message, confirmCallback, title, buttonLabels) {
        navigator.notification.confirm(message, confirmCallback, title, buttonLabels);
    };
    AWNotificationManager.prompt = function (message, promptCallback, title, buttonLabels, defaultText) {
        navigator.notification.prompt(message, promptCallback, title, buttonLabels, defaultText);
    };
    return AWNotificationManager;
}(aw_plugin_1.AWPlugin));
exports.AWNotificationManager = AWNotificationManager;
