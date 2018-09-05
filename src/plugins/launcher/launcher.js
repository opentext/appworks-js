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
var AWLauncher = (function (_super) {
    __extends(AWLauncher, _super);
    function AWLauncher(successHandler, errorHandler) {
        return _super.call(this, successHandler || util_1.noop, errorHandler || util_1.noop) || this;
    }
    AWLauncher.prototype.getLaunchData = function (successHandler, errorHandler) {
        proxy_1.AWProxy.exec(successHandler, errorHandler, 'AWLauncher', 'getLaunchData', []);
    };
    AWLauncher.prototype.getLaunchURL = function (successHandler, errorHandler) {
        proxy_1.AWProxy.exec(successHandler, errorHandler, 'AWLauncher', 'getLaunchURL', []);
    };
    AWLauncher.prototype.clearLaunchData = function () {
        var _this = this;
        proxy_1.AWProxy.exec((function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })(), 'AWLauncher', 'clearLaunchData', []);
    };
    AWLauncher.prototype.clearLaunchURL = function () {
        var _this = this;
        proxy_1.AWProxy.exec((function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })(), 'AWLauncher', 'clearLaunchURL', []);
    };
    return AWLauncher;
}(plugin_1.AWPlugin));
exports.AWLauncher = AWLauncher;
//# sourceMappingURL=launcher.js.map