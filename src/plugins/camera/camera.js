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
var AWCamera = (function (_super) {
    __extends(AWCamera, _super);
    function AWCamera() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AWCamera.prototype.cleanup = function (onSuccess, onError) {
        return AWProxy.camera().cleanup(onSuccess, onError);
    };
    AWCamera.prototype.getPicture = function (cameraSuccess, cameraError, cameraOptions) {
        return AWProxy.camera().getPicture(cameraSuccess, cameraError, cameraOptions);
    };
    AWCamera.prototype.openGallery = function (options) {
        var _this = this;
        options = options || {
            destinationType: AWProxy.Camera().DestinationType.FILE_URI
        };
        options.sourceType = AWProxy.Camera().PictureSourceType.PHOTOLIBRARY;
        return this.getPicture((function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })(), options);
    };
    AWCamera.prototype.takePicture = function (options) {
        var _this = this;
        options = options || {
            destinationType: AWProxy.Camera().DestinationType.FILE_URI,
            encodingType: AWProxy.Camera().EncodingType.JPEG,
            mediaType: AWProxy.Camera().MediaType.ALLMEDIA,
            correctOrientation: true,
            saveToPhotoAlbum: true
        };
        options.sourceType = AWProxy.Camera().PictureSourceType.CAMERA;
        return this.getPicture((function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })(), options);
    };
    return AWCamera;
}(AWPlugin));
export { AWCamera };
//# sourceMappingURL=camera.js.map