/// <reference path="../../typings/globals/cordova/index.d.ts"/>
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var aw_plugin_1 = require('../core/aw-plugin');
var AWAuth = (function (_super) {
    __extends(AWAuth, _super);
    function AWAuth() {
        _super.apply(this, arguments);
    }
    AWAuth.prototype.authenticate = function (force) {
        var _this = this;
        force = !!force;
        cordova.exec((function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })(), 'AWAuth', 'authenticate', [force.toString()]);
    };
    AWAuth.prototype.getAuthResponse = function () {
        var _this = this;
        cordova.exec((function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })(), 'AWAuth', 'authobject', []);
    };
    AWAuth.prototype.gateway = function (successHandler, errorHandler) {
        cordova.exec(successHandler, errorHandler, 'AWAuth', 'gateway', []);
    };
    return AWAuth;
}(aw_plugin_1.AWPlugin));
exports.AWAuth = AWAuth;
