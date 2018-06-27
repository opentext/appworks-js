import {AWPlugin} from '../../common/plugin';
import {AWProxy} from '../../common/proxy';

export class Print extends AWPlugin {
    print() {
        AWProxy.exec(
            (() => this.successHandler)(),
            (() => this.errorHandler)(),
            'AWPrint',
            'print',
            []
        );
    }

    getPrinters() {
        AWProxy.exec(
            (() => this.successHandler)(),
            (() => this.errorHandler)(),
            'AWPrint',
            'getPrinters',
            []
        );
    }

    printToPDF() {
        AWProxy.exec(
            (() => this.successHandler)(),
            (() => this.errorHandler)(),
            'AWPrint',
            'printToPDF',
            []
        );
    }
}

export class AWPrint extends Print {
}