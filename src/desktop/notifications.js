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
        // TODO
    };
    AWNotificationManager.prototype.disablePushNotifications = function () {
        // TODO
    };
    AWNotificationManager.prototype.getNotifications = function (handler, errorHandler) {
        // TODO
    };
    AWNotificationManager.prototype.getOpeningNotification = function (handler, errorHandler) {
        // TODO
    };
    AWNotificationManager.prototype.notificationDidLaunchApp = function (handler, errorHandler) {
        // TODO
    };
    AWNotificationManager.prototype.openListener = function (handler, errorHandler) {
        // TODO
    };
    AWNotificationManager.prototype.didTapNotificationFromActivityView = function (handler, errorHandler) {
        // TODO
    };
    AWNotificationManager.alert = function (message, alertCallback, title, buttonName) {
        // TODO
    };
    AWNotificationManager.beep = function (times) {
        // TODO
    };
    AWNotificationManager.confirm = function (message, confirmCallback, title, buttonLabels) {
        // TODO
    };
    AWNotificationManager.prompt = function (message, promptCallback, title, buttonLabels, defaultText) {
        // TODO
    };
    return AWNotificationManager;
}(aw_plugin_1.AWPlugin));
exports.AWNotificationManager = AWNotificationManager;
