import {AWPlugin} from "../plugin";
import {AWProxy} from "../proxy";

export class AWFileTransfer extends AWPlugin {

    public onprogress: any;
    private fileTransfer: FileTransfer;

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
                this.toEnvFilePath(target),
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
                this.toEnvFilePath(source),
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
                // valid use of slash here as shared container is a mobile only concept
                containerUrl + '/' + source,
                encodeURI(url),
                successHandler,
                errorHandler,
                options,
                false
            );
        }
    }

    toEnvFilePath(fileUrl: string): string {
        // use a path relative to the Cordova defined sandbox in a mobile environment
        return AWProxy.isDesktopEnv() ? fileUrl : AWProxy.file().documentsDirectory + '/' + fileUrl;
    }

}