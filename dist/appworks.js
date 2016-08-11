// Copyright 2015-2016 Open Text
//
// Licensed under the Apache License, Version 2.0 (the "License”);
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
/// <reference path="../typings/cordova/plugins/InAppBrowser.d.ts"/>
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
var Appworks;
(function (Appworks) {
    var idCounter = 0;
    var Auth = (function (_super) {
        __extends(Auth, _super);
        function Auth() {
            _super.apply(this, arguments);
        }
        Auth.prototype.authenticate = function (force) {
            var _this = this;
            force = !!force;
            cordova.exec((function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })(), 'AWAuth', 'authenticate', [force.toString()]);
        };
        Auth.prototype.getAuthResponse = function () {
            var _this = this;
            cordova.exec((function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })(), 'AWAuth', 'authobject', []);
        };
        Auth.prototype.gateway = function (successHandler, errorHandler) {
            cordova.exec(successHandler, errorHandler, 'AWAuth', 'gateway', []);
        };
        return Auth;
    }(AWPlugin));
    Appworks.Auth = Auth;
    var AWKeyboard = (function (_super) {
        __extends(AWKeyboard, _super);
        function AWKeyboard() {
            _super.call(this, null, null);
        }
        AWKeyboard.prototype.hideKeyboardAccessoryBar = function (hide) {
            cordova.exec(function () { }, function () { }, 'AWKeyboard', 'hideKeyboardAccessoryBar', [hide.toString()]);
        };
        AWKeyboard.prototype.close = function () {
            cordova.exec(function () { }, function () { }, 'AWKeyboard', 'close', []);
        };
        AWKeyboard.prototype.show = function () {
            cordova.exec(function () { }, function () { }, 'AWKeyboard', 'show', []);
        };
        AWKeyboard.prototype.disableScroll = function (disable) {
            disable = !!disable;
            cordova.exec(function () { }, function () { }, 'AWKeyboard', 'disableScroll', [disable.toString()]);
        };
        return AWKeyboard;
    }(AWPlugin));
    Appworks.AWKeyboard = AWKeyboard;
    var AWWebView = (function (_super) {
        __extends(AWWebView, _super);
        function AWWebView() {
            _super.call(this, null, null);
        }
        AWWebView.prototype.open = function (url, target, options) {
            return cordova.InAppBrowser.open(url, target, options);
        };
        return AWWebView;
    }(AWPlugin));
    Appworks.AWWebView = AWWebView;
    var AWAppManager = (function (_super) {
        __extends(AWAppManager, _super);
        function AWAppManager() {
            _super.apply(this, arguments);
        }
        AWAppManager.prototype.closeActiveApp = function () {
            var _this = this;
            cordova.exec((function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })(), 'AWAppManager', 'closeActiveApp', []);
        };
        return AWAppManager;
    }(AWPlugin));
    Appworks.AWAppManager = AWAppManager;
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
    }(AWPlugin));
    Appworks.AWCamera = AWCamera;
    var AWComponent = (function (_super) {
        __extends(AWComponent, _super);
        function AWComponent() {
            _super.apply(this, arguments);
        }
        AWComponent.prototype.open = function (successHandler, errorHandler, args) {
            cordova.exec(successHandler, errorHandler, 'AWComponent', 'open', args || []);
        };
        AWComponent.prototype.list = function (successHandler, errorHandler, args) {
            cordova.exec(successHandler, errorHandler, 'AWComponent', 'list', args || []);
        };
        AWComponent.prototype.check = function (successHandler, errorHandler, args) {
            cordova.exec(successHandler, errorHandler, 'AWComponent', 'check', args || []);
        };
        AWComponent.prototype.close = function (successHandler, errorHandler, args) {
            cordova.exec(successHandler, errorHandler, 'AWComponent', 'close', args || []);
        };
        return AWComponent;
    }(AWPlugin));
    Appworks.AWComponent = AWComponent;
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
    }(AWPlugin));
    Appworks.Finder = Finder;
    var AWHeaderBar = (function (_super) {
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
            cordova.exec((function () { return _this.callback; })(), (function () { return _this.errorHandler; })(), 'AWHeaderBar', 'setHeader', [config]);
        };
        AWHeaderBar.prototype.getHeader = function () {
            var _this = this;
            cordova.exec((function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })(), 'AWHeaderBar', 'getHeader', []);
        };
        return AWHeaderBar;
    }(AWPlugin));
    Appworks.AWHeaderBar = AWHeaderBar;
    var AWPage = (function (_super) {
        __extends(AWPage, _super);
        function AWPage() {
            _super.apply(this, arguments);
        }
        AWPage.prototype.setPageUrl = function (url) {
            var _this = this;
            cordova.exec((function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })(), 'AWPage', 'setPageUrl', [url]);
        };
        return AWPage;
    }(AWPlugin));
    Appworks.AWPage = AWPage;
    var Menu = (function (_super) {
        __extends(Menu, _super);
        function Menu() {
            _super.apply(this, arguments);
        }
        Menu.prototype.push = function (items) {
            var _this = this;
            var args = [items];
            cordova.exec((function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })(), 'AWMenu', 'push', args);
        };
        Menu.prototype.openListener = function (listener) {
            var _this = this;
            cordova.exec(listener, (function () { return _this.errorHandler; })(), 'AWMenu', 'receive', []);
        };
        return Menu;
    }(AWPlugin));
    Appworks.Menu = Menu;
    var QRReader = (function (_super) {
        __extends(QRReader, _super);
        function QRReader() {
            _super.apply(this, arguments);
        }
        QRReader.prototype.scan = function () {
            var _this = this;
            cordova.exec((function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })(), 'AWQRCodeReader', 'scan', []);
        };
        QRReader.prototype.rename = function () {
            var _this = this;
            cordova.exec((function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })(), 'AWQRCodeReader', 'rename', []);
        };
        return QRReader;
    }(AWPlugin));
    Appworks.QRReader = QRReader;
    var SecureStorage = (function (_super) {
        __extends(SecureStorage, _super);
        function SecureStorage(successHandler, errorHandler) {
            _super.call(this, successHandler, errorHandler);
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
        SecureStorage.prototype.remove = function (target) {
            var _this = this;
            var args = [target];
            cordova.exec((function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })(), 'AWSecureStorage', 'removeFile', args);
        };
        SecureStorage.prototype.fileExistsAtPath = function (target) {
            var _this = this;
            var args = [target];
            cordova.exec((function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })(), 'AWSecureStorage', 'fileExistsAtPath', args);
        };
        return SecureStorage;
    }(AWPlugin));
    Appworks.SecureStorage = SecureStorage;
    var AWFileTransfer = (function (_super) {
        __extends(AWFileTransfer, _super);
        function AWFileTransfer(successHandler, errorHandler) {
            _super.call(this, successHandler, errorHandler);
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
                cordova.exec(gotSharedContainerUrl, (function () { return _this.errorHandler; })(), 'AWSharedDocumentProvider', 'container', []);
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
                cordova.exec(gotSharedContainerUrl, (function () { return _this.errorHandler; })(), 'AWSharedDocumentProvider', 'container', []);
            }
            else {
                this.fileTransfer.upload(cordova.file.documentsDirectory + '/' + source, encodeURI(url), successHandler, errorHandler, options, false);
            }
            return this.fileTransfer;
        };
        return AWFileTransfer;
    }(AWPlugin));
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
    }(AWPlugin));
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
    }(AWPlugin));
    Appworks.AWDevice = AWDevice;
    var AWAccelerometer = (function (_super) {
        __extends(AWAccelerometer, _super);
        function AWAccelerometer() {
            _super.apply(this, arguments);
        }
        AWAccelerometer.prototype.getCurrentAcceleration = function () {
            var _this = this;
            navigator.accelerometer.getCurrentAcceleration((function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })());
        };
        AWAccelerometer.prototype.watchAcceleration = function (options) {
            var _this = this;
            return navigator.accelerometer.watchAcceleration((function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })(), options);
        };
        AWAccelerometer.prototype.clearWatch = function (watchId) {
            navigator.accelerometer.clearWatch(watchId);
        };
        return AWAccelerometer;
    }(AWPlugin));
    Appworks.AWAccelerometer = AWAccelerometer;
    var AWCompass = (function (_super) {
        __extends(AWCompass, _super);
        function AWCompass() {
            _super.apply(this, arguments);
        }
        AWCompass.prototype.getCurrentHeading = function () {
            var _this = this;
            navigator.compass.getCurrentHeading((function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })());
        };
        AWCompass.prototype.watchHeading = function (options) {
            var _this = this;
            return navigator.compass.watchHeading((function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })(), options);
        };
        AWCompass.prototype.clearWatch = function (watchId) {
            navigator.compass.clearWatch(watchId);
        };
        return AWCompass;
    }(AWPlugin));
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
            return navigator.geolocation.watchPosition((function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })(), options);
        };
        AWLocation.prototype.clearWatch = function (watchId) {
            navigator.geolocation.clearWatch(watchId);
        };
        return AWLocation;
    }(AWPlugin));
    Appworks.AWLocation = AWLocation;
    var AWMedia = (function (_super) {
        __extends(AWMedia, _super);
        function AWMedia(src, successHandler, errorHandler, statusChangeHandler) {
            _super.call(this, successHandler, errorHandler);
            this.media = new Media(src, successHandler, errorHandler, statusChangeHandler);
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
        AWMedia.prototype.seekTo = function () {
            return this.media.seekTo();
        };
        AWMedia.prototype.setVolume = function () {
            return this.media.setVolume();
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
    Appworks.AWMedia = AWMedia;
    var AWMediaCapture = (function (_super) {
        __extends(AWMediaCapture, _super);
        function AWMediaCapture(successHandler, errorHandler) {
            _super.call(this, successHandler, errorHandler);
            this.supportedAudioModes = navigator.device.capture.supportedAudioModes;
            this.supportedImageModes = navigator.device.capture.supportedImageModes;
            this.supportedVideoModes = navigator.device.capture.supportedVideoModes;
        }
        AWMediaCapture.prototype.captureAudio = function (options) {
            var _this = this;
            navigator.device.capture.captureAudio((function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })(), options);
        };
        AWMediaCapture.prototype.captureImage = function (options) {
            var _this = this;
            navigator.device.capture.captureImage((function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })(), options);
        };
        AWMediaCapture.prototype.captureVideo = function (options) {
            var _this = this;
            navigator.device.capture.captureVideo((function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })(), options);
        };
        return AWMediaCapture;
    }(AWPlugin));
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
        AWNotificationManager.prototype.enablePushNotifications = function (handler, errorHandler) {
            cordova.exec(handler, errorHandler, 'AWNotificationManager', 'enablePushNotifications', []);
        };
        AWNotificationManager.prototype.disablePushNotifications = function () {
            cordova.exec(null, null, 'AWNotificationManager', 'disablePushNotifications', []);
        };
        AWNotificationManager.prototype.getNotifications = function (handler, errorHandler) {
            cordova.exec(handler, errorHandler, 'AWNotificationManager', 'getPushNotifications', []);
        };
        AWNotificationManager.prototype.getOpeningNotification = function (handler, errorHandler) {
            cordova.exec(handler, errorHandler, 'AWNotificationManager', 'getOpeningNotification', []);
        };
        AWNotificationManager.prototype.openListener = function (handler) {
            cordova.exec(handler, null, 'AWNotificationManager', 'openListener', []);
        };
        return AWNotificationManager;
    }(AWPlugin));
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
    }(AWPlugin));
    Appworks.AWVibration = AWVibration;
    var AWOfflineManager = (function (_super) {
        __extends(AWOfflineManager, _super);
        function AWOfflineManager(options) {
            _super.call(this, function () { }, function () { });
            var _this = this;
            var queue;
            this.cacheKey = '__appworksjs.deferredQueue';
            this.cache = new AWCache();
            this.options = options || { preserveEvents: false };
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
                online: navigator.connection.type !== Connection.NONE,
                offline: navigator.connection.type === Connection.NONE,
                connection: navigator.connection
            };
        };
        return AWOfflineManager;
    }(AWPlugin));
    Appworks.AWOfflineManager = AWOfflineManager;
    var AWCache = (function (_super) {
        __extends(AWCache, _super);
        function AWCache(options) {
            _super.call(this, function () { }, function () { });
            this.options = options || {
                usePersistentStorage: false
            };
            if (this.options.usePersistentStorage) {
                this.loadPersistentDataIntoLocalStorage();
            }
        }
        AWCache.prototype.readDataFromPersistentStorage = function (callback, errorCallback) {
            var fail = function (error) {
                console.error(error.code);
            };
            if (typeof errorCallback === 'function') {
                fail = errorCallback;
            }
            if (typeof callback !== 'function') {
                callback = function () { };
            }
            window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, gotFS, fail);
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
            for (i = 0; i < window.localStorage.length; i += 1) {
                key = window.localStorage.key(i);
                value = window.localStorage.getItem(key);
                data[key] = value;
            }
            this.writeDataToPersistentStorage(JSON.stringify(data));
        };
        AWCache.prototype.writeDataToPersistentStorage = function (data) {
            window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, gotFS, fail);
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
        AWCache.prototype.setItem = function (key, value) {
            var result = window.localStorage.setItem(key, value);
            if (this.options.usePersistentStorage) {
                this.writeLocalStorageDataToPersistentStorage();
            }
            return result;
        };
        AWCache.prototype.getItem = function (key) {
            var result = window.localStorage.getItem(key);
            return result;
        };
        AWCache.prototype.removeItem = function (key) {
            var result = window.localStorage.removeItem(key);
            if (this.options.usePersistentStorage) {
                this.writeLocalStorageDataToPersistentStorage();
            }
            return result;
        };
        AWCache.prototype.clear = function () {
            var result = window.localStorage.clear();
            if (this.options.usePersistentStorage) {
                this.writeLocalStorageDataToPersistentStorage();
            }
            return result;
        };
        return AWCache;
    }(AWPlugin));
    Appworks.AWCache = AWCache;
})(Appworks || (Appworks = {}));
//# sourceMappingURL=appworks.js.map