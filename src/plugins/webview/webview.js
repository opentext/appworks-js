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
var AWWebView = (function (_super) {
    __extends(AWWebView, _super);
    function AWWebView() {
        return _super.call(this, util_1.noop, util_1.noop) || this;
    }
    AWWebView.prototype.open = function (url, target, options) {
        return proxy_1.AWProxy.webview().open(url, target, options);
    };
    AWWebView.prototype.addEventListener = function (type, callback) {
        proxy_1.AWProxy.webview().addEventListener(type, callback);
    };
    AWWebView.prototype.removeEventListener = function (type, callback) {
        proxy_1.AWProxy.webview().removeEventListener(type, callback);
    };
    AWWebView.prototype.show = function () {
        proxy_1.AWProxy.webview().show();
    };
    AWWebView.prototype.close = function () {
        proxy_1.AWProxy.webview().close();
    };
    AWWebView.prototype.executeScript = function (script, callback) {
        proxy_1.AWProxy.webview().executeScript(script, callback);
    };
    AWWebView.prototype.insertCSS = function (script, callback) {
        proxy_1.AWProxy.webview().insertCSS(script, callback);
    };
    return AWWebView;
}(plugin_1.AWPlugin));
exports.AWWebView = AWWebView;
//# sourceMappingURL=webview.js.map