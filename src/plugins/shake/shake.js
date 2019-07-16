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
var Shake = (function (_super) {
    __extends(Shake, _super);
    function Shake() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Shake.prototype.enableShake = function (callback) {
        var _this = this;
        proxy_1.AWProxy.exec(callback, (function () { return _this.errorHandler; })(), 'AWShake', 'enableShake', []);
    };
    Shake.prototype.disableShake = function (callback) {
        var _this = this;
        proxy_1.AWProxy.exec((function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })(), 'AWShake', 'disableShake', []);
    };
    return Shake;
}(plugin_1.AWPlugin));
exports.Shake = Shake;
var AWShake = (function (_super) {
    __extends(AWShake, _super);
    function AWShake() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return AWShake;
}(Shake));
exports.AWShake = AWShake;
//# sourceMappingURL=shake.js.map