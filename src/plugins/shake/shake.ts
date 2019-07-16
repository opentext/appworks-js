import {AWPlugin} from '../../common/plugin';
import {AWProxy} from '../../common/proxy';

export class Shake extends AWPlugin {
    enableShake(callback: any) {
        AWProxy.exec(
            callback,
            (() => this.errorHandler)(),
            'AWShake',
            'enableShake',
            []
        );
    }

    disableShake(callback: any) {
        AWProxy.exec(
            (() => this.successHandler)(),
            (() => this.errorHandler)(),
            'AWShake',
            'disableShake',
            []
        );
    }
}

export class AWShake extends Shake {
}
