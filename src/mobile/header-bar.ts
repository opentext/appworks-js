/// <reference path="../../typings/globals/cordova/index.d.ts"/>

import {AWPlugin} from '../core/aw-plugin';

export class AWHeaderBar extends AWPlugin {

    private callback: any;

    setHeader(config: any) {
        if (config && config.callback) {
            this.callback = config.callback;
            config.callback = true;
        } else {
            this.callback = null;
        }
        cordova.exec(
            (() => this.callback)(),
            (() => this.errorHandler)(),
            'AWHeaderBar',
            'setHeader',
            [config]
        );
    }

    getHeader() {
        cordova.exec(
            (() => this.successHandler)(),
            (() => this.errorHandler)(),
            'AWHeaderBar',
            'getHeader',
            []
        );
    }
}

export class AWHeader extends AWHeaderBar {
}