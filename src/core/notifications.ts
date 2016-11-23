import {AWPlugin} from './aw-plugin';
import * as AppWorksMobile from '../mobile/index';
import * as AppWorksDesktop from '../desktop/index';

export class AWNotificationManager extends AWPlugin {
    constructor() {
        super(null, null);

        if (window.cordova) {
            return new AppWorksMobile.NotificationManager();
        } else {
            return new AppWorksDesktop.NotificationManager();
        }
    }
}
