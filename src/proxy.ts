/// <reference path='../typings/globals/cordova/index.d.ts'/>
/// <reference path='../typings/globals/cordova/plugins/device/index.d.ts'/>
/// <reference path='../typings/globals/cordova/plugins/media/index.d.ts'/>
/// <reference path='../typings/globals/cordova/plugins/networkinformation/index.d.ts'/>
/// <reference path='../typings/globals/cordova/plugins/inappbrowser/index.d.ts'/>
/// <reference path='../typings/globals/cordova/plugins/filesystem/index.d.ts'/>

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

declare var __aw_plugin_proxy;

export class AWProxy {

    static exec(successHandler: any, errorHandler: any, name: string, method: string, args: any[]) {
        if (cordova) {
            cordova.exec(successHandler, errorHandler, name, method, args);
        } else if (__aw_plugin_proxy) {
            __aw_plugin_proxy.exec(successHandler, errorHandler, name, method, args);
        } else {
            console.error('No proxy objects defined - tried [Cordova, __aw_plugin_proxy]');
        }
    }

    static accelerometer() {
        return navigator.accelerometer || new MockAccelerometer();
    }

    static camera() {
        return navigator.camera || new MockCamera();
    }

    static compass() {
        return navigator.compass || new MockCompass();
    }

    static connection() {
        return navigator.connection || new MockConnection();
    }

    static Connection() {
        return Connection || {
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

    static contacts() {
        return navigator.contacts || new MockContacts();
    }

    static device(): Device {
        return device || {
                cordova: null,
                model: null,
                platform: null,
                uuid: null,
                version: null,
                manufacturer: null,
                isVirtual: null,
                serial: null,
                capture: new MockCapture()
            };
    }

    static geolocation() {
        return navigator.geolocation || new MockGeolocation();
    }

    static localFileSystem() {
        return LocalFileSystem;
    }

    static media(src, successHandler, errorHandler, statusChangeHandler) {
        if (Media) {
            return new Media(src, successHandler, errorHandler, statusChangeHandler);
        } else {
            return new MockMedia(src, successHandler, errorHandler, statusChangeHandler);
        }
    }

    static notification() {
        return navigator.notification || new MockNotification();
    }

    static requestFileSystem(type: LocalFileSystem,
                             size: number,
                             successCallback: (fileSystem: FileSystem) => void,
                             errorCallback?: (fileError: FileError) => void) {
        if (window.requestFileSystem) {
            return window.requestFileSystem(type, size, successCallback, errorCallback);
        }
    }

    static vibrate(time: number) {
        if (navigator.vibrate) {
            return navigator.vibrate(time);
        } else {
            return new MockVibrate().vibrate(time);
        }
    }

    static webview(): InAppBrowser {
        if (cordova) {
            return (cordova as any).InAppBrowser;
        } else {
            return (new MockWebview() as InAppBrowser);
        }
    }
}