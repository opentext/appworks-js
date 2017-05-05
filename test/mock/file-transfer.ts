import {
    FileDownloadOptions, FileTransferError, FileTransferInterface, FileUploadOptions,
    FileUploadResult
} from '../../src/plugins/file-transfer/index';
import {FileEntry} from '../../src/plugins/file/index';

export class MockFileTransfer implements FileTransferInterface {
    onprogress: (event: ProgressEvent) => void;

    upload(fileURL: string,
           server: string,
           successCallback: (result: FileUploadResult) => void,
           errorCallback: (error: FileTransferError) => void,
           options?: FileUploadOptions,
           trustAllHosts?: boolean): void {
    }

    download(source: string,
             target: string,
             successCallback: (fileEntry: FileEntry) => void,
             errorCallback: (error: FileTransferError) => void,
             trustAllHosts?: boolean,
             options?: FileDownloadOptions): void {
    }

    abort(): void {
    }
}