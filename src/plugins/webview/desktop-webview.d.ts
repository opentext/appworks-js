import { DesktopWebviewInterface, InAppBrowserEvent } from "./index";
export declare class DesktopWebview implements DesktopWebviewInterface {
    private id;
    constructor();
    addEventListener(type: string, callback: (event: InAppBrowserEvent) => void): void;
    removeEventListener(type: string, callback: (event: InAppBrowserEvent) => void): void;
    close(): void;
    show(): void;
    open(url: string, target?: string, options?: any): DesktopWebview;
    executeScript(script: any, callback: (result: any) => void): void;
    insertCSS(css: any, callback: () => void): void;
}
