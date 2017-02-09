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

    openModalAppWebView(url: string, title: string) {
        cordova.exec(
            (() => this.successHandler)(),
            (() => this.errorHandler)(),
            'AWPage',
            'showModalAppWebView',
            [url, title]
        );
    }

    openModalExternalWebView(url: string, title: string) {
        cordova.exec(
            (() => this.successHandler)(),
            (() => this.errorHandler)(),
            'AWPage',
            'showModalExternalWebView',
            [url, title]
        );
    }

    setActionButtonCallback(callback: any) {
        cordova.exec(
            callback,
            (() => this.errorHandler)(),
            'AWPage',
            'setModalAppWebViewActionCallback',
            []
        );
    }

    closeModalAppWebView() {
        cordova.exec(
            (() => this.successHandler)(),
            (() => this.errorHandler)(),
            'AWPage',
            'closeModalAppWebView',
            []
        );
    }

}
