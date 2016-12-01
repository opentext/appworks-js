import {AWPlugin} from '../plugin';
import {AWProxy} from '../proxy';

export class AWPage extends AWPlugin {
    setPageUrl(url: string) {
        AWProxy.exec(
            (() => this.successHandler)(),
            (() => this.errorHandler)(),
            'AWPage',
            'setPageUrl',
            [url]
        );
    }
}
