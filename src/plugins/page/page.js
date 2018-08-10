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
var AWPage = (function (_super) {
    __extends(AWPage, _super);
    function AWPage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AWPage.prototype.setPageUrl = function (url) {
        var _this = this;
        proxy_1.AWProxy.exec((function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })(), "AWPage", "setPageUrl", [url]);
    };
    AWPage.prototype.openModalAppWebView = function (url, title, closeTitle) {
        var _this = this;
        proxy_1.AWProxy.exec((function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })(), "AWPage", "showModalAppWebView", [url, title, closeTitle]);
    };
    AWPage.prototype.openModalExternalWebView = function (url, title, closeTitle, options) {
        var _this = this;
        if (typeof options === "undefined" || !options) {
            options = {};
        }
        proxy_1.AWProxy.exec((function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })(), "AWPage", "showModalExternalWebView", [url, title, closeTitle, options]);
    };
    AWPage.prototype.setActionButtonCallback = function (callback, actionTitle) {
        var _this = this;
        proxy_1.AWProxy.exec(callback, (function () { return _this.errorHandler; })(), "AWPage", "setModalAppWebViewActionCallback", [actionTitle]);
    };
    AWPage.prototype.closeModalAppWebView = function () {
        var _this = this;
        proxy_1.AWProxy.exec((function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })(), "AWPage", "closeModalAppWebView", []);
    };
    AWPage.prototype.video = function (success, error, url) {
        proxy_1.AWProxy.exec(success, error, "AWPage", "video", [url]);
    };
    return AWPage;
}(plugin_1.AWPlugin));
exports.AWPage = AWPage;
//# sourceMappingURL=page.js.map