import {AWPlugin} from './aw-plugin';
import * as AppWorksMobile from '../mobile/index';
import * as AppWorksDesktop from '../desktop/index';

export class AWOfflineManager extends AWPlugin {
    constructor(options?: any) {
        super(null, null);

        if (window.cordova) {
            return new AppWorksMobile.OfflineManager(options);
        } else {
            return new AppWorksDesktop.OfflineManager(options);
        }
    }
}
