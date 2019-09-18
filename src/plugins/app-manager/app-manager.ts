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
    getAppVersion(success, error) {
        AWProxy.exec(
            success,
            error,
            'AWAppManager',
            'getAppVersion',
            []
        );
    }
    isFirstRun(success, error) {
        AWProxy.exec(
            success,
            error,
            'AWAppManager',
            'isFirstRun',
            []
        );
    }
    setAppHasRun(success, error) {
        AWProxy.exec(
            success,
            error,
            'AWAppManager',
            'setAppHasRun',
            []
        );
    }
    /* Deprecated, will be removed in the next version */
    resetShouldClearCache() {
        AWProxy.exec(
            (() => this.successHandler)(),
            (() => this.errorHandler)(),
            'AWAppManager',
            'resetShouldClearCache',
            []
        );
    }
    /* Deprecated, will be removed in the next version */
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

