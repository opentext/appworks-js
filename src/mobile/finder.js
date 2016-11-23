/// <reference path="../../typings/globals/cordova/index.d.ts"/>
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var aw_plugin_1 = require('../core/aw-plugin');
var AWFinder = (function (_super) {
    __extends(AWFinder, _super);
    function AWFinder() {
        _super.apply(this, arguments);
    }
    AWFinder.prototype.open = function (path, filename) {
        var _this = this;
        var args = [path, filename];
        cordova.exec((function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })(), 'AWFinder', 'open', args);
    };
    AWFinder.prototype.openIn = function (filename) {
        return this.openDirect(filename);
    };
    AWFinder.prototype.list = function (path) {
        var _this = this;
        cordova.exec((function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })(), 'AWFinder', 'list', [path]);
    };
    AWFinder.prototype.openDirect = function (filename) {
        var _this = this;
        cordova.exec((function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })(), 'AWFinder', 'openDirect', [filename]);
    };
    return AWFinder;
}(aw_plugin_1.AWPlugin));
exports.AWFinder = AWFinder;
