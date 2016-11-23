/// <reference path="../../typings/globals/cordova/index.d.ts"/>

import {AWPlugin} from '../core/aw-plugin';

export class AWLocation extends AWPlugin {
    getCurrentPosition(options?: any) {
        navigator.geolocation.getCurrentPosition(
            (() => this.successHandler)(),
            (() => this.errorHandler)(),
            options
        );
    }

    watchPosition(options?: any) {
        return navigator.geolocation.watchPosition(
            (() => this.successHandler)(),
            (() => this.errorHandler)(),
            options
        );
    }

    clearWatch(watchId: number) {
        navigator.geolocation.clearWatch(watchId);
    }
}
