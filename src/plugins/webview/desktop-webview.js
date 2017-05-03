"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var proxy_1 = require("../../common/proxy");
var util_1 = require("../../common/util");
var DesktopWebviewSequenceStore = {
    seqNo: 0
};
var DesktopWebview = (function () {
    function DesktopWebview() {
        this.id = DesktopWebviewSequenceStore.seqNo++;
    }
    DesktopWebview.prototype.addEventListener = function (type, callback) {
        proxy_1.AWProxy.exec(util_1.Util.noop, util_1.Util.noop, 'AWWebView', 'addEventListener', [this.id, type, callback]);
    };
    DesktopWebview.prototype.removeEventListener = function (type, callback) {
        proxy_1.AWProxy.exec(util_1.Util.noop, util_1.Util.noop, 'AWWebView', 'removeEventListener', [this.id, type, callback]);
    };
    DesktopWebview.prototype.close = function () {
        proxy_1.AWProxy.exec(util_1.Util.noop, util_1.Util.noop, 'AWWebView', 'close', [this.id]);
    };
    DesktopWebview.prototype.show = function () {
        proxy_1.AWProxy.exec(util_1.Util.noop, util_1.Util.noop, 'AWWebView', 'show', [this.id]);
    };
    DesktopWebview.prototype.open = function (url, target, options) {
        proxy_1.AWProxy.exec(util_1.Util.noop, util_1.Util.noop, 'AWWebView', 'open', [this.id, url, target, options]);
        return this;
    };
    DesktopWebview.prototype.executeScript = function (script, callback) {
        proxy_1.AWProxy.exec(callback, util_1.Util.noop, 'AWWebView', 'executeScript', [this.id, script]);
    };
    DesktopWebview.prototype.insertCSS = function (css, callback) {
        proxy_1.AWProxy.exec(callback, util_1.Util.noop, 'AWWebView', 'insertCSS', [this.id, css]);
    };
    return DesktopWebview;
}());
exports.DesktopWebview = DesktopWebview;
