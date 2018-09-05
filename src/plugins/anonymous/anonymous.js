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
var AWAnonymous = (function (_super) {
    __extends(AWAnonymous, _super);
    function AWAnonymous() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AWAnonymous.prototype.isAnonymousMode = function (successHandler, errorHandler) {
        proxy_1.AWProxy.exec(successHandler, errorHandler, "AWAnonymous", "isAnonymousMode", []);
    };
    AWAnonymous.prototype.getAnonymousUrl = function (successHandler, errorHandler) {
        proxy_1.AWProxy.exec(successHandler, errorHandler, "AWAnonymous", "getAnonymousUrl", []);
    };
    return AWAnonymous;
}(plugin_1.AWPlugin));
exports.AWAnonymous = AWAnonymous;
//# sourceMappingURL=anonymous.js.map