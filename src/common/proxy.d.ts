import { LocalFileSystem } from "../plugins/file/local-file-system";
import { CameraInterface } from '../plugins/camera/index';
import { Accelerometer } from '../plugins/device-motion/index';
import { Compass } from '../plugins/device-orientation/index';
import { ConnectionInterface } from '../plugins/network-information/index';
import { Contacts } from '../plugins/contacts/index';
import { FileTransferInterface } from '../plugins/file-transfer/index';
import { MediaInterface } from '../plugins/media/index';
import { FileError, FileSystem } from '../plugins/file/index';
import { PersistentStorage } from '../plugins/storage/index';
import { Device } from '../plugins/device/index';
import { Notification } from '../plugins/dialogs/index';
export declare class AWProxy {
    static exec(successHandler: any, errorHandler: any, name: string, method: string, args: any[]): void;
    static accelerometer(): Accelerometer;
    static camera(): CameraInterface;
    static Camera(): any;
    static compass(): Compass;
    static connection(): ConnectionInterface;
    static Connection(): any;
    static contacts(): Contacts;
    static device(): Device;
    static document(): any;
    static file(): any;
    static filetransfer(): FileTransferInterface;
    static fileTransfer(): FileTransferInterface;
    static doGetFileTransfer(): FileTransferInterface;
    static geolocation(): Geolocation;
    static localFileSystem(): any;
    static media(src: any, successHandler: any, errorHandler: any, statusChangeHandler: any): MediaInterface;
    static notification(): Notification;
    static requestFileSystem(type: LocalFileSystem, size: number, successCallback: (fileSystem: FileSystem) => void, errorCallback?: (fileError: FileError) => void): void;
    static vibrate(time: number): void;
    static webview(): any;
    static storage(): Storage;
    static persistentStorage(): PersistentStorage;
    /**
     * Are we executing within the AppWorks Desktop context.
     *
     * @returns {boolean} true if this is a desktop environment, false otherwise
     */
    static isDesktopEnv(): boolean;
    /**
     * Are we executing within the AppWorks mobile context.
     *
     * @return {boolean} true if Cordova is available, false otherwise
     */
    static isMobileEnv(): boolean;
    /**
     * Ask the AppWorks desktop environment to retrieve an instance of a specific plugin.
     *
     * @param pluginName plugin identifier
     * @returns {any} plugin instance or null if no such plugin exists or the method was
     *                called outside of the desktop client context
     */
    static getDesktopPlugin(pluginName: string): any;
}
