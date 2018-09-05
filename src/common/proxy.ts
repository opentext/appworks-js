import {MockAccelerometer} from '../../test/mock/accelerometer';
import {MockCamera} from '../../test/mock/camera';
import {MockCapture} from '../../test/mock/capture';
import {MockCompass} from '../../test/mock/compass';
import {MockConnection} from '../../test/mock/connection';
import {MockContacts} from '../../test/mock/contacts';
import {MockFileTransfer} from '../../test/mock/file-transfer';
import {MockGeolocation} from '../../test/mock/geolocation';
import {MockMedia} from '../../test/mock/media';
import {MockNotification} from '../../test/mock/notifications';
import {PersistentStorageMock} from '../../test/mock/persistent-storage';
import {MockVibrate} from '../../test/mock/vibrate';
import {CameraInterface} from '../plugins/camera/index';
import {Contacts} from '../plugins/contacts/index';
import {Accelerometer} from '../plugins/device-motion/index';
import {Compass} from '../plugins/device-orientation/index';
import {Device} from '../plugins/device/index';
import {Notification} from '../plugins/dialogs/index';
import {FileTransferInterface} from '../plugins/file-transfer/index';
import {FileError, FileSystem} from '../plugins/file/index';
import {LocalFileSystem} from '../plugins/file/local-file-system';
import {MediaInterface} from '../plugins/media/index';
import {ConnectionInterface} from '../plugins/network-information/index';
import {DesktopStorage} from '../plugins/storage/desktop-storage';
import {PersistentStorage} from '../plugins/storage/index';
import {OnDeviceStorage} from '../plugins/storage/on-device-storage';
import {AWStorage} from '../plugins/storage/storage';
import {DesktopWebview} from '../plugins/webview/desktop-webview';
import {isFunction, noop} from './util';

declare const Media: {
  new(src: string,
      mediaSuccess: () => void,
      mediaError?: (error: MediaError) => any,
      mediaStatus?: (status: number) => void): MediaInterface;
  // Media statuses
  MEDIA_NONE: number;
  MEDIA_STARTING: number;
  MEDIA_RUNNING: number;
  MEDIA_PAUSED: number;
  MEDIA_STOPPED: number
};
declare const FileTransfer: any;
declare const Camera: {
  // Camera constants, defined in Camera plugin
  DestinationType: {
    DATA_URL: number;
    FILE_URI: number;
    NATIVE_URI: number
  }
  Direction: {
    BACK: number;
    FRONT: number;
  }
  EncodingType: {
    JPEG: number;
    PNG: number;
  }
  MediaType: {
    PICTURE: number;
    VIDEO: number;
    ALLMEDIA: number;
  }
  PictureSourceType: {
    PHOTOLIBRARY: number;
    CAMERA: number;
    SAVEDPHOTOALBUM: number;
  }
  // Used only on iOS
  PopoverArrowDirection: {
    ARROW_UP: number;
    ARROW_DOWN: number;
    ARROW_LEFT: number;
    ARROW_RIGHT: number;
    ARROW_ANY: number;
  }
};

declare const __aw_plugin_proxy;
declare const cordova: any;
declare const navigator: any;
declare const device: any;
declare const window: any;
declare const Connection: any;

const callbackQueue: (() => any)[] = [];
let deviceReady: boolean = false;

setupDeviceInitializationForMobile();

export class AWProxy {

  static exec(successHandler: any, errorHandler: any, name: string, method: string, args: any[]): void {
    try {
      if (AWProxy.isDesktopEnv()) {
        AWProxy.execDesktop(successHandler, errorHandler, name, method, args);
      } else {
        AWProxy.execMobile(successHandler, errorHandler, name, method, args);
      }
    } catch (err) {
      console.error('No proxy objects defined - tried [cordova, __aw_plugin_proxy]', err);
      if (isFunction(errorHandler)) {
        errorHandler(err);
      }
    }
  }

  static accelerometer(): Accelerometer {
    const _accelerometer = typeof 'navigator' !== undefined ? navigator.accelerometer : new MockAccelerometer();
    return _accelerometer;
  }

  static camera(): CameraInterface {
    const _camera = typeof navigator !== 'undefined' ? navigator.camera : new MockCamera();
    return _camera;
  }

  static Camera(): any {
    const _Camera = (typeof Camera !== 'undefined') ? Camera : {
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
    return _Camera;
  }

  static compass(): Compass {
    const _Compass = typeof navigator !== 'undefined' ? navigator.compass : new MockCompass();
    return _Compass;
  }

  static connection(): ConnectionInterface {
    const _connection = typeof navigator !== 'undefined' ? navigator.connection : new MockConnection();
    return _connection;
  }

  static Connection(): any {
    const _Connection = (typeof Connection !== 'undefined') ? Connection : {
      UNKNOWN: null,
      ETHERNET: null,
      WIFI: null,
      CELL_2G: null,
      CELL_3G: null,
      CELL_4G: null,
      CELL: null,
      NONE: null
    };
    return _Connection;
  }

  static contacts(): Contacts {
    const _contacts = typeof navigator !== 'undefined' ? navigator.contacts : new MockContacts();
    return _contacts;
  }

  static device(): Device {
    const _device: Device = (typeof device !== 'undefined') ? device : {
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
    } else {
      _device.capture = new MockCapture();
    }
    return _device;
  }

  static document(): any {
    const _document = (typeof document !== 'undefined') ? document : {
      addEventListener: noop
    };
    return _document;
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

  static filetransfer(): FileTransferInterface {
    return AWProxy.doGetFileTransfer();
  }

  // alias name
  static fileTransfer(): FileTransferInterface {
    return AWProxy.doGetFileTransfer();
  }

  static doGetFileTransfer(): FileTransferInterface {
    if (AWProxy.isDesktopEnv()) {
      const plugin = AWProxy.getDesktopPlugin('AWFileTransfer');
      return (plugin !== null) ? plugin : new MockFileTransfer();
    }
    return (typeof FileTransfer !== 'undefined') ? new FileTransfer() : new MockFileTransfer();
  }

  static geolocation(): Geolocation {
    const _geolocation = (typeof navigator !== 'undefined') ? navigator.geolocation : new MockGeolocation();
    return _geolocation;
  }

  static localFileSystem(): any {
    return LocalFileSystem;
  }

  static media(src, successHandler, errorHandler, statusChangeHandler): MediaInterface {
    if (typeof Media !== 'undefined') {
      return new Media(src, successHandler, errorHandler, statusChangeHandler);
    } else {
      return new MockMedia(src, successHandler, errorHandler, statusChangeHandler);
    }
  }

  static notification(): Notification {
    const _notification = (typeof navigator !== 'undefined') ? navigator.notification : new MockNotification();
    return _notification;
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
      const _vibrate = navigator.vibrate(time);
      return _vibrate;
    } else {
      return new MockVibrate().vibrate(time);
    }
  }

  static webview(): any {
    if (typeof cordova !== 'undefined') {
      return (cordova as any).InAppBrowser;
    } else {
      return new DesktopWebview();
    }
  }

  static storage(): Storage {
    return new AWStorage();
  }

  static persistentStorage(): PersistentStorage {
    const desktopPlugin = AWProxy.getDesktopPlugin('AWStorage');
    return desktopPlugin !== null ?
      new DesktopStorage(desktopPlugin) : (AWProxy.isMobileEnv()) ?
        new OnDeviceStorage() : new PersistentStorageMock();
  }

  static isDesktopEnv(): boolean {
    return typeof __aw_plugin_proxy !== 'undefined';
  }

  static isMobileEnv(): boolean {
    return typeof cordova !== 'undefined';
  }

  static getDesktopPlugin(pluginName: string): any {
    if (!AWProxy.isDesktopEnv()) return null;
    // the proxy exposed by desktop has a method to allow retrieval of plugin instances
    return __aw_plugin_proxy.getPlugin(pluginName);
  }

  private static execMobile(successHandler: any, errorHandler: any, name: string, method: string, args: any[]) {
    if (deviceReady) {
      cordova.exec(successHandler, errorHandler, name, method, args);
    } else {
      callbackQueue.push(() => {
        AWProxy.exec(successHandler, errorHandler, name, method, args);
      });
    }
  }

  private static execDesktop(successHandler: any, errorHandler: any, name: string, method: string, args: any[]) {
    __aw_plugin_proxy.exec(successHandler, errorHandler, name, method, args);
  }
}

function setupDeviceInitializationForMobile() {
  try {
    document.addEventListener('deviceready', () => {
      deviceReady = true;
      callbackQueue.forEach((callback) => {
        callback();
      });
    });
  } catch (e) {
    // unsupported environment
  }
}
