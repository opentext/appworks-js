/// <reference path="../../typings/globals/cordova/index.d.ts"/>
/// <reference path="../../typings/globals/cordova/plugins/inappbrowser/index.d.ts"/>

import {AWPlugin} from '../core/aw-plugin';

export class AWWebView extends AWPlugin {

    constructor() {
        super(null, null);
    }

    open(url: string, target?: string, options?: string): InAppBrowser {
        return (cordova as any).InAppBrowser.open(url, target, options);
    }
}