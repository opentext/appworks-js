"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var aw_plugin_1 = require('./aw-plugin');
var AppWorksMobile = require('../mobile/index');
var AppWorksDesktop = require('../desktop/index');
var AWVibration = (function (_super) {
    __extends(AWVibration, _super);
    function AWVibration() {
        _super.call(this, null, null);
        if (window.cordova) {
            return new AppWorksMobile.Vibration();
        }
        else {
            return new AppWorksDesktop.Vibration();
        }
    }
    return AWVibration;
}(aw_plugin_1.AWPlugin));
exports.AWVibration = AWVibration;
