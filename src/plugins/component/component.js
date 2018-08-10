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
var AWComponent = (function (_super) {
    __extends(AWComponent, _super);
    function AWComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AWComponent.prototype.open = function (successHandler, errorHandler, args) {
        proxy_1.AWProxy.exec(successHandler, errorHandler, "AWComponent", "open", args || []);
    };
    AWComponent.prototype.list = function (successHandler, errorHandler, args) {
        proxy_1.AWProxy.exec(successHandler, errorHandler, "AWComponent", "list", args || []);
    };
    AWComponent.prototype.check = function (successHandler, errorHandler, args) {
        proxy_1.AWProxy.exec(successHandler, errorHandler, "AWComponent", "check", args || []);
    };
    AWComponent.prototype.close = function (successHandler, errorHandler, args) {
        proxy_1.AWProxy.exec(successHandler, errorHandler, "AWComponent", "close", args || []);
    };
    return AWComponent;
}(plugin_1.AWPlugin));
exports.AWComponent = AWComponent;
//# sourceMappingURL=component.js.map