"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MockMedia = (function () {
    function MockMedia(src, successHandler, errorHandler, statusChangeHandler) {
    }
    MockMedia.prototype.getCurrentPosition = function (mediaSuccess, mediaError) {
    };
    MockMedia.prototype.getDuration = function () {
        return null;
    };
    MockMedia.prototype.play = function (iosPlayOptions) {
    };
    MockMedia.prototype.pause = function () {
    };
    MockMedia.prototype.release = function () {
    };
    MockMedia.prototype.seekTo = function (position) {
    };
    MockMedia.prototype.setVolume = function (volume) {
    };
    MockMedia.prototype.startRecord = function () {
    };
    MockMedia.prototype.stopRecord = function () {
    };
    MockMedia.prototype.stop = function () {
    };
    return MockMedia;
}());
exports.MockMedia = MockMedia;
