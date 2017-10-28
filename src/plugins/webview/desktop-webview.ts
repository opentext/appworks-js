import {AWProxy} from "../../common/proxy";
import {noop} from "../../common/util";
import {DesktopWebviewInterface, InAppBrowserEvent} from './index';

const DesktopWebviewSequenceStore = {
    seqNo: 0
};

export class DesktopWebview implements DesktopWebviewInterface {

    private id: number;

    constructor() {
        this.id = DesktopWebviewSequenceStore.seqNo++;
    }

    addEventListener(type: string, callback: (event: InAppBrowserEvent) => void): void {
        AWProxy.exec(
            noop,
            noop,
            'AWWebView',
            'addEventListener',
            [this.id, type, callback]
        );
    }

    removeEventListener(type: string, callback: (event: InAppBrowserEvent) => void): void {
        AWProxy.exec(
            noop,
            noop,
            'AWWebView',
            'removeEventListener',
            [this.id, type, callback]
        );
    }

    close(): void {
        AWProxy.exec(
            noop,
            noop,
            'AWWebView',
            'close',
            [this.id]
        );
    }

    show(): void {
        AWProxy.exec(
            noop,
            noop,
            'AWWebView',
            'show',
            [this.id]
        );
    }

    open(url: string, target?: string, options?: any): DesktopWebview {
        AWProxy.exec(
            noop,
            noop,
            'AWWebView',
            'open',
            [this.id, url, target, options]
        );
        return this;
    }

    executeScript(script: any, callback: (result: any) => void): void {
        AWProxy.exec(
            callback,
            noop,
            'AWWebView',
            'executeScript',
            [this.id, script]
        );
    }

    insertCSS(css: any, callback: () => void): void {
        AWProxy.exec(
            callback,
            noop,
            'AWWebView',
            'insertCSS',
            [this.id, css]
        );
    }
}