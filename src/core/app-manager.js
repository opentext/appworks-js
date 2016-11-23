"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var aw_plugin_1 = require('./aw-plugin');
var AppWorksMobile = require('../mobile/index');
var AppWorksDesktop = require('../desktop/index');
var AWAppManager = (function (_super) {
    __extends(AWAppManager, _super);
    function AWAppManager(success, err) {
        _super.call(this, null, null);
        if (window.cordova) {
            return new AppWorksMobile.AppManager(success, err);
        }
        else {
            return new AppWorksDesktop.AppManager(success, err);
        }
    }
    return AWAppManager;
}(aw_plugin_1.AWPlugin));
exports.AWAppManager = AWAppManager;
