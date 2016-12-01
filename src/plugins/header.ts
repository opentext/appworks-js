import {AWPlugin} from '../plugin';
import {AWProxy} from '../proxy';

export class AWHeaderBar extends AWPlugin {

    private callback: any;

    setHeader(config: any) {
        if (config && config.callback) {
            this.callback = config.callback;
            config.callback = true;
        } else {
            this.callback = null;
        }
        AWProxy.exec(
            (() => this.callback)(),
            (() => this.errorHandler)(),
            'AWHeaderBar',
            'setHeader',
            [config]
        );
    }

    getHeader() {
        AWProxy.exec(
            (() => this.successHandler)(),
            (() => this.errorHandler)(),
            'AWHeaderBar',
            'getHeader',
            []
        );
    }
}
// alias
export class AWHeader extends AWHeaderBar {}