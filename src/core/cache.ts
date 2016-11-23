import {AWPlugin} from './aw-plugin';
import * as AppWorksMobile from '../mobile/index';
import * as AppWorksDesktop from '../desktop/index';

export class AWCache extends AWPlugin {
    constructor(options?: any) {
        super(null, null);

        if (window.cordova) {
            return new AppWorksMobile.Cache(options);
        } else {
            return new AppWorksDesktop.Cache(options);
        }
    }
}
