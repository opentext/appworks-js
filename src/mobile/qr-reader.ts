/// <reference path="../../typings/globals/cordova/index.d.ts"/>

import {AWPlugin} from '../core/aw-plugin';

export class QRReader extends AWPlugin {
    scan() {
        cordova.exec(
            (() => this.successHandler)(),
            (() => this.errorHandler)(),
            'AWQRCodeReader',
            'scan',
            []
        );
    }

    rename() {
        cordova.exec(
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