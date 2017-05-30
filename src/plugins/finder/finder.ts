import {AWPlugin} from '../../common/plugin';
import {AWProxy} from '../../common/proxy';

export class AWFinder extends AWPlugin {
    open(path: string, filename: string) {
        let args = [path, filename];
        AWProxy.exec(
            (() => this.successHandler)(),
            (() => this.errorHandler)(),
            'AWFinder',
            'open',
            args
        );
    }

    openIn(filename: string) {
        return this.openDirect(filename);
    }

    list(path: string) {
        AWProxy.exec(
            (() => this.successHandler)(),
            (() => this.errorHandler)(),
            'AWFinder',
            'list',
            [path]
        );
    }

    private openDirect(filename: string) {
        AWProxy.exec(
            (() => this.successHandler)(),
            (() => this.errorHandler)(),
            'AWFinder',
            'openDirect',
            [filename]
        );
    }

    share(filename: string) {
        AWProxy.exec(
            (() => this.successHandler)(),
            (() => this.errorHandler)(),
            'AWFinder',
            'share',
            [filename]
        );
    }
}