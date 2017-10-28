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
var AWFinder = (function (_super) {
    __extends(AWFinder, _super);
    function AWFinder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AWFinder.prototype.open = function (path, filename) {
        var _this = this;
        var args = [path, filename];
        proxy_1.AWProxy.exec((function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })(), 'AWFinder', 'open', args);
    };
    AWFinder.prototype.openIn = function (filename) {
        return this.openDirect(filename);
    };
    AWFinder.prototype.list = function (path) {
        var _this = this;
        proxy_1.AWProxy.exec((function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })(), 'AWFinder', 'list', [path]);
    };
    AWFinder.prototype.share = function (filename) {
        var _this = this;
        proxy_1.AWProxy.exec((function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })(), 'AWFinder', 'share', [filename]);
    };
    AWFinder.prototype.openDirect = function (filename) {
        var _this = this;
        proxy_1.AWProxy.exec((function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })(), 'AWFinder', 'openDirect', [filename]);
    };
    return AWFinder;
}(plugin_1.AWPlugin));
exports.AWFinder = AWFinder;
//# sourceMappingURL=finder.js.map