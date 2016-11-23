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
        // TODO
    }
}
