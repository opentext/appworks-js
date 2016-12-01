import {AWPlugin} from '../plugin';
import {AWProxy} from '../proxy';
import {Util} from '../util';

export class AWKeyboard extends AWPlugin {
    constructor() {
        super(Util.noop, Util.noop);
    }

    hideKeyboardAccessoryBar(hide: boolean) {
        AWProxy.exec(
            (() => this.successHandler)(),
            (() => this.errorHandler)(),
            'AWKeyboard',
            'hideKeyboardAccessoryBar',
            [hide.toString()]
        );
    }

    close() {
        AWProxy.exec(
            (() => this.successHandler)(),
            (() => this.errorHandler)(),
            'AWKeyboard',
            'close',
            []
        );
    }

    show() {
        AWProxy.exec(
            (() => this.successHandler)(),
            (() => this.errorHandler)(),
            'AWKeyboard',
            'show',
            []
        );
    }

    disableScroll(disable: boolean) {
        disable = !!disable;
        AWProxy.exec(
            (() => this.successHandler)(),
            (() => this.errorHandler)(),
            'AWKeyboard',
            'disableScroll',
            [disable.toString()]
        );
    }
}