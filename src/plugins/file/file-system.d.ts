import { AWPlugin } from "../../common/plugin";
import { DesktopHostFileSystem, FileDetails, FileDialogOptions, SaveDialogOptions } from './index';
export declare class AWFileSystem extends AWPlugin implements DesktopHostFileSystem {
    desktopEnvError: Error;
    constructor();
    getPath(name: string, successCallback: (result: string) => void, errorCallback?: (result: Error) => void): void;
    exists(path: string, successCallback: (result: boolean) => void, errorCallback?: (result: Error) => void): void;
    isDir(path: string, successCallback: (result: boolean) => void, errorCallback?: (result: Error) => void): void;
    createFile(path: string, successCallback: (result: boolean) => void, errorCallback?: (result: Error) => void, data?: any): void;
    createDirectory(path: string, successCallback: (result: boolean) => void, errorCallback?: (result: Error) => void): void;
    copy(from: string, to: string, successCallback: (result: boolean) => void, errorCallback?: (result: Error) => void): void;
    open(path: string, successCallback: (result: boolean) => void, errorCallback?: (result: Error) => void): void;
    reveal(path: string, successCallback: (result: boolean) => void, errorCallback?: (result: Error) => void): void;
    getDetails(path: string, successCallback: (result: FileDetails) => void, errorCallback?: (result: Error) => void): void;
    listDirContents(path: string, successCallback: (result: FileDetails[]) => void, errorCallback?: (result: Error) => void): void;
    showSaveDialog(opts: SaveDialogOptions, successCallback: (result: string) => void, errorCallback?: (result: Error) => void): void;
    showDirSelector(opts: FileDialogOptions, successCallback: (result: string[]) => void, errorCallback?: (result: Error) => void): void;
    showFileSelector(opts: FileDialogOptions, successCallback: (result: string[]) => void, errorCallback?: (result: Error) => void): void;
    /**
     * The methods of this class should only be called from within an AppWorks desktop
     * environment.
     */
    validateEnv(): void;
}
