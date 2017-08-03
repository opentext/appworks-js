import {AWPlugin} from '../../common/plugin';
import {AWProxy} from '../../common/proxy';

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
        AWProxy.exec(
            (() => this.successHandler)(),
            (() => this.errorHandler)(),
            'AWPage',
            'showModalAppWebView',
            [url, title]
        );
    }

    openModalExternalWebView(url: string, title: string, closeText: string, options?: object) {
        if(typeof options === 'undefined' || !options) {
            options = {};
        }
        AWProxy.exec(
            (() => this.successHandler)(),
            (() => this.errorHandler)(),
            'AWPage',
            'showModalExternalWebView',
            [url, title, closeText, options]
        );
    }

    setActionButtonCallback(callback: any) {
        AWProxy.exec(
            callback,
            (() => this.errorHandler)(),
            'AWPage',
            'setModalAppWebViewActionCallback',
            []
        );
    }

    closeModalAppWebView() {
        AWProxy.exec(
            (() => this.successHandler)(),
            (() => this.errorHandler)(),
            'AWPage',
            'closeModalAppWebView',
            []
        );
    }

}
