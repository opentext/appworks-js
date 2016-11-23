/// <reference path="../../typings/globals/cordova/index.d.ts"/>
/// <reference path="../../typings/globals/cordova/plugins/devicemotion/index.d.ts"/>

import {AWPlugin} from '../core/aw-plugin';

export class AWAccelerometer extends AWPlugin implements Accelerometer {
    getCurrentAcceleration() {
        navigator.accelerometer.getCurrentAcceleration(
            (() => this.successHandler)(),
            (() => this.errorHandler)()
        );
    }

    watchAcceleration(options?: any) {
        return navigator.accelerometer.watchAcceleration(
            (() => this.successHandler)(),
            (() => this.errorHandler)(),
            options
        );
    }

    clearWatch(watchId: number) {
        navigator.accelerometer.clearWatch(watchId);
    }
}

