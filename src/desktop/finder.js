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
        // TODO
    };
    AWFinder.prototype.openDirect = function (filename) {
        // TODO
    };
    AWFinder.prototype.list = function (path) {
        // TODO
    };
    return AWFinder;
}(aw_plugin_1.AWPlugin));
exports.AWFinder = AWFinder;
