/// <reference path="../typings/cordova/cordova.d.ts"/>
/// <reference path="../typings/cordova/plugins/Camera.d.ts"/>
/// <reference path="../typings/cordova/plugins/FileTransfer.d.ts"/>
/// <reference path="../typings/cordova/plugins/FileSystem.d.ts"/>
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
        AWCamera.prototype.openGallery = function (options) {
            var _this = this;
            options = options || {
                destinationType: Camera.DestinationType.NATIVE_URI
            };
            options.sourceType = Camera.PictureSourceType.PHOTOLIBRARY;
            this.getPicture((function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })(), options);
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
        return AWCamera;
    })(AWPlugin);
    Appworks.AWCamera = AWCamera;
    var Finder = (function (_super) {
        __extends(Finder, _super);
        function Finder() {
            _super.apply(this, arguments);
        }
        Finder.prototype.open = function (path, filename) {
            var _this = this;
            var args = [path, filename];
            cordova.exec((function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })(), 'AWFinder', 'open', args);
        };
        Finder.prototype.openDirect = function (filename) {
            var _this = this;
            cordova.exec((function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })(), 'AWFinder', 'openDirect', [filename]);
        };
        Finder.prototype.list = function (path) {
            var _this = this;
            cordova.exec((function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })(), 'AWFinder', 'list', [path]);
        };
        return Finder;
    })(AWPlugin);
    Appworks.Finder = Finder;
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
    var SecureStorage = (function (_super) {
        __extends(SecureStorage, _super);
        function SecureStorage() {
            _super.apply(this, arguments);
        }
        SecureStorage.prototype.getSharedDocumentUrl = function (callback, errorCallback) {
            var auth = new Appworks.Auth(function (response) {
                callback(response.sharedDocumentUrl + '/');
            }, errorCallback);
            auth.authenticate();
        };
        SecureStorage.prototype.store = function (url, filename, options) {
            var _this = this;
            options = options || {};
            window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, fileTransferHandler, (function () { return _this.errorHandler; })());
            function fileTransferHandler() {
                var _this = this;
                var transfer = new FileTransfer(), directory = cordova.file.documentsDirectory;
                if (options.useSharedDocumentUrl) {
                    this.getSharedDocumentUrl(function (sharedDirectory) {
                        var _this = this;
                        transfer.download(encodeURI(url), sharedDirectory + filename, (function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })(), false, options);
                    }, (function () { return _this.errorHandler; })());
                }
                else {
                    return transfer.download(encodeURI(url), directory + filename, (function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })(), false, options);
                }
            }
        };
        // TODO use directory names and shared document url to access files
        SecureStorage.prototype.retrieve = function (filename, options) {
            var _this = this;
            options = options || {};
            options.fileSystem = options.fileSystem || LocalFileSystem.PERSISTENT;
            if (options.resolveLocalFileSystemURI) {
                window.resolveLocalFileSystemURI(filename, fileHandler, (function () { return _this.errorHandler; })());
            }
            else {
                window.requestFileSystem(options.fileSystem, 0, fileSystemHandler, (function () { return _this.errorHandler; })());
            }
            function fileSystemHandler(fileSystem) {
                var _this = this;
                fileSystem.root.getFile(filename, null, fileHandler, (function () { return _this.errorHandler; })());
            }
            function fileHandler(entry) {
                var _this = this;
                entry.file((function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })());
            }
        };
        return SecureStorage;
    })(AWPlugin);
    Appworks.SecureStorage = SecureStorage;
})(Appworks || (Appworks = {}));
//# sourceMappingURL=appworks.js.map