/// <reference path="../../typings/globals/cordova/index.d.ts"/>

import {AWPlugin} from '../core/aw-plugin';

export class AWKeyboard extends AWPlugin {
    constructor() {
        super(() => {}, () => {});
    }

    hideKeyboardAccessoryBar(hide: boolean) {
        cordova.exec(
            (() => this.successHandler)(),
            (() => this.errorHandler)(),
            'AWKeyboard',
            'hideKeyboardAccessoryBar',
            [hide.toString()]
        );
    }

    close() {
        cordova.exec(
            (() => this.successHandler)(),
            (() => this.errorHandler)(),
            'AWKeyboard',
            'close',
            []
        );
    }

    show() {
        cordova.exec(
            (() => this.successHandler)(),
            (() => this.errorHandler)(),
            'AWKeyboard',
            'show',
            []
        );
    }

    disableScroll(disable: boolean) {
        disable = !!disable;
        cordova.exec(
            (() => this.successHandler)(),
            (() => this.errorHandler)(),
            'AWKeyboard',
            'disableScroll',
            [disable.toString()]
        );
    }
}