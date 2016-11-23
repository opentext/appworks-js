/// <reference path="../../typings/globals/cordova/index.d.ts"/>
/// <reference path="../../typings/globals/cordova/plugins/device/index.d.ts"/>

import {AWPlugin} from '../core/aw-plugin';

export class AWDevice extends AWPlugin {

    public cordova: any;
    public model: any;
    public platform: any;
    public uuid: any;
    public version: any;
    public manufacturer: any;

    constructor() {
        super(() => {}, () => {});
        this.cordova = device.cordova;
        this.model = device.model;
        this.platform = device.platform;
        this.uuid = device.uuid;
        this.version = device.version;
        this.manufacturer = device.manufacturer;
    }
}
