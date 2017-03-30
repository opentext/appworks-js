import {AWProxy} from "../proxy";
import {Util} from "../util";
export interface DesktopWebviewInterface {
    // addEventListener overloads
    /**
     * Adds a listener for an event from the InAppBrowser.
     * @param type      the event to listen for
     *                  loadstart: event fires when the InAppBrowser starts to load a URL.
     *                  loadstop: event fires when the InAppBrowser finishes loading a URL.
     *                  loaderror: event fires when the InAppBrowser encounters an error when loading a URL.
     *                  exit: event fires when the InAppBrowser window is closed.
     * @param callback  the function that executes when the event fires. The function is
     *                  passed an InAppBrowserEvent object as a parameter.
     */
    addEventListener(type: "loadstart", callback: (event: InAppBrowserEvent) => void): void;
    /**
     * Adds a listener for an event from the InAppBrowser.
     * @param type      the event to listen for
     *                  loadstart: event fires when the InAppBrowser starts to load a URL.
     *                  loadstop: event fires when the InAppBrowser finishes loading a URL.
     *                  loaderror: event fires when the InAppBrowser encounters an error when loading a URL.
     *                  exit: event fires when the InAppBrowser window is closed.
     * @param callback  the function that executes when the event fires. The function is
     *                  passed an InAppBrowserEvent object as a parameter.
     */
    addEventListener(type: "loadstop", callback: (event: InAppBrowserEvent) => void): void;
    /**
     * Adds a listener for an event from the InAppBrowser.
     * @param type      the event to listen for
     *                  loadstart: event fires when the InAppBrowser starts to load a URL.
     *                  loadstop: event fires when the InAppBrowser finishes loading a URL.
     *                  loaderror: event fires when the InAppBrowser encounters an error when loading a URL.
     *                  exit: event fires when the InAppBrowser window is closed.
     * @param callback  the function that executes when the event fires. The function is
     *                  passed an InAppBrowserEvent object as a parameter.
     */
    addEventListener(type: "loaderror", callback: (event: InAppBrowserEvent) => void): void;
    /**
     * Adds a listener for an event from the InAppBrowser.
     * @param type      the event to listen for
     *                  loadstart: event fires when the InAppBrowser starts to load a URL.
     *                  loadstop: event fires when the InAppBrowser finishes loading a URL.
     *                  loaderror: event fires when the InAppBrowser encounters an error when loading a URL.
     *                  exit: event fires when the InAppBrowser window is closed.
     * @param callback  the function that executes when the event fires. The function is
     *                  passed an InAppBrowserEvent object as a parameter.
     */
    addEventListener(type: "exit", callback: (event: InAppBrowserEvent) => void): void;
    /**
     * Adds a listener for an event from the InAppBrowser.
     * @param type      the event to listen for
     *                  loadstart: event fires when the InAppBrowser starts to load a URL.
     *                  loadstop: event fires when the InAppBrowser finishes loading a URL.
     *                  loaderror: event fires when the InAppBrowser encounters an error when loading a URL.
     *                  exit: event fires when the InAppBrowser window is closed.
     * @param callback  the function that executes when the event fires. The function is
     *                  passed an Event object as a parameter.
     */
    addEventListener(type: string, callback: (event: Event) => void): void;
    // removeEventListener overloads
    /**
     * Removes a listener for an event from the InAppBrowser.
     * @param type      The event to stop listening for.
     *                  loadstart: event fires when the InAppBrowser starts to load a URL.
     *                  loadstop: event fires when the InAppBrowser finishes loading a URL.
     *                  loaderror: event fires when the InAppBrowser encounters an error when loading a URL.
     *                  exit: event fires when the InAppBrowser window is closed.
     * @param callback  the function that executes when the event fires. The function is
     *                  passed an InAppBrowserEvent object as a parameter.
     */
    removeEventListener(type: "loadstart", callback: (event: InAppBrowserEvent) => void): void;
    /**
     * Removes a listener for an event from the InAppBrowser.
     * @param type      The event to stop listening for.
     *                  loadstart: event fires when the InAppBrowser starts to load a URL.
     *                  loadstop: event fires when the InAppBrowser finishes loading a URL.
     *                  loaderror: event fires when the InAppBrowser encounters an error when loading a URL.
     *                  exit: event fires when the InAppBrowser window is closed.
     * @param callback  the function that executes when the event fires. The function is
     *                  passed an InAppBrowserEvent object as a parameter.
     */
    removeEventListener(type: "loadstop", callback: (event: InAppBrowserEvent) => void): void;
    /**
     * Removes a listener for an event from the InAppBrowser.
     * @param type      The event to stop listening for.
     *                  loadstart: event fires when the InAppBrowser starts to load a URL.
     *                  loadstop: event fires when the InAppBrowser finishes loading a URL.
     *                  loaderror: event fires when the InAppBrowser encounters an error when loading a URL.
     *                  exit: event fires when the InAppBrowser window is closed.
     * @param callback  the function that executes when the event fires. The function is
     *                  passed an InAppBrowserEvent object as a parameter.
     */
    removeEventListener(type: "loaderror", callback: (event: InAppBrowserEvent) => void): void;
    /**
     * Removes a listener for an event from the InAppBrowser.
     * @param type      The event to stop listening for.
     *                  loadstart: event fires when the InAppBrowser starts to load a URL.
     *                  loadstop: event fires when the InAppBrowser finishes loading a URL.
     *                  loaderror: event fires when the InAppBrowser encounters an error when loading a URL.
     *                  exit: event fires when the InAppBrowser window is closed.
     * @param callback  the function that executes when the event fires. The function is
     *                  passed an InAppBrowserEvent object as a parameter.
     */
    removeEventListener(type: "exit", callback: (event: InAppBrowserEvent) => void): void;
    /**
     * Removes a listener for an event from the InAppBrowser.
     * @param type      The event to stop listening for.
     *                  loadstart: event fires when the InAppBrowser starts to load a URL.
     *                  loadstop: event fires when the InAppBrowser finishes loading a URL.
     *                  loaderror: event fires when the InAppBrowser encounters an error when loading a URL.
     *                  exit: event fires when the InAppBrowser window is closed.
     * @param callback  the function that executes when the event fires. The function is
     *                  passed an Event object as a parameter.
     */
    removeEventListener(type: string, callback: (event: Event) => void): void;
    /** Closes the InAppBrowser window. */
    close(): void;
    /**
     * Displays an InAppBrowser window that was opened hidden. Calling this has no effect
     * if the InAppBrowser was already visible.
     */
    show(): void;
    /**
     * Injects JavaScript code into the InAppBrowser window.
     * @param script    Details of the script to run, specifying either a file or code key.
     * @param callback  The function that executes after the JavaScript code is injected.
     *                  If the injected script is of type code, the callback executes with
     *                  a single parameter, which is the return value of the script, wrapped in an Array.
     *                  For multi-line scripts, this is the return value of the last statement,
     *                  or the last expression evaluated.
     */
    executeScript(script: { code: string }, callback: (result: any) => void): void;
    /**
     * Injects CSS into the InAppBrowser window.
     * @param css       Details of the script to run, specifying either a file or code key.
     * @param callback  The function that executes after the CSS is injected.
     */
    insertCSS(css: { code: string }, callback: () => void): void;
}

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
            Util.noop,
            Util.noop,
            'AWWebView',
            'addEventListener',
            [this.id, type, callback]
        );
    }

    removeEventListener(type: string, callback: (event: InAppBrowserEvent) => void): void {
        AWProxy.exec(
            Util.noop,
            Util.noop,
            'AWWebView',
            'removeEventListener',
            [this.id, type, callback]
        );
    }

    close(): void {
        AWProxy.exec(
            Util.noop,
            Util.noop,
            'AWWebView',
            'close',
            [this.id]
        );
    }

    show(): void {
        AWProxy.exec(
            Util.noop,
            Util.noop,
            'AWWebView',
            'show',
            [this.id]
        );
    }

    open(url: string, target?: string, options?: any): DesktopWebview {
        AWProxy.exec(
            Util.noop,
            Util.noop,
            'AWWebView',
            'open',
            [this.id, url, target, options]
        );
        return this;
    }

    executeScript(script: any, callback: (result: any) => void): void {
        AWProxy.exec(
            callback,
            Util.noop,
            'AWWebView',
            'executeScript',
            [this.id, script]
        );
    }

    insertCSS(css: any, callback: () => void): void {
        AWProxy.exec(
            callback,
            Util.noop,
            'AWWebView',
            'insertCSS',
            [this.id, css]
        );
    }
}