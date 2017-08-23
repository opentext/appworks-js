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
var AWKeyboard = (function (_super) {
    __extends(AWKeyboard, _super);
    function AWKeyboard() {
        return _super.call(this, util_1.noop, util_1.noop) || this;
    }
    AWKeyboard.prototype.hideKeyboardAccessoryBar = function (hide) {
        var _this = this;
        proxy_1.AWProxy.exec((function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })(), 'AWKeyboard', 'hideKeyboardAccessoryBar', [hide.toString()]);
    };
    AWKeyboard.prototype.close = function () {
        var _this = this;
        proxy_1.AWProxy.exec((function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })(), 'AWKeyboard', 'close', []);
    };
    AWKeyboard.prototype.show = function () {
        var _this = this;
        proxy_1.AWProxy.exec((function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })(), 'AWKeyboard', 'show', []);
    };
    AWKeyboard.prototype.disableScroll = function (disable) {
        var _this = this;
        disable = !!disable;
        proxy_1.AWProxy.exec((function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })(), 'AWKeyboard', 'disableScroll', [disable.toString()]);
    };
    return AWKeyboard;
}(plugin_1.AWPlugin));
exports.AWKeyboard = AWKeyboard;
//# sourceMappingURL=keyboard.js.map