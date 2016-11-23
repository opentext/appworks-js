"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var aw_plugin_1 = require('../core/aw-plugin');
var AWMenu = (function (_super) {
    __extends(AWMenu, _super);
    function AWMenu() {
        _super.apply(this, arguments);
    }
    AWMenu.prototype.push = function (items) {
        // TODO
    };
    AWMenu.prototype.openListener = function (listener) {
        // TODO
    };
    AWMenu.prototype.didTapMenuItem = function (listener) {
        // TODO
    };
    return AWMenu;
}(aw_plugin_1.AWPlugin));
exports.AWMenu = AWMenu;
