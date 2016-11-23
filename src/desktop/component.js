"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var aw_plugin_1 = require('../core/aw-plugin');
var AWComponent = (function (_super) {
    __extends(AWComponent, _super);
    function AWComponent() {
        _super.apply(this, arguments);
    }
    AWComponent.prototype.open = function (successHandler, errorHandler, args) {
        // TODO
    };
    AWComponent.prototype.list = function (successHandler, errorHandler, args) {
        // TODO
    };
    AWComponent.prototype.check = function (successHandler, errorHandler, args) {
        // TODO
    };
    AWComponent.prototype.close = function (successHandler, errorHandler, args) {
        // TODO
    };
    return AWComponent;
}(aw_plugin_1.AWPlugin));
exports.AWComponent = AWComponent;
