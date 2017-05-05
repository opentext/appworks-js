import {AWPlugin} from '../../common/plugin';
import {AWProxy} from '../../common/proxy';

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