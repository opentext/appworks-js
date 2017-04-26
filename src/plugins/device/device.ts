import {AWPlugin} from '../../plugin';
import {AWProxy} from '../../proxy';
import {Capture} from '../media-transfer/index';

export class AWDevice extends AWPlugin {

    public cordova: any;
    public model: any;
    public platform: any;
    public uuid: any;
    public version: any;
    public manufacturer: any;
    public capture: Capture;

    constructor() {
        super(() => {}, () => {});
        this.cordova = AWProxy.device().cordova;
        this.model = AWProxy.device().model;
        this.platform = AWProxy.device().platform;
        this.uuid = AWProxy.device().uuid;
        this.version = AWProxy.device().version;
        this.manufacturer = AWProxy.device().manufacturer;
        this.capture = AWProxy.device().capture;
    }
}
