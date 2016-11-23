import {AWPlugin} from '../core/aw-plugin';

export class AWFileTransfer extends AWPlugin {

    public onprogress: any;
    private fileTransfer: any;

    constructor(successHandler: any, errorHandler?: any) {
        super(successHandler, errorHandler);
        // TODO
    }

    abort() {
        // TODO
    }

    download(url: string, target: string, options?: any, shared?: boolean) {
        // TODO
    }

    progressHandler(handler: any) {
        // TODO
    }

    upload(source, url, options, shared) {
        // TODO
    }
}