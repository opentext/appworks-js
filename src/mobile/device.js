/// <reference path="../../typings/globals/cordova/index.d.ts"/>
/// <reference path="../../typings/globals/cordova/plugins/device/index.d.ts"/>
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var aw_plugin_1 = require('../core/aw-plugin');
var AWDevice = (function (_super) {
    __extends(AWDevice, _super);
    function AWDevice() {
        _super.call(this, function () { }, function () { });
        this.cordova = device.cordova;
        this.model = device.model;
        this.platform = device.platform;
        this.uuid = device.uuid;
        this.version = device.version;
        this.manufacturer = device.manufacturer;
    }
    return AWDevice;
}(aw_plugin_1.AWPlugin));
exports.AWDevice = AWDevice;
