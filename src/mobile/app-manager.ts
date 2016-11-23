/// <reference path="../../typings/globals/cordova/index.d.ts"/>

import {AWPlugin} from '../core/aw-plugin';

export class AWAppManager extends AWPlugin {
    closeActiveApp() {
        cordova.exec(
            (() => this.successHandler)(),
            (() => this.errorHandler)(),
            'AWAppManager',
            'closeActiveApp',
            []
        );
    }
}
