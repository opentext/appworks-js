import {AWPlugin} from '../../plugin';
import {AWProxy} from '../../proxy';

export class AWFileChooser extends AWPlugin {
    selectAndUpload(action: string) {
        let args = [action];
        AWProxy.exec(
            (() => this.successHandler)(),
            (() => this.errorHandler)(),
            'AWFileChooser',
            'open',
            args
        );
    }
}
