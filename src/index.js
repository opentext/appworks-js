"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @module
 * @description
 * Entry point from which you should import all public appworks APIs.
 */
var plugin_1 = require("./common/plugin");
exports.AWPlugin = plugin_1.AWPlugin;
var proxy_1 = require("./common/proxy");
exports.AWProxy = proxy_1.AWProxy;
exports.__aw_plugin_proxy = proxy_1.__aw_plugin_proxy;
var util_1 = require("./common/util");
exports.Util = util_1.Util;
var accelerometer_1 = require("./plugins/accelerometer/accelerometer");
exports.AWAccelerometer = accelerometer_1.AWAccelerometer;
var app_manager_1 = require("./plugins/app-manager/app-manager");
exports.AWAppManager = app_manager_1.AWAppManager;
var auth_1 = require("./plugins/auth/auth");
exports.AWAuth = auth_1.AWAuth;
var cache_1 = require("./plugins/storage/cache");
exports.AWCache = cache_1.AWCache;
var camera_1 = require("./plugins/camera/camera");
exports.AWCamera = camera_1.AWCamera;
var compass_1 = require("./plugins/device-orientation/compass");
exports.AWCompass = compass_1.AWCompass;
var component_1 = require("./plugins/component/component");
exports.AWComponent = component_1.AWComponent;
var contacts_1 = require("./plugins/contacts/contacts");
exports.AWContacts = contacts_1.AWContacts;
var desktop_storage_1 = require("./plugins/storage/desktop-storage");
exports.DesktopStorage = desktop_storage_1.DesktopStorage;
var device_1 = require("./plugins/device/device");
exports.AWDevice = device_1.AWDevice;
var file_chooser_1 = require("./plugins/file/file-chooser");
exports.AWFileChooser = file_chooser_1.AWFileChooser;
var file_system_1 = require("./plugins/file/file-system");
exports.AWFileSystem = file_system_1.AWFileSystem;
var file_transfer_1 = require("./plugins/file-transfer/file-transfer");
exports.AWFileTransfer = file_transfer_1.AWFileTransfer;
var finder_1 = require("./plugins/finder/finder");
exports.AWFinder = finder_1.AWFinder;
var header_1 = require("./plugins/header/header");
exports.AWHeader = header_1.AWHeader;
exports.AWHeaderBar = header_1.AWHeaderBar;
var keyboard_1 = require("./plugins/keyboard/keyboard");
exports.AWKeyboard = keyboard_1.AWKeyboard;
var local_file_system_1 = require("./plugins/file/local-file-system");
exports.LocalFileSystem = local_file_system_1.LocalFileSystem;
var location_1 = require("./plugins/location/location");
exports.AWLocation = location_1.AWLocation;
var launcher_1 = require("./plugins/launcher/launcher");
exports.AWLauncher = launcher_1.AWLauncher;
var media_1 = require("./plugins/media/media");
exports.AWMedia = media_1.AWMedia;
var media_capture_1 = require("./plugins/media-transfer/media-capture");
exports.AWMediaCapture = media_capture_1.AWMediaCapture;
var menu_1 = require("./plugins/menu/menu");
exports.AWMenu = menu_1.AWMenu;
var notifications_1 = require("./plugins/notifications/notifications");
exports.AWNotificationManager = notifications_1.AWNotificationManager;
var offline_manager_1 = require("./plugins/offline/offline-manager");
exports.AWOfflineManager = offline_manager_1.AWOfflineManager;
var on_device_storage_1 = require("./plugins/storage/on-device-storage");
exports.OnDeviceStorage = on_device_storage_1.OnDeviceStorage;
var page_1 = require("./plugins/page/page");
exports.AWPage = page_1.AWPage;
var qr_reader_1 = require("./plugins/qr-reader/qr-reader");
exports.AWQRReader = qr_reader_1.AWQRReader;
var scanner_1 = require("./plugins/document-scanner/scanner");
exports.AWScanner = scanner_1.AWScanner;
var secure_storage_1 = require("./plugins/storage/secure-storage");
exports.SecureStorage = secure_storage_1.SecureStorage;
exports.AWSecureStorage = secure_storage_1.AWSecureStorage;
var storage_1 = require("./plugins/storage/storage");
exports.AWStorage = storage_1.AWStorage;
var vibration_1 = require("./plugins/vibration/vibration");
exports.AWVibration = vibration_1.AWVibration;
var webview_1 = require("./plugins/webview/webview");
exports.AWWebView = webview_1.AWWebView;
//# sourceMappingURL=index.js.map