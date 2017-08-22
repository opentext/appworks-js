"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @module
 * @description
 * Entry point from which you should import all public appworks APIs.
 */
var proxy_1 = require("./common/proxy");
var index_1 = require("./plugins/accelerometer/index");
exports.AWAccelerometer = index_1.AWAccelerometer;
var index_2 = require("./plugins/app-manager/index");
exports.AWAppManager = index_2.AWAppManager;
var index_3 = require("./plugins/auth/index");
exports.AWAuth = index_3.AWAuth;
var index_4 = require("./plugins/storage/index");
exports.AWCache = index_4.AWCache;
var index_5 = require("./plugins/calendar/index");
exports.AWCalendar = index_5.AWCalendar;
var index_6 = require("./plugins/camera/index");
exports.AWCamera = index_6.AWCamera;
var index_7 = require("./plugins/device-orientation/index");
exports.AWCompass = index_7.AWCompass;
var index_8 = require("./plugins/component/index");
exports.AWComponent = index_8.AWComponent;
var index_9 = require("./plugins/contacts/index");
exports.AWContacts = index_9.AWContacts;
var index_10 = require("./plugins/device/index");
exports.AWDevice = index_10.AWDevice;
var index_11 = require("./plugins/file/index");
exports.AWFileChooser = index_11.AWFileChooser;
var index_12 = require("./plugins/file/index");
exports.AWFileSystem = index_12.AWFileSystem;
var index_13 = require("./plugins/file-transfer/index");
exports.AWFileTransfer = index_13.AWFileTransfer;
var index_14 = require("./plugins/finder/index");
exports.AWFinder = index_14.AWFinder;
var index_15 = require("./plugins/globalization/index");
exports.AWGlobalization = index_15.AWGlobalization;
var index_16 = require("./plugins/header/index");
exports.AWHeader = index_16.AWHeader;
exports.AWHeaderBar = index_16.AWHeaderBar;
var index_17 = require("./plugins/keyboard/index");
exports.AWKeyboard = index_17.AWKeyboard;
var index_18 = require("./plugins/launcher/index");
exports.AWLauncher = index_18.AWLauncher;
var index_19 = require("./plugins/location/index");
exports.AWLocation = index_19.AWLocation;
var index_20 = require("./plugins/media/index");
exports.AWMedia = index_20.AWMedia;
var index_21 = require("./plugins/media-transfer/index");
exports.AWMediaCapture = index_21.AWMediaCapture;
var index_22 = require("./plugins/menu/index");
exports.AWMenu = index_22.AWMenu;
var index_23 = require("./plugins/mobile-file-system/index");
exports.AWMobileFileSystem = index_23.AWMobileFileSystem;
var index_24 = require("./plugins/notifications/index");
exports.AWNotificationManager = index_24.AWNotificationManager;
var index_25 = require("./plugins/offline/index");
exports.AWOfflineManager = index_25.AWOfflineManager;
var index_26 = require("./plugins/page/index");
exports.AWPage = index_26.AWPage;
var plugin_1 = require("./common/plugin");
exports.AWPlugin = plugin_1.AWPlugin;
var proxy_2 = require("./common/proxy");
exports.AWProxy = proxy_2.AWProxy;
var index_27 = require("./plugins/qr-reader/index");
exports.AWQRReader = index_27.AWQRReader;
var index_28 = require("./plugins/document-scanner/index");
exports.AWScanner = index_28.AWScanner;
var index_29 = require("./plugins/storage/index");
exports.AWStorage = index_29.AWStorage;
var index_30 = require("./plugins/vibration/index");
exports.AWVibration = index_30.AWVibration;
var index_31 = require("./plugins/webview/index");
exports.AWWebView = index_31.AWWebView;
var index_32 = require("./plugins/storage/index");
exports.DesktopStorage = index_32.DesktopStorage;
var index_33 = require("./plugins/file/index");
exports.LocalFileSystem = index_33.LocalFileSystem;
var index_34 = require("./plugins/storage/index");
exports.OnDeviceStorage = index_34.OnDeviceStorage;
var index_35 = require("./plugins/storage/index");
exports.SecureStorage = index_35.SecureStorage;
exports.AWSecureStorage = index_35.AWSecureStorage;
var util_1 = require("./common/util");
exports.Util = util_1.Util;
function isDesktopEnv() {
    return proxy_1.AWProxy.isDesktopEnv();
}
exports.isDesktopEnv = isDesktopEnv;
function isMobileEnv() {
    return proxy_1.AWProxy.isMobileEnv();
}
exports.isMobileEnv = isMobileEnv;
//# sourceMappingURL=index.js.map