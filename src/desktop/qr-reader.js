"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var aw_plugin_1 = require('../core/aw-plugin');
var QRReader = (function (_super) {
    __extends(QRReader, _super);
    function QRReader() {
        _super.apply(this, arguments);
    }
    QRReader.prototype.scan = function () {
        // TODO
    };
    QRReader.prototype.rename = function () {
        // TODO
    };
    return QRReader;
}(aw_plugin_1.AWPlugin));
exports.QRReader = QRReader;
var AWQRReader = (function (_super) {
    __extends(AWQRReader, _super);
    function AWQRReader() {
        _super.apply(this, arguments);
    }
    return AWQRReader;
}(QRReader));
exports.AWQRReader = AWQRReader;
