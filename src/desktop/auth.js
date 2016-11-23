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
        // TODO
    };
    AWAuth.prototype.getAuthResponse = function () {
        // TODO
    };
    AWAuth.prototype.gateway = function (successHandler, errorHandler) {
        // TODO
    };
    return AWAuth;
}(aw_plugin_1.AWPlugin));
exports.AWAuth = AWAuth;
