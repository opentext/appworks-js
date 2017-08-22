import { AWPlugin } from '../../common/plugin';
export declare class AWMobileFileSystem extends AWPlugin {
    list(directory: string, shared: boolean, success: any, error: any): void;
    listImports(success: any, error: any): void;
    moveImport(source: string, destination: string, shared: boolean, success: any, error: any): void;
    exists(source: string, shared: boolean, success: any, error: any): void;
    rename(source: string, destination: string, shared: boolean, success: any, error: any): void;
    copy(source: string, sourceShared: boolean, destination: string, destinationShared: boolean, success: any, error: any): void;
    move(source: string, sourceShared: boolean, destination: string, destinationShared: boolean, success: any, error: any): void;
    remove(source: string, shared: boolean, success: any, error: any): void;
    open(source: string, shared: boolean, success: any, error: any): void;
    share(source: string, shared: boolean, success: any, error: any): void;
    quicklook(source: string, shared: boolean, success: any, error: any): void;
    download(source: string, destination: string, headers: any, shared: boolean, success: any, error: any): void;
    upload(source: string, destination: string, headers: any, shared: boolean, success: any, error: any): void;
}
