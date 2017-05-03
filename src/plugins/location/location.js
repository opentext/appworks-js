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
var AWLocation = (function (_super) {
    __extends(AWLocation, _super);
    function AWLocation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AWLocation.prototype.getCurrentPosition = function (options) {
        var _this = this;
        return proxy_1.AWProxy.geolocation().getCurrentPosition((function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })(), options);
    };
    AWLocation.prototype.watchPosition = function (options) {
        var _this = this;
        return proxy_1.AWProxy.geolocation().watchPosition((function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })(), options);
    };
    AWLocation.prototype.clearWatch = function (watchId) {
        proxy_1.AWProxy.geolocation().clearWatch(watchId);
    };
    return AWLocation;
}(plugin_1.AWPlugin));
exports.AWLocation = AWLocation;
//# sourceMappingURL=location.js.map