"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var aw_plugin_1 = require('../core/aw-plugin');
var AWMedia = (function (_super) {
    __extends(AWMedia, _super);
    function AWMedia(src, successHandler, errorHandler, statusChangeHandler) {
        _super.call(this, successHandler, errorHandler);
        // TODO
    }
    AWMedia.prototype.getCurrentPosition = function (successHandler, errorHandler) {
        // TODO
    };
    AWMedia.prototype.getDuration = function () {
        // TODO
    };
    AWMedia.prototype.pause = function () {
        // TODO
    };
    AWMedia.prototype.play = function () {
        // TODO
    };
    AWMedia.prototype.release = function () {
        // TODO
    };
    AWMedia.prototype.seekTo = function (value) {
        // TODO
    };
    AWMedia.prototype.setVolume = function (value) {
        // TODO
    };
    AWMedia.prototype.startRecord = function () {
        // TODO
    };
    AWMedia.prototype.stop = function () {
        // TODO
    };
    AWMedia.prototype.stopRecord = function () {
        // TODO
    };
    return AWMedia;
}(aw_plugin_1.AWPlugin));
exports.AWMedia = AWMedia;
