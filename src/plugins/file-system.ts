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
    getPath(name: string,
            successCallback: (result: string) => void,
            errorCallback?: (result: Error) => void): void;
    exists(path: string,
           successCallback: (result: boolean) => void,
           errorCallback?: (result: Error) => void): void;

    isDir(path: string,
          successCallback: (result: boolean) => void,
          errorCallback?: (result: Error) => void): void;

    createFile(path: string,
               successCallback: (result: boolean) => void,
               errorCallback?: (result: Error) => void): void;

    createDirectory(path: string,
                    successCallback: (result: boolean) => void,
                    errorCallback?: (result: Error) => void): void;

    copy(from: string,
         to: string,
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

    showSaveDialog(opts: FileDialogOptions,
                   successCallback: (result: string) => void,
                   errorCallback?: (result: Error) => void): void;

    showDirSelector(successCallback: (result: string[]) => void,
                    errorCallback?: (result: Error) => void): void;

    showFileSelector(opts: SaveDialogOptions,
                     successCallback: (result: string[]) => void,
                     errorCallback?: (result: Error) => void): void;
}

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
               errorCallback?: (result: Error) => void): void {
        this.validateEnv();
        AWProxy.exec(
            successCallback,
            errorCallback,
            'AWFileSystem',
            'createFile',
            [path]
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
        if (!AWProxy.isDesktopEnv()) {
            throw this.desktopEnvError;
        }
    }

}
