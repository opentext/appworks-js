/// <reference path="../../typings/globals/cordova/index.d.ts"/>

import {AWPlugin} from '../core/aw-plugin';

export class AWAuth extends AWPlugin {

    authenticate(force?: boolean) {
        force = !!force;
        cordova.exec(
            (() => this.successHandler)(),
            (() => this.errorHandler)(),
            'AWAuth',
            'authenticate',
            [force.toString()]
        );
    }

    getAuthResponse() {
        cordova.exec(
            (() => this.successHandler)(),
            (() => this.errorHandler)(),
            'AWAuth',
            'authobject',
            []
        );
    }

    gateway(successHandler: any, errorHandler?: any) {
        cordova.exec(
            successHandler,
            errorHandler,
            'AWAuth',
            'gateway',
            []
        );
    }
}