/// <reference path="../../typings/globals/cordova/index.d.ts"/>

import {AWPlugin} from '../core/aw-plugin';

export class AWFinder extends AWPlugin {
    open(path: string, filename: string) {
        let args = [path, filename];
        cordova.exec(
            (() => this.successHandler)(),
            (() => this.errorHandler)(),
            'AWFinder',
            'open',
            args
        );
    }

    openIn(filename: string) {
        return this.openDirect(filename);
    }

    list(path: string) {
        cordova.exec(
            (() => this.successHandler)(),
            (() => this.errorHandler)(),
            'AWFinder',
            'list',
            [path]
        );
    }

    private openDirect(filename: string) {
        cordova.exec(
            (() => this.successHandler)(),
            (() => this.errorHandler)(),
            'AWFinder',
            'openDirect',
            [filename]
        );
    }
}