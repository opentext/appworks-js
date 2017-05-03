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
var AWGlobalization = (function (_super) {
    __extends(AWGlobalization, _super);
    function AWGlobalization() {
        return _super.call(this, util_1.Util.noop, util_1.Util.noop) || this;
    }
    AWGlobalization.prototype.getPreferredLanguage = function (successFn, errorFn) {
        proxy_1.AWProxy.exec(successFn, errorFn, 'AWGlobalization', 'getPreferredLanguage', []);
    };
    return AWGlobalization;
}(plugin_1.AWPlugin));
exports.AWGlobalization = AWGlobalization;
//# sourceMappingURL=globalization.js.map