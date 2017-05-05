import { AWPlugin } from '../../common/plugin';
export declare class SecureStorage extends AWPlugin {
    static idCounter: number;
    seqNo: number;
    onprogress: any;
    constructor(successHandler: any, errorHandler?: any);
    store(url: string, target: string, options?: any): void;
    retrieve(filename: string, options?: any): void;
    remove(target: string): void;
    fileExistsAtPath(target: string): void;
}
export declare class AWSecureStorage extends SecureStorage {
}
