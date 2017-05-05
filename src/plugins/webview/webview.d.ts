import { AWPlugin } from '../../common/plugin';
import { InAppBrowser, InAppBrowserEvent } from './index';
export declare class AWWebView extends AWPlugin {
    constructor();
    open(url: string, target?: string, options?: any): InAppBrowser;
    addEventListener(type: string, callback: (event: InAppBrowserEvent) => void): void;
    removeEventListener(type: string, callback: (event: InAppBrowserEvent) => void): void;
    show(): void;
    close(): void;
    executeScript(script: string, callback: (result: any) => void): void;
    insertCSS(script: string, callback: (result: any) => void): void;
}
