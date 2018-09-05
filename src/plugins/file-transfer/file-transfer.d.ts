import { AWPlugin } from '../../common/plugin';
import { FileTransferInterface } from './index';
export declare class AWFileTransfer extends AWPlugin {
    onprogress: any;
    private fileTransfer;
    constructor(successHandler: any, errorHandler?: any);
    abort(): void;
    download(url: string, target: string, options?: any, shared?: boolean): FileTransferInterface;
    progressHandler(handler: any): void;
    upload(source: any, url: any, options: any, shared: any): FileTransferInterface;
    toEnvFilePath(fileUrl: string): string;
}
