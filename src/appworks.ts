/// <reference path="../typings/cordova/cordova.d.ts"/>
/// <reference path="../typings/cordova/plugins/Camera.d.ts"/>
/// <reference path="../typings/cordova/plugins/FileTransfer.d.ts"/>
/// <reference path="../typings/cordova/plugins/FileSystem.d.ts"/>

declare var LocalFileSystem;

abstract class AWPlugin {
    successHandler: () => void;
    errorHandler: () => void;
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

        private getSharedDocumentUrl(callback, errorCallback) {
            var auth = new Appworks.Auth(
                    function (response) {
                        callback(response.sharedDocumentUrl + '/');
                    },
                    errorCallback
                );
            auth.authenticate();
        }

        store(url, filename, options) {
            options = options || {};

            window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, fileTransferHandler, (() => this.errorHandler)());

            function fileTransferHandler() {
                var transfer = new FileTransfer(),
                    directory = cordova.file.documentsDirectory;

                if (options.useSharedDocumentUrl) {
                    this.getSharedDocumentUrl(function (sharedDirectory) {
                        transfer.download(
                            encodeURI(url),
                            sharedDirectory + filename,
                            (() => this.successHandler)(),
                            (() => this.errorHandler)(),
                            false,
                            options
                        );
                    }, (() => this.errorHandler)());
                } else {
                    return transfer.download(
                        encodeURI(url),
                        directory + filename,
                        (() => this.successHandler)(),
                        (() => this.errorHandler)(),
                        false,
                        options
                    );
                }
            }
        }
        // TODO use directory names and shared document url to access files
        retrieve(filename, options) {
            options = options || {};
            options.fileSystem = options.fileSystem || LocalFileSystem.PERSISTENT;

            if (options.resolveLocalFileSystemURI) {
                window.resolveLocalFileSystemURI(filename, fileHandler, (() => this.errorHandler)());
            } else {
                window.requestFileSystem(options.fileSystem, 0, fileSystemHandler, (() => this.errorHandler)());
            }

            function fileSystemHandler(fileSystem) {
                fileSystem.root.getFile(filename, null, fileHandler, (() => this.errorHandler)());
            }

            function fileHandler(entry) {
                entry.file((() => this.successHandler)(), (() => this.errorHandler)());
            }
        }
    }
}