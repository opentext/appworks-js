"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var aw_plugin_1 = require('../core/aw-plugin');
var AWKeyboard = (function (_super) {
    __extends(AWKeyboard, _super);
    function AWKeyboard() {
        _super.call(this, function () { }, function () { });
    }
    AWKeyboard.prototype.hideKeyboardAccessoryBar = function (hide) {
        // TODO
    };
    AWKeyboard.prototype.close = function () {
        // TODO
    };
    AWKeyboard.prototype.show = function () {
        // TODO
    };
    AWKeyboard.prototype.disableScroll = function (disable) {
        // TODO
    };
    return AWKeyboard;
}(aw_plugin_1.AWPlugin));
exports.AWKeyboard = AWKeyboard;
