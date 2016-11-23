/// <reference path="../../typings/globals/cordova/index.d.ts"/>

import {AWPlugin} from '../core/aw-plugin';

export class AWComponent extends AWPlugin {
    open(successHandler: any, errorHandler?: any, args?: any[]) {
        cordova.exec(
            successHandler,
            errorHandler,
            'AWComponent',
            'open',
            args || []
        );
    }

    list(successHandler: any, errorHandler?: any, args?: any[]) {
        cordova.exec(
            successHandler,
            errorHandler,
            'AWComponent',
            'list',
            args || []
        );
    }

    check(successHandler: any, errorHandler?: any, args?: any[]) {
        cordova.exec(
            successHandler,
            errorHandler,
            'AWComponent',
            'check',
            args || []
        );
    }

    close(successHandler: any, errorHandler?: any, args?: any[]) {
        cordova.exec(
            successHandler,
            errorHandler,
            'AWComponent',
            'close',
            args || []
        );
    }
}