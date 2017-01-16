import {AWPlugin} from "../plugin";
import {AWProxy} from "../proxy";
import {Util} from "../util";

export interface FileDetails {
    /**
     * File name.
     */
    name: string;
    /**
     * Full path to the file.
     */
    path: string;
    /**
     * Is this a directory or file?
     */
    isDirectory: boolean;
    /**
     * MD5 hash checksum of the file (files only).
     */
    checksum: string;
    /**
     * Last modified time in millis (since epoch).
     */
    modified: number;
}

export interface SaveDialogOptions {
    title?: string;
    defaultPath?: string;
    /**
     * Custom label for the confirmation button, when left empty the default label will be used.
     */
    buttonLabel?: string;
    /**
     * Extensions without wildcards or dots (e.g. 'png' is good but '.png' and '*.png' are bad).
     * To show all files, use the '*' wildcard (no other wildcard is supported).
     */
    filters?: {
        name: string;
        extensions: string[];
    }[];
}

export interface FileDialogOptions {
    /**
     * File types that can be displayed or selected.
     */
    filters?: {
        name: string;
        /**
         * Extensions without wildcards or dots (e.g. 'png' is good but '.png' and '*.png' are bad).
         * To show all files, use the '*' wildcard (no other wildcard is supported).
         */
        extensions: string[];
    }[];
    /**
     * Can multiple files be selected by the dialog?
     */
    multiSelections?: boolean;
}

export interface DesktopHostFileSystem {
    exists(path: string,
           successCallback: (result: boolean) => void,
           errorCallback?: (result: Error) => void): void;

    isDir(path: string,
          successCallback: (result: boolean) => void,
          errorCallback?: (result: Error) => void): void;

    open(path: string,
         successCallback: (result: boolean) => void,
         errorCallback?: (result: Error) => void): void;

    reveal(path: string,
           successCallback: (result: boolean) => void,
           errorCallback?: (result: Error) => void): void;

    getDetails(path: string,
               successCallback: (result: FileDetails) => void,
               errorCallback?: (result: Error) => void): void;

    listDirContents(path: string,
                    successCallback: (result: FileDetails[]) => void,
                    errorCallback?: (result: Error) => void): void;

    showSaveDialog(opts: any,
                   successCallback: (result: string) => void,
                   errorCallback?: (result: Error) => void): void;

    showDirSelector(successCallback: (result: string[]) => void,
                    errorCallback?: (result: Error) => void): void;

    showFileSelector(opts: any,
                     successCallback: (result: string[]) => void,
                     errorCallback?: (result: Error) => void): void;
}

export class AWFileSystem extends AWPlugin implements DesktopHostFileSystem {

    desktopEnvError: Error = new Error('This method is only available in the AppWorks Desktop environment');

    constructor() {
        super(Util.noop, Util.noop);
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

    showDirSelector(successCallback: (result: string[]) => void,
                    errorCallback?: (result: Error) => void): void {
        this.validateEnv();
        AWProxy.exec(
            successCallback,
            errorCallback,
            'AWFileSystem',
            'showDirSelector',
            []
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
        var desktopEnv = AWProxy.isDesktopEnv();
        console.log(`isDesktopEnv=${desktopEnv}`);
        if (!desktopEnv) {
            console.log('throwing error');
            throw this.desktopEnvError;
        }
    }

}
