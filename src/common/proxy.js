"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var accelerometer_1 = require("../../test/mock/accelerometer");
var camera_1 = require("../../test/mock/camera");
var capture_1 = require("../../test/mock/capture");
var compass_1 = require("../../test/mock/compass");
var connection_1 = require("../../test/mock/connection");
var contacts_1 = require("../../test/mock/contacts");
var file_transfer_1 = require("../../test/mock/file-transfer");
var geolocation_1 = require("../../test/mock/geolocation");
var media_1 = require("../../test/mock/media");
var notifications_1 = require("../../test/mock/notifications");
var persistent_storage_1 = require("../../test/mock/persistent-storage");
var vibrate_1 = require("../../test/mock/vibrate");
var local_file_system_1 = require("../plugins/file/local-file-system");
var desktop_storage_1 = require("../plugins/storage/desktop-storage");
var on_device_storage_1 = require("../plugins/storage/on-device-storage");
var storage_1 = require("../plugins/storage/storage");
var desktop_webview_1 = require("../plugins/webview/desktop-webview");
var util_1 = require("./util");
var callbackQueue = [];
var deviceReady = false;
setupDeviceInitializationForMobile();
var AWProxy = (function () {
    function AWProxy() {
    }
    AWProxy.exec = function (successHandler, errorHandler, name, method, args) {
        try {
            if (AWProxy.isDesktopEnv()) {
                AWProxy.execDesktop(successHandler, errorHandler, name, method, args);
            }
            else {
                AWProxy.execMobile(successHandler, errorHandler, name, method, args);
            }
        }
        catch (err) {
            console.error('No proxy objects defined - tried [cordova, __aw_plugin_proxy]', err);
            if (util_1.isFunction(errorHandler)) {
                errorHandler(err);
            }
        }
    };
    AWProxy.accelerometer = function () {
        var _accelerometer = typeof 'navigator' !== undefined ? navigator.accelerometer : new accelerometer_1.MockAccelerometer();
        return _accelerometer;
    };
    AWProxy.camera = function () {
        var _camera = typeof navigator !== 'undefined' ? navigator.camera : new camera_1.MockCamera();
        return _camera;
    };
    AWProxy.Camera = function () {
        var _Camera = (typeof Camera !== 'undefined') ? Camera : {
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
        return _Camera;
    };
    AWProxy.compass = function () {
        var _Compass = typeof navigator !== 'undefined' ? navigator.compass : new compass_1.MockCompass();
        return _Compass;
    };
    AWProxy.connection = function () {
        var _connection = typeof navigator !== 'undefined' ? navigator.connection : new connection_1.MockConnection();
        return _connection;
    };
    AWProxy.Connection = function () {
        var _Connection = (typeof Connection !== 'undefined') ? Connection : {
            UNKNOWN: null,
            ETHERNET: null,
            WIFI: null,
            CELL_2G: null,
            CELL_3G: null,
            CELL_4G: null,
            CELL: null,
            NONE: null
        };
        return _Connection;
    };
    AWProxy.contacts = function () {
        var _contacts = typeof navigator !== 'undefined' ? navigator.contacts : new contacts_1.MockContacts();
        return _contacts;
    };
    AWProxy.device = function () {
        var _device = (typeof device !== 'undefined') ? device : {
            cordova: null,
            available: true,
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
            _device.capture = new capture_1.MockCapture();
        }
        return _device;
    };
    AWProxy.document = function () {
        var _document = (typeof document !== 'undefined') ? document : {
            addEventListener: util_1.noop
        };
        return _document;
    };
    AWProxy.file = function () {
        if (typeof cordova !== 'undefined') {
            return cordova.file;
        }
        else {
            return {
                documentsDirectory: ''
            };
        }
    };
    AWProxy.filetransfer = function () {
        return AWProxy.doGetFileTransfer();
    };
    // alias name
    AWProxy.fileTransfer = function () {
        return AWProxy.doGetFileTransfer();
    };
    AWProxy.doGetFileTransfer = function () {
        if (AWProxy.isDesktopEnv()) {
            var plugin = AWProxy.getDesktopPlugin('AWFileTransfer');
            return (plugin !== null) ? plugin : new file_transfer_1.MockFileTransfer();
        }
        return (typeof FileTransfer !== 'undefined') ? new FileTransfer() : new file_transfer_1.MockFileTransfer();
    };
    AWProxy.geolocation = function () {
        var _geolocation = (typeof navigator !== 'undefined') ? navigator.geolocation : new geolocation_1.MockGeolocation();
        return _geolocation;
    };
    AWProxy.localFileSystem = function () {
        return local_file_system_1.LocalFileSystem;
    };
    AWProxy.media = function (src, successHandler, errorHandler, statusChangeHandler) {
        if (typeof Media !== 'undefined') {
            return new Media(src, successHandler, errorHandler, statusChangeHandler);
        }
        else {
            return new media_1.MockMedia(src, successHandler, errorHandler, statusChangeHandler);
        }
    };
    AWProxy.notification = function () {
        var _notification = (typeof navigator !== 'undefined') ? navigator.notification : new notifications_1.MockNotification();
        return _notification;
    };
    AWProxy.requestFileSystem = function (type, size, successCallback, errorCallback) {
        if (window.requestFileSystem) {
            return window.requestFileSystem(type, size, successCallback, errorCallback);
        }
    };
    AWProxy.vibrate = function (time) {
        if (typeof navigator !== 'undefined' && navigator.vibrate) {
            var _vibrate = navigator.vibrate(time);
            return _vibrate;
        }
        else {
            return new vibrate_1.MockVibrate().vibrate(time);
        }
    };
    AWProxy.webview = function () {
        if (typeof cordova !== 'undefined') {
            return cordova.InAppBrowser;
        }
        else {
            return new desktop_webview_1.DesktopWebview();
        }
    };
    AWProxy.storage = function () {
        return new storage_1.AWStorage();
    };
    AWProxy.persistentStorage = function () {
        var desktopPlugin = AWProxy.getDesktopPlugin('AWStorage');
        return desktopPlugin !== null ?
            new desktop_storage_1.DesktopStorage(desktopPlugin) : (AWProxy.isMobileEnv()) ?
            new on_device_storage_1.OnDeviceStorage() : new persistent_storage_1.PersistentStorageMock();
    };
    AWProxy.isDesktopEnv = function () {
        return typeof __aw_plugin_proxy !== 'undefined';
    };
    AWProxy.isMobileEnv = function () {
        return typeof cordova !== 'undefined';
    };
    AWProxy.getDesktopPlugin = function (pluginName) {
        if (!AWProxy.isDesktopEnv())
            return null;
        // the proxy exposed by desktop has a method to allow retrieval of plugin instances
        return __aw_plugin_proxy.getPlugin(pluginName);
    };
    AWProxy.execMobile = function (successHandler, errorHandler, name, method, args) {
        if (deviceReady) {
            cordova.exec(successHandler, errorHandler, name, method, args);
        }
        else {
            callbackQueue.push(function () {
                AWProxy.exec(successHandler, errorHandler, name, method, args);
            });
        }
    };
    AWProxy.execDesktop = function (successHandler, errorHandler, name, method, args) {
        __aw_plugin_proxy.exec(successHandler, errorHandler, name, method, args);
    };
    return AWProxy;
}());
exports.AWProxy = AWProxy;
function setupDeviceInitializationForMobile() {
    try {
        document.addEventListener('deviceready', function () {
            deviceReady = true;
            callbackQueue.forEach(function (callback) {
                callback();
            });
        });
    }
    catch (e) {
        // unsupported environment
    }
}
//# sourceMappingURL=proxy.js.map