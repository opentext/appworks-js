/// <reference path="../../typings/globals/cordova/index.d.ts"/>

import {AWPlugin} from '../core/aw-plugin';

export class AWMenu extends AWPlugin {
    push(items: any) {
        let args = [items];
        cordova.exec(
            (() => this.successHandler)(),
            (() => this.errorHandler)(),
            'AWMenu',
            'push',
            args
        );
    }

    openListener(listener: any) {
        cordova.exec(
            listener,
            (() => this.errorHandler)(),
            'AWMenu',
            'receive',
            []
        );
    }

    didTapMenuItem(listener: any) {
        return this.openListener(listener);
    }
}