import {AWPlugin} from '../plugin';
import {AWProxy} from '../proxy';

export class AWComponent extends AWPlugin {
    open(successHandler: any, errorHandler?: any, args?: any[]) {
        AWProxy.exec(
            successHandler,
            errorHandler,
            'AWComponent',
            'open',
            args || []
        );
    }

    list(successHandler: any, errorHandler?: any, args?: any[]) {
        AWProxy.exec(
            successHandler,
            errorHandler,
            'AWComponent',
            'list',
            args || []
        );
    }

    check(successHandler: any, errorHandler?: any, args?: any[]) {
        AWProxy.exec(
            successHandler,
            errorHandler,
            'AWComponent',
            'check',
            args || []
        );
    }

    close(successHandler: any, errorHandler?: any, args?: any[]) {
        AWProxy.exec(
            successHandler,
            errorHandler,
            'AWComponent',
            'close',
            args || []
        );
    }
}
