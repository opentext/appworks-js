import {AWPlugin} from '../plugin';
import {AWProxy} from '../proxy';

export class AWAppManager extends AWPlugin {
    closeActiveApp() {
        AWProxy.exec(
            (() => this.successHandler)(),
            (() => this.errorHandler)(),
            'AWAppManager',
            'closeActiveApp',
            []
        );
    }
}

