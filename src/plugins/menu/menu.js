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
var AWMenu = (function (_super) {
    __extends(AWMenu, _super);
    function AWMenu() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AWMenu.prototype.push = function (items) {
        var _this = this;
        var args = [items];
        proxy_1.AWProxy.exec((function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })(), "AWMenu", "push", args);
    };
    AWMenu.prototype.setMenu = function (menuSections) {
        return new Promise(function (resolve, reject) {
            proxy_1.AWProxy.exec(resolve, reject, "AWMenu", "setMenu", [menuSections]);
        });
    };
    AWMenu.prototype.didOpenMenuItem = function (callback) {
        var _this = this;
        proxy_1.AWProxy.exec(callback, (function () { return _this.errorHandler; })(), "AWMenu", "receive", []);
    };
    AWMenu.prototype.openListener = function (listener) {
        var _this = this;
        proxy_1.AWProxy.exec(listener, (function () { return _this.errorHandler; })(), "AWMenu", "receive", []);
    };
    AWMenu.prototype.showMenu = function (shouldShowMenu) {
        var _this = this;
        proxy_1.AWProxy.exec((function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })(), "AWMenu", "showMenu", [shouldShowMenu]);
    };
    AWMenu.prototype.didTapMenuItem = function (listener) {
        return this.openListener(listener);
    };
    return AWMenu;
}(plugin_1.AWPlugin));
exports.AWMenu = AWMenu;
//# sourceMappingURL=menu.js.map