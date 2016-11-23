import {AWPlugin} from './aw-plugin';
import * as AppWorksMobile from '../mobile/index';
import * as AppWorksDesktop from '../desktop/index';

export class AWAuth extends AWPlugin {
    constructor(success, err) {
        super(null, null);

        if (window.cordova) {
            return new AppWorksMobile.Auth(success, err);
        } else {
            return new AppWorksDesktop.Auth(success, err);
        }
    }
}
