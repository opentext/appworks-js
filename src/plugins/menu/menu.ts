import {AWPlugin} from '../../plugin';
import {AWProxy} from '../../proxy';
import {MenuSection} from './index';

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

    setMenu(menuSections: MenuSection[]) {
        return new Promise((resolve, reject) => {
            AWProxy.exec(
                resolve,
                reject,
                'AWMenu',
                'setMenu',
                [menuSections]
            );
        });
    }

    didOpenMenuItem(callback: any) {
        AWProxy.exec(
            callback,
            (() => this.errorHandler)(),
            'AWMenu',
            'receive',
            []
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