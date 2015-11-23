/// <reference path="../typings/cordova/cordova.d.ts"/>
/// <reference path="../typings/cordova/plugins/Camera.d.ts"/>
/// <reference path="../typings/cordova/plugins/FileTransfer.d.ts"/>
/// <reference path="../typings/cordova/plugins/FileSystem.d.ts"/>

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
        openGallery(options: any) {
            options = options || {
                    destinationType: Camera.DestinationType.NATIVE_URI
                };
            options.sourceType = Camera.PictureSourceType.PHOTOLIBRARY;
            this.getPicture((() => this.successHandler)(), (() => this.errorHandler)(), options);
        }
        takePicture(options: any) {
            options = options || {
                    destinationType: Camera.DestinationType.NATIVE_URI,
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
        open(path, filename) {
            var args = [path, filename];
            cordova.exec((() => this.successHandler)(), (() => this.errorHandler)(), 'AWFinder', 'open', args);
        }
        openDirect(filename) {
            cordova.exec((() => this.successHandler)(), (() => this.errorHandler)(), 'AWFinder', 'openDirect', [filename]);
        }
        list(path) {
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

        store(url, target, options) {
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
        retrieve(filename, options) {
            var args = [filename, options];
            cordova.exec((() => this.successHandler)(), (() => this.errorHandler)(), 'AWSecureStorage', 'retrieve', args);
        }
    }
    export class AWFileTransfer extends AWPlugin implements FileTransfer {

        fileTransfer = new FileTransfer();

        abort() {
            this.fileTransfer.abort();
        }
        onprogress() {
            return this.fileTransfer.onprogress;
        }
        upload(fileUrl, serverUrl, options, shared) {

            if (shared) {

            } else {
                this.fileTransfer.upload(
                    cordova.file.documentsDirectory + '/' + fileUrl,
                    encodeURI(serverUrl),
                    (() => this.successHandler)(),
                    (() => this.errorHandler)(),
                    options,
                    false
                );
            }
            return this.fileTransfer;
        }
        download(url, target, options, shared) {

            if (shared) {

            } else {
                this.fileTransfer.download(
                    encodeURI(url),
                    cordova.file.documentsDirectory + '/' + target,
                    (() => this.successHandler)(),
                    (() => this.errorHandler)(),
                    false,
                    options
                );
            }
            return this.fileTransfer;
        }
    }
}