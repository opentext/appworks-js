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
            cordova.exec((() => this.successHandler)(), (() => this.errorHandler)(), 'AWAuth', 'authenticate');
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
    export class Finder extends AWPlugin {
        open(path: string, filename: string) {
            var args = [path, filename];
            cordova.exec((() => this.successHandler)(), (() => this.errorHandler)(), 'AWFinder', 'open', args);
        }
        openDirect(filename: string) {
            cordova.exec((() => this.successHandler)(), (() => this.errorHandler)(), 'AWFinder', 'openDirect', [filename]);
        }
        list(path: string) {
            cordova.exec((() => this.successHandler)(), (() => this.errorHandler)(), 'AWFinder', 'list', [path]);
        }
    }
    export class QRReader extends AWPlugin {
        scan() {
            cordova.exec((() => this.successHandler)(), (() => this.errorHandler)(), 'AWQRCodeReader', 'scan');
        }
        rename() {
            cordova.exec((() => this.successHandler)(), (() => this.errorHandler)(), 'AWQRCodeReader', 'rename');
        }
    }
    export class SecureStorage extends AWPlugin {

        seqNo = ++idCounter;

        onprogress = null;

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
            cordova.exec((() => this.successHandler)(), (() => this.errorHandler)(), 'AWSecureStorage', 'retrieve', args);
        }
    }
    export class AWFileTransfer extends AWPlugin implements FileTransfer {

        fileTransfer = new FileTransfer();
        onprogress = null;

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
                cordova.exec(gotSharedContainerUrl, (() => this.errorHandler)(), 'AWSharedDocumentProvider', 'container');
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
                cordova.exec(gotSharedContainerUrl, (() => this.errorHandler)(), 'AWSharedDocumentProvider', 'container');
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
        cordova = device.cordova;
        model = device.model;
        platform = device.platform;
        uuid = device.uuid;
        version = device.version;
        manufacturer = device.manufacturer;

        constructor() {
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

    }
    export class AWMediaCapture extends AWPlugin implements Capture {

    }
    export class AWNotificationManager extends AWPlugin {
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
        constructor() {
            super(() => {}, () => {});
        }
    }
    export class AWVibration extends AWPlugin {
        vibrate(time: number) {
            return navigator.vibrate(time);
        }
        constructor() {
            super(() => {}, () => {});
        }
    }

    export class AWOfflineManager extends AWPlugin {
        // TODO put network information inside of this class
    }
    export class AWCache extends AWPlugin {

    }
}