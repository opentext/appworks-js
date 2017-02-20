import {AWPlugin} from '../plugin';
import {AWProxy} from '../proxy';
import {Util} from "../util";

export class AWLauncher extends AWPlugin {

    constructor(successHandler?: any, errorHandler?: any) {
        super(successHandler || Util.noop, errorHandler || Util.noop);
    }

    getLaunchURL(successHandler: any, errorHandler: any) {
        AWProxy.exec(
            successHandler,
            errorHandler,
            'AWLauncher',
            'getLaunchURL',
            []
        );
    }

    clearLaunchURL() {
        AWProxy.exec(
            (() => this.successHandler)(),
            (() => this.errorHandler)(),
            'AWLauncher',
            'clearLaunchURL',
            []
        );
    }
}