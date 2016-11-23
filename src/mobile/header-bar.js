/// <reference path="../../typings/globals/cordova/index.d.ts"/>
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var aw_plugin_1 = require('../core/aw-plugin');
var AWHeaderBar = (function (_super) {
    __extends(AWHeaderBar, _super);
    function AWHeaderBar() {
        _super.apply(this, arguments);
    }
    AWHeaderBar.prototype.setHeader = function (config) {
        var _this = this;
        if (config && config.callback) {
            this.callback = config.callback;
            config.callback = true;
        }
        else {
            this.callback = null;
        }
        cordova.exec((function () { return _this.callback; })(), (function () { return _this.errorHandler; })(), 'AWHeaderBar', 'setHeader', [config]);
    };
    AWHeaderBar.prototype.getHeader = function () {
        var _this = this;
        cordova.exec((function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })(), 'AWHeaderBar', 'getHeader', []);
    };
    return AWHeaderBar;
}(aw_plugin_1.AWPlugin));
exports.AWHeaderBar = AWHeaderBar;
var AWHeader = (function (_super) {
    __extends(AWHeader, _super);
    function AWHeader() {
        _super.apply(this, arguments);
    }
    return AWHeader;
}(AWHeaderBar));
exports.AWHeader = AWHeader;
