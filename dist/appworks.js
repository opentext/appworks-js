(function (exports) {
'use strict';

function __extends(d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

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
}());

/// <reference path="../../typings/globals/cordova/plugins/contacts/index.d.ts"/>
var MockContacts = (function () {
    function MockContacts() {
        this.fieldType = {};
    }
    MockContacts.prototype.create = function (properties) {
        return null;
    };
    MockContacts.prototype.find = function (fields, onSuccess, onError, options) {
    };
    MockContacts.prototype.pickContact = function (onSuccess, onError) {
    };
    return MockContacts;
}());

/// <reference path="../../typings/globals/cordova/plugins/devicemotion/index.d.ts"/>
var MockAccelerometer = (function () {
    function MockAccelerometer() {
    }
    MockAccelerometer.prototype.getCurrentAcceleration = function (accelerometerSuccess, accelerometerError, accelerometerOptions) {
        return null;
    };
    MockAccelerometer.prototype.watchAcceleration = function (accelerometerSuccess, accelerometerError, accelerometerOptions) {
        return null;
    };
    MockAccelerometer.prototype.clearWatch = function (watchID) {
    };
    return MockAccelerometer;
}());

/// <reference path="../../typings/globals/cordova/plugins/camera/index.d.ts"/>
var MockCamera = (function () {
    function MockCamera() {
    }
    MockCamera.prototype.cleanup = function (onSuccess, onError) {
    };
    MockCamera.prototype.getPicture = function (cameraSuccess, cameraError, cameraOptions) {
    };
    return MockCamera;
}());

/// <reference path="../../typings/globals/cordova/plugins/deviceorientation/index.d.ts"/>
var MockCompass = (function () {
    function MockCompass() {
    }
    MockCompass.prototype.getCurrentHeading = function (onSuccess, onError, options) {
    };
    MockCompass.prototype.watchHeading = function (onSuccess, onError, options) {
        return null;
    };
    MockCompass.prototype.clearWatch = function (id) {
    };
    return MockCompass;
}());

/// <reference path="../../typings/globals/cordova/plugins/devicemotion/index.d.ts"/>
var MockGeolocation = (function () {
    function MockGeolocation() {
    }
    MockGeolocation.prototype.clearWatch = function (watchId) {
    };
    MockGeolocation.prototype.getCurrentPosition = function (successCallback, errorCallback, options) {
    };
    MockGeolocation.prototype.watchPosition = function (successCallback, errorCallback, options) {
        return null;
    };
    return MockGeolocation;
}());

/// <reference path="../../typings/globals/cordova/plugins/media/index.d.ts"/>
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

/// <reference path="../../typings/globals/cordova/plugins/mediacapture/index.d.ts"/>
var MockCapture = (function () {
    function MockCapture() {
    }
    MockCapture.prototype.captureAudio = function (onSuccess, onError, options) {
    };
    MockCapture.prototype.captureImage = function (onSuccess, onError, options) {
    };
    MockCapture.prototype.captureVideo = function (onSuccess, onError, options) {
    };
    return MockCapture;
}());

/// <reference path="../../typings/globals/cordova/plugins/dialogs/index.d.ts"/>
var MockNotification = (function () {
    function MockNotification() {
    }
    MockNotification.prototype.alert = function (message, alertCallback, title, buttonName) {
    };
    MockNotification.prototype.beep = function (times) {
    };
    MockNotification.prototype.confirm = function (message, confirmCallback, title, buttonLabels) {
    };
    MockNotification.prototype.prompt = function (message, promptCallback, title, buttonLabels, defaultText) {
    };
    MockNotification.prototype.vibrate = function () {
    };
    MockNotification.prototype.vibrateWithPattern = function () {
    };
    MockNotification.prototype.cancelVibration = function () {
    };
    return MockNotification;
}());

/// <reference path="../../typings/globals/cordova/plugins/networkinformation/index.d.ts"/>
/// <reference path="../../typings/globals/cordova/plugins/dialogs/index.d.ts"/>
var MockConnection = (function () {
    function MockConnection() {
    }
    MockConnection.prototype.addEventListener = function (type, listener, useCapture) {
    };
    MockConnection.prototype.removeEventListener = function (type, listener, useCapture) {
    };
    return MockConnection;
}());

/// <reference path="../../typings/globals/cordova/plugins/vibration/index.d.ts"/>
var MockVibrate = (function () {
    function MockVibrate() {
    }
    MockVibrate.prototype.vibrate = function (time) {
    };
    return MockVibrate;
}());

/// <reference path="../../typings/globals/cordova/plugins/inappbrowser/index.d.ts"/>
var MockWebview = (function () {
    function MockWebview() {
    }
    MockWebview.prototype.open = function (url, target, options) {
        return null;
    };
    return MockWebview;
}());

var LocalFileSystem;
(function (LocalFileSystem) {
    LocalFileSystem[LocalFileSystem["PERSISTENT"] = 0] = "PERSISTENT";
    LocalFileSystem[LocalFileSystem["TEMPORARY"] = 1] = "TEMPORARY";
})(LocalFileSystem || (LocalFileSystem = {}));

/// <reference path="../../typings/globals/cordova/plugins/filetransfer/index.d.ts"/>
var MockFileTransfer = (function () {
    function MockFileTransfer() {
    }
    MockFileTransfer.prototype.upload = function (fileURL, server, successCallback, errorCallback, options, trustAllHosts) {
    };
    MockFileTransfer.prototype.download = function (source, target, successCallback, errorCallback, trustAllHosts, options) {
    };
    MockFileTransfer.prototype.abort = function () {
    };
    return MockFileTransfer;
}());

var Util = (function () {
    function Util() {
    }
    Util.noop = function () {
    };
    return Util;
}());

var MockLocalStorage = (function () {
    function MockLocalStorage() {
    }
    MockLocalStorage.prototype.getItem = function (key) {
        return null;
    };
    MockLocalStorage.prototype.setItem = function (key, value) {
        return null;
    };
    MockLocalStorage.prototype.removeItem = function (key) {
        return null;
    };
    MockLocalStorage.prototype.clear = function () {
        return null;
    };
    MockLocalStorage.prototype.key = function (index) {
        return null;
    };
    return MockLocalStorage;
}());

/// <reference path='../typings/globals/cordova/index.d.ts'/>
/// <reference path='../typings/globals/cordova/plugins/device/index.d.ts'/>
/// <reference path='../typings/globals/cordova/plugins/media/index.d.ts'/>
/// <reference path='../typings/globals/cordova/plugins/networkinformation/index.d.ts'/>
/// <reference path='../typings/globals/cordova/plugins/inappbrowser/index.d.ts'/>
/// <reference path='../typings/globals/cordova/plugins/filesystem/index.d.ts'/>
/// <reference path='../typings/globals/cordova/plugins/mediacapture/index.d.ts'/>
/// <reference path='../typings/globals/cordova/plugins/camera/index.d.ts'/>
var AWProxy = (function () {
    function AWProxy() {
    }
    AWProxy.exec = function (successHandler, errorHandler, name, method, args) {
        if (typeof cordova !== 'undefined') {
            cordova.exec(successHandler, errorHandler, name, method, args);
        }
        else if (typeof __aw_plugin_proxy !== 'undefined') {
            __aw_plugin_proxy.exec(successHandler, errorHandler, name, method, args);
        }
        else {
            console.error('No proxy objects defined - tried [Cordova, __aw_plugin_proxy]');
            if (typeof errorHandler === 'function') {
                errorHandler('No proxy objects defined - tried [Cordova, __aw_plugin_proxy]');
            }
        }
    };
    AWProxy.accelerometer = function () {
        return typeof 'navigator' !== undefined ? navigator.accelerometer : new MockAccelerometer();
    };
    AWProxy.camera = function () {
        return typeof navigator !== 'undefined' ? navigator.camera : new MockCamera();
    };
    AWProxy.Camera = function () {
        return (typeof Camera !== 'undefined') ? Camera : {
            DestinationType: {
                DATA_URL: null,
                FILE_URI: null,
                NATIVE_URI: null,
            },
            Direction: {
                BACK: null,
                FRONT: null,
            },
            EncodingType: {
                JPEG: null,
                PNG: null,
            },
            MediaType: {
                PICTURE: null,
                VIDEO: null,
                ALLMEDIA: null,
            },
            PictureSourceType: {
                PHOTOLIBRARY: null,
                CAMERA: null,
                SAVEDPHOTOALBUM: null,
            },
            // Used only on iOS
            PopoverArrowDirection: {
                ARROW_UP: null,
                ARROW_DOWN: null,
                ARROW_LEFT: null,
                ARROW_RIGHT: null,
                ARROW_ANY: null
            }
        };
    };
    AWProxy.compass = function () {
        return typeof navigator !== 'undefined' ? navigator.compass : new MockCompass();
    };
    AWProxy.connection = function () {
        return typeof navigator !== 'undefined' ? navigator.connection : new MockConnection();
    };
    AWProxy.Connection = function () {
        return (typeof Connection !== 'undefined') ? Connection : {
            UNKNOWN: null,
            ETHERNET: null,
            WIFI: null,
            CELL_2G: null,
            CELL_3G: null,
            CELL_4G: null,
            CELL: null,
            NONE: null
        };
    };
    AWProxy.contacts = function () {
        return typeof navigator !== 'undefined' ? navigator.contacts : new MockContacts();
    };
    AWProxy.device = function () {
        var _device = (typeof device !== 'undefined') ? device : {
            cordova: null,
            model: null,
            platform: null,
            uuid: null,
            version: null,
            manufacturer: null,
            isVirtual: null,
            serial: null,
            capture: null
        };
        if (typeof navigator !== 'undefined' && navigator.device && navigator.device.capture) {
            _device.capture = navigator.device.capture;
        }
        else {
            _device.capture = new MockCapture();
        }
        return _device;
    };
    AWProxy.document = function () {
        return (typeof document !== 'undefined') ? document : {
            addEventListener: Util.noop
        };
    };
    AWProxy.filetransfer = function () {
        return (typeof FileTransfer !== 'undefined') ? new FileTransfer() : new MockFileTransfer();
    };
    AWProxy.geolocation = function () {
        return (typeof navigator !== 'undefined') ? navigator.geolocation : new MockGeolocation();
    };
    AWProxy.localFileSystem = function () {
        return LocalFileSystem;
    };
    AWProxy.media = function (src, successHandler, errorHandler, statusChangeHandler) {
        if (typeof Media !== 'undefined') {
            return new Media(src, successHandler, errorHandler, statusChangeHandler);
        }
        else {
            return new MockMedia(src, successHandler, errorHandler, statusChangeHandler);
        }
    };
    AWProxy.notification = function () {
        return (typeof navigator !== 'undefined') ? navigator.notification : new MockNotification();
    };
    AWProxy.requestFileSystem = function (type, size, successCallback, errorCallback) {
        if (window.requestFileSystem) {
            return window.requestFileSystem(type, size, successCallback, errorCallback);
        }
    };
    AWProxy.vibrate = function (time) {
        if (typeof navigator !== 'undefined' && navigator.vibrate) {
            return navigator.vibrate(time);
        }
        else {
            return new MockVibrate().vibrate(time);
        }
    };
    AWProxy.webview = function () {
        if (typeof cordova !== 'undefined') {
            return cordova.InAppBrowser;
        }
        else {
            return (new MockWebview());
        }
    };
    AWProxy.storage = function () {
        return (typeof window !== 'undefined') ? window.localStorage : new MockLocalStorage();
    };
    return AWProxy;
}());

var AWAccelerometer$1 = (function (_super) {
    __extends(AWAccelerometer, _super);
    function AWAccelerometer() {
        _super.apply(this, arguments);
    }
    AWAccelerometer.prototype.getCurrentAcceleration = function () {
        var _this = this;
        return AWProxy.accelerometer().getCurrentAcceleration((function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })());
    };
    AWAccelerometer.prototype.watchAcceleration = function (options) {
        var _this = this;
        return AWProxy.accelerometer().watchAcceleration((function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })(), options);
    };
    AWAccelerometer.prototype.clearWatch = function (watchId) {
        return AWProxy.accelerometer().clearWatch(watchId);
    };
    return AWAccelerometer;
}(AWPlugin));

var AWAppManager$1 = (function (_super) {
    __extends(AWAppManager, _super);
    function AWAppManager() {
        _super.apply(this, arguments);
    }
    AWAppManager.prototype.closeActiveApp = function () {
        var _this = this;
        AWProxy.exec((function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })(), 'AWAppManager', 'closeActiveApp', []);
    };
    return AWAppManager;
}(AWPlugin));

var AWAuth$1 = (function (_super) {
    __extends(AWAuth, _super);
    function AWAuth() {
        _super.apply(this, arguments);
    }
    AWAuth.prototype.authenticate = function (force) {
        var _this = this;
        force = !!force;
        AWProxy.exec((function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })(), 'AWAuth', 'authenticate', [force.toString()]);
    };
    AWAuth.prototype.getAuthResponse = function () {
        var _this = this;
        AWProxy.exec((function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })(), 'AWAuth', 'authobject', []);
    };
    AWAuth.prototype.gateway = function (successHandler, errorHandler) {
        AWProxy.exec(successHandler, errorHandler, 'AWAuth', 'gateway', []);
    };
    return AWAuth;
}(AWPlugin));

var AWCache$1 = (function (_super) {
    __extends(AWCache, _super);
    function AWCache(options) {
        _super.call(this, Util.noop, Util.noop);
        this.options = options || { usePersistentStorage: false };
        if (this.options.usePersistentStorage) {
            this.loadPersistentDataIntoLocalStorage();
        }
    }
    AWCache.prototype.setItem = function (key, value) {
        var result = AWProxy.storage().setItem(key, value);
        if (this.options.usePersistentStorage) {
            this.writeLocalStorageDataToPersistentStorage();
        }
        return result;
    };
    AWCache.prototype.getItem = function (key) {
        var result = AWProxy.storage().getItem(key);
        return result;
    };
    AWCache.prototype.removeItem = function (key) {
        var result = AWProxy.storage().removeItem(key);
        if (this.options.usePersistentStorage) {
            this.writeLocalStorageDataToPersistentStorage();
        }
        return result;
    };
    AWCache.prototype.clear = function () {
        var result = AWProxy.storage().clear();
        if (this.options.usePersistentStorage) {
            this.writeLocalStorageDataToPersistentStorage();
        }
        return result;
    };
    AWCache.prototype.readDataFromPersistentStorage = function (callback, errorCallback) {
        var fail = function (error) {
            console.error(error.code);
        };
        if (typeof errorCallback === 'function') {
            fail = errorCallback;
        }
        if (typeof callback !== 'function') {
            callback = Util.noop;
        }
        AWProxy.requestFileSystem(AWProxy.localFileSystem().PERSISTENT, 0, gotFS, fail);
        function gotFS(fileSystem) {
            fileSystem.root.getFile('appworksjs.cache.json', { create: true, exclusive: false }, gotFileEntry, fail);
        }
        function gotFileEntry(entry) {
            entry.file(gotFile, fail);
        }
        function gotFile(file) {
            readAsText(file);
        }
        function readAsText(file) {
            var reader = new FileReader();
            reader.onloadend = function (evt) {
                console.log(evt);
                callback(evt.target.result);
            };
            reader.readAsText(file);
        }
    };
    AWCache.prototype.writeLocalStorageDataToPersistentStorage = function () {
        var i, data = {}, key, value;
        for (i = 0; i < AWProxy.storage().length; i += 1) {
            key = AWProxy.storage().key(i);
            value = AWProxy.storage().getItem(key);
            data[key] = value;
        }
        this.writeDataToPersistentStorage(JSON.stringify(data));
    };
    AWCache.prototype.writeDataToPersistentStorage = function (data) {
        AWProxy.requestFileSystem(AWProxy.localFileSystem().PERSISTENT, 0, gotFS, fail);
        function gotFS(fileSystem) {
            fileSystem.root.getFile('appworksjs.cache.json', { create: true, exclusive: false }, gotFileEntry, fail);
        }
        function gotFileEntry(fileEntry) {
            fileEntry.createWriter(gotFileWriter, fail);
        }
        function gotFileWriter(writer) {
            writer.onwriteend = function () {
                console.info('cache data backed up successfully');
            };
            writer.write(data);
        }
        function fail(error) {
            console.log(error.code);
        }
    };
    AWCache.prototype.loadPersistentDataIntoLocalStorage = function () {
        this.readDataFromPersistentStorage(function (json) {
            var data;
            if (json) {
                data = JSON.parse(json);
                for (var item in data) {
                    window.localStorage.setItem(item, data[item]);
                }
            }
        });
    };
    return AWCache;
}(AWPlugin));

var AWCamera$1 = (function (_super) {
    __extends(AWCamera, _super);
    function AWCamera() {
        _super.apply(this, arguments);
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

var AWCompass$1 = (function (_super) {
    __extends(AWCompass, _super);
    function AWCompass() {
        _super.apply(this, arguments);
    }
    AWCompass.prototype.getCurrentHeading = function () {
        var _this = this;
        return AWProxy.compass().getCurrentHeading((function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })());
    };
    AWCompass.prototype.watchHeading = function (options) {
        var _this = this;
        return AWProxy.compass().watchHeading((function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })(), options);
    };
    AWCompass.prototype.clearWatch = function (watchId) {
        return AWProxy.compass().clearWatch(watchId);
    };
    return AWCompass;
}(AWPlugin));

var AWComponent$1 = (function (_super) {
    __extends(AWComponent, _super);
    function AWComponent() {
        _super.apply(this, arguments);
    }
    AWComponent.prototype.open = function (successHandler, errorHandler, args) {
        AWProxy.exec(successHandler, errorHandler, 'AWComponent', 'open', args || []);
    };
    AWComponent.prototype.list = function (successHandler, errorHandler, args) {
        AWProxy.exec(successHandler, errorHandler, 'AWComponent', 'list', args || []);
    };
    AWComponent.prototype.check = function (successHandler, errorHandler, args) {
        AWProxy.exec(successHandler, errorHandler, 'AWComponent', 'check', args || []);
    };
    AWComponent.prototype.close = function (successHandler, errorHandler, args) {
        AWProxy.exec(successHandler, errorHandler, 'AWComponent', 'close', args || []);
    };
    return AWComponent;
}(AWPlugin));

var AWContacts$1 = (function (_super) {
    __extends(AWContacts, _super);
    function AWContacts() {
        _super.apply(this, arguments);
    }
    AWContacts.prototype.create = function (contact) {
        return AWProxy.contacts().create(contact);
    };
    AWContacts.prototype.find = function (fields, options) {
        var _this = this;
        return AWProxy.contacts().find(fields, (function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })(), options);
    };
    AWContacts.prototype.pickContact = function () {
        var _this = this;
        return AWProxy.contacts().pickContact((function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })());
    };
    return AWContacts;
}(AWPlugin));

var AWDevice$1 = (function (_super) {
    __extends(AWDevice, _super);
    function AWDevice() {
        _super.call(this, function () { }, function () { });
        this.cordova = AWProxy.device().cordova;
        this.model = AWProxy.device().model;
        this.platform = AWProxy.device().platform;
        this.uuid = AWProxy.device().uuid;
        this.version = AWProxy.device().version;
        this.manufacturer = AWProxy.device().manufacturer;
        this.capture = AWProxy.device().capture;
    }
    return AWDevice;
}(AWPlugin));

var AWFileChooser$1 = (function (_super) {
    __extends(AWFileChooser, _super);
    function AWFileChooser() {
        _super.apply(this, arguments);
    }
    AWFileChooser.prototype.selectAndUpload = function (action) {
        var _this = this;
        var args = [action];
        AWProxy.exec((function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })(), 'AWFileChooser', 'open', args);
    };
    return AWFileChooser;
}(AWPlugin));

/// <reference path="../../typings/globals/cordova/index.d.ts"/>
/// <reference path="../../typings/globals/cordova/plugins/filesystem/index.d.ts"/>
/// <reference path="../../typings/globals/cordova/plugins/filetransfer/index.d.ts"/>
var AWFileTransfer$1 = (function (_super) {
    __extends(AWFileTransfer, _super);
    function AWFileTransfer(successHandler, errorHandler) {
        _super.call(this, successHandler, errorHandler);
        this.fileTransfer = AWProxy.filetransfer();
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
            cordova.exec(gotSharedContainerUrl, (function () { return _this.errorHandler; })(), 'AWSharedDocumentProvider', 'containerForCurrentApp', []);
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
            cordova.exec(gotSharedContainerUrl, (function () { return _this.errorHandler; })(), 'AWSharedDocumentProvider', 'containerForCurrentApp', []);
        }
        else {
            this.fileTransfer.upload(cordova.file.documentsDirectory + '/' + source, encodeURI(url), successHandler, errorHandler, options, false);
        }
        return this.fileTransfer;
    };
    return AWFileTransfer;
}(AWPlugin));

var AWFinder$1 = (function (_super) {
    __extends(AWFinder, _super);
    function AWFinder() {
        _super.apply(this, arguments);
    }
    AWFinder.prototype.open = function (path, filename) {
        var _this = this;
        var args = [path, filename];
        AWProxy.exec((function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })(), 'AWFinder', 'open', args);
    };
    AWFinder.prototype.openIn = function (filename) {
        return this.openDirect(filename);
    };
    AWFinder.prototype.list = function (path) {
        var _this = this;
        AWProxy.exec((function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })(), 'AWFinder', 'list', [path]);
    };
    AWFinder.prototype.openDirect = function (filename) {
        var _this = this;
        AWProxy.exec((function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })(), 'AWFinder', 'openDirect', [filename]);
    };
    return AWFinder;
}(AWPlugin));

var AWHeaderBar$1 = (function (_super) {
    __extends(AWHeaderBar, _super);
    function AWHeaderBar() {
        _super.apply(this, arguments);
    }
    AWHeaderBar.prototype.setHeader = function (config) {
        var _this = this;
        if (config && config.callback) {
            this.callback = config.callback;
            config.callback = true;
        }
        else {
            this.callback = null;
        }
        AWProxy.exec((function () { return _this.callback; })(), (function () { return _this.errorHandler; })(), 'AWHeaderBar', 'setHeader', [config]);
    };
    AWHeaderBar.prototype.getHeader = function () {
        var _this = this;
        AWProxy.exec((function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })(), 'AWHeaderBar', 'getHeader', []);
    };
    return AWHeaderBar;
}(AWPlugin));
// alias
var AWHeader$1 = (function (_super) {
    __extends(AWHeader, _super);
    function AWHeader() {
        _super.apply(this, arguments);
    }
    return AWHeader;
}(AWHeaderBar$1));

var AWKeyboard$1 = (function (_super) {
    __extends(AWKeyboard, _super);
    function AWKeyboard() {
        _super.call(this, Util.noop, Util.noop);
    }
    AWKeyboard.prototype.hideKeyboardAccessoryBar = function (hide) {
        var _this = this;
        AWProxy.exec((function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })(), 'AWKeyboard', 'hideKeyboardAccessoryBar', [hide.toString()]);
    };
    AWKeyboard.prototype.close = function () {
        var _this = this;
        AWProxy.exec((function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })(), 'AWKeyboard', 'close', []);
    };
    AWKeyboard.prototype.show = function () {
        var _this = this;
        AWProxy.exec((function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })(), 'AWKeyboard', 'show', []);
    };
    AWKeyboard.prototype.disableScroll = function (disable) {
        var _this = this;
        disable = !!disable;
        AWProxy.exec((function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })(), 'AWKeyboard', 'disableScroll', [disable.toString()]);
    };
    return AWKeyboard;
}(AWPlugin));

var AWLocation$1 = (function (_super) {
    __extends(AWLocation, _super);
    function AWLocation() {
        _super.apply(this, arguments);
    }
    AWLocation.prototype.getCurrentPosition = function (options) {
        var _this = this;
        return AWProxy.geolocation().getCurrentPosition((function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })(), options);
    };
    AWLocation.prototype.watchPosition = function (options) {
        var _this = this;
        return AWProxy.geolocation().watchPosition((function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })(), options);
    };
    AWLocation.prototype.clearWatch = function (watchId) {
        AWProxy.geolocation().clearWatch(watchId);
    };
    return AWLocation;
}(AWPlugin));

var AWMedia$1 = (function (_super) {
    __extends(AWMedia, _super);
    function AWMedia(src, successHandler, errorHandler, statusChangeHandler) {
        _super.call(this, successHandler, errorHandler);
        this.media = AWProxy.media(src, successHandler, errorHandler, statusChangeHandler);
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
}(AWPlugin));

var AWMediaCapture$1 = (function (_super) {
    __extends(AWMediaCapture, _super);
    function AWMediaCapture(successHandler, errorHandler) {
        _super.call(this, successHandler, errorHandler);
        this.supportedAudioModes = AWProxy.device().capture.supportedAudioModes;
        this.supportedImageModes = AWProxy.device().capture.supportedImageModes;
        this.supportedVideoModes = AWProxy.device().capture.supportedVideoModes;
    }
    AWMediaCapture.prototype.captureAudio = function (options) {
        var _this = this;
        AWProxy.device().capture.captureAudio((function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })(), options);
    };
    AWMediaCapture.prototype.captureImage = function (options) {
        var _this = this;
        AWProxy.device().capture.captureImage((function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })(), options);
    };
    AWMediaCapture.prototype.captureVideo = function (options) {
        var _this = this;
        AWProxy.device().capture.captureVideo((function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })(), options);
    };
    return AWMediaCapture;
}(AWPlugin));

var AWMenu$1 = (function (_super) {
    __extends(AWMenu, _super);
    function AWMenu() {
        _super.apply(this, arguments);
    }
    AWMenu.prototype.push = function (items) {
        var _this = this;
        var args = [items];
        AWProxy.exec((function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })(), 'AWMenu', 'push', args);
    };
    AWMenu.prototype.openListener = function (listener) {
        var _this = this;
        AWProxy.exec(listener, (function () { return _this.errorHandler; })(), 'AWMenu', 'receive', []);
    };
    AWMenu.prototype.didTapMenuItem = function (listener) {
        return this.openListener(listener);
    };
    return AWMenu;
}(AWPlugin));

var AWNotificationManager$1 = (function (_super) {
    __extends(AWNotificationManager, _super);
    function AWNotificationManager() {
        _super.call(this, Util.noop, Util.noop);
    }
    AWNotificationManager.prototype.enablePushNotifications = function (handler, errorHandler) {
        AWProxy.exec(handler, errorHandler, 'AWNotificationManager', 'enablePushNotifications', []);
    };
    AWNotificationManager.prototype.disablePushNotifications = function () {
        AWProxy.exec(null, null, 'AWNotificationManager', 'disablePushNotifications', []);
    };
    AWNotificationManager.prototype.getNotifications = function (handler, errorHandler) {
        AWProxy.exec(handler, errorHandler, 'AWNotificationManager', 'getPushNotifications', []);
    };
    AWNotificationManager.prototype.getOpeningNotification = function (handler, errorHandler) {
        AWProxy.exec(handler, errorHandler, 'AWNotificationManager', 'getOpeningNotification', []);
    };
    AWNotificationManager.prototype.notificationDidLaunchApp = function (handler, errorHandler) {
        this.getOpeningNotification(handler, errorHandler);
    };
    AWNotificationManager.prototype.openListener = function (handler, errorHandler) {
        AWProxy.exec(handler, errorHandler, 'AWNotificationManager', 'openListener', []);
    };
    AWNotificationManager.prototype.didTapNotificationFromActivityView = function (handler, errorHandler) {
        this.openListener(handler, errorHandler);
    };
    AWNotificationManager.prototype.alert = function (message, alertCallback, title, buttonName) {
        AWProxy.notification().alert(message, alertCallback, title, buttonName);
    };
    AWNotificationManager.prototype.beep = function (times) {
        AWProxy.notification().beep(times);
    };
    AWNotificationManager.prototype.confirm = function (message, confirmCallback, title, buttonLabels) {
        AWProxy.notification().confirm(message, confirmCallback, title, buttonLabels);
    };
    AWNotificationManager.prototype.prompt = function (message, promptCallback, title, buttonLabels, defaultText) {
        AWProxy.notification().prompt(message, promptCallback, title, buttonLabels, defaultText);
    };
    return AWNotificationManager;
}(AWPlugin));

var AWOfflineManager$1 = (function (_super) {
    __extends(AWOfflineManager, _super);
    function AWOfflineManager(options) {
        _super.call(this, Util.noop, Util.noop);
        var _this = this;
        var queue, document;
        this.cacheKey = '__appworksjs.deferredQueue';
        this.cache = new AWCache$1();
        this.options = options || { preserveEvents: false };
        document = AWProxy.document();
        // process deferred queue when network status changes
        document.addEventListener('online', function () {
            _this.processDeferredQueue();
        });
        // load the deferred queue into memory
        queue = this.cache.getItem(this.cacheKey);
        if (queue) {
            this.queue = JSON.parse(queue);
        }
        else {
            this.queue = [];
            this.saveQueue();
        }
        // process the deferred queue upon object instantiation if we are currently online
        if (this.networkStatus().online) {
            this.processDeferredQueue();
        }
    }
    AWOfflineManager.prototype.defer = function (eventName, args) {
        this.queue.push({
            event: eventName,
            args: JSON.stringify(args)
        });
        this.saveQueue();
        return (this.queue.length - 1);
    };
    AWOfflineManager.prototype.cancel = function (id) {
        if (id > -1) {
            this.queue.splice(id, 1);
            this.saveQueue();
        }
    };
    AWOfflineManager.prototype.networkStatus = function () {
        return {
            online: AWProxy.connection().type !== AWProxy.Connection().NONE,
            offline: AWProxy.connection().type === AWProxy.Connection().NONE,
            connection: AWProxy.connection()
        };
    };
    AWOfflineManager.prototype.saveQueue = function () {
        this.cache.setItem(this.cacheKey, JSON.stringify(this.queue));
    };
    AWOfflineManager.prototype.processDeferredQueue = function () {
        var self = this;
        console.info('appworks.js: processing deferred queue');
        setTimeout(function () {
            self.queue.forEach(function (deferred) {
                self.dispatchEvent(deferred);
            });
            if (!self.options.preserveEvents) {
                self.queue = [];
                self.saveQueue();
            }
        }, 5000);
    };
    AWOfflineManager.prototype.dispatchEvent = function (data) {
        var event = new CustomEvent(data.event, { detail: data.args });
        document.dispatchEvent(event);
    };
    return AWOfflineManager;
}(AWPlugin));

var AWPage$1 = (function (_super) {
    __extends(AWPage, _super);
    function AWPage() {
        _super.apply(this, arguments);
    }
    AWPage.prototype.setPageUrl = function (url) {
        var _this = this;
        AWProxy.exec((function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })(), 'AWPage', 'setPageUrl', [url]);
    };
    return AWPage;
}(AWPlugin));

var QRReader$1 = (function (_super) {
    __extends(QRReader, _super);
    function QRReader() {
        _super.apply(this, arguments);
    }
    QRReader.prototype.scan = function () {
        var _this = this;
        AWProxy.exec((function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })(), 'AWQRCodeReader', 'scan', []);
    };
    QRReader.prototype.rename = function () {
        var _this = this;
        AWProxy.exec((function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })(), 'AWQRCodeReader', 'rename', []);
    };
    return QRReader;
}(AWPlugin));
var AWQRReader$1 = (function (_super) {
    __extends(AWQRReader, _super);
    function AWQRReader() {
        _super.apply(this, arguments);
    }
    return AWQRReader;
}(QRReader$1));

var SecureStorage$1 = (function (_super) {
    __extends(SecureStorage, _super);
    function SecureStorage(successHandler, errorHandler) {
        _super.call(this, successHandler, errorHandler);
        this.seqNo = ++SecureStorage.idCounter;
        this.onprogress = null;
    }
    SecureStorage.prototype.store = function (url, target, options) {
        var _this = this;
        var args = [encodeURI(url), target, false, this.seqNo, options && options.headers], completionHandler = function () { return _this.successHandler; }, progressHandler = this.onprogress, progress;
        function newProgressEvent(result) {
            var pe = new ProgressEvent(null);
            pe.lengthComputable = result.lengthComputable;
            pe.loaded = result.loaded;
            pe.total = result.total;
            return pe;
        }
        progress = function (result) {
            if (typeof result.lengthComputable !== 'undefined') {
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
        AWProxy.exec(progress, (function () { return _this.errorHandler; })(), 'AWSecureStorage', 'store', args);
    };
    SecureStorage.prototype.retrieve = function (filename, options) {
        var _this = this;
        var args = [filename, options];
        AWProxy.exec((function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })(), 'AWSecureStorage', 'retrieve', args);
    };
    SecureStorage.prototype.remove = function (target) {
        var _this = this;
        var args = [target];
        AWProxy.exec((function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })(), 'AWSecureStorage', 'removeFile', args);
    };
    SecureStorage.prototype.fileExistsAtPath = function (target) {
        var _this = this;
        var args = [target];
        AWProxy.exec((function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })(), 'AWSecureStorage', 'fileExistsAtPath', args);
    };
    SecureStorage.idCounter = 0;
    return SecureStorage;
}(AWPlugin));
var AWSecureStorage$1 = (function (_super) {
    __extends(AWSecureStorage, _super);
    function AWSecureStorage() {
        _super.apply(this, arguments);
    }
    return AWSecureStorage;
}(SecureStorage$1));

var AWVibration$1 = (function (_super) {
    __extends(AWVibration, _super);
    function AWVibration() {
        _super.call(this, Util.noop, Util.noop);
    }
    AWVibration.prototype.vibrate = function (time) {
        return AWProxy.vibrate(time);
    };
    return AWVibration;
}(AWPlugin));

var AWWebView$1 = (function (_super) {
    __extends(AWWebView, _super);
    function AWWebView() {
        _super.call(this, Util.noop, Util.noop);
    }
    AWWebView.prototype.open = function (url, target, options) {
        return AWProxy.webview().open(url, target, options);
    };
    return AWWebView;
}(AWPlugin));

// Accelerometer plugin and alias -- [mobile]
var Accelerometer = AWAccelerometer$1;
var AWAccelerometer$$1 = AWAccelerometer$1;
// AppManager plugin and alias -- [mobile]
var AppManager = AWAppManager$1;
var AWAppManager$$1 = AWAppManager$1;
// Auth plugin and alias -- [mobile]
var Auth = AWAuth$1;
var AWAuth$$1 = AWAuth$1;
// Cache plugin and alias -- [mobile]
var Cache = AWCache$1;
var AWCache$$1 = AWCache$1;
// Camera plugin and alias -- [mobile]
var Camera$1 = AWCamera$1;
var AWCamera$$1 = AWCamera$1;
// Compass plugin and alias -- [mobile]
var Compass = AWCompass$1;
var AWCompass$$1 = AWCompass$1;
// Component plugin and alias -- [mobile]
var Component = AWComponent$1;
var AWComponent$$1 = AWComponent$1;
// Contacts plugin and alias -- [mobile]
var Contacts = AWContacts$1;
var AWContacts$$1 = AWContacts$1;
// Device plugin and alias -- [mobile]
var Device = AWDevice$1;
var AWDevice$$1 = AWDevice$1;
// FileChooser plugin and alias -- [mobile]
var FileChooser = AWFileChooser$1;
var AWFileChooser$$1 = AWFileChooser$1;
// FileTransfer plugin and alias -- [mobile]
var FileTransfer$1 = AWFileTransfer$1;
var AWFileTransfer$$1 = AWFileTransfer$1;
// Finder plugin and alias -- [mobile]
var Finder = AWFinder$1;
var AWFinder$$1 = AWFinder$1;
// Header plugin and alias -- [mobile]
var HeaderBar = AWHeaderBar$1;
var Header = AWHeaderBar$1;
var AWHeader$$1 = AWHeaderBar$1;
var AWHeaderBar$$1 = AWHeaderBar$1;
// Keyboard plugin and alias -- [mobile]
var Keyboard = AWKeyboard$1;
var AWKeyboard$$1 = AWKeyboard$1;
// Location plugin and alias -- [mobile]
var Location = AWLocation$1;
var AWLocation$$1 = AWLocation$1;
// Media plugin and alias -- [mobile]
var Media$1 = AWMedia$1;
var AWMedia$$1 = AWMedia$1;
// MediaCapture plugin and alias -- [mobile]
var MediaCapture = AWMediaCapture$1;
var AWMediaCapture$$1 = AWMediaCapture$1;
// Menu plugin and alias -- [mobile]
var Menu = AWMenu$1;
var AWMenu$$1 = AWMenu$1;
var AWHamburgerMenu = AWMenu$1;
var HamburgerMenu = AWMenu$1;
// NotificationManager plugin and alias -- [mobile]
var NotificationManager = AWNotificationManager$1;
var AWNotificationManager$$1 = AWNotificationManager$1;
// OfflineManager plugin and alias -- [mobile]
var OfflineManager = AWOfflineManager$1;
var AWOfflineManager$$1 = AWOfflineManager$1;
// Page plugin and alias -- [mobile]
var Page = AWPage$1;
var AWPage$$1 = AWPage$1;
// QRReader plugin and alias -- [mobile]
var QRReader$$1 = AWQRReader$1;
var AWQRReader$$1 = AWQRReader$1;
// SecureStorage plugin and alias -- [mobile]
var SecureStorage$$1 = AWSecureStorage$1;
var AWSecureStorage$$1 = AWSecureStorage$1;
// Vibration plugin and alias -- [mobile]
var Vibration = AWVibration$1;
var AWVibration$$1 = AWVibration$1;
// Webview plugin and alias -- [mobile]
var WebView = AWWebView$1;
var AWWebView$$1 = AWWebView$1;
var Webview = AWWebView$1;
var AWWebview = AWWebView$1;

exports.Accelerometer = Accelerometer;
exports.AWAccelerometer = AWAccelerometer$$1;
exports.AppManager = AppManager;
exports.AWAppManager = AWAppManager$$1;
exports.Auth = Auth;
exports.AWAuth = AWAuth$$1;
exports.Cache = Cache;
exports.AWCache = AWCache$$1;
exports.Camera = Camera$1;
exports.AWCamera = AWCamera$$1;
exports.Compass = Compass;
exports.AWCompass = AWCompass$$1;
exports.Component = Component;
exports.AWComponent = AWComponent$$1;
exports.Contacts = Contacts;
exports.AWContacts = AWContacts$$1;
exports.Device = Device;
exports.AWDevice = AWDevice$$1;
exports.FileChooser = FileChooser;
exports.AWFileChooser = AWFileChooser$$1;
exports.FileTransfer = FileTransfer$1;
exports.AWFileTransfer = AWFileTransfer$$1;
exports.Finder = Finder;
exports.AWFinder = AWFinder$$1;
exports.HeaderBar = HeaderBar;
exports.Header = Header;
exports.AWHeader = AWHeader$$1;
exports.AWHeaderBar = AWHeaderBar$$1;
exports.Keyboard = Keyboard;
exports.AWKeyboard = AWKeyboard$$1;
exports.Location = Location;
exports.AWLocation = AWLocation$$1;
exports.Media = Media$1;
exports.AWMedia = AWMedia$$1;
exports.MediaCapture = MediaCapture;
exports.AWMediaCapture = AWMediaCapture$$1;
exports.Menu = Menu;
exports.AWMenu = AWMenu$$1;
exports.AWHamburgerMenu = AWHamburgerMenu;
exports.HamburgerMenu = HamburgerMenu;
exports.NotificationManager = NotificationManager;
exports.AWNotificationManager = AWNotificationManager$$1;
exports.OfflineManager = OfflineManager;
exports.AWOfflineManager = AWOfflineManager$$1;
exports.Page = Page;
exports.AWPage = AWPage$$1;
exports.QRReader = QRReader$$1;
exports.AWQRReader = AWQRReader$$1;
exports.SecureStorage = SecureStorage$$1;
exports.AWSecureStorage = AWSecureStorage$$1;
exports.Vibration = Vibration;
exports.AWVibration = AWVibration$$1;
exports.WebView = WebView;
exports.AWWebView = AWWebView$$1;
exports.Webview = Webview;
exports.AWWebview = AWWebview;

}((this.Appworks = this.Appworks || {})));
//# sourceMappingURL=appworks.js.map
