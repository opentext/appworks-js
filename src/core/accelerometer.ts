import {AWPlugin} from './aw-plugin';
import * as AppWorksMobile from '../mobile/index';
import * as AppWorksDesktop from '../desktop/index';

export class AWAccelerometer extends AWPlugin {
    constructor(success, error) {
        super(null, null);

        if (window.cordova) {
            return new AppWorksMobile.Accelerometer(success, error);
        } else {
            return new AppWorksDesktop.Accelerometer(success, error);
        }
    }
}
