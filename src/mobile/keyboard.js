/// <reference path="../../typings/globals/cordova/index.d.ts"/>
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var aw_plugin_1 = require('../core/aw-plugin');
var AWKeyboard = (function (_super) {
    __extends(AWKeyboard, _super);
    function AWKeyboard() {
        _super.call(this, function () { }, function () { });
    }
    AWKeyboard.prototype.hideKeyboardAccessoryBar = function (hide) {
        var _this = this;
        cordova.exec((function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })(), 'AWKeyboard', 'hideKeyboardAccessoryBar', [hide.toString()]);
    };
    AWKeyboard.prototype.close = function () {
        var _this = this;
        cordova.exec((function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })(), 'AWKeyboard', 'close', []);
    };
    AWKeyboard.prototype.show = function () {
        var _this = this;
        cordova.exec((function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })(), 'AWKeyboard', 'show', []);
    };
    AWKeyboard.prototype.disableScroll = function (disable) {
        var _this = this;
        disable = !!disable;
        cordova.exec((function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })(), 'AWKeyboard', 'disableScroll', [disable.toString()]);
    };
    return AWKeyboard;
}(aw_plugin_1.AWPlugin));
exports.AWKeyboard = AWKeyboard;
