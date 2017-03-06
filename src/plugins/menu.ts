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

    addSectionsToMenu(menuSections: MenuSection[]) {
        return new Promise((resolve, reject) => {
            AWProxy.exec(
                resolve,
                reject,
                'AWMenu',
                'addSectionsToMenu',
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

export interface MenuSection {
    subhead: string;
    items: MenuItem[];
}

export interface MenuItem {
    title: string;
    action: any;
}