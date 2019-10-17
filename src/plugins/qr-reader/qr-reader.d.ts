import { AWPlugin } from '../../common/plugin';
export declare class QRReader extends AWPlugin {
    scan(): void;
    rename(): void;
    barcode(multiple?: boolean, timeout?: number, finishTitle?: string, cancelTitle?: string): void;
}
export declare class AWQRReader extends QRReader {
}
