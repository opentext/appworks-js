import {AWPlugin} from './aw-plugin';
import * as AppWorksMobile from '../mobile/index';
import * as AppWorksDesktop from '../desktop/index';

export class AWDevice extends AWPlugin {
    constructor() {
        super(null, null);

        if (window.cordova) {
            return new AppWorksMobile.Device();
        } else {
            return new AppWorksDesktop.Device();
        }
    }
}
