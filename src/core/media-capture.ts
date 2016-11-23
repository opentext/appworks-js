import {AWPlugin} from './aw-plugin';
import * as AppWorksMobile from '../mobile/index';
import * as AppWorksDesktop from '../desktop/index';

export class AWMediaCapture extends AWPlugin {
    constructor(success, error) {
        super(null, null);

        if (window.cordova) {
            return new AppWorksMobile.MediaCapture(success, error);
        } else {
            return new AppWorksDesktop.MediaCapture(success, error);
        }
    }
}
