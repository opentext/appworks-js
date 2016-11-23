/// <reference path="../../typings/globals/cordova/index.d.ts"/>
/// <reference path="../../typings/globals/cordova/plugins/media/index.d.ts"/>
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
        this.media = new Media(src, successHandler, errorHandler, statusChangeHandler);
        this.src = src;
        this.position = this.media.position;
        this.duration = this.media.duration;
    }
    AWMedia.prototype.getCurrentPosition = function (successHandler, errorHandler) {
        return this.media.getCurrentPosition(successHandler, errorHandler);
    };
    AWMedia.prototype.getDuration = function () {
        return this.media.getDuration();
    };
    AWMedia.prototype.pause = function () {
        return this.media.pause();
    };
    AWMedia.prototype.play = function () {
        return this.media.play();
    };
    AWMedia.prototype.release = function () {
        return this.media.release();
    };
    AWMedia.prototype.seekTo = function (value) {
        return this.media.seekTo(value);
    };
    AWMedia.prototype.setVolume = function (value) {
        return this.media.setVolume(value);
    };
    AWMedia.prototype.startRecord = function () {
        return this.media.startRecord();
    };
    AWMedia.prototype.stop = function () {
        return this.media.stop();
    };
    AWMedia.prototype.stopRecord = function () {
        return this.media.stopRecord();
    };
    return AWMedia;
}(aw_plugin_1.AWPlugin));
exports.AWMedia = AWMedia;
