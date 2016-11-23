import {AWPlugin} from './aw-plugin';
import * as AppWorksMobile from '../mobile/index';
import * as AppWorksDesktop from '../desktop/index';

export class AWAppManager extends AWPlugin {
    constructor(success, err) {
        super(null, null);

        if (window.cordova) {
            return new AppWorksMobile.AppManager(success, err);
        } else {
            return new AppWorksDesktop.AppManager(success, err);
        }
    }
}
