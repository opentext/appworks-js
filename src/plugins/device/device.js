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
var AWDevice = (function (_super) {
    __extends(AWDevice, _super);
    function AWDevice() {
        var _this = _super.call(this, function () { }, function () { }) || this;
        _this.cordova = proxy_1.AWProxy.device().cordova;
        _this.model = proxy_1.AWProxy.device().model;
        _this.platform = proxy_1.AWProxy.device().platform;
        _this.uuid = proxy_1.AWProxy.device().uuid;
        _this.version = proxy_1.AWProxy.device().version;
        _this.manufacturer = proxy_1.AWProxy.device().manufacturer;
        _this.capture = proxy_1.AWProxy.device().capture;
        return _this;
    }
    return AWDevice;
}(plugin_1.AWPlugin));
exports.AWDevice = AWDevice;
//# sourceMappingURL=device.js.map