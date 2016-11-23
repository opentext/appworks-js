import {AWPlugin} from './aw-plugin';
import * as AppWorksMobile from '../mobile/index';
import * as AppWorksDesktop from '../desktop/index';

export class AWWebView extends AWPlugin {
    constructor() {
        super(null, null);

        if (window.cordova) {
            return new AppWorksMobile.WebView();
        } else {
            return new AppWorksDesktop.WebView();
        }
    }
}
