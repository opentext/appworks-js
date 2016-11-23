"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var aw_plugin_1 = require('../core/aw-plugin');
var AWAppManager = (function (_super) {
    __extends(AWAppManager, _super);
    function AWAppManager() {
        _super.apply(this, arguments);
    }
    AWAppManager.prototype.closeActiveApp = function () {
        // TODO
    };
    return AWAppManager;
}(aw_plugin_1.AWPlugin));
exports.AWAppManager = AWAppManager;
