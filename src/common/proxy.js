"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var contacts_1 = require("../../test/mock/contacts");
var accelerometer_1 = require("../../test/mock/accelerometer");
var camera_1 = require("../../test/mock/camera");
var compass_1 = require("../../test/mock/compass");
var geolocation_1 = require("../../test/mock/geolocation");
var media_1 = require("../../test/mock/media");
var capture_1 = require("../../test/mock/capture");
var notifications_1 = require("../../test/mock/notifications");
var connection_1 = require("../../test/mock/connection");
var vibrate_1 = require("../../test/mock/vibrate");
var local_file_system_1 = require("../plugins/file/local-file-system");
var file_transfer_1 = require("../../test/mock/file-transfer");
var util_1 = require("./util");
var storage_1 = require("../plugins/storage/storage");
var on_device_storage_1 = require("../plugins/storage/on-device-storage");
var persistent_storage_1 = require("../../test/mock/persistent-storage");
var desktop_storage_1 = require("../plugins/storage/desktop-storage");
var desktop_webview_1 = require("../plugins/webview/desktop-webview");
var AWProxy = (function () {
    function AWProxy() {
    }
    AWProxy.exec = function (successHandler, errorHandler, name, method, args) {
        if (typeof exports.cordova !== 'undefined') {
            exports.cordova.exec(successHandler, errorHandler, name, method, args);
        }
        else if (AWProxy.isDesktopEnv()) {
            exports.__aw_plugin_proxy.exec(successHandler, errorHandler, name, method, args);
        }
        else {
            console.error('No proxy objects defined - tried [Cordova, __aw_plugin_proxy]');
            if (typeof errorHandler === 'function') {
                errorHandler('No proxy objects defined - tried [Cordova, __aw_plugin_proxy]');
            }
        }
    };
    AWProxy.accelerometer = function () {
        return typeof 'navigator' !== undefined ? exports.navigator.accelerometer : new accelerometer_1.MockAccelerometer();
    };
    AWProxy.camera = function () {
        return typeof exports.navigator !== 'undefined' ? exports.navigator.camera : new camera_1.MockCamera();
    };
    AWProxy.Camera = function () {
        return (typeof exports.Camera !== 'undefined') ? exports.Camera : {
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
        return typeof exports.navigator !== 'undefined' ? exports.navigator.compass : new compass_1.MockCompass();
    };
    AWProxy.connection = function () {
        return typeof exports.navigator !== 'undefined' ? exports.navigator.connection : new connection_1.MockConnection();
    };
    AWProxy.Connection = function () {
        return (typeof exports.Connection !== 'undefined') ? exports.Connection : {
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
        return typeof exports.navigator !== 'undefined' ? exports.navigator.contacts : new contacts_1.MockContacts();
    };
    AWProxy.device = function () {
        var _device = (typeof exports.device !== 'undefined') ? exports.device : {
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
        if (typeof exports.navigator !== 'undefined' && exports.navigator.device && exports.navigator.device.capture) {
            _device.capture = exports.navigator.device.capture;
        }
        else {
            _device.capture = new capture_1.MockCapture();
        }
        return _device;
    };
    AWProxy.document = function () {
        return (typeof document !== 'undefined') ? document : {
            addEventListener: util_1.Util.noop
        };
    };
    AWProxy.file = function () {
        if (typeof exports.cordova !== 'undefined') {
            return exports.cordova.file;
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
        return (typeof exports.FileTransfer !== 'undefined') ? new exports.FileTransfer() : new file_transfer_1.MockFileTransfer();
    };
    AWProxy.geolocation = function () {
        return (typeof exports.navigator !== 'undefined') ? exports.navigator.geolocation : new geolocation_1.MockGeolocation();
    };
    AWProxy.localFileSystem = function () {
        return local_file_system_1.LocalFileSystem;
    };
    AWProxy.media = function (src, successHandler, errorHandler, statusChangeHandler) {
        if (typeof exports.Media !== 'undefined') {
            return new exports.Media(src, successHandler, errorHandler, statusChangeHandler);
        }
        else {
            return new media_1.MockMedia(src, successHandler, errorHandler, statusChangeHandler);
        }
    };
    AWProxy.notification = function () {
        return (typeof exports.navigator !== 'undefined') ? exports.navigator.notification : new notifications_1.MockNotification();
    };
    AWProxy.requestFileSystem = function (type, size, successCallback, errorCallback) {
        if (exports.window.requestFileSystem) {
            return exports.window.requestFileSystem(type, size, successCallback, errorCallback);
        }
    };
    AWProxy.vibrate = function (time) {
        if (typeof exports.navigator !== 'undefined' && exports.navigator.vibrate) {
            return exports.navigator.vibrate(time);
        }
        else {
            return new vibrate_1.MockVibrate().vibrate(time);
        }
    };
    AWProxy.webview = function () {
        if (typeof exports.cordova !== 'undefined') {
            return exports.cordova.InAppBrowser;
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
    /**
     * Are we executing within the AppWorks Desktop context.
     *
     * @returns {boolean} true if this is a desktop environment, false otherwise
     */
    AWProxy.isDesktopEnv = function () {
        return typeof exports.__aw_plugin_proxy !== 'undefined';
    };
    /**
     * Are we executing within the AppWorks mobile context.
     *
     * @return {boolean} true if Cordova is available, false otherwise
     */
    AWProxy.isMobileEnv = function () {
        return typeof exports.cordova !== 'undefined';
    };
    /**
     * Ask the AppWorks desktop environment to retrieve an instance of a specific plugin.
     *
     * @param pluginName plugin identifier
     * @returns {any} plugin instance or null if no such plugin exists or the method was
     *                called outside of the desktop client context
     */
    AWProxy.getDesktopPlugin = function (pluginName) {
        if (!AWProxy.isDesktopEnv())
            return null;
        // the proxy exposed by desktop has a method to allow retrieval of plugin instances
        return exports.__aw_plugin_proxy.getPlugin(pluginName);
    };
    return AWProxy;
}());
exports.AWProxy = AWProxy;
