import {AWPlugin} from './aw-plugin';
import * as AppWorksMobile from '../mobile/index';
import * as AppWorksDesktop from '../desktop/index';

export class AWMedia extends AWPlugin {
    constructor(success, error) {
        super(null, null);

        if (window.cordova) {
            return new AppWorksMobile.Media(success, error);
        } else {
            return new AppWorksDesktop.Media(success, error);
        }
    }
}
