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
var Print = (function (_super) {
    __extends(Print, _super);
    function Print() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Print.prototype.print = function (options) {
        var _this = this;
        proxy_1.AWProxy.exec((function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })(), 'AWPrint', 'print', [options]);
    };
    Print.prototype.getPrinters = function () {
        var _this = this;
        proxy_1.AWProxy.exec((function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })(), 'AWPrint', 'getPrinters', []);
    };
    Print.prototype.printToPDF = function (options) {
        var _this = this;
        proxy_1.AWProxy.exec((function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })(), 'AWPrint', 'printToPDF', [options]);
    };
    return Print;
}(plugin_1.AWPlugin));
exports.Print = Print;
var AWPrint = (function (_super) {
    __extends(AWPrint, _super);
    function AWPrint() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return AWPrint;
}(Print));
exports.AWPrint = AWPrint;
//# sourceMappingURL=print.js.map