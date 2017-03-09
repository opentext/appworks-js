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

export interface MenuSection {
    subhead: string;
    items: MenuItem[];
}

export interface MenuItem {
    /**
     * the title text to use for the menu item
     */
    title: string;
    /**
     * the callback to invoke when the user taps the menu item
     */
    action: any;
    /**
     * is the menu item visible?
     */
    visible: boolean;
    /**
     * does the menu item have a badge? e.g. Notifications (1)
     */
    hasBadge: boolean;
}