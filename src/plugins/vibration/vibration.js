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
var AWVibration = (function (_super) {
    __extends(AWVibration, _super);
    function AWVibration() {
        return _super.call(this, util_1.noop, util_1.noop) || this;
    }
    AWVibration.prototype.vibrate = function (time) {
        return proxy_1.AWProxy.vibrate(time);
    };
    return AWVibration;
}(plugin_1.AWPlugin));
exports.AWVibration = AWVibration;
//# sourceMappingURL=vibration.js.map