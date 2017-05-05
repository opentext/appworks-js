import {AWPlugin} from '../../common/plugin';
import {AWProxy} from '../../common/proxy';

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

        function newProgressEvent(result: any) {
            let pe = new ProgressEvent(null);
            (pe as any).lengthComputable = result.lengthComputable;
            (pe as any).loaded = result.loaded;
            (pe as any).total = result.total;
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
        AWProxy.exec(
            progress,
            (() => this.errorHandler)(),
            'AWSecureStorage',
            'store',
            args
        );
    }

    retrieve(filename: string, options?: any) {
        let args = [filename, options];
        AWProxy.exec(
            (() => this.successHandler)(),
            (() => this.errorHandler)(),
            'AWSecureStorage',
            'retrieve',
            args
        );
    }

    remove(target: string) {
        let args = [target];
        AWProxy.exec(
            (() => this.successHandler)(),
            (() => this.errorHandler)(),
            'AWSecureStorage',
            'removeFile',
            args
        );
    }

    fileExistsAtPath(target: string) {
        let args = [target];
        AWProxy.exec(
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