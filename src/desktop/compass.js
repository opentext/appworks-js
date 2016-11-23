"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var aw_plugin_1 = require('../core/aw-plugin');
var AWCompass = (function (_super) {
    __extends(AWCompass, _super);
    function AWCompass() {
        _super.apply(this, arguments);
    }
    AWCompass.prototype.getCurrentHeading = function () {
        // TODO
    };
    AWCompass.prototype.watchHeading = function (options) {
        // TODO
    };
    AWCompass.prototype.clearWatch = function (watchId) {
        // TODO
    };
    return AWCompass;
}(aw_plugin_1.AWPlugin));
exports.AWCompass = AWCompass;
