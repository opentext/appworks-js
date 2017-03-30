import {AWPlugin} from '../plugin';
import {AWProxy} from '../proxy';
import {Util} from '../util';

export class AWWebView extends AWPlugin {

    constructor() {
        super(Util.noop, Util.noop);
    }

    open(url: string, target?: string, options?: any): InAppBrowser {
        return AWProxy.webview().open(url, target, options);
    }

    addEventListener(type: string, callback: (event: InAppBrowserEvent) => void): void {
        AWProxy.webview().addEventListener(type, callback);
    }

    removeEventListener(type: string, callback: (event: InAppBrowserEvent) => void): void {
        AWProxy.webview().removeEventListener(type, callback);
    }

    show(): void {
        AWProxy.webview().show();
    }

    close(): void {
        AWProxy.webview().close();
    }

    executeScript(script: string, callback: (result: any) => void): void {
        AWProxy.webview().executeScript(script, callback);
    }

    insertCSS(script: string, callback: (result: any) => void): void {
        AWProxy.webview().insertCSS(script, callback);
    }
}