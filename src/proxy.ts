/// <reference path='../typings/globals/cordova/index.d.ts'/>
/// <reference path='../typings/globals/cordova/plugins/device/index.d.ts'/>
/// <reference path='../typings/globals/cordova/plugins/media/index.d.ts'/>
/// <reference path='../typings/globals/cordova/plugins/networkinformation/index.d.ts'/>
/// <reference path='../typings/globals/cordova/plugins/inappbrowser/index.d.ts'/>
/// <reference path='../typings/globals/cordova/plugins/filesystem/index.d.ts'/>
/// <reference path='../typings/globals/cordova/plugins/mediacapture/index.d.ts'/>
/// <reference path='../typings/globals/cordova/plugins/camera/index.d.ts'/>

import {MockContacts} from '../test/mock/contacts';
import {MockAccelerometer} from '../test/mock/accelerometer';
import {MockCamera} from '../test/mock/camera';
import {MockCompass} from '../test/mock/compass';
import {MockGeolocation} from '../test/mock/geolocation';
import {MockMedia} from '../test/mock/media';
import {MockCapture} from '../test/mock/capture';
import {MockNotification} from '../test/mock/notifications';
import {MockConnection} from '../test/mock/connection';
import {MockVibrate} from '../test/mock/vibrate';
import {MockWebview} from '../test/mock/webview';
import {LocalFileSystem} from "./plugins/local-file-system";
import {MockFileTransfer} from "../test/mock/file-transfer";
import {Util} from "./util";
import {MockLocalStorage} from "../test/mock/local-storage";

declare var __aw_plugin_proxy;

export class AWProxy {

    static exec(successHandler: any, errorHandler: any, name: string, method: string, args: any[]): void {
        if (typeof cordova !== 'undefined') {
            cordova.exec(successHandler, errorHandler, name, method, args);
        } else if (typeof __aw_plugin_proxy !== 'undefined') {
            __aw_plugin_proxy.exec(successHandler, errorHandler, name, method, args);
        } else {
            console.error('No proxy objects defined - tried [Cordova, __aw_plugin_proxy]');
            if (typeof errorHandler === 'function') {
                errorHandler('No proxy objects defined - tried [Cordova, __aw_plugin_proxy]');
            }
        }
    }

    static accelerometer(): Accelerometer {
        return typeof 'navigator' !== undefined ? navigator.accelerometer : new MockAccelerometer();
    }

    static camera(): Camera {
        return typeof navigator !== 'undefined' ? navigator.camera : new MockCamera();
    }

    static Camera(): any {
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
    }

    static compass(): Compass {
        return typeof navigator !== 'undefined' ? navigator.compass : new MockCompass();
    }

    static connection(): Connection {
        return typeof navigator !== 'undefined' ? navigator.connection : new MockConnection();
    }

    static Connection(): any {
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
    }

    static contacts(): Contacts {
        return typeof navigator !== 'undefined' ? navigator.contacts : new MockContacts();
    }

    static device(): Device {
        let _device = (typeof device !== 'undefined') ? device : {
            cordova: null,
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
        } else {
            _device.capture = new MockCapture();
        }
        return _device;
    }

    static document(): any {
        return (typeof document !== 'undefined') ? document : {
            addEventListener: Util.noop
        };
    }

    static file(): any {
        if (typeof cordova !== 'undefined') {
            return cordova.file;
        } else {
            return {
                documentsDirectory: ''
            };
        }
    }

    static filetransfer(): FileTransfer {
        return (typeof FileTransfer !== 'undefined') ? new FileTransfer() : new MockFileTransfer();
    }

    // alias name
    static fileTransfer(): FileTransfer {
        return (typeof FileTransfer !== 'undefined') ? new FileTransfer() : new MockFileTransfer();
    }

    static geolocation(): Geolocation {
        return (typeof navigator !== 'undefined') ? navigator.geolocation : new MockGeolocation();
    }

    static localFileSystem(): any {
        return LocalFileSystem;
    }

    static media(src, successHandler, errorHandler, statusChangeHandler): Media {
        if (typeof Media !== 'undefined') {
            return new Media(src, successHandler, errorHandler, statusChangeHandler);
        } else {
            return new MockMedia(src, successHandler, errorHandler, statusChangeHandler);
        }
    }

    static notification(): Notification {
        return (typeof navigator !== 'undefined') ? navigator.notification : new MockNotification();
    }

    static requestFileSystem(type: LocalFileSystem,
                             size: number,
                             successCallback: (fileSystem: FileSystem) => void,
                             errorCallback?: (fileError: FileError) => void): void {
        if (window.requestFileSystem) {
            return window.requestFileSystem(type, size, successCallback, errorCallback);
        }
    }

    static vibrate(time: number): void {
        if (typeof navigator !== 'undefined' && navigator.vibrate) {
            return navigator.vibrate(time);
        } else {
            return new MockVibrate().vibrate(time);
        }
    }

    static webview(): InAppBrowser {
        if (typeof cordova !== 'undefined') {
            return (cordova as any).InAppBrowser;
        } else {
            return (new MockWebview() as InAppBrowser);
        }
    }

    static storage(): any {
        return (typeof window !== 'undefined') ? window.localStorage : new MockLocalStorage();
    }
}