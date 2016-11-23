import {AWPlugin} from '../core/aw-plugin';

export class SecureStorage extends AWPlugin {

    static idCounter = 0;
    seqNo: number;
    onprogress: any;

    constructor(successHandler: any, errorHandler?: any) {
        super(successHandler, errorHandler);
        // TODO
    }

    store(url: string, target: string, options?: any) {
        // TODO
    }

    retrieve(filename: string, options?: any) {
        // TODO
    }

    remove(target: string) {
        // TODO
    }

    fileExistsAtPath(target: string) {
        // TODO
    }
}

export class AWSecureStorage extends SecureStorage {
}