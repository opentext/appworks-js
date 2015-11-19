/// <reference path="../typings/cordova/cordova.d.ts"/>
/// <reference path="../typings/cordova/plugins/Camera.d.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AWPlugin = (function () {
    /**
     * Base plugin class. Constructor takes in a success function and error function to be executed upon
     * return from call to native layer
     * @param successHandler - the function to be executed when the native call succeeds. passes an object as arg
     * @param errorHandler - the function to be executed when the native call fails. passes an object as arg.
     */
    function AWPlugin(successHandler, errorHandler) {
        this.successHandler = successHandler;
        this.errorHandler = errorHandler;
    }
    return AWPlugin;
})();
var Appworks;
(function (Appworks) {
    var Auth = (function (_super) {
        __extends(Auth, _super);
        function Auth() {
            _super.apply(this, arguments);
        }
        Auth.prototype.authenticate = function () {
            var _this = this;
            cordova.exec((function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })(), 'AWAuth', 'authenticate');
        };
        return Auth;
    })(AWPlugin);
    Appworks.Auth = Auth;
    var QRReader = (function (_super) {
        __extends(QRReader, _super);
        function QRReader() {
            _super.apply(this, arguments);
        }
        QRReader.prototype.scan = function () {
            var _this = this;
            cordova.exec((function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })(), 'AWQRCodeReader', 'scan');
        };
        QRReader.prototype.rename = function () {
            var _this = this;
            cordova.exec((function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })(), 'AWQRCodeReader', 'rename');
        };
        return QRReader;
    })(AWPlugin);
    Appworks.QRReader = QRReader;
    var AWCamera = (function (_super) {
        __extends(AWCamera, _super);
        function AWCamera() {
            _super.apply(this, arguments);
        }
        AWCamera.prototype.cleanup = function (onSuccess, onError) {
            navigator.camera.cleanup(onSuccess, onError);
        };
        AWCamera.prototype.getPicture = function (cameraSuccess, cameraError, cameraOptions) {
            navigator.camera.getPicture(cameraSuccess, cameraError, cameraOptions);
        };
        AWCamera.prototype.takePicture = function (options) {
            var _this = this;
            options = options || {
                destinationType: Camera.DestinationType.NATIVE_URI,
                encodingType: Camera.EncodingType.JPEG,
                mediaType: Camera.MediaType.ALLMEDIA,
                correctOrientation: true,
                saveToPhotoAlbum: true
            };
            options.sourceType = Camera.PictureSourceType.CAMERA;
            this.getPicture((function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })(), options);
        };
        AWCamera.prototype.openGallery = function (options) {
            var _this = this;
            options = options || {
                destinationType: Camera.DestinationType.NATIVE_URI
            };
            options.sourceType = Camera.PictureSourceType.PHOTOLIBRARY;
            this.getPicture((function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })(), options);
        };
        return AWCamera;
    })(AWPlugin);
    Appworks.AWCamera = AWCamera;
})(Appworks || (Appworks = {}));
//# sourceMappingURL=appworks.js.map