"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var aw_plugin_1 = require('../core/aw-plugin');
var AWPage = (function (_super) {
    __extends(AWPage, _super);
    function AWPage() {
        _super.apply(this, arguments);
    }
    AWPage.prototype.setPageUrl = function (url) {
        // TODO
    };
    return AWPage;
}(aw_plugin_1.AWPlugin));
exports.AWPage = AWPage;
