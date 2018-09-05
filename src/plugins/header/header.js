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
var AWHeaderBar = (function (_super) {
    __extends(AWHeaderBar, _super);
    function AWHeaderBar() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * @deprecated
         * @type {{LeftOne: number; LeftTwo: number; RightOne: number; RightTwo: number}}
         */
        _this.ButtonName = { LeftOne: 0, LeftTwo: 1, RightOne: 2, RightTwo: 3 };
        /**
         * @deprecated
         * @type {{Hamburger: number; Back: number; Settings: number; Appmenu: number; None: number; Dots: number; Search: number, AppmenuHighlight: number, Close: number, DismissAll: number, Edit: number}}
         */
        _this.ButtonImage = {
            Hamburger: 0,
            Back: 1,
            Settings: 2,
            Appmenu: 3,
            None: 5,
            Dots: 6,
            Search: 7,
            AppmenuHighlight: 8,
            Close: 9,
            DismissAll: 10,
            Edit: 11
        };
        return _this;
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
        proxy_1.AWProxy.exec((function () { return _this.callback; })(), (function () { return _this.errorHandler; })(), "AWHeaderBar", "setHeader", [config]);
    };
    AWHeaderBar.prototype.getHeader = function () {
        var _this = this;
        proxy_1.AWProxy.exec((function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })(), "AWHeaderBar", "getHeader", []);
    };
    AWHeaderBar.prototype.setHeaderButtons = function (callback, config) {
        var _this = this;
        proxy_1.AWProxy.exec(callback, (function () { return _this.errorHandler; })(), "AWHeaderBar", "setHeaderButtons", [config]);
    };
    AWHeaderBar.prototype.maskHeader = function (shouldMaskHeader) {
        var _this = this;
        proxy_1.AWProxy.exec((function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })(), "AWHeaderBar", "maskHeader", [shouldMaskHeader]);
    };
    return AWHeaderBar;
}(plugin_1.AWPlugin));
AWHeaderBar.ButtonName = { LeftOne: 0, LeftTwo: 1, RightOne: 2, RightTwo: 3 };
AWHeaderBar.ButtonImage = {
    Hamburger: 0,
    Back: 1,
    Settings: 2,
    Appmenu: 3,
    None: 5,
    Dots: 6,
    Search: 7,
    AppmenuHighlight: 8,
    Close: 9,
    DismissAll: 10,
    Edit: 11
};
exports.AWHeaderBar = AWHeaderBar;
// alias
var AWHeader = (function (_super) {
    __extends(AWHeader, _super);
    function AWHeader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return AWHeader;
}(AWHeaderBar));
exports.AWHeader = AWHeader;
//# sourceMappingURL=header.js.map