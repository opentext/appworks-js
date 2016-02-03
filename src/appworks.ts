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

declare var LocalFileSystem;

abstract class AWPlugin {
    successHandler: (data?: any) => void;
    errorHandler: (data?: any) => void;
    /**
     * Base plugin class. Constructor takes in a success function and error function to be executed upon
     * return from call to native layer
     * @param successHandler - the function to be executed when the native call succeeds. passes an object as arg
     * @param errorHandler - the function to be executed when the native call fails. passes an object as arg.
     */
    constructor(successHandler: any, errorHandler: any) {
        this.successHandler = successHandler;
        this.errorHandler = errorHandler;
    }
}

module Appworks {
    var idCounter = 0;
    export class Auth extends AWPlugin {

        authenticate() {
            cordova.exec(
                (() => this.successHandler)(),
                (() => this.errorHandler)(),
                'AWAuth',
                'authenticate',
                []
            );
        }
        getAuthResponse() {
            cordova.exec(
                (() => this.successHandler)(),
                (() => this.errorHandler)(),
                'AWAuth',
                'authobject',
                []
            );
        }
        gateway(successHandler: any, errorHandler?: any) {
            cordova.exec(
                successHandler,
                errorHandler,
                'AWAuth',
                'gateway',
                []
            );
        }
    }
    export class AWAppManager extends AWPlugin {
        closeActiveApp() {
            cordova.exec(
                (() => this.successHandler)(),
                (() => this.errorHandler)(),
                'AWAppManager',
                'closeActiveApp',
                []
            );
        }
    }
    export class AWCamera extends AWPlugin implements Camera {
        cleanup(onSuccess: () => void,
                onError: (message: string) => void) {
            navigator.camera.cleanup(onSuccess, onError);
        }
        getPicture(cameraSuccess: (data: string) => void,
                   cameraError: (message: string) => void,
                   cameraOptions?: CameraOptions) {
            navigator.camera.getPicture(cameraSuccess, cameraError, cameraOptions);
        }
        openGallery(options?: any) {
            options = options || {
                    destinationType: Camera.DestinationType.FILE_URI
                };
            options.sourceType = Camera.PictureSourceType.PHOTOLIBRARY;
            this.getPicture((() => this.successHandler)(), (() => this.errorHandler)(), options);
        }
        takePicture(options?: any) {
            options = options || {
                    destinationType: Camera.DestinationType.FILE_URI,
                    encodingType: Camera.EncodingType.JPEG,
                    mediaType: Camera.MediaType.ALLMEDIA,
                    correctOrientation: true,
                    saveToPhotoAlbum: true
                };
            options.sourceType = Camera.PictureSourceType.CAMERA;
            this.getPicture((() => this.successHandler)(), (() => this.errorHandler)(), options);
        }
    }
    export class AWComponent extends AWPlugin {
        open(successHandler: any, errorHandler?: any, args?: any[]) {
            cordova.exec(
                successHandler,
                errorHandler,
                'AWComponent',
                'open',
                args || []
            );
        }
        list(successHandler: any, errorHandler?: any, args?: any[]) {
            cordova.exec(
                successHandler,
                errorHandler,
                'AWComponent',
                'list',
                args || []
            );
        }
        check(successHandler: any, errorHandler?: any, args?: any[]) {
            cordova.exec(
                successHandler,
                errorHandler,
                'AWComponent',
                'check',
                args || []
            );
        }
        close(successHandler: any, errorHandler?: any, args?: any[]) {
            cordova.exec(
                successHandler,
                errorHandler,
                'AWComponent',
                'close',
                args || []
            );
        }
    }
    export class Finder extends AWPlugin {
        open(path: string, filename: string) {
            var args = [path, filename];
            cordova.exec(
                (() => this.successHandler)(),
                (() => this.errorHandler)(),
                'AWFinder',
                'open',
                args
            );
        }
        openDirect(filename: string) {
            cordova.exec(
                (() => this.successHandler)(),
                (() => this.errorHandler)(),
                'AWFinder',
                'openDirect',
                [filename]
            );
        }
        list(path: string) {
            cordova.exec(
                (() => this.successHandler)(),
                (() => this.errorHandler)(),
                'AWFinder',
                'list',
                [path]
            );
        }
    }
    export class QRReader extends AWPlugin {
        scan() {
            cordova.exec(
                (() => this.successHandler)(),
                (() => this.errorHandler)(),
                'AWQRCodeReader',
                'scan',
                []
            );
        }
        rename() {
            cordova.exec(
                (() => this.successHandler)(),
                (() => this.errorHandler)(),
                'AWQRCodeReader',
                'rename',
                []
            );
        }
    }
    export class SecureStorage extends AWPlugin {

        seqNo: number;
        onprogress: any;

        constructor(successHandler: any, errorHandler?: any) {
            this.seqNo = ++idCounter;
            this.onprogress = null;
            super(successHandler, errorHandler);
        }

        store(url: string, target: string, options?: any) {
            var args = [url, target, false, this.seqNo, options && options.headers],
                completionHandler = () => this.successHandler,
                progressHandler = this.onprogress,
                progress;

            function newProgressEvent(result) {
                var pe = new ProgressEvent(null);
                pe.lengthComputable = result.lengthComputable;
                pe.loaded = result.loaded;
                pe.total = result.total;
                return pe;
            }

            progress = function(result) {
                if (typeof result.lengthComputable != "undefined") {
                    if (progressHandler) {
                        progressHandler(newProgressEvent(result));
                    }
                } else {
                    if (completionHandler) {
                        completionHandler()(result);
                    }
                }
            };
            cordova.exec(
                progress,
                (() => this.errorHandler)(),
                'AWSecureStorage',
                'store',
                args
            );
        }
        retrieve(filename: string, options?: any) {
            var args = [filename, options];
            cordova.exec(
                (() => this.successHandler)(),
                (() => this.errorHandler)(),
                'AWSecureStorage',
                'retrieve',
                args
            );
        }
        remove(target: string) {
            var args = [target];
            cordova.exec(
                (() => this.successHandler)(),
                (() => this.errorHandler)(),
                'AWSecureStorage',
                'removeFile',
                args
            );
        }
        fileExistsAtPath(target: string) {
            var args = [target];
            cordova.exec(
                (() => this.successHandler)(),
                (() => this.errorHandler)(),
                'AWSecureStorage',
                'fileExistsAtPath',
                args
            );
        }
    }
    export class AWFileTransfer extends AWPlugin implements FileTransfer {

        fileTransfer: any;
        onprogress: any;

        constructor(successHandler: any, errorHandler?: any) {
            this.fileTransfer = new FileTransfer();
            this.onprogress = null;
            super(successHandler, errorHandler);
        }

        abort() {
            this.fileTransfer.abort();
        }
        download(url, target, options, shared) {

            var successHandler = this.successHandler,
                errorHandler = this.errorHandler;

            options = options || {};

            function gotSharedContainerUrl(containerUrl?: string) {
                new FileTransfer().download(
                    encodeURI(url),
                    containerUrl + '/' + target,
                    successHandler,
                    errorHandler,
                    false,
                    options
                );
            }

            if (shared) {
                cordova.exec(
                    gotSharedContainerUrl,
                    (() => this.errorHandler)(),
                    'AWSharedDocumentProvider',
                    'container',
                    []
                );
            } else {
                this.fileTransfer.download(
                    encodeURI(url),
                    cordova.file.documentsDirectory + '/' + target,
                    successHandler,
                    errorHandler,
                    false,
                    options
                );
            }
            return this.fileTransfer;
        }
        progressHandler(handler: any) {
            this.fileTransfer.onprogress = handler;
        }
        upload(source, url, options, shared) {

            var successHandler = this.successHandler,
                errorHandler = this.errorHandler;

            options = options || {};

            function gotSharedContainerUrl(containerUrl?: string) {
                new FileTransfer().upload(
                    containerUrl + '/' + source,
                    encodeURI(url),
                    successHandler,
                    errorHandler,
                    options,
                    false
                );
            }

            if (shared) {
                cordova.exec(
                    gotSharedContainerUrl,
                    (() => this.errorHandler)(),
                    'AWSharedDocumentProvider',
                    'container',
                    []
                );
            } else {
                this.fileTransfer.upload(
                    cordova.file.documentsDirectory + '/' + source,
                    encodeURI(url),
                    successHandler,
                    errorHandler,
                    options,
                    false
                );
            }

            return this.fileTransfer;
        }
    }
    export class AWContacts extends AWPlugin implements Contacts {

        options = navigator.contacts;

        create(contact: any) {
            return navigator.contacts.create(contact);
        }
        find(fields, options?: any) {
            navigator.contacts.find(
                fields,
                (() => this.successHandler)(),
                (() => this.errorHandler)(),
                options
            )
        }
        pickContact() {
            navigator.contacts.pickContact((() => this.successHandler)(), (() => this.errorHandler)())
        }

    }
    export class AWDevice extends AWPlugin {

        cordova: any;
        model: any;
        platform: any;
        uuid: any;
        version: any;
        manufacturer: any;

        constructor() {
            this.cordova = device.cordova;
            this.model = device.model;
            this.platform = device.platform;
            this.uuid = device.uuid;
            this.version = device.version;
            this.manufacturer = device.manufacturer;
            super(() => {}, () => {});
        }
    }
    export class AWAccelerometer extends AWPlugin implements Accelerometer {
        getCurrentAcceleration() {
            navigator.accelerometer.getCurrentAcceleration(
                (() => this.successHandler)(),
                (() => this.errorHandler)()
            );
        }
        watchAcceleration(options?: any) {
            return navigator.accelerometer.watchAcceleration(
                (() => this.successHandler)(),
                (() => this.errorHandler)(),
                options
            );
        }
        clearWatch(watchId: number) {
            navigator.accelerometer.clearWatch(watchId);
        }
    }
    export class AWCompass extends AWPlugin implements Compass {
        getCurrentHeading() {
            navigator.compass.getCurrentHeading(
                (() => this.successHandler)(),
                (() => this.errorHandler)()
            );
        }
        watchHeading(options?: any) {
            return navigator.compass.watchHeading(
                (() => this.successHandler)(),
                (() => this.errorHandler)(),
                options
            );
        }
        clearWatch(watchId: number) {
            navigator.compass.clearWatch(watchId);
        }
    }
    export class AWLocation extends AWPlugin {
        getCurrentPosition(options?: any) {
            navigator.geolocation.getCurrentPosition(
                (() => this.successHandler)(),
                (() => this.errorHandler)(),
                options
            );
        }
        watchPosition(options?: any) {
            return navigator.geolocation.watchPosition(
                (() => this.successHandler)(),
                (() => this.errorHandler)(),
                options
            );
        }
        clearWatch(watchId) {
            navigator.geolocation.clearWatch(watchId);
        }
    }
    export class AWMedia extends AWPlugin implements Media {

        media: any;
        src: string;
        position: any;
        duration: number;

        constructor(src: string, successHandler: any, errorHandler?: any, statusChangeHandler?: any) {
            this.media = new Media(src, successHandler, errorHandler, statusChangeHandler);
            this.src = src;
            this.position = this.media.position;
            this.duration = this.media.duration;
            super(successHandler, errorHandler);
        }

        getCurrentPosition(successHandler: any, errorHandler?: any) {
            return this.media.getCurrentPosition(successHandler, errorHandler);
        }
        getDuration() {
            return this.media.getDuration();
        }
        pause() {
            return this.media.pause();
        }
        play() {
            return this.media.play();
        }
        release() {
            return this.media.release();
        }
        seekTo() {
            return this.media.seekTo();
        }
        setVolume() {
            return this.media.setVolume();
        }
        startRecord() {
            return this.media.startRecord();
        }
        stop() {
            return this.media.stop();
        }
        stopRecord() {
            return this.media.stopRecord();
        }
    }
    export class AWMediaCapture extends AWPlugin implements Capture {

        supportedAudioModes: any;
        supportedImageModes: any;
        supportedVideoModes: any;

        constructor(successHandler: any, errorHandler?: any) {
            this.supportedAudioModes = navigator.device.capture.supportedAudioModes;
            this.supportedImageModes = navigator.device.capture.supportedImageModes;
            this.supportedVideoModes = navigator.device.capture.supportedVideoModes;
            super(successHandler, errorHandler);
        }

        captureAudio(options?: any) {
            navigator.device.capture.captureAudio(
                (() => this.successHandler)(),
                (() => this.errorHandler)(),
                options
            );
        }
        captureImage(options?: any) {
            navigator.device.capture.captureImage(
                (() => this.successHandler)(),
                (() => this.errorHandler)(),
                options
            );
        }
        captureVideo(options?: any) {
            navigator.device.capture.captureVideo(
                (() => this.successHandler)(),
                (() => this.errorHandler)(),
                options
            );
        }
    }
    export class AWNotificationManager extends AWPlugin {

        constructor() {
            super(() => {}, () => {});
        }

        alert(message: string, alertCallback: any, title?: string, buttonName?: string) {
            navigator.notification.alert(message, alertCallback, title, buttonName);
        }
        beep(times: number) {
            navigator.notification.beep(times);
        }
        confirm(message: string, confirmCallback: any, title?: string, buttonLabels?: string[]) {
            navigator.notification.confirm(message, confirmCallback, title, buttonLabels);
        }
        prompt(message: string, promptCallback: any, title?: string, buttonLabels?: string[], defaultText?: string) {
            navigator.notification.prompt(message, promptCallback, title, buttonLabels, defaultText);
        }
        enablePushNotifications(handler: any, errorHandler?: any) {
            cordova.exec(
                handler,
                errorHandler,
                'AWNotificationManager',
                'enablePushNotifications',
                []
            );
        }
        disablePushNotifications() {
            cordova.exec(
                null,
                null,
                'AWNotificationManager',
                'disablePushNotifications',
                []
            );
        }
        getNotifications(handler, errorHandler?: any) {
            cordova.exec(
                handler,
                errorHandler,
                'AWNotificationManager',
                'getPushNotifications',
                []
            );
        }
    }
    export class AWVibration extends AWPlugin {

        constructor() {
            super(() => {}, () => {});
        }

        vibrate(time: number) {
            return navigator.vibrate(time);
        }
    }

    export class AWOfflineManager extends AWPlugin {

        status: string;
        online: boolean;
        offline: boolean;
        cache: any;
        queue: any[];
        cacheKey: string;
        options: any;

        private saveQueue() {
            this.cache.setItem(this.cacheKey, JSON.stringify(this.queue));
        }

        private processDeferredQueue() {
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
        }

        private dispatchEvent(data?: any) {
            var event = new CustomEvent(data.event, {detail: data.args});
            document.dispatchEvent(event);
        }

        constructor(options) {
            var _this = this;

            var queue;

            super(() => {}, () => {});

            this.cacheKey = '__appworksjs.deferredQueue';
            this.cache = new AWCache();
            this.options = options || {preserveEvents: false};

            // process deferred queue when network status changes
            document.addEventListener('online', function () {
                _this.processDeferredQueue();
            });

            // load the deferred queue into memory
            queue = this.cache.getItem(this.cacheKey);
            if (queue) {
                this.queue = JSON.parse(queue);
            } else {
                this.queue = [];
                this.saveQueue();
            }

            // process the deferred queue upon object instantiation if we are currently online
            if (this.networkStatus().online) {
                this.processDeferredQueue();
            }
        }

        defer(eventName: string, args: any) {
            this.queue.push({
                event: eventName,
                args: JSON.stringify(args)
            });
            this.saveQueue();
            return (this.queue.length - 1);
        }

        cancel(id: number) {
            if (id > -1) {
                this.queue.splice(id, 1);
                this.saveQueue();
            }
        }

        networkStatus() {
            return {
                online: navigator.connection.type !== Connection.NONE,
                offline: navigator.connection.type === Connection.NONE,
                connection: navigator.connection
            };
        }
    }
    export class AWCache extends AWPlugin {

        options: any;

        private readDataFromPersistentStorage(callback: any, errorCallback?: any) {

            var fail = function (error) {
                console.error(error.code);
            };

            if (typeof errorCallback === 'function') {
                fail = errorCallback;
            }

            if (typeof callback !== 'function') {
                callback = function () {};
            }

            window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, gotFS, fail);

            function gotFS(fileSystem: any) {
                fileSystem.root.getFile('appworksjs.cache.json', {create: true, exclusive: false}, gotFileEntry, fail);
            }

            function gotFileEntry(entry: any) {
                entry.file(gotFile, fail);
            }

            function gotFile(file: any) {
                readAsText(file);
            }

            function readAsText(file: any) {
                var reader = new FileReader();
                reader.onloadend = function(evt) {
                    console.log(evt);
                    callback((<FileReader>evt.target).result);
                };
                reader.readAsText(file);
            }
        }

        private writeLocalStorageDataToPersistentStorage() {
            var i,
                data = {},
                key,
                value;
            for (i = 0; i < window.localStorage.length; i += 1) {
                key = window.localStorage.key(i);
                value = window.localStorage.getItem(key);
                data[key] = value;
            }
            this.writeDataToPersistentStorage(JSON.stringify(data));
        }

        private writeDataToPersistentStorage(data) {
            window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, gotFS, fail);

            function gotFS(fileSystem) {
                fileSystem.root.getFile('appworksjs.cache.json', {create: true, exclusive: false}, gotFileEntry, fail);
            }

            function gotFileEntry(fileEntry) {
                fileEntry.createWriter(gotFileWriter, fail);
            }

            function gotFileWriter(writer) {
                writer.onwriteend = function() {
                    console.info('cache data backed up successfully');
                };
                writer.write(data);
            }

            function fail(error) {
                console.log(error.code);
            }

        }

        private loadPersistentDataIntoLocalStorage() {
            this.readDataFromPersistentStorage(function (json) {
                var data;
                if (json) {
                    data = JSON.parse(json);
                    for (var item in data) {
                        window.localStorage.setItem(item, data[item]);
                    }
                }
            });
        }

        constructor(options?: any) {

            super(() => {}, () => {});

            this.options = options || {
                    usePersistentStorage: false
                };

            if (this.options.usePersistentStorage) {
                this.loadPersistentDataIntoLocalStorage();
            }
        }

        setItem(key: string, value: any) {
            var result = window.localStorage.setItem(key, value);
            if (this.options.usePersistentStorage) {
                this.writeLocalStorageDataToPersistentStorage();
            }
            return result;
        }

        getItem(key: string) {
            var result = window.localStorage.getItem(key);
            return result;
        }

        removeItem(key: string) {
            var result = window.localStorage.removeItem(key);
            if (this.options.usePersistentStorage) {
                this.writeLocalStorageDataToPersistentStorage();
            }
            return result;
        }

        clear() {
            var result = window.localStorage.clear();
            if (this.options.usePersistentStorage) {
                this.writeLocalStorageDataToPersistentStorage();
            }
            return result;
        }
    }
}