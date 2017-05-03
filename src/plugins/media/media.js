var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { AWPlugin } from '../../common/plugin';
import { AWProxy } from '../../common/proxy';
var AWMedia = (function (_super) {
    __extends(AWMedia, _super);
    function AWMedia(src, successHandler, errorHandler, statusChangeHandler) {
        var _this = _super.call(this, successHandler, errorHandler) || this;
        _this.media = AWProxy.media(src, successHandler, errorHandler, statusChangeHandler);
        _this.src = src;
        _this.position = _this.media.position;
        _this.duration = _this.media.duration;
        return _this;
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
}(AWPlugin));
export { AWMedia };
//# sourceMappingURL=media.js.map