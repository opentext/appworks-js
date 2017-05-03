"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MockNotification = (function () {
    function MockNotification() {
        this.body = null;
        this.dir = null;
        this.icon = null;
        this.lang = null;
        this.onclick = null;
        this.onclose = null;
        this.onerror = null;
        this.onshow = null;
        this.permission = null;
        this.title = null;
        this.tag = null;
        this.close = null;
        this.addEventListener = function (name) { };
        this.removeEventListener = function (name) { };
        this.dispatchEvent = function (name) { };
    }
    MockNotification.prototype.alert = function (message, alertCallback, title, buttonName) {
    };
    MockNotification.prototype.beep = function (times) {
    };
    MockNotification.prototype.confirm = function (message, confirmCallback, title, buttonLabels) {
    };
    MockNotification.prototype.prompt = function (message, promptCallback, title, buttonLabels, defaultText) {
    };
    MockNotification.prototype.vibrate = function () {
    };
    MockNotification.prototype.vibrateWithPattern = function () {
    };
    MockNotification.prototype.cancelVibration = function () {
    };
    return MockNotification;
}());
exports.MockNotification = MockNotification;
