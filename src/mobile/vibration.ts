/// <reference path="../../typings/globals/cordova/index.d.ts"/>
/// <reference path="../../typings/globals/cordova/plugins/vibration/index.d.ts"/>

import {AWPlugin} from '../core/aw-plugin';

export class AWVibration extends AWPlugin {

    constructor() {
        super(() => {
        }, () => {
        });
    }

    vibrate(time: number) {
        return navigator.vibrate(time);
    }
}