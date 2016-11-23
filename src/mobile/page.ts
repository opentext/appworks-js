/// <reference path="../../typings/globals/cordova/index.d.ts"/>

import {AWPlugin} from '../core/aw-plugin';

export class AWPage extends AWPlugin {
    setPageUrl(url: string) {
        cordova.exec(
            (() => this.successHandler)(),
            (() => this.errorHandler)(),
            'AWPage',
            'setPageUrl',
            [url]
        );
    }
}
