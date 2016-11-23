/// <reference path="../../typings/globals/cordova/index.d.ts"/>

import {AWPlugin} from '../core/aw-plugin';

export class AWFileChooser extends AWPlugin {
    selectAndUpload(action: string) {
        let args = [action];
        cordova.exec(
            (() => this.successHandler)(),
            (() => this.errorHandler)(),
            'AWFileChooser',
            'open',
            args
        );
    }
}
