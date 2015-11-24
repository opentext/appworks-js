/// <reference path="../typings/cordova/cordova.d.ts"/>
/// <reference path="../typings/cordova/plugins/Camera.d.ts"/>
/// <reference path="../typings/cordova/plugins/Contacts.d.ts"/>
/// <reference path="../typings/cordova/plugins/Device.d.ts"/>
/// <reference path="../typings/cordova/plugins/DeviceMotion.d.ts"/>
/// <reference path="../typings/cordova/plugins/DeviceOrientation.d.ts"/>
/// <reference path="../typings/cordova/plugins/Dialogs.d.ts"/>
/// <reference path="../typings/cordova/plugins/Media.d.ts"/>
/// <reference path="../typings/cordova/plugins/MediaCapture.d.ts"/>
/// <reference path="../typings/cordova/plugins/NetworkInformation.d.ts"/>
/// <reference path="../typings/cordova/plugins/Vibration.d.ts"/>
/// <reference path="../typings/cordova/plugins/FileTransfer.d.ts"/>
/// <reference path="../typings/cordova/plugins/FileSystem.d.ts"/>
/// <reference path="../typings/cordova/plugins/BatteryStatus.d.ts"/>
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
    var idCounter = 0;
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
                destinationType: Camera.DestinationType.FILE_URI
            };
            options.sourceType = Camera.PictureSourceType.PHOTOLIBRARY;
            this.getPicture((function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })(), options);
        };
        AWCamera.prototype.takePicture = function (options) {
            var _this = this;
            options = options || {
                destinationType: Camera.DestinationType.FILE_URI,
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
            this.seqNo = ++idCounter;
            this.onprogress = null;
        }
        SecureStorage.prototype.store = function (url, target, options) {
            var _this = this;
            var args = [url, target, false, this.seqNo, options && options.headers], completionHandler = function () { return _this.successHandler; }, progressHandler = this.onprogress, progress;
            function newProgressEvent(result) {
                var pe = new ProgressEvent(null);
                pe.lengthComputable = result.lengthComputable;
                pe.loaded = result.loaded;
                pe.total = result.total;
                return pe;
            }
            progress = function (result) {
                if (typeof result.lengthComputable != "undefined") {
                    if (progressHandler) {
                        progressHandler(newProgressEvent(result));
                    }
                }
                else {
                    if (completionHandler) {
                        completionHandler()(result);
                    }
                }
            };
            cordova.exec(progress, (function () { return _this.errorHandler; })(), 'AWSecureStorage', 'store', args);
        };
        SecureStorage.prototype.retrieve = function (filename, options) {
            var _this = this;
            var args = [filename, options];
            cordova.exec((function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })(), 'AWSecureStorage', 'retrieve', args);
        };
        return SecureStorage;
    })(AWPlugin);
    Appworks.SecureStorage = SecureStorage;
    var AWFileTransfer = (function (_super) {
        __extends(AWFileTransfer, _super);
        function AWFileTransfer() {
            _super.apply(this, arguments);
            this.fileTransfer = new FileTransfer();
            this.onprogress = null;
        }
        AWFileTransfer.prototype.abort = function () {
            this.fileTransfer.abort();
        };
        AWFileTransfer.prototype.download = function (url, target, options, shared) {
            var _this = this;
            var successHandler = this.successHandler, errorHandler = this.errorHandler;
            options = options || {};
            function gotSharedContainerUrl(containerUrl) {
                new FileTransfer().download(encodeURI(url), containerUrl + '/' + target, successHandler, errorHandler, false, options);
            }
            if (shared) {
                cordova.exec(gotSharedContainerUrl, (function () { return _this.errorHandler; })(), 'AWSharedDocumentProvider', 'container');
            }
            else {
                this.fileTransfer.download(encodeURI(url), cordova.file.documentsDirectory + '/' + target, successHandler, errorHandler, false, options);
            }
            return this.fileTransfer;
        };
        AWFileTransfer.prototype.progressHandler = function (handler) {
            this.fileTransfer.onprogress = handler;
        };
        AWFileTransfer.prototype.upload = function (source, url, options, shared) {
            var _this = this;
            var successHandler = this.successHandler, errorHandler = this.errorHandler;
            options = options || {};
            function gotSharedContainerUrl(containerUrl) {
                new FileTransfer().upload(containerUrl + '/' + source, encodeURI(url), successHandler, errorHandler, options, false);
            }
            if (shared) {
                cordova.exec(gotSharedContainerUrl, (function () { return _this.errorHandler; })(), 'AWSharedDocumentProvider', 'container');
            }
            else {
                this.fileTransfer.upload(cordova.file.documentsDirectory + '/' + source, encodeURI(url), successHandler, errorHandler, options, false);
            }
            return this.fileTransfer;
        };
        return AWFileTransfer;
    })(AWPlugin);
    Appworks.AWFileTransfer = AWFileTransfer;
    var AWContacts = (function (_super) {
        __extends(AWContacts, _super);
        function AWContacts() {
            _super.apply(this, arguments);
            this.options = navigator.contacts;
        }
        AWContacts.prototype.create = function (contact) {
            return navigator.contacts.create(contact);
        };
        AWContacts.prototype.find = function (fields, options) {
            var _this = this;
            navigator.contacts.find(fields, (function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })(), options);
        };
        AWContacts.prototype.pickContact = function () {
            var _this = this;
            navigator.contacts.pickContact((function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })());
        };
        return AWContacts;
    })(AWPlugin);
    Appworks.AWContacts = AWContacts;
    var AWDevice = (function (_super) {
        __extends(AWDevice, _super);
        function AWDevice() {
            _super.call(this, function () { }, function () { });
            this.cordova = device.cordova;
            this.model = device.model;
            this.platform = device.platform;
            this.uuid = device.uuid;
            this.version = device.version;
            this.manufacturer = device.manufacturer;
        }
        return AWDevice;
    })(AWPlugin);
    Appworks.AWDevice = AWDevice;
    var AWAccelerometer = (function (_super) {
        __extends(AWAccelerometer, _super);
        function AWAccelerometer() {
            _super.apply(this, arguments);
        }
        return AWAccelerometer;
    })(AWPlugin);
    Appworks.AWAccelerometer = AWAccelerometer;
    var AWCompass = (function (_super) {
        __extends(AWCompass, _super);
        function AWCompass() {
            _super.apply(this, arguments);
        }
        return AWCompass;
    })(AWPlugin);
    Appworks.AWCompass = AWCompass;
    var AWLocation = (function (_super) {
        __extends(AWLocation, _super);
        function AWLocation() {
            _super.apply(this, arguments);
        }
        AWLocation.prototype.getCurrentPosition = function (options) {
            var _this = this;
            navigator.geolocation.getCurrentPosition((function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })(), options);
        };
        AWLocation.prototype.watchPosition = function (options) {
            var _this = this;
            navigator.geolocation.watchPosition((function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })(), options);
        };
        AWLocation.prototype.clearWatch = function (watchId) {
            navigator.geolocation.clearWatch(watchId);
        };
        return AWLocation;
    })(AWPlugin);
    Appworks.AWLocation = AWLocation;
    var AWMedia = (function (_super) {
        __extends(AWMedia, _super);
        function AWMedia() {
            _super.apply(this, arguments);
        }
        return AWMedia;
    })(AWPlugin);
    Appworks.AWMedia = AWMedia;
    var AWMediaCapture = (function (_super) {
        __extends(AWMediaCapture, _super);
        function AWMediaCapture() {
            _super.apply(this, arguments);
        }
        return AWMediaCapture;
    })(AWPlugin);
    Appworks.AWMediaCapture = AWMediaCapture;
    var AWNotificationManager = (function (_super) {
        __extends(AWNotificationManager, _super);
        function AWNotificationManager() {
            _super.call(this, function () { }, function () { });
        }
        AWNotificationManager.prototype.alert = function (message, alertCallback, title, buttonName) {
            navigator.notification.alert(message, alertCallback, title, buttonName);
        };
        AWNotificationManager.prototype.beep = function (times) {
            navigator.notification.beep(times);
        };
        AWNotificationManager.prototype.confirm = function (message, confirmCallback, title, buttonLabels) {
            navigator.notification.confirm(message, confirmCallback, title, buttonLabels);
        };
        AWNotificationManager.prototype.prompt = function (message, promptCallback, title, buttonLabels, defaultText) {
            navigator.notification.prompt(message, promptCallback, title, buttonLabels, defaultText);
        };
        return AWNotificationManager;
    })(AWPlugin);
    Appworks.AWNotificationManager = AWNotificationManager;
    var AWVibration = (function (_super) {
        __extends(AWVibration, _super);
        function AWVibration() {
            _super.call(this, function () { }, function () { });
        }
        AWVibration.prototype.vibrate = function (time) {
            return navigator.vibrate(time);
        };
        return AWVibration;
    })(AWPlugin);
    Appworks.AWVibration = AWVibration;
    var AWOfflineManager = (function (_super) {
        __extends(AWOfflineManager, _super);
        function AWOfflineManager() {
            _super.apply(this, arguments);
        }
        return AWOfflineManager;
    })(AWPlugin);
    Appworks.AWOfflineManager = AWOfflineManager;
    var AWCache = (function (_super) {
        __extends(AWCache, _super);
        function AWCache() {
            _super.apply(this, arguments);
        }
        return AWCache;
    })(AWPlugin);
    Appworks.AWCache = AWCache;
})(Appworks || (Appworks = {}));
//# sourceMappingURL=appworks.js.map