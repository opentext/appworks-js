import {AWPlugin} from '../../common/plugin';
import {AWProxy} from '../../common/proxy';

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
    getAppName() {
        AWProxy.exec(
            (() => this.successHandler)(),
            (() => this.errorHandler)(),
            'AWAppManager',
            'getAppName',
            []
        );
    }
    resetShouldClearCache() {
        AWProxy.exec(
            (() => this.successHandler)(),
            (() => this.errorHandler)(),
            'AWAppManager',
            'resetShouldClearCache',
            []
        );
    }
    shouldClearCache(success) {
        AWProxy.exec(
            success,
            (() => this.errorHandler)(),
            'AWAppManager',
            'shouldClearCache',
            []
        );
    }
}

