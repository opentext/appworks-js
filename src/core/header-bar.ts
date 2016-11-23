import {AWPlugin} from './aw-plugin';
import * as AppWorksMobile from '../mobile/index';
import * as AppWorksDesktop from '../desktop/index';

export class AWHeaderBar extends AWPlugin {
    constructor(success, error) {
        super(null, null);

        if (window.cordova) {
            return new AppWorksMobile.HeaderBar(success, error);
        } else {
            return new AppWorksDesktop.HeaderBar(success, error);
        }
    }
}
