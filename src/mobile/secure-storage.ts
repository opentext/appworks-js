/// <reference path="../../typings/globals/cordova/index.d.ts"/>

import {AWPlugin} from '../core/aw-plugin';

export class SecureStorage extends AWPlugin {

    static idCounter = 0;
    seqNo: number;
    onprogress: any;

    constructor(successHandler: any, errorHandler?: any) {
        super(successHandler, errorHandler);
        this.seqNo = ++SecureStorage.idCounter;
        this.onprogress = null;
    }

    store(url: string, target: string, options?: any) {
        let args = [encodeURI(url), target, false, this.seqNo, options && options.headers],
            completionHandler = () => this.successHandler,
            progressHandler = this.onprogress,
            progress;

        function newProgressEvent(result) {
            let pe = new ProgressEvent(null);
            pe.lengthComputable = result.lengthComputable;
            pe.loaded = result.loaded;
            pe.total = result.total;
            return pe;
        }

        progress = function (result) {
            if (typeof result.lengthComputable !== 'undefined') {
                if (progressHandler) {
                    progressHandler(newProgressEvent(result));
                }
            } else {
                if (completionHandler) {
                    completionHandler()(result);
                }
            }
        };
        cordova.exec(
            progress,
            (() => this.errorHandler)(),
            'AWSecureStorage',
            'store',
            args
        );
    }

    retrieve(filename: string, options?: any) {
        let args = [filename, options];
        cordova.exec(
            (() => this.successHandler)(),
            (() => this.errorHandler)(),
            'AWSecureStorage',
            'retrieve',
            args
        );
    }

    remove(target: string) {
        let args = [target];
        cordova.exec(
            (() => this.successHandler)(),
            (() => this.errorHandler)(),
            'AWSecureStorage',
            'removeFile',
            args
        );
    }

    fileExistsAtPath(target: string) {
        let args = [target];
        cordova.exec(
            (() => this.successHandler)(),
            (() => this.errorHandler)(),
            'AWSecureStorage',
            'fileExistsAtPath',
            args
        );
    }
}

export class AWSecureStorage extends SecureStorage {
}