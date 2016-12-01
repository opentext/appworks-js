import {AWPlugin} from '../plugin';
import {AWProxy} from '../proxy';
import {Util} from '../util';

export class AWWebView extends AWPlugin {

    constructor() {
        super(Util.noop, Util.noop);
    }

    open(url: string, target?: string, options?: string): InAppBrowser {
        return AWProxy.webview().open(url, target, options);
    }
}