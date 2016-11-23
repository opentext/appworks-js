import {AWPlugin} from './aw-plugin';
import * as AppWorksMobile from '../mobile/index';
import * as AppWorksDesktop from '../desktop/index';

export class AWContacts extends AWPlugin {
    constructor(success, error) {
        super(null, null);

        if (window.cordova) {
            return new AppWorksMobile.Contacts(success, error);
        } else {
            return new AppWorksDesktop.Contacts(success, error);
        }
    }
}
