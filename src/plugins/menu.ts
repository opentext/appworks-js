import {AWPlugin} from '../plugin';
import {AWProxy} from '../proxy';

export class AWMenu extends AWPlugin {
    push(items: any) {
        let args = [items];
        AWProxy.exec(
            (() => this.successHandler)(),
            (() => this.errorHandler)(),
            'AWMenu',
            'push',
            args
        );
    }

    openListener(listener: any) {
        AWProxy.exec(
            listener,
            (() => this.errorHandler)(),
            'AWMenu',
            'receive',
            []
        );
    }

    didTapMenuItem(listener: any) {
        return this.openListener(listener);
    }
}