"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var aw_plugin_1 = require('./aw-plugin');
var AppWorksMobile = require('../mobile/index');
var AppWorksDesktop = require('../desktop/index');
var AWSecureStorage = (function (_super) {
    __extends(AWSecureStorage, _super);
    function AWSecureStorage(success, error) {
        _super.call(this, null, null);
        if (window.cordova) {
            return new AppWorksMobile.SecureStorage(success, error);
        }
        else {
            return new AppWorksDesktop.SecureStorage(success, error);
        }
    }
    return AWSecureStorage;
}(aw_plugin_1.AWPlugin));
exports.AWSecureStorage = AWSecureStorage;
