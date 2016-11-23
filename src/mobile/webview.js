/// <reference path="../../typings/globals/cordova/index.d.ts"/>
/// <reference path="../../typings/globals/cordova/plugins/inappbrowser/index.d.ts"/>
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var aw_plugin_1 = require('../core/aw-plugin');
var AWWebView = (function (_super) {
    __extends(AWWebView, _super);
    function AWWebView() {
        _super.call(this, null, null);
    }
    AWWebView.prototype.open = function (url, target, options) {
        return cordova.InAppBrowser.open(url, target, options);
    };
    return AWWebView;
}(aw_plugin_1.AWPlugin));
exports.AWWebView = AWWebView;
