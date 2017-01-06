export class MockFileTransfer implements FileTransfer {
    onprogress: (event: ProgressEvent) => void;

    upload(
        fileURL: string,
        server: string,
        successCallback: (result: FileUploadResult) => void,
        errorCallback: (error: FileTransferError) => void,
        options?: FileUploadOptions,
        trustAllHosts?: boolean): void {
    }

    download(
        source: string,
        target: string,
        successCallback: (fileEntry: FileEntry) => void,
        errorCallback: (error: FileTransferError) => void,
        trustAllHosts?: boolean,
        options?: FileDownloadOptions): void {
    }

    abort(): void {
    }
}