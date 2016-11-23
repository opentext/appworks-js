/// <reference path="../../typings/globals/cordova/index.d.ts"/>
/// <reference path="../../typings/globals/cordova/plugins/deviceorientation/index.d.ts"/>

import {AWPlugin} from '../core/aw-plugin';

export class AWCompass extends AWPlugin implements Compass {
    getCurrentHeading() {
        navigator.compass.getCurrentHeading(
            (() => this.successHandler)(),
            (() => this.errorHandler)()
        );
    }

    watchHeading(options?: any) {
        return navigator.compass.watchHeading(
            (() => this.successHandler)(),
            (() => this.errorHandler)(),
            options
        );
    }

    clearWatch(watchId: number) {
        navigator.compass.clearWatch(watchId);
    }
}