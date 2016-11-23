/// <reference path="../../typings/globals/cordova/index.d.ts"/>
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var aw_plugin_1 = require('../core/aw-plugin');
var AWFileChooser = (function (_super) {
    __extends(AWFileChooser, _super);
    function AWFileChooser() {
        _super.apply(this, arguments);
    }
    AWFileChooser.prototype.selectAndUpload = function (action) {
        var _this = this;
        var args = [action];
        cordova.exec((function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })(), 'AWFileChooser', 'open', args);
    };
    return AWFileChooser;
}(aw_plugin_1.AWPlugin));
exports.AWFileChooser = AWFileChooser;
