/// <reference path="../../typings/globals/cordova/index.d.ts"/>
/// <reference path="../../typings/globals/cordova/plugins/vibration/index.d.ts"/>
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var aw_plugin_1 = require('../core/aw-plugin');
var AWVibration = (function (_super) {
    __extends(AWVibration, _super);
    function AWVibration() {
        _super.call(this, function () {
        }, function () {
        });
    }
    AWVibration.prototype.vibrate = function (time) {
        return navigator.vibrate(time);
    };
    return AWVibration;
}(aw_plugin_1.AWPlugin));
exports.AWVibration = AWVibration;
