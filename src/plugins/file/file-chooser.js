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
var AWFileChooser = (function (_super) {
    __extends(AWFileChooser, _super);
    function AWFileChooser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AWFileChooser.prototype.selectAndUpload = function (action) {
        var _this = this;
        var args = [action];
        proxy_1.AWProxy.exec((function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })(), 'AWFileChooser', 'open', args);
    };
    return AWFileChooser;
}(plugin_1.AWPlugin));
exports.AWFileChooser = AWFileChooser;
//# sourceMappingURL=file-chooser.js.map