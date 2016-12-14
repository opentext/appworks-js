/// <reference path="../../typings/globals/cordova/index.d.ts"/>
/// <reference path="../../typings/globals/cordova/plugins/filesystem/index.d.ts"/>
/// <reference path="../../typings/globals/cordova/plugins/filetransfer/index.d.ts"/>

import {AWPlugin} from '../plugin';
import {AWProxy} from "../proxy";

export class AWFileTransfer extends AWPlugin {

    public onprogress: any;
    private fileTransfer: any;

    constructor(successHandler: any, errorHandler?: any) {
        super(successHandler, errorHandler);
        this.fileTransfer = AWProxy.filetransfer();
        this.onprogress = null;
    }

    abort() {
        this.fileTransfer.abort();
    }

    download(url: string, target: string, options?: any, shared?: boolean) {

        let successHandler = this.successHandler,
            errorHandler = this.errorHandler;

        options = options || {};

        if (shared) {
            AWProxy.exec(
                gotSharedContainerUrl,
                (() => this.errorHandler)(),
                'AWSharedDocumentProvider',
                'containerForCurrentApp',
                []
            );
        } else {
            this.fileTransfer.download(
                encodeURI(url),
                AWProxy.file().documentsDirectory + '/' + target,
                successHandler,
                errorHandler,
                false,
                options
            );
        }
        return this.fileTransfer;

        function gotSharedContainerUrl(containerUrl?: string) {
            AWProxy.filetransfer().download(
                encodeURI(url),
                containerUrl + '/' + target,
                successHandler,
                errorHandler,
                false,
                options
            );
        }
    }

    progressHandler(handler: any) {
        this.fileTransfer.onprogress = handler;
    }

    upload(source, url, options, shared) {

        let successHandler = this.successHandler,
            errorHandler = this.errorHandler;

        options = options || {};

        if (shared) {
            AWProxy.exec(
                gotSharedContainerUrl,
                (() => this.errorHandler)(),
                'AWSharedDocumentProvider',
                'containerForCurrentApp',
                []
            );
        } else {
            this.fileTransfer.upload(
                AWProxy.file().documentsDirectory + '/' + source,
                encodeURI(url),
                successHandler,
                errorHandler,
                options,
                false
            );
        }

        return this.fileTransfer;

        function gotSharedContainerUrl(containerUrl?: string) {
            AWProxy.filetransfer().upload(
                containerUrl + '/' + source,
                encodeURI(url),
                successHandler,
                errorHandler,
                options,
                false
            );
        }
    }
}