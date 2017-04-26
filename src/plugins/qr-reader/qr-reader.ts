import {AWPlugin} from '../../plugin';
import {AWProxy} from '../../proxy';

export class QRReader extends AWPlugin {
    scan() {
        AWProxy.exec(
            (() => this.successHandler)(),
            (() => this.errorHandler)(),
            'AWQRCodeReader',
            'scan',
            []
        );
    }

    rename() {
        AWProxy.exec(
            (() => this.successHandler)(),
            (() => this.errorHandler)(),
            'AWQRCodeReader',
            'rename',
            []
        );
    }
}

export class AWQRReader extends QRReader {
}