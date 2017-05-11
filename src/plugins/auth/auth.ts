import {AWPlugin} from '../../common/plugin';
import {AWProxy} from '../../common/proxy';

export class AWAuth extends AWPlugin {
    authenticate(force?: boolean) {
        force = !!force;
        AWProxy.exec(
            (() => this.successHandler)(),
            (() => this.errorHandler)(),
            'AWAuth',
            'authenticate',
            [force.toString()]
        );
    }

    getAuthResponse() {
        AWProxy.exec(
            (() => this.successHandler)(),
            (() => this.errorHandler)(),
            'AWAuth',
            'authobject',
            []
        );
    }

    gateway(successHandler: any, errorHandler?: any) {
        AWProxy.exec(
            successHandler,
            errorHandler,
            'AWAuth',
            'gateway',
            []
        );
    }

    online(successHandler: any, errorHandler?: any) {
        AWProxy.exec(
            successHandler,
            errorHandler,
            'AWAuth',
            'online',
            []
        );
    }
}