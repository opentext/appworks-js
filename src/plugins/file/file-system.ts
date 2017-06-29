import {AWPlugin} from "../../common/plugin";
import {AWProxy} from "../../common/proxy";
import {Util} from "../../common/util";
import {DesktopHostFileSystem, FileDetails, FileDialogOptions, SaveDialogOptions} from "./index";

export class AWFileSystem extends AWPlugin implements DesktopHostFileSystem {

    desktopEnvError: Error = new Error('This method is only available in the AppWorks Desktop environment');

    constructor() {
        super(Util.noop, Util.noop);
    }

    getPath(name: string,
            successCallback: (result: string) => void,
            errorCallback?: (result: Error) => void): void {
        this.validateEnv();
        AWProxy.exec(
            successCallback,
            errorCallback,
            'AWFileSystem',
            'getPath',
            [name]
        );
    }

    exists(path: string,
           successCallback: (result: boolean) => void,
           errorCallback?: (result: Error) => void): void {
        this.validateEnv();
        AWProxy.exec(
            successCallback,
            errorCallback,
            'AWFileSystem',
            'exists',
            [path]
        );
    }

    isDir(path: string,
          successCallback: (result: boolean) => void,
          errorCallback?: (result: Error) => void): void {
        this.validateEnv();
        AWProxy.exec(
            successCallback,
            errorCallback,
            'AWFileSystem',
            'isDir',
            [path]
        );
    }

    createFile(path: string,
               successCallback: (result: boolean) => void,
               errorCallback?: (result: Error) => void,
               data?: any,
               append?: boolean): void {
        this.validateEnv();
        AWProxy.exec(
            successCallback,
            errorCallback,
            'AWFileSystem',
            'createFile',
            [path, data, append]
        );
    }

    createDirectory(path: string,
                    successCallback: (result: boolean) => void,
                    errorCallback?: (result: Error) => void): void {
        this.validateEnv();
        AWProxy.exec(
            successCallback,
            errorCallback,
            'AWFileSystem',
            'createDirectory',
            [path]
        );
    }

    copy(from: string, to: string,
         successCallback: (result: boolean) => void,
         errorCallback?: (result: Error) => void): void {
        this.validateEnv();
        AWProxy.exec(
            successCallback,
            errorCallback,
            'AWFileSystem',
            'copy',
            [from, to]
        );
    }

    open(path: string,
         successCallback: (result: boolean) => void,
         errorCallback?: (result: Error) => void): void {
        this.validateEnv();
        AWProxy.exec(
            successCallback,
            errorCallback,
            'AWFileSystem',
            'open',
            [path]
        );
    }

    reveal(path: string,
           successCallback: (result: boolean) => void,
           errorCallback?: (result: Error) => void): void {
        this.validateEnv();
        AWProxy.exec(
            successCallback,
            errorCallback,
            'AWFileSystem',
            'reveal',
            [path]
        );
    }

    getDetails(path: string,
               successCallback: (result: FileDetails) => void,
               errorCallback?: (result: Error) => void): void {
        this.validateEnv();
        AWProxy.exec(
            successCallback,
            errorCallback,
            'AWFileSystem',
            'getDetails',
            [path]
        );
    }

    listDirContents(path: string,
                    successCallback: (result: FileDetails[]) => void,
                    errorCallback?: (result: Error) => void): void {
        this.validateEnv();
        AWProxy.exec(
            successCallback,
            errorCallback,
            'AWFileSystem',
            'listDirContents',
            [path]
        );
    }

    showSaveDialog(opts: SaveDialogOptions,
                   successCallback: (result: string) => void,
                   errorCallback?: (result: Error) => void): void {
        this.validateEnv();
        AWProxy.exec(
            successCallback,
            errorCallback,
            'AWFileSystem',
            'showSaveDialog',
            [opts]
        );
    }

    showDirSelector(opts: FileDialogOptions,
                    successCallback: (result: string[]) => void,
                    errorCallback?: (result: Error) => void): void {
        this.validateEnv();
        AWProxy.exec(
            successCallback,
            errorCallback,
            'AWFileSystem',
            'showDirSelector',
            [opts]
        );
    }

    showFileSelector(opts: FileDialogOptions,
                     successCallback: (result: string[]) => void,
                     errorCallback?: (result: Error) => void): void {
        this.validateEnv();
        AWProxy.exec(
            successCallback,
            errorCallback,
            'AWFileSystem',
            'showFileSelector',
            [opts]
        );
    }

    /**
     * The methods of this class should only be called from within an AppWorks desktop
     * environment.
     */
    validateEnv(): void {
        if (!AWProxy.isDesktopEnv()) {
            throw this.desktopEnvError;
        }
    }

}
