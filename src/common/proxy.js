import { MockContacts } from "../../test/mock/contacts";
import { MockAccelerometer } from "../../test/mock/accelerometer";
import { MockCamera } from "../../test/mock/camera";
import { MockCompass } from "../../test/mock/compass";
import { MockGeolocation } from "../../test/mock/geolocation";
import { MockMedia } from "../../test/mock/media";
import { MockCapture } from "../../test/mock/capture";
import { MockNotification } from "../../test/mock/notifications";
import { MockConnection } from "../../test/mock/connection";
import { MockVibrate } from "../../test/mock/vibrate";
import { LocalFileSystem } from "../plugins/file/local-file-system";
import { MockFileTransfer } from "../../test/mock/file-transfer";
import { Util } from "./util";
import { AWStorage } from "../plugins/storage/storage";
import { OnDeviceStorage } from "../plugins/storage/on-device-storage";
import { PersistentStorageMock } from "../../test/mock/persistent-storage";
import { DesktopStorage } from "../plugins/storage/desktop-storage";
import { DesktopWebview } from "../plugins/webview/desktop-webview";
var AWProxy = (function () {
    function AWProxy() {
    }
    AWProxy.exec = function (successHandler, errorHandler, name, method, args) {
        if (typeof cordova !== 'undefined') {
            cordova.exec(successHandler, errorHandler, name, method, args);
        }
        else if (AWProxy.isDesktopEnv()) {
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
            _device.capture = new MockCapture();
        }
        return _device;
    };
    AWProxy.document = function () {
        return (typeof document !== 'undefined') ? document : {
            addEventListener: Util.noop
        };
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
            return (plugin !== null) ? plugin : new MockFileTransfer();
        }
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
            return new DesktopWebview();
        }
    };
    AWProxy.storage = function () {
        return new AWStorage();
    };
    AWProxy.persistentStorage = function () {
        var desktopPlugin = AWProxy.getDesktopPlugin('AWStorage');
        return desktopPlugin !== null ?
            new DesktopStorage(desktopPlugin) : (AWProxy.isMobileEnv()) ?
            new OnDeviceStorage() : new PersistentStorageMock();
    };
    /**
     * Are we executing within the AppWorks Desktop context.
     *
     * @returns {boolean} true if this is a desktop environment, false otherwise
     */
    AWProxy.isDesktopEnv = function () {
        return typeof __aw_plugin_proxy !== 'undefined';
    };
    /**
     * Are we executing within the AppWorks mobile context.
     *
     * @return {boolean} true if Cordova is available, false otherwise
     */
    AWProxy.isMobileEnv = function () {
        return typeof cordova !== 'undefined';
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
        return __aw_plugin_proxy.getPlugin(pluginName);
    };
    return AWProxy;
}());
export { AWProxy };
//# sourceMappingURL=proxy.js.map