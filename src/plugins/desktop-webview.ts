import {AWProxy} from "../proxy";
import {Util} from "../util";
export interface DesktopWebviewInterface {
    // addEventListener overloads
    /**
     * Adds a listener for an event from the InAppBrowser.
     * @param type      the event to listen for
     *                  page-title-updated: Emitted when the document changed its title, calling event.preventDefault() will
     *                  prevent the native window's title from changing.
     *                  close: Emitted when the window is going to be closed. It's emitted before the beforeunload and
     *                  unload event of the DOM. Calling event.preventDefault() will cancel the close.
     *                  closed: Emitted when the window is closed. After you have received this event you should remove
     *                  the reference to the window and avoid using it any more.
     *                  unresponsive: Emitted when the web page becomes unresponsive.
     *                  responsive: Emitted when the unresponsive web page becomes responsive again.
     *                  blur: Emitted when the window loses focus.
     *                  focus: Emitted when the window gains focus.
     *                  show: Emitted when the window is shown.
     *                  hide: Emitted when the window is hidden.
     *                  ready-to-show: Emitted when the web page has been rendered (while not being shown) and window can be displayed without a visual flash.
     *                  maximize: Emitted when window is maximized.
     *                  unmaximize: Emitted when the window exits from a maximized state.
     *                  minimize: Emitted when the window is minimized.
     *                  restore: Emitted when the window is restored from a minimized state.
     *                  resize: Emitted when the window is being resized.
     *                  move: Emitted when the window is being moved to a new position.
     *                  enter-full-screen: Emitted when the window enters a full-screen state.
     *                  leave-full-screen: Emitted when the window leaves a full-screen state.
     *                  enter-html-full-screen: Emitted when the window enters a full-screen state triggered by HTML API.
     *                  leave-html-full-screen: Emitted when the window leaves a full-screen state triggered by HTML API.
     * @param callback  the function that executes when the event fires. The function is
     *                  passed an InAppBrowserEvent object as a parameter.
     */
    addEventListener(type: "page-title-updated", callback: (event: InAppBrowserEvent) => void): void;
    /**
     * Adds a listener for an event from the InAppBrowser.
     * @param type      the event to listen for
     *                  page-title-updated: Emitted when the document changed its title, calling event.preventDefault() will
     *                  prevent the native window's title from changing.
     *                  close: Emitted when the window is going to be closed. It's emitted before the beforeunload and
     *                  unload event of the DOM. Calling event.preventDefault() will cancel the close.
     *                  closed: Emitted when the window is closed. After you have received this event you should remove
     *                  the reference to the window and avoid using it any more.
     *                  unresponsive: Emitted when the web page becomes unresponsive.
     *                  responsive: Emitted when the unresponsive web page becomes responsive again.
     *                  blur: Emitted when the window loses focus.
     *                  focus: Emitted when the window gains focus.
     *                  show: Emitted when the window is shown.
     *                  hide: Emitted when the window is hidden.
     *                  ready-to-show: Emitted when the web page has been rendered (while not being shown) and window can be displayed without a visual flash.
     *                  maximize: Emitted when window is maximized.
     *                  unmaximize: Emitted when the window exits from a maximized state.
     *                  minimize: Emitted when the window is minimized.
     *                  restore: Emitted when the window is restored from a minimized state.
     *                  resize: Emitted when the window is being resized.
     *                  move: Emitted when the window is being moved to a new position.
     *                  enter-full-screen: Emitted when the window enters a full-screen state.
     *                  leave-full-screen: Emitted when the window leaves a full-screen state.
     *                  enter-html-full-screen: Emitted when the window enters a full-screen state triggered by HTML API.
     *                  leave-html-full-screen: Emitted when the window leaves a full-screen state triggered by HTML API.
     * @param callback  the function that executes when the event fires. The function is
     *                  passed an InAppBrowserEvent object as a parameter.
     */
    addEventListener(type: "close", callback: (event: InAppBrowserEvent) => void): void;
    /**
     * Adds a listener for an event from the InAppBrowser.
     * @param type      the event to listen for
     *                  page-title-updated: Emitted when the document changed its title, calling event.preventDefault() will
     *                  prevent the native window's title from changing.
     *                  close: Emitted when the window is going to be closed. It's emitted before the beforeunload and
     *                  unload event of the DOM. Calling event.preventDefault() will cancel the close.
     *                  closed: Emitted when the window is closed. After you have received this event you should remove
     *                  the reference to the window and avoid using it any more.
     *                  unresponsive: Emitted when the web page becomes unresponsive.
     *                  responsive: Emitted when the unresponsive web page becomes responsive again.
     *                  blur: Emitted when the window loses focus.
     *                  focus: Emitted when the window gains focus.
     *                  show: Emitted when the window is shown.
     *                  hide: Emitted when the window is hidden.
     *                  ready-to-show: Emitted when the web page has been rendered (while not being shown) and window can be displayed without a visual flash.
     *                  maximize: Emitted when window is maximized.
     *                  unmaximize: Emitted when the window exits from a maximized state.
     *                  minimize: Emitted when the window is minimized.
     *                  restore: Emitted when the window is restored from a minimized state.
     *                  resize: Emitted when the window is being resized.
     *                  move: Emitted when the window is being moved to a new position.
     *                  enter-full-screen: Emitted when the window enters a full-screen state.
     *                  leave-full-screen: Emitted when the window leaves a full-screen state.
     *                  enter-html-full-screen: Emitted when the window enters a full-screen state triggered by HTML API.
     *                  leave-html-full-screen: Emitted when the window leaves a full-screen state triggered by HTML API.
     * @param callback  the function that executes when the event fires. The function is
     *                  passed an InAppBrowserEvent object as a parameter.
     */
    addEventListener(type: "closed", callback: (event: InAppBrowserEvent) => void): void;
    /**
     * Adds a listener for an event from the InAppBrowser.
     * @param type      the event to listen for
     *                  page-title-updated: Emitted when the document changed its title, calling event.preventDefault() will
     *                  prevent the native window's title from changing.
     *                  close: Emitted when the window is going to be closed. It's emitted before the beforeunload and
     *                  unload event of the DOM. Calling event.preventDefault() will cancel the close.
     *                  closed: Emitted when the window is closed. After you have received this event you should remove
     *                  the reference to the window and avoid using it any more.
     *                  unresponsive: Emitted when the web page becomes unresponsive.
     *                  responsive: Emitted when the unresponsive web page becomes responsive again.
     *                  blur: Emitted when the window loses focus.
     *                  focus: Emitted when the window gains focus.
     *                  show: Emitted when the window is shown.
     *                  hide: Emitted when the window is hidden.
     *                  ready-to-show: Emitted when the web page has been rendered (while not being shown) and window can be displayed without a visual flash.
     *                  maximize: Emitted when window is maximized.
     *                  unmaximize: Emitted when the window exits from a maximized state.
     *                  minimize: Emitted when the window is minimized.
     *                  restore: Emitted when the window is restored from a minimized state.
     *                  resize: Emitted when the window is being resized.
     *                  move: Emitted when the window is being moved to a new position.
     *                  enter-full-screen: Emitted when the window enters a full-screen state.
     *                  leave-full-screen: Emitted when the window leaves a full-screen state.
     *                  enter-html-full-screen: Emitted when the window enters a full-screen state triggered by HTML API.
     *                  leave-html-full-screen: Emitted when the window leaves a full-screen state triggered by HTML API.
     * @param callback  the function that executes when the event fires. The function is
     *                  passed an InAppBrowserEvent object as a parameter.
     */
    addEventListener(type: "unresponsive", callback: (event: InAppBrowserEvent) => void): void;
    /**
     * Adds a listener for an event from the InAppBrowser.
     * @param type      the event to listen for
     *                  page-title-updated: Emitted when the document changed its title, calling event.preventDefault() will
     *                  prevent the native window's title from changing.
     *                  close: Emitted when the window is going to be closed. It's emitted before the beforeunload and
     *                  unload event of the DOM. Calling event.preventDefault() will cancel the close.
     *                  closed: Emitted when the window is closed. After you have received this event you should remove
     *                  the reference to the window and avoid using it any more.
     *                  unresponsive: Emitted when the web page becomes unresponsive.
     *                  responsive: Emitted when the unresponsive web page becomes responsive again.
     *                  blur: Emitted when the window loses focus.
     *                  focus: Emitted when the window gains focus.
     *                  show: Emitted when the window is shown.
     *                  hide: Emitted when the window is hidden.
     *                  ready-to-show: Emitted when the web page has been rendered (while not being shown) and window can be displayed without a visual flash.
     *                  maximize: Emitted when window is maximized.
     *                  unmaximize: Emitted when the window exits from a maximized state.
     *                  minimize: Emitted when the window is minimized.
     *                  restore: Emitted when the window is restored from a minimized state.
     *                  resize: Emitted when the window is being resized.
     *                  move: Emitted when the window is being moved to a new position.
     *                  enter-full-screen: Emitted when the window enters a full-screen state.
     *                  leave-full-screen: Emitted when the window leaves a full-screen state.
     *                  enter-html-full-screen: Emitted when the window enters a full-screen state triggered by HTML API.
     *                  leave-html-full-screen: Emitted when the window leaves a full-screen state triggered by HTML API.
     * @param callback  the function that executes when the event fires. The function is
     *                  passed an InAppBrowserEvent object as a parameter.
     */
    addEventListener(type: "responsive", callback: (event: InAppBrowserEvent) => void): void;
    /**
     * Adds a listener for an event from the InAppBrowser.
     * @param type      the event to listen for
     *                  page-title-updated: Emitted when the document changed its title, calling event.preventDefault() will
     *                  prevent the native window's title from changing.
     *                  close: Emitted when the window is going to be closed. It's emitted before the beforeunload and
     *                  unload event of the DOM. Calling event.preventDefault() will cancel the close.
     *                  closed: Emitted when the window is closed. After you have received this event you should remove
     *                  the reference to the window and avoid using it any more.
     *                  unresponsive: Emitted when the web page becomes unresponsive.
     *                  responsive: Emitted when the unresponsive web page becomes responsive again.
     *                  blur: Emitted when the window loses focus.
     *                  focus: Emitted when the window gains focus.
     *                  show: Emitted when the window is shown.
     *                  hide: Emitted when the window is hidden.
     *                  ready-to-show: Emitted when the web page has been rendered (while not being shown) and window can be displayed without a visual flash.
     *                  maximize: Emitted when window is maximized.
     *                  unmaximize: Emitted when the window exits from a maximized state.
     *                  minimize: Emitted when the window is minimized.
     *                  restore: Emitted when the window is restored from a minimized state.
     *                  resize: Emitted when the window is being resized.
     *                  move: Emitted when the window is being moved to a new position.
     *                  enter-full-screen: Emitted when the window enters a full-screen state.
     *                  leave-full-screen: Emitted when the window leaves a full-screen state.
     *                  enter-html-full-screen: Emitted when the window enters a full-screen state triggered by HTML API.
     *                  leave-html-full-screen: Emitted when the window leaves a full-screen state triggered by HTML API.
     * @param callback  the function that executes when the event fires. The function is
     *                  passed an InAppBrowserEvent object as a parameter.
     */
    addEventListener(type: "blur", callback: (event: InAppBrowserEvent) => void): void;
    /**
     * Adds a listener for an event from the InAppBrowser.
     * @param type      the event to listen for
     *                  page-title-updated: Emitted when the document changed its title, calling event.preventDefault() will
     *                  prevent the native window's title from changing.
     *                  close: Emitted when the window is going to be closed. It's emitted before the beforeunload and
     *                  unload event of the DOM. Calling event.preventDefault() will cancel the close.
     *                  closed: Emitted when the window is closed. After you have received this event you should remove
     *                  the reference to the window and avoid using it any more.
     *                  unresponsive: Emitted when the web page becomes unresponsive.
     *                  responsive: Emitted when the unresponsive web page becomes responsive again.
     *                  blur: Emitted when the window loses focus.
     *                  focus: Emitted when the window gains focus.
     *                  show: Emitted when the window is shown.
     *                  hide: Emitted when the window is hidden.
     *                  ready-to-show: Emitted when the web page has been rendered (while not being shown) and window can be displayed without a visual flash.
     *                  maximize: Emitted when window is maximized.
     *                  unmaximize: Emitted when the window exits from a maximized state.
     *                  minimize: Emitted when the window is minimized.
     *                  restore: Emitted when the window is restored from a minimized state.
     *                  resize: Emitted when the window is being resized.
     *                  move: Emitted when the window is being moved to a new position.
     *                  enter-full-screen: Emitted when the window enters a full-screen state.
     *                  leave-full-screen: Emitted when the window leaves a full-screen state.
     *                  enter-html-full-screen: Emitted when the window enters a full-screen state triggered by HTML API.
     *                  leave-html-full-screen: Emitted when the window leaves a full-screen state triggered by HTML API.
     * @param callback  the function that executes when the event fires. The function is
     *                  passed an InAppBrowserEvent object as a parameter.
     */
    addEventListener(type: "focus", callback: (event: InAppBrowserEvent) => void): void;
    /**
     * Adds a listener for an event from the InAppBrowser.
     * @param type      the event to listen for
     *                  page-title-updated: Emitted when the document changed its title, calling event.preventDefault() will
     *                  prevent the native window's title from changing.
     *                  close: Emitted when the window is going to be closed. It's emitted before the beforeunload and
     *                  unload event of the DOM. Calling event.preventDefault() will cancel the close.
     *                  closed: Emitted when the window is closed. After you have received this event you should remove
     *                  the reference to the window and avoid using it any more.
     *                  unresponsive: Emitted when the web page becomes unresponsive.
     *                  responsive: Emitted when the unresponsive web page becomes responsive again.
     *                  blur: Emitted when the window loses focus.
     *                  focus: Emitted when the window gains focus.
     *                  show: Emitted when the window is shown.
     *                  hide: Emitted when the window is hidden.
     *                  ready-to-show: Emitted when the web page has been rendered (while not being shown) and window can be displayed without a visual flash.
     *                  maximize: Emitted when window is maximized.
     *                  unmaximize: Emitted when the window exits from a maximized state.
     *                  minimize: Emitted when the window is minimized.
     *                  restore: Emitted when the window is restored from a minimized state.
     *                  resize: Emitted when the window is being resized.
     *                  move: Emitted when the window is being moved to a new position.
     *                  enter-full-screen: Emitted when the window enters a full-screen state.
     *                  leave-full-screen: Emitted when the window leaves a full-screen state.
     *                  enter-html-full-screen: Emitted when the window enters a full-screen state triggered by HTML API.
     *                  leave-html-full-screen: Emitted when the window leaves a full-screen state triggered by HTML API.
     * @param callback  the function that executes when the event fires. The function is
     *                  passed an InAppBrowserEvent object as a parameter.
     */
    addEventListener(type: "show", callback: (event: InAppBrowserEvent) => void): void;
    /**
     * Adds a listener for an event from the InAppBrowser.
     * @param type      the event to listen for
     *                  page-title-updated: Emitted when the document changed its title, calling event.preventDefault() will
     *                  prevent the native window's title from changing.
     *                  close: Emitted when the window is going to be closed. It's emitted before the beforeunload and
     *                  unload event of the DOM. Calling event.preventDefault() will cancel the close.
     *                  closed: Emitted when the window is closed. After you have received this event you should remove
     *                  the reference to the window and avoid using it any more.
     *                  unresponsive: Emitted when the web page becomes unresponsive.
     *                  responsive: Emitted when the unresponsive web page becomes responsive again.
     *                  blur: Emitted when the window loses focus.
     *                  focus: Emitted when the window gains focus.
     *                  show: Emitted when the window is shown.
     *                  hide: Emitted when the window is hidden.
     *                  ready-to-show: Emitted when the web page has been rendered (while not being shown) and window can be displayed without a visual flash.
     *                  maximize: Emitted when window is maximized.
     *                  unmaximize: Emitted when the window exits from a maximized state.
     *                  minimize: Emitted when the window is minimized.
     *                  restore: Emitted when the window is restored from a minimized state.
     *                  resize: Emitted when the window is being resized.
     *                  move: Emitted when the window is being moved to a new position.
     *                  enter-full-screen: Emitted when the window enters a full-screen state.
     *                  leave-full-screen: Emitted when the window leaves a full-screen state.
     *                  enter-html-full-screen: Emitted when the window enters a full-screen state triggered by HTML API.
     *                  leave-html-full-screen: Emitted when the window leaves a full-screen state triggered by HTML API.
     * @param callback  the function that executes when the event fires. The function is
     *                  passed an InAppBrowserEvent object as a parameter.
     */
    addEventListener(type: "hide", callback: (event: InAppBrowserEvent) => void): void;
    /**
     * Adds a listener for an event from the InAppBrowser.
     * @param type      the event to listen for
     *                  page-title-updated: Emitted when the document changed its title, calling event.preventDefault() will
     *                  prevent the native window's title from changing.
     *                  close: Emitted when the window is going to be closed. It's emitted before the beforeunload and
     *                  unload event of the DOM. Calling event.preventDefault() will cancel the close.
     *                  closed: Emitted when the window is closed. After you have received this event you should remove
     *                  the reference to the window and avoid using it any more.
     *                  unresponsive: Emitted when the web page becomes unresponsive.
     *                  responsive: Emitted when the unresponsive web page becomes responsive again.
     *                  blur: Emitted when the window loses focus.
     *                  focus: Emitted when the window gains focus.
     *                  show: Emitted when the window is shown.
     *                  hide: Emitted when the window is hidden.
     *                  ready-to-show: Emitted when the web page has been rendered (while not being shown) and window can be displayed without a visual flash.
     *                  maximize: Emitted when window is maximized.
     *                  unmaximize: Emitted when the window exits from a maximized state.
     *                  minimize: Emitted when the window is minimized.
     *                  restore: Emitted when the window is restored from a minimized state.
     *                  resize: Emitted when the window is being resized.
     *                  move: Emitted when the window is being moved to a new position.
     *                  enter-full-screen: Emitted when the window enters a full-screen state.
     *                  leave-full-screen: Emitted when the window leaves a full-screen state.
     *                  enter-html-full-screen: Emitted when the window enters a full-screen state triggered by HTML API.
     *                  leave-html-full-screen: Emitted when the window leaves a full-screen state triggered by HTML API.
     * @param callback  the function that executes when the event fires. The function is
     *                  passed an InAppBrowserEvent object as a parameter.
     */
    addEventListener(type: "ready-to-show", callback: (event: InAppBrowserEvent) => void): void;
    /**
     * Adds a listener for an event from the InAppBrowser.
     * @param type      the event to listen for
     *                  page-title-updated: Emitted when the document changed its title, calling event.preventDefault() will
     *                  prevent the native window's title from changing.
     *                  close: Emitted when the window is going to be closed. It's emitted before the beforeunload and
     *                  unload event of the DOM. Calling event.preventDefault() will cancel the close.
     *                  closed: Emitted when the window is closed. After you have received this event you should remove
     *                  the reference to the window and avoid using it any more.
     *                  unresponsive: Emitted when the web page becomes unresponsive.
     *                  responsive: Emitted when the unresponsive web page becomes responsive again.
     *                  blur: Emitted when the window loses focus.
     *                  focus: Emitted when the window gains focus.
     *                  show: Emitted when the window is shown.
     *                  hide: Emitted when the window is hidden.
     *                  ready-to-show: Emitted when the web page has been rendered (while not being shown) and window can be displayed without a visual flash.
     *                  maximize: Emitted when window is maximized.
     *                  unmaximize: Emitted when the window exits from a maximized state.
     *                  minimize: Emitted when the window is minimized.
     *                  restore: Emitted when the window is restored from a minimized state.
     *                  resize: Emitted when the window is being resized.
     *                  move: Emitted when the window is being moved to a new position.
     *                  enter-full-screen: Emitted when the window enters a full-screen state.
     *                  leave-full-screen: Emitted when the window leaves a full-screen state.
     *                  enter-html-full-screen: Emitted when the window enters a full-screen state triggered by HTML API.
     *                  leave-html-full-screen: Emitted when the window leaves a full-screen state triggered by HTML API.
     * @param callback  the function that executes when the event fires. The function is
     *                  passed an InAppBrowserEvent object as a parameter.
     */
    addEventListener(type: "maximize", callback: (event: InAppBrowserEvent) => void): void;
    /**
     * Adds a listener for an event from the InAppBrowser.
     * @param type      the event to listen for
     *                  page-title-updated: Emitted when the document changed its title, calling event.preventDefault() will
     *                  prevent the native window's title from changing.
     *                  close: Emitted when the window is going to be closed. It's emitted before the beforeunload and
     *                  unload event of the DOM. Calling event.preventDefault() will cancel the close.
     *                  closed: Emitted when the window is closed. After you have received this event you should remove
     *                  the reference to the window and avoid using it any more.
     *                  unresponsive: Emitted when the web page becomes unresponsive.
     *                  responsive: Emitted when the unresponsive web page becomes responsive again.
     *                  blur: Emitted when the window loses focus.
     *                  focus: Emitted when the window gains focus.
     *                  show: Emitted when the window is shown.
     *                  hide: Emitted when the window is hidden.
     *                  ready-to-show: Emitted when the web page has been rendered (while not being shown) and window can be displayed without a visual flash.
     *                  maximize: Emitted when window is maximized.
     *                  unmaximize: Emitted when the window exits from a maximized state.
     *                  minimize: Emitted when the window is minimized.
     *                  restore: Emitted when the window is restored from a minimized state.
     *                  resize: Emitted when the window is being resized.
     *                  move: Emitted when the window is being moved to a new position.
     *                  enter-full-screen: Emitted when the window enters a full-screen state.
     *                  leave-full-screen: Emitted when the window leaves a full-screen state.
     *                  enter-html-full-screen: Emitted when the window enters a full-screen state triggered by HTML API.
     *                  leave-html-full-screen: Emitted when the window leaves a full-screen state triggered by HTML API.
     * @param callback  the function that executes when the event fires. The function is
     *                  passed an InAppBrowserEvent object as a parameter.
     */
    addEventListener(type: "unmaximize", callback: (event: InAppBrowserEvent) => void): void;
    /**
     * Adds a listener for an event from the InAppBrowser.
     * @param type      the event to listen for
     *                  page-title-updated: Emitted when the document changed its title, calling event.preventDefault() will
     *                  prevent the native window's title from changing.
     *                  close: Emitted when the window is going to be closed. It's emitted before the beforeunload and
     *                  unload event of the DOM. Calling event.preventDefault() will cancel the close.
     *                  closed: Emitted when the window is closed. After you have received this event you should remove
     *                  the reference to the window and avoid using it any more.
     *                  unresponsive: Emitted when the web page becomes unresponsive.
     *                  responsive: Emitted when the unresponsive web page becomes responsive again.
     *                  blur: Emitted when the window loses focus.
     *                  focus: Emitted when the window gains focus.
     *                  show: Emitted when the window is shown.
     *                  hide: Emitted when the window is hidden.
     *                  ready-to-show: Emitted when the web page has been rendered (while not being shown) and window can be displayed without a visual flash.
     *                  maximize: Emitted when window is maximized.
     *                  unmaximize: Emitted when the window exits from a maximized state.
     *                  minimize: Emitted when the window is minimized.
     *                  restore: Emitted when the window is restored from a minimized state.
     *                  resize: Emitted when the window is being resized.
     *                  move: Emitted when the window is being moved to a new position.
     *                  enter-full-screen: Emitted when the window enters a full-screen state.
     *                  leave-full-screen: Emitted when the window leaves a full-screen state.
     *                  enter-html-full-screen: Emitted when the window enters a full-screen state triggered by HTML API.
     *                  leave-html-full-screen: Emitted when the window leaves a full-screen state triggered by HTML API.
     * @param callback  the function that executes when the event fires. The function is
     *                  passed an InAppBrowserEvent object as a parameter.
     */
    addEventListener(type: "minimize", callback: (event: InAppBrowserEvent) => void): void;
    /**
     * Adds a listener for an event from the InAppBrowser.
     * @param type      the event to listen for
     *                  page-title-updated: Emitted when the document changed its title, calling event.preventDefault() will
     *                  prevent the native window's title from changing.
     *                  close: Emitted when the window is going to be closed. It's emitted before the beforeunload and
     *                  unload event of the DOM. Calling event.preventDefault() will cancel the close.
     *                  closed: Emitted when the window is closed. After you have received this event you should remove
     *                  the reference to the window and avoid using it any more.
     *                  unresponsive: Emitted when the web page becomes unresponsive.
     *                  responsive: Emitted when the unresponsive web page becomes responsive again.
     *                  blur: Emitted when the window loses focus.
     *                  focus: Emitted when the window gains focus.
     *                  show: Emitted when the window is shown.
     *                  hide: Emitted when the window is hidden.
     *                  ready-to-show: Emitted when the web page has been rendered (while not being shown) and window can be displayed without a visual flash.
     *                  maximize: Emitted when window is maximized.
     *                  unmaximize: Emitted when the window exits from a maximized state.
     *                  minimize: Emitted when the window is minimized.
     *                  restore: Emitted when the window is restored from a minimized state.
     *                  resize: Emitted when the window is being resized.
     *                  move: Emitted when the window is being moved to a new position.
     *                  enter-full-screen: Emitted when the window enters a full-screen state.
     *                  leave-full-screen: Emitted when the window leaves a full-screen state.
     *                  enter-html-full-screen: Emitted when the window enters a full-screen state triggered by HTML API.
     *                  leave-html-full-screen: Emitted when the window leaves a full-screen state triggered by HTML API.
     * @param callback  the function that executes when the event fires. The function is
     *                  passed an InAppBrowserEvent object as a parameter.
     */
    addEventListener(type: "restore", callback: (event: InAppBrowserEvent) => void): void;
    /**
     * Adds a listener for an event from the InAppBrowser.
     * @param type      the event to listen for
     *                  page-title-updated: Emitted when the document changed its title, calling event.preventDefault() will
     *                  prevent the native window's title from changing.
     *                  close: Emitted when the window is going to be closed. It's emitted before the beforeunload and
     *                  unload event of the DOM. Calling event.preventDefault() will cancel the close.
     *                  closed: Emitted when the window is closed. After you have received this event you should remove
     *                  the reference to the window and avoid using it any more.
     *                  unresponsive: Emitted when the web page becomes unresponsive.
     *                  responsive: Emitted when the unresponsive web page becomes responsive again.
     *                  blur: Emitted when the window loses focus.
     *                  focus: Emitted when the window gains focus.
     *                  show: Emitted when the window is shown.
     *                  hide: Emitted when the window is hidden.
     *                  ready-to-show: Emitted when the web page has been rendered (while not being shown) and window can be displayed without a visual flash.
     *                  maximize: Emitted when window is maximized.
     *                  unmaximize: Emitted when the window exits from a maximized state.
     *                  minimize: Emitted when the window is minimized.
     *                  restore: Emitted when the window is restored from a minimized state.
     *                  resize: Emitted when the window is being resized.
     *                  move: Emitted when the window is being moved to a new position.
     *                  enter-full-screen: Emitted when the window enters a full-screen state.
     *                  leave-full-screen: Emitted when the window leaves a full-screen state.
     *                  enter-html-full-screen: Emitted when the window enters a full-screen state triggered by HTML API.
     *                  leave-html-full-screen: Emitted when the window leaves a full-screen state triggered by HTML API.
     * @param callback  the function that executes when the event fires. The function is
     *                  passed an InAppBrowserEvent object as a parameter.
     */
    addEventListener(type: "resize", callback: (event: InAppBrowserEvent) => void): void;
    /**
     * Adds a listener for an event from the InAppBrowser.
     * @param type      the event to listen for
     *                  page-title-updated: Emitted when the document changed its title, calling event.preventDefault() will
     *                  prevent the native window's title from changing.
     *                  close: Emitted when the window is going to be closed. It's emitted before the beforeunload and
     *                  unload event of the DOM. Calling event.preventDefault() will cancel the close.
     *                  closed: Emitted when the window is closed. After you have received this event you should remove
     *                  the reference to the window and avoid using it any more.
     *                  unresponsive: Emitted when the web page becomes unresponsive.
     *                  responsive: Emitted when the unresponsive web page becomes responsive again.
     *                  blur: Emitted when the window loses focus.
     *                  focus: Emitted when the window gains focus.
     *                  show: Emitted when the window is shown.
     *                  hide: Emitted when the window is hidden.
     *                  ready-to-show: Emitted when the web page has been rendered (while not being shown) and window can be displayed without a visual flash.
     *                  maximize: Emitted when window is maximized.
     *                  unmaximize: Emitted when the window exits from a maximized state.
     *                  minimize: Emitted when the window is minimized.
     *                  restore: Emitted when the window is restored from a minimized state.
     *                  resize: Emitted when the window is being resized.
     *                  move: Emitted when the window is being moved to a new position.
     *                  enter-full-screen: Emitted when the window enters a full-screen state.
     *                  leave-full-screen: Emitted when the window leaves a full-screen state.
     *                  enter-html-full-screen: Emitted when the window enters a full-screen state triggered by HTML API.
     *                  leave-html-full-screen: Emitted when the window leaves a full-screen state triggered by HTML API.
     * @param callback  the function that executes when the event fires. The function is
     *                  passed an InAppBrowserEvent object as a parameter.
     */
    addEventListener(type: "move", callback: (event: InAppBrowserEvent) => void): void;
    /**
     * Adds a listener for an event from the InAppBrowser.
     * @param type      the event to listen for
     *                  page-title-updated: Emitted when the document changed its title, calling event.preventDefault() will
     *                  prevent the native window's title from changing.
     *                  close: Emitted when the window is going to be closed. It's emitted before the beforeunload and
     *                  unload event of the DOM. Calling event.preventDefault() will cancel the close.
     *                  closed: Emitted when the window is closed. After you have received this event you should remove
     *                  the reference to the window and avoid using it any more.
     *                  unresponsive: Emitted when the web page becomes unresponsive.
     *                  responsive: Emitted when the unresponsive web page becomes responsive again.
     *                  blur: Emitted when the window loses focus.
     *                  focus: Emitted when the window gains focus.
     *                  show: Emitted when the window is shown.
     *                  hide: Emitted when the window is hidden.
     *                  ready-to-show: Emitted when the web page has been rendered (while not being shown) and window can be displayed without a visual flash.
     *                  maximize: Emitted when window is maximized.
     *                  unmaximize: Emitted when the window exits from a maximized state.
     *                  minimize: Emitted when the window is minimized.
     *                  restore: Emitted when the window is restored from a minimized state.
     *                  resize: Emitted when the window is being resized.
     *                  move: Emitted when the window is being moved to a new position.
     *                  enter-full-screen: Emitted when the window enters a full-screen state.
     *                  leave-full-screen: Emitted when the window leaves a full-screen state.
     *                  enter-html-full-screen: Emitted when the window enters a full-screen state triggered by HTML API.
     *                  leave-html-full-screen: Emitted when the window leaves a full-screen state triggered by HTML API.
     * @param callback  the function that executes when the event fires. The function is
     *                  passed an InAppBrowserEvent object as a parameter.
     */
    addEventListener(type: "enter-full-screen", callback: (event: InAppBrowserEvent) => void): void;
    /**
     * Adds a listener for an event from the InAppBrowser.
     * @param type      the event to listen for
     *                  page-title-updated: Emitted when the document changed its title, calling event.preventDefault() will
     *                  prevent the native window's title from changing.
     *                  close: Emitted when the window is going to be closed. It's emitted before the beforeunload and
     *                  unload event of the DOM. Calling event.preventDefault() will cancel the close.
     *                  closed: Emitted when the window is closed. After you have received this event you should remove
     *                  the reference to the window and avoid using it any more.
     *                  unresponsive: Emitted when the web page becomes unresponsive.
     *                  responsive: Emitted when the unresponsive web page becomes responsive again.
     *                  blur: Emitted when the window loses focus.
     *                  focus: Emitted when the window gains focus.
     *                  show: Emitted when the window is shown.
     *                  hide: Emitted when the window is hidden.
     *                  ready-to-show: Emitted when the web page has been rendered (while not being shown) and window can be displayed without a visual flash.
     *                  maximize: Emitted when window is maximized.
     *                  unmaximize: Emitted when the window exits from a maximized state.
     *                  minimize: Emitted when the window is minimized.
     *                  restore: Emitted when the window is restored from a minimized state.
     *                  resize: Emitted when the window is being resized.
     *                  move: Emitted when the window is being moved to a new position.
     *                  enter-full-screen: Emitted when the window enters a full-screen state.
     *                  leave-full-screen: Emitted when the window leaves a full-screen state.
     *                  enter-html-full-screen: Emitted when the window enters a full-screen state triggered by HTML API.
     *                  leave-html-full-screen: Emitted when the window leaves a full-screen state triggered by HTML API.
     * @param callback  the function that executes when the event fires. The function is
     *                  passed an InAppBrowserEvent object as a parameter.
     */
    addEventListener(type: "leave-full-screen", callback: (event: InAppBrowserEvent) => void): void;
    /**
     * Adds a listener for an event from the InAppBrowser.
     * @param type      the event to listen for
     *                  page-title-updated: Emitted when the document changed its title, calling event.preventDefault() will
     *                  prevent the native window's title from changing.
     *                  close: Emitted when the window is going to be closed. It's emitted before the beforeunload and
     *                  unload event of the DOM. Calling event.preventDefault() will cancel the close.
     *                  closed: Emitted when the window is closed. After you have received this event you should remove
     *                  the reference to the window and avoid using it any more.
     *                  unresponsive: Emitted when the web page becomes unresponsive.
     *                  responsive: Emitted when the unresponsive web page becomes responsive again.
     *                  blur: Emitted when the window loses focus.
     *                  focus: Emitted when the window gains focus.
     *                  show: Emitted when the window is shown.
     *                  hide: Emitted when the window is hidden.
     *                  ready-to-show: Emitted when the web page has been rendered (while not being shown) and window can be displayed without a visual flash.
     *                  maximize: Emitted when window is maximized.
     *                  unmaximize: Emitted when the window exits from a maximized state.
     *                  minimize: Emitted when the window is minimized.
     *                  restore: Emitted when the window is restored from a minimized state.
     *                  resize: Emitted when the window is being resized.
     *                  move: Emitted when the window is being moved to a new position.
     *                  enter-full-screen: Emitted when the window enters a full-screen state.
     *                  leave-full-screen: Emitted when the window leaves a full-screen state.
     *                  enter-html-full-screen: Emitted when the window enters a full-screen state triggered by HTML API.
     *                  leave-html-full-screen: Emitted when the window leaves a full-screen state triggered by HTML API.
     * @param callback  the function that executes when the event fires. The function is
     *                  passed an InAppBrowserEvent object as a parameter.
     */
    addEventListener(type: "enter-html-full-screen", callback: (event: InAppBrowserEvent) => void): void;
    /**
     * Adds a listener for an event from the InAppBrowser.
     * @param type      the event to listen for
     *                  page-title-updated: Emitted when the document changed its title, calling event.preventDefault() will
     *                  prevent the native window's title from changing.
     *                  close: Emitted when the window is going to be closed. It's emitted before the beforeunload and
     *                  unload event of the DOM. Calling event.preventDefault() will cancel the close.
     *                  closed: Emitted when the window is closed. After you have received this event you should remove
     *                  the reference to the window and avoid using it any more.
     *                  unresponsive: Emitted when the web page becomes unresponsive.
     *                  responsive: Emitted when the unresponsive web page becomes responsive again.
     *                  blur: Emitted when the window loses focus.
     *                  focus: Emitted when the window gains focus.
     *                  show: Emitted when the window is shown.
     *                  hide: Emitted when the window is hidden.
     *                  ready-to-show: Emitted when the web page has been rendered (while not being shown) and window can be displayed without a visual flash.
     *                  maximize: Emitted when window is maximized.
     *                  unmaximize: Emitted when the window exits from a maximized state.
     *                  minimize: Emitted when the window is minimized.
     *                  restore: Emitted when the window is restored from a minimized state.
     *                  resize: Emitted when the window is being resized.
     *                  move: Emitted when the window is being moved to a new position.
     *                  enter-full-screen: Emitted when the window enters a full-screen state.
     *                  leave-full-screen: Emitted when the window leaves a full-screen state.
     *                  enter-html-full-screen: Emitted when the window enters a full-screen state triggered by HTML API.
     *                  leave-html-full-screen: Emitted when the window leaves a full-screen state triggered by HTML API.
     * @param callback  the function that executes when the event fires. The function is
     *                  passed an InAppBrowserEvent object as a parameter.
     */
    addEventListener(type: "leave-html-full-screen", callback: (event: InAppBrowserEvent) => void): void;
    /**
     * Adds a listener for an event from the InAppBrowser.
     * @param type      the event to listen for
     *                  page-title-updated: Emitted when the document changed its title, calling event.preventDefault() will
     *                  prevent the native window's title from changing.
     *                  close: Emitted when the window is going to be closed. It's emitted before the beforeunload and
     *                  unload event of the DOM. Calling event.preventDefault() will cancel the close.
     *                  closed: Emitted when the window is closed. After you have received this event you should remove
     *                  the reference to the window and avoid using it any more.
     *                  unresponsive: Emitted when the web page becomes unresponsive.
     *                  responsive: Emitted when the unresponsive web page becomes responsive again.
     *                  blur: Emitted when the window loses focus.
     *                  focus: Emitted when the window gains focus.
     *                  show: Emitted when the window is shown.
     *                  hide: Emitted when the window is hidden.
     *                  ready-to-show: Emitted when the web page has been rendered (while not being shown) and window can be displayed without a visual flash.
     *                  maximize: Emitted when window is maximized.
     *                  unmaximize: Emitted when the window exits from a maximized state.
     *                  minimize: Emitted when the window is minimized.
     *                  restore: Emitted when the window is restored from a minimized state.
     *                  resize: Emitted when the window is being resized.
     *                  move: Emitted when the window is being moved to a new position.
     *                  enter-full-screen: Emitted when the window enters a full-screen state.
     *                  leave-full-screen: Emitted when the window leaves a full-screen state.
     *                  enter-html-full-screen: Emitted when the window enters a full-screen state triggered by HTML API.
     *                  leave-html-full-screen: Emitted when the window leaves a full-screen state triggered by HTML API.
     * @param callback  the function that executes when the event fires. The function is
     *                  passed an InAppBrowserEvent object as a parameter.
     */
    removeEventListener(type: "page-title-updated", callback: (event: InAppBrowserEvent) => void): void;
    /**
     * Removes a listener for an event from the InAppBrowser.
     * @param type      the event to listen for
     *                  page-title-updated: Emitted when the document changed its title, calling event.preventDefault() will
     *                  prevent the native window's title from changing.
     *                  close: Emitted when the window is going to be closed. It's emitted before the beforeunload and
     *                  unload event of the DOM. Calling event.preventDefault() will cancel the close.
     *                  closed: Emitted when the window is closed. After you have received this event you should remove
     *                  the reference to the window and avoid using it any more.
     *                  unresponsive: Emitted when the web page becomes unresponsive.
     *                  responsive: Emitted when the unresponsive web page becomes responsive again.
     *                  blur: Emitted when the window loses focus.
     *                  focus: Emitted when the window gains focus.
     *                  show: Emitted when the window is shown.
     *                  hide: Emitted when the window is hidden.
     *                  ready-to-show: Emitted when the web page has been rendered (while not being shown) and window can be displayed without a visual flash.
     *                  maximize: Emitted when window is maximized.
     *                  unmaximize: Emitted when the window exits from a maximized state.
     *                  minimize: Emitted when the window is minimized.
     *                  restore: Emitted when the window is restored from a minimized state.
     *                  resize: Emitted when the window is being resized.
     *                  move: Emitted when the window is being moved to a new position.
     *                  enter-full-screen: Emitted when the window enters a full-screen state.
     *                  leave-full-screen: Emitted when the window leaves a full-screen state.
     *                  enter-html-full-screen: Emitted when the window enters a full-screen state triggered by HTML API.
     *                  leave-html-full-screen: Emitted when the window leaves a full-screen state triggered by HTML API.
     * @param callback  the function that executes when the event fires. The function is
     *                  passed an InAppBrowserEvent object as a parameter.
     */
    removeEventListener(type: "close", callback: (event: InAppBrowserEvent) => void): void;
    /**
     * Removes a listener for an event from the InAppBrowser.
     * @param type      the event to listen for
     *                  page-title-updated: Emitted when the document changed its title, calling event.preventDefault() will
     *                  prevent the native window's title from changing.
     *                  close: Emitted when the window is going to be closed. It's emitted before the beforeunload and
     *                  unload event of the DOM. Calling event.preventDefault() will cancel the close.
     *                  closed: Emitted when the window is closed. After you have received this event you should remove
     *                  the reference to the window and avoid using it any more.
     *                  unresponsive: Emitted when the web page becomes unresponsive.
     *                  responsive: Emitted when the unresponsive web page becomes responsive again.
     *                  blur: Emitted when the window loses focus.
     *                  focus: Emitted when the window gains focus.
     *                  show: Emitted when the window is shown.
     *                  hide: Emitted when the window is hidden.
     *                  ready-to-show: Emitted when the web page has been rendered (while not being shown) and window can be displayed without a visual flash.
     *                  maximize: Emitted when window is maximized.
     *                  unmaximize: Emitted when the window exits from a maximized state.
     *                  minimize: Emitted when the window is minimized.
     *                  restore: Emitted when the window is restored from a minimized state.
     *                  resize: Emitted when the window is being resized.
     *                  move: Emitted when the window is being moved to a new position.
     *                  enter-full-screen: Emitted when the window enters a full-screen state.
     *                  leave-full-screen: Emitted when the window leaves a full-screen state.
     *                  enter-html-full-screen: Emitted when the window enters a full-screen state triggered by HTML API.
     *                  leave-html-full-screen: Emitted when the window leaves a full-screen state triggered by HTML API.
     * @param callback  the function that executes when the event fires. The function is
     *                  passed an InAppBrowserEvent object as a parameter.
     */
    removeEventListener(type: "closed", callback: (event: InAppBrowserEvent) => void): void;
    /**
     * Removes a listener for an event from the InAppBrowser.
     * @param type      the event to listen for
     *                  page-title-updated: Emitted when the document changed its title, calling event.preventDefault() will
     *                  prevent the native window's title from changing.
     *                  close: Emitted when the window is going to be closed. It's emitted before the beforeunload and
     *                  unload event of the DOM. Calling event.preventDefault() will cancel the close.
     *                  closed: Emitted when the window is closed. After you have received this event you should remove
     *                  the reference to the window and avoid using it any more.
     *                  unresponsive: Emitted when the web page becomes unresponsive.
     *                  responsive: Emitted when the unresponsive web page becomes responsive again.
     *                  blur: Emitted when the window loses focus.
     *                  focus: Emitted when the window gains focus.
     *                  show: Emitted when the window is shown.
     *                  hide: Emitted when the window is hidden.
     *                  ready-to-show: Emitted when the web page has been rendered (while not being shown) and window can be displayed without a visual flash.
     *                  maximize: Emitted when window is maximized.
     *                  unmaximize: Emitted when the window exits from a maximized state.
     *                  minimize: Emitted when the window is minimized.
     *                  restore: Emitted when the window is restored from a minimized state.
     *                  resize: Emitted when the window is being resized.
     *                  move: Emitted when the window is being moved to a new position.
     *                  enter-full-screen: Emitted when the window enters a full-screen state.
     *                  leave-full-screen: Emitted when the window leaves a full-screen state.
     *                  enter-html-full-screen: Emitted when the window enters a full-screen state triggered by HTML API.
     *                  leave-html-full-screen: Emitted when the window leaves a full-screen state triggered by HTML API.
     * @param callback  the function that executes when the event fires. The function is
     *                  passed an InAppBrowserEvent object as a parameter.
     */
    removeEventListener(type: "unresponsive", callback: (event: InAppBrowserEvent) => void): void;
    /**
     * Removes a listener for an event from the InAppBrowser.
     * @param type      the event to listen for
     *                  page-title-updated: Emitted when the document changed its title, calling event.preventDefault() will
     *                  prevent the native window's title from changing.
     *                  close: Emitted when the window is going to be closed. It's emitted before the beforeunload and
     *                  unload event of the DOM. Calling event.preventDefault() will cancel the close.
     *                  closed: Emitted when the window is closed. After you have received this event you should remove
     *                  the reference to the window and avoid using it any more.
     *                  unresponsive: Emitted when the web page becomes unresponsive.
     *                  responsive: Emitted when the unresponsive web page becomes responsive again.
     *                  blur: Emitted when the window loses focus.
     *                  focus: Emitted when the window gains focus.
     *                  show: Emitted when the window is shown.
     *                  hide: Emitted when the window is hidden.
     *                  ready-to-show: Emitted when the web page has been rendered (while not being shown) and window can be displayed without a visual flash.
     *                  maximize: Emitted when window is maximized.
     *                  unmaximize: Emitted when the window exits from a maximized state.
     *                  minimize: Emitted when the window is minimized.
     *                  restore: Emitted when the window is restored from a minimized state.
     *                  resize: Emitted when the window is being resized.
     *                  move: Emitted when the window is being moved to a new position.
     *                  enter-full-screen: Emitted when the window enters a full-screen state.
     *                  leave-full-screen: Emitted when the window leaves a full-screen state.
     *                  enter-html-full-screen: Emitted when the window enters a full-screen state triggered by HTML API.
     *                  leave-html-full-screen: Emitted when the window leaves a full-screen state triggered by HTML API.
     * @param callback  the function that executes when the event fires. The function is
     *                  passed an InAppBrowserEvent object as a parameter.
     */
    removeEventListener(type: "responsive", callback: (event: InAppBrowserEvent) => void): void;
    /**
     * Removes a listener for an event from the InAppBrowser.
     * @param type      the event to listen for
     *                  page-title-updated: Emitted when the document changed its title, calling event.preventDefault() will
     *                  prevent the native window's title from changing.
     *                  close: Emitted when the window is going to be closed. It's emitted before the beforeunload and
     *                  unload event of the DOM. Calling event.preventDefault() will cancel the close.
     *                  closed: Emitted when the window is closed. After you have received this event you should remove
     *                  the reference to the window and avoid using it any more.
     *                  unresponsive: Emitted when the web page becomes unresponsive.
     *                  responsive: Emitted when the unresponsive web page becomes responsive again.
     *                  blur: Emitted when the window loses focus.
     *                  focus: Emitted when the window gains focus.
     *                  show: Emitted when the window is shown.
     *                  hide: Emitted when the window is hidden.
     *                  ready-to-show: Emitted when the web page has been rendered (while not being shown) and window can be displayed without a visual flash.
     *                  maximize: Emitted when window is maximized.
     *                  unmaximize: Emitted when the window exits from a maximized state.
     *                  minimize: Emitted when the window is minimized.
     *                  restore: Emitted when the window is restored from a minimized state.
     *                  resize: Emitted when the window is being resized.
     *                  move: Emitted when the window is being moved to a new position.
     *                  enter-full-screen: Emitted when the window enters a full-screen state.
     *                  leave-full-screen: Emitted when the window leaves a full-screen state.
     *                  enter-html-full-screen: Emitted when the window enters a full-screen state triggered by HTML API.
     *                  leave-html-full-screen: Emitted when the window leaves a full-screen state triggered by HTML API.
     * @param callback  the function that executes when the event fires. The function is
     *                  passed an InAppBrowserEvent object as a parameter.
     */
    removeEventListener(type: "blur", callback: (event: InAppBrowserEvent) => void): void;
    /**
     * Removes a listener for an event from the InAppBrowser.
     * @param type      the event to listen for
     *                  page-title-updated: Emitted when the document changed its title, calling event.preventDefault() will
     *                  prevent the native window's title from changing.
     *                  close: Emitted when the window is going to be closed. It's emitted before the beforeunload and
     *                  unload event of the DOM. Calling event.preventDefault() will cancel the close.
     *                  closed: Emitted when the window is closed. After you have received this event you should remove
     *                  the reference to the window and avoid using it any more.
     *                  unresponsive: Emitted when the web page becomes unresponsive.
     *                  responsive: Emitted when the unresponsive web page becomes responsive again.
     *                  blur: Emitted when the window loses focus.
     *                  focus: Emitted when the window gains focus.
     *                  show: Emitted when the window is shown.
     *                  hide: Emitted when the window is hidden.
     *                  ready-to-show: Emitted when the web page has been rendered (while not being shown) and window can be displayed without a visual flash.
     *                  maximize: Emitted when window is maximized.
     *                  unmaximize: Emitted when the window exits from a maximized state.
     *                  minimize: Emitted when the window is minimized.
     *                  restore: Emitted when the window is restored from a minimized state.
     *                  resize: Emitted when the window is being resized.
     *                  move: Emitted when the window is being moved to a new position.
     *                  enter-full-screen: Emitted when the window enters a full-screen state.
     *                  leave-full-screen: Emitted when the window leaves a full-screen state.
     *                  enter-html-full-screen: Emitted when the window enters a full-screen state triggered by HTML API.
     *                  leave-html-full-screen: Emitted when the window leaves a full-screen state triggered by HTML API.
     * @param callback  the function that executes when the event fires. The function is
     *                  passed an InAppBrowserEvent object as a parameter.
     */
    removeEventListener(type: "focus", callback: (event: InAppBrowserEvent) => void): void;
    /**
     * Removes a listener for an event from the InAppBrowser.
     * @param type      the event to listen for
     *                  page-title-updated: Emitted when the document changed its title, calling event.preventDefault() will
     *                  prevent the native window's title from changing.
     *                  close: Emitted when the window is going to be closed. It's emitted before the beforeunload and
     *                  unload event of the DOM. Calling event.preventDefault() will cancel the close.
     *                  closed: Emitted when the window is closed. After you have received this event you should remove
     *                  the reference to the window and avoid using it any more.
     *                  unresponsive: Emitted when the web page becomes unresponsive.
     *                  responsive: Emitted when the unresponsive web page becomes responsive again.
     *                  blur: Emitted when the window loses focus.
     *                  focus: Emitted when the window gains focus.
     *                  show: Emitted when the window is shown.
     *                  hide: Emitted when the window is hidden.
     *                  ready-to-show: Emitted when the web page has been rendered (while not being shown) and window can be displayed without a visual flash.
     *                  maximize: Emitted when window is maximized.
     *                  unmaximize: Emitted when the window exits from a maximized state.
     *                  minimize: Emitted when the window is minimized.
     *                  restore: Emitted when the window is restored from a minimized state.
     *                  resize: Emitted when the window is being resized.
     *                  move: Emitted when the window is being moved to a new position.
     *                  enter-full-screen: Emitted when the window enters a full-screen state.
     *                  leave-full-screen: Emitted when the window leaves a full-screen state.
     *                  enter-html-full-screen: Emitted when the window enters a full-screen state triggered by HTML API.
     *                  leave-html-full-screen: Emitted when the window leaves a full-screen state triggered by HTML API.
     * @param callback  the function that executes when the event fires. The function is
     *                  passed an InAppBrowserEvent object as a parameter.
     */
    removeEventListener(type: "show", callback: (event: InAppBrowserEvent) => void): void;
    /**
     * Removes a listener for an event from the InAppBrowser.
     * @param type      the event to listen for
     *                  page-title-updated: Emitted when the document changed its title, calling event.preventDefault() will
     *                  prevent the native window's title from changing.
     *                  close: Emitted when the window is going to be closed. It's emitted before the beforeunload and
     *                  unload event of the DOM. Calling event.preventDefault() will cancel the close.
     *                  closed: Emitted when the window is closed. After you have received this event you should remove
     *                  the reference to the window and avoid using it any more.
     *                  unresponsive: Emitted when the web page becomes unresponsive.
     *                  responsive: Emitted when the unresponsive web page becomes responsive again.
     *                  blur: Emitted when the window loses focus.
     *                  focus: Emitted when the window gains focus.
     *                  show: Emitted when the window is shown.
     *                  hide: Emitted when the window is hidden.
     *                  ready-to-show: Emitted when the web page has been rendered (while not being shown) and window can be displayed without a visual flash.
     *                  maximize: Emitted when window is maximized.
     *                  unmaximize: Emitted when the window exits from a maximized state.
     *                  minimize: Emitted when the window is minimized.
     *                  restore: Emitted when the window is restored from a minimized state.
     *                  resize: Emitted when the window is being resized.
     *                  move: Emitted when the window is being moved to a new position.
     *                  enter-full-screen: Emitted when the window enters a full-screen state.
     *                  leave-full-screen: Emitted when the window leaves a full-screen state.
     *                  enter-html-full-screen: Emitted when the window enters a full-screen state triggered by HTML API.
     *                  leave-html-full-screen: Emitted when the window leaves a full-screen state triggered by HTML API.
     * @param callback  the function that executes when the event fires. The function is
     *                  passed an InAppBrowserEvent object as a parameter.
     */
    removeEventListener(type: "hide", callback: (event: InAppBrowserEvent) => void): void;
    /**
     * Removes a listener for an event from the InAppBrowser.
     * @param type      the event to listen for
     *                  page-title-updated: Emitted when the document changed its title, calling event.preventDefault() will
     *                  prevent the native window's title from changing.
     *                  close: Emitted when the window is going to be closed. It's emitted before the beforeunload and
     *                  unload event of the DOM. Calling event.preventDefault() will cancel the close.
     *                  closed: Emitted when the window is closed. After you have received this event you should remove
     *                  the reference to the window and avoid using it any more.
     *                  unresponsive: Emitted when the web page becomes unresponsive.
     *                  responsive: Emitted when the unresponsive web page becomes responsive again.
     *                  blur: Emitted when the window loses focus.
     *                  focus: Emitted when the window gains focus.
     *                  show: Emitted when the window is shown.
     *                  hide: Emitted when the window is hidden.
     *                  ready-to-show: Emitted when the web page has been rendered (while not being shown) and window can be displayed without a visual flash.
     *                  maximize: Emitted when window is maximized.
     *                  unmaximize: Emitted when the window exits from a maximized state.
     *                  minimize: Emitted when the window is minimized.
     *                  restore: Emitted when the window is restored from a minimized state.
     *                  resize: Emitted when the window is being resized.
     *                  move: Emitted when the window is being moved to a new position.
     *                  enter-full-screen: Emitted when the window enters a full-screen state.
     *                  leave-full-screen: Emitted when the window leaves a full-screen state.
     *                  enter-html-full-screen: Emitted when the window enters a full-screen state triggered by HTML API.
     *                  leave-html-full-screen: Emitted when the window leaves a full-screen state triggered by HTML API.
     * @param callback  the function that executes when the event fires. The function is
     *                  passed an InAppBrowserEvent object as a parameter.
     */
    removeEventListener(type: "ready-to-show", callback: (event: InAppBrowserEvent) => void): void;
    /**
     * Removes a listener for an event from the InAppBrowser.
     * @param type      the event to listen for
     *                  page-title-updated: Emitted when the document changed its title, calling event.preventDefault() will
     *                  prevent the native window's title from changing.
     *                  close: Emitted when the window is going to be closed. It's emitted before the beforeunload and
     *                  unload event of the DOM. Calling event.preventDefault() will cancel the close.
     *                  closed: Emitted when the window is closed. After you have received this event you should remove
     *                  the reference to the window and avoid using it any more.
     *                  unresponsive: Emitted when the web page becomes unresponsive.
     *                  responsive: Emitted when the unresponsive web page becomes responsive again.
     *                  blur: Emitted when the window loses focus.
     *                  focus: Emitted when the window gains focus.
     *                  show: Emitted when the window is shown.
     *                  hide: Emitted when the window is hidden.
     *                  ready-to-show: Emitted when the web page has been rendered (while not being shown) and window can be displayed without a visual flash.
     *                  maximize: Emitted when window is maximized.
     *                  unmaximize: Emitted when the window exits from a maximized state.
     *                  minimize: Emitted when the window is minimized.
     *                  restore: Emitted when the window is restored from a minimized state.
     *                  resize: Emitted when the window is being resized.
     *                  move: Emitted when the window is being moved to a new position.
     *                  enter-full-screen: Emitted when the window enters a full-screen state.
     *                  leave-full-screen: Emitted when the window leaves a full-screen state.
     *                  enter-html-full-screen: Emitted when the window enters a full-screen state triggered by HTML API.
     *                  leave-html-full-screen: Emitted when the window leaves a full-screen state triggered by HTML API.
     * @param callback  the function that executes when the event fires. The function is
     *                  passed an InAppBrowserEvent object as a parameter.
     */
    removeEventListener(type: "maximize", callback: (event: InAppBrowserEvent) => void): void;
    /**
     * Removes a listener for an event from the InAppBrowser.
     * @param type      the event to listen for
     *                  page-title-updated: Emitted when the document changed its title, calling event.preventDefault() will
     *                  prevent the native window's title from changing.
     *                  close: Emitted when the window is going to be closed. It's emitted before the beforeunload and
     *                  unload event of the DOM. Calling event.preventDefault() will cancel the close.
     *                  closed: Emitted when the window is closed. After you have received this event you should remove
     *                  the reference to the window and avoid using it any more.
     *                  unresponsive: Emitted when the web page becomes unresponsive.
     *                  responsive: Emitted when the unresponsive web page becomes responsive again.
     *                  blur: Emitted when the window loses focus.
     *                  focus: Emitted when the window gains focus.
     *                  show: Emitted when the window is shown.
     *                  hide: Emitted when the window is hidden.
     *                  ready-to-show: Emitted when the web page has been rendered (while not being shown) and window can be displayed without a visual flash.
     *                  maximize: Emitted when window is maximized.
     *                  unmaximize: Emitted when the window exits from a maximized state.
     *                  minimize: Emitted when the window is minimized.
     *                  restore: Emitted when the window is restored from a minimized state.
     *                  resize: Emitted when the window is being resized.
     *                  move: Emitted when the window is being moved to a new position.
     *                  enter-full-screen: Emitted when the window enters a full-screen state.
     *                  leave-full-screen: Emitted when the window leaves a full-screen state.
     *                  enter-html-full-screen: Emitted when the window enters a full-screen state triggered by HTML API.
     *                  leave-html-full-screen: Emitted when the window leaves a full-screen state triggered by HTML API.
     * @param callback  the function that executes when the event fires. The function is
     *                  passed an InAppBrowserEvent object as a parameter.
     */
    removeEventListener(type: "unmaximize", callback: (event: InAppBrowserEvent) => void): void;
    /**
     * Removes a listener for an event from the InAppBrowser.
     * @param type      the event to listen for
     *                  page-title-updated: Emitted when the document changed its title, calling event.preventDefault() will
     *                  prevent the native window's title from changing.
     *                  close: Emitted when the window is going to be closed. It's emitted before the beforeunload and
     *                  unload event of the DOM. Calling event.preventDefault() will cancel the close.
     *                  closed: Emitted when the window is closed. After you have received this event you should remove
     *                  the reference to the window and avoid using it any more.
     *                  unresponsive: Emitted when the web page becomes unresponsive.
     *                  responsive: Emitted when the unresponsive web page becomes responsive again.
     *                  blur: Emitted when the window loses focus.
     *                  focus: Emitted when the window gains focus.
     *                  show: Emitted when the window is shown.
     *                  hide: Emitted when the window is hidden.
     *                  ready-to-show: Emitted when the web page has been rendered (while not being shown) and window can be displayed without a visual flash.
     *                  maximize: Emitted when window is maximized.
     *                  unmaximize: Emitted when the window exits from a maximized state.
     *                  minimize: Emitted when the window is minimized.
     *                  restore: Emitted when the window is restored from a minimized state.
     *                  resize: Emitted when the window is being resized.
     *                  move: Emitted when the window is being moved to a new position.
     *                  enter-full-screen: Emitted when the window enters a full-screen state.
     *                  leave-full-screen: Emitted when the window leaves a full-screen state.
     *                  enter-html-full-screen: Emitted when the window enters a full-screen state triggered by HTML API.
     *                  leave-html-full-screen: Emitted when the window leaves a full-screen state triggered by HTML API.
     * @param callback  the function that executes when the event fires. The function is
     *                  passed an InAppBrowserEvent object as a parameter.
     */
    removeEventListener(type: "minimize", callback: (event: InAppBrowserEvent) => void): void;
    /**
     * Removes a listener for an event from the InAppBrowser.
     * @param type      the event to listen for
     *                  page-title-updated: Emitted when the document changed its title, calling event.preventDefault() will
     *                  prevent the native window's title from changing.
     *                  close: Emitted when the window is going to be closed. It's emitted before the beforeunload and
     *                  unload event of the DOM. Calling event.preventDefault() will cancel the close.
     *                  closed: Emitted when the window is closed. After you have received this event you should remove
     *                  the reference to the window and avoid using it any more.
     *                  unresponsive: Emitted when the web page becomes unresponsive.
     *                  responsive: Emitted when the unresponsive web page becomes responsive again.
     *                  blur: Emitted when the window loses focus.
     *                  focus: Emitted when the window gains focus.
     *                  show: Emitted when the window is shown.
     *                  hide: Emitted when the window is hidden.
     *                  ready-to-show: Emitted when the web page has been rendered (while not being shown) and window can be displayed without a visual flash.
     *                  maximize: Emitted when window is maximized.
     *                  unmaximize: Emitted when the window exits from a maximized state.
     *                  minimize: Emitted when the window is minimized.
     *                  restore: Emitted when the window is restored from a minimized state.
     *                  resize: Emitted when the window is being resized.
     *                  move: Emitted when the window is being moved to a new position.
     *                  enter-full-screen: Emitted when the window enters a full-screen state.
     *                  leave-full-screen: Emitted when the window leaves a full-screen state.
     *                  enter-html-full-screen: Emitted when the window enters a full-screen state triggered by HTML API.
     *                  leave-html-full-screen: Emitted when the window leaves a full-screen state triggered by HTML API.
     * @param callback  the function that executes when the event fires. The function is
     *                  passed an InAppBrowserEvent object as a parameter.
     */
    removeEventListener(type: "restore", callback: (event: InAppBrowserEvent) => void): void;
    /**
     * Removes a listener for an event from the InAppBrowser.
     * @param type      the event to listen for
     *                  page-title-updated: Emitted when the document changed its title, calling event.preventDefault() will
     *                  prevent the native window's title from changing.
     *                  close: Emitted when the window is going to be closed. It's emitted before the beforeunload and
     *                  unload event of the DOM. Calling event.preventDefault() will cancel the close.
     *                  closed: Emitted when the window is closed. After you have received this event you should remove
     *                  the reference to the window and avoid using it any more.
     *                  unresponsive: Emitted when the web page becomes unresponsive.
     *                  responsive: Emitted when the unresponsive web page becomes responsive again.
     *                  blur: Emitted when the window loses focus.
     *                  focus: Emitted when the window gains focus.
     *                  show: Emitted when the window is shown.
     *                  hide: Emitted when the window is hidden.
     *                  ready-to-show: Emitted when the web page has been rendered (while not being shown) and window can be displayed without a visual flash.
     *                  maximize: Emitted when window is maximized.
     *                  unmaximize: Emitted when the window exits from a maximized state.
     *                  minimize: Emitted when the window is minimized.
     *                  restore: Emitted when the window is restored from a minimized state.
     *                  resize: Emitted when the window is being resized.
     *                  move: Emitted when the window is being moved to a new position.
     *                  enter-full-screen: Emitted when the window enters a full-screen state.
     *                  leave-full-screen: Emitted when the window leaves a full-screen state.
     *                  enter-html-full-screen: Emitted when the window enters a full-screen state triggered by HTML API.
     *                  leave-html-full-screen: Emitted when the window leaves a full-screen state triggered by HTML API.
     * @param callback  the function that executes when the event fires. The function is
     *                  passed an InAppBrowserEvent object as a parameter.
     */
    removeEventListener(type: "resize", callback: (event: InAppBrowserEvent) => void): void;
    /**
     * Removes a listener for an event from the InAppBrowser.
     * @param type      the event to listen for
     *                  page-title-updated: Emitted when the document changed its title, calling event.preventDefault() will
     *                  prevent the native window's title from changing.
     *                  close: Emitted when the window is going to be closed. It's emitted before the beforeunload and
     *                  unload event of the DOM. Calling event.preventDefault() will cancel the close.
     *                  closed: Emitted when the window is closed. After you have received this event you should remove
     *                  the reference to the window and avoid using it any more.
     *                  unresponsive: Emitted when the web page becomes unresponsive.
     *                  responsive: Emitted when the unresponsive web page becomes responsive again.
     *                  blur: Emitted when the window loses focus.
     *                  focus: Emitted when the window gains focus.
     *                  show: Emitted when the window is shown.
     *                  hide: Emitted when the window is hidden.
     *                  ready-to-show: Emitted when the web page has been rendered (while not being shown) and window can be displayed without a visual flash.
     *                  maximize: Emitted when window is maximized.
     *                  unmaximize: Emitted when the window exits from a maximized state.
     *                  minimize: Emitted when the window is minimized.
     *                  restore: Emitted when the window is restored from a minimized state.
     *                  resize: Emitted when the window is being resized.
     *                  move: Emitted when the window is being moved to a new position.
     *                  enter-full-screen: Emitted when the window enters a full-screen state.
     *                  leave-full-screen: Emitted when the window leaves a full-screen state.
     *                  enter-html-full-screen: Emitted when the window enters a full-screen state triggered by HTML API.
     *                  leave-html-full-screen: Emitted when the window leaves a full-screen state triggered by HTML API.
     * @param callback  the function that executes when the event fires. The function is
     *                  passed an InAppBrowserEvent object as a parameter.
     */
    removeEventListener(type: "move", callback: (event: InAppBrowserEvent) => void): void;
    /**
     * Removes a listener for an event from the InAppBrowser.
     * @param type      the event to listen for
     *                  page-title-updated: Emitted when the document changed its title, calling event.preventDefault() will
     *                  prevent the native window's title from changing.
     *                  close: Emitted when the window is going to be closed. It's emitted before the beforeunload and
     *                  unload event of the DOM. Calling event.preventDefault() will cancel the close.
     *                  closed: Emitted when the window is closed. After you have received this event you should remove
     *                  the reference to the window and avoid using it any more.
     *                  unresponsive: Emitted when the web page becomes unresponsive.
     *                  responsive: Emitted when the unresponsive web page becomes responsive again.
     *                  blur: Emitted when the window loses focus.
     *                  focus: Emitted when the window gains focus.
     *                  show: Emitted when the window is shown.
     *                  hide: Emitted when the window is hidden.
     *                  ready-to-show: Emitted when the web page has been rendered (while not being shown) and window can be displayed without a visual flash.
     *                  maximize: Emitted when window is maximized.
     *                  unmaximize: Emitted when the window exits from a maximized state.
     *                  minimize: Emitted when the window is minimized.
     *                  restore: Emitted when the window is restored from a minimized state.
     *                  resize: Emitted when the window is being resized.
     *                  move: Emitted when the window is being moved to a new position.
     *                  enter-full-screen: Emitted when the window enters a full-screen state.
     *                  leave-full-screen: Emitted when the window leaves a full-screen state.
     *                  enter-html-full-screen: Emitted when the window enters a full-screen state triggered by HTML API.
     *                  leave-html-full-screen: Emitted when the window leaves a full-screen state triggered by HTML API.
     * @param callback  the function that executes when the event fires. The function is
     *                  passed an InAppBrowserEvent object as a parameter.
     */
    removeEventListener(type: "enter-full-screen", callback: (event: InAppBrowserEvent) => void): void;
    /**
     * Removes a listener for an event from the InAppBrowser.
     * @param type      the event to listen for
     *                  page-title-updated: Emitted when the document changed its title, calling event.preventDefault() will
     *                  prevent the native window's title from changing.
     *                  close: Emitted when the window is going to be closed. It's emitted before the beforeunload and
     *                  unload event of the DOM. Calling event.preventDefault() will cancel the close.
     *                  closed: Emitted when the window is closed. After you have received this event you should remove
     *                  the reference to the window and avoid using it any more.
     *                  unresponsive: Emitted when the web page becomes unresponsive.
     *                  responsive: Emitted when the unresponsive web page becomes responsive again.
     *                  blur: Emitted when the window loses focus.
     *                  focus: Emitted when the window gains focus.
     *                  show: Emitted when the window is shown.
     *                  hide: Emitted when the window is hidden.
     *                  ready-to-show: Emitted when the web page has been rendered (while not being shown) and window can be displayed without a visual flash.
     *                  maximize: Emitted when window is maximized.
     *                  unmaximize: Emitted when the window exits from a maximized state.
     *                  minimize: Emitted when the window is minimized.
     *                  restore: Emitted when the window is restored from a minimized state.
     *                  resize: Emitted when the window is being resized.
     *                  move: Emitted when the window is being moved to a new position.
     *                  enter-full-screen: Emitted when the window enters a full-screen state.
     *                  leave-full-screen: Emitted when the window leaves a full-screen state.
     *                  enter-html-full-screen: Emitted when the window enters a full-screen state triggered by HTML API.
     *                  leave-html-full-screen: Emitted when the window leaves a full-screen state triggered by HTML API.
     * @param callback  the function that executes when the event fires. The function is
     *                  passed an InAppBrowserEvent object as a parameter.
     */
    removeEventListener(type: "leave-full-screen", callback: (event: InAppBrowserEvent) => void): void;
    /**
     * Removes a listener for an event from the InAppBrowser.
     * @param type      the event to listen for
     *                  page-title-updated: Emitted when the document changed its title, calling event.preventDefault() will
     *                  prevent the native window's title from changing.
     *                  close: Emitted when the window is going to be closed. It's emitted before the beforeunload and
     *                  unload event of the DOM. Calling event.preventDefault() will cancel the close.
     *                  closed: Emitted when the window is closed. After you have received this event you should remove
     *                  the reference to the window and avoid using it any more.
     *                  unresponsive: Emitted when the web page becomes unresponsive.
     *                  responsive: Emitted when the unresponsive web page becomes responsive again.
     *                  blur: Emitted when the window loses focus.
     *                  focus: Emitted when the window gains focus.
     *                  show: Emitted when the window is shown.
     *                  hide: Emitted when the window is hidden.
     *                  ready-to-show: Emitted when the web page has been rendered (while not being shown) and window can be displayed without a visual flash.
     *                  maximize: Emitted when window is maximized.
     *                  unmaximize: Emitted when the window exits from a maximized state.
     *                  minimize: Emitted when the window is minimized.
     *                  restore: Emitted when the window is restored from a minimized state.
     *                  resize: Emitted when the window is being resized.
     *                  move: Emitted when the window is being moved to a new position.
     *                  enter-full-screen: Emitted when the window enters a full-screen state.
     *                  leave-full-screen: Emitted when the window leaves a full-screen state.
     *                  enter-html-full-screen: Emitted when the window enters a full-screen state triggered by HTML API.
     *                  leave-html-full-screen: Emitted when the window leaves a full-screen state triggered by HTML API.
     * @param callback  the function that executes when the event fires. The function is
     *                  passed an InAppBrowserEvent object as a parameter.
     */
    removeEventListener(type: "enter-html-full-screen", callback: (event: InAppBrowserEvent) => void): void;
    /**
     * Removes a listener for an event from the InAppBrowser.
     * @param type      the event to listen for
     *                  page-title-updated: Emitted when the document changed its title, calling event.preventDefault() will
     *                  prevent the native window's title from changing.
     *                  close: Emitted when the window is going to be closed. It's emitted before the beforeunload and
     *                  unload event of the DOM. Calling event.preventDefault() will cancel the close.
     *                  closed: Emitted when the window is closed. After you have received this event you should remove
     *                  the reference to the window and avoid using it any more.
     *                  unresponsive: Emitted when the web page becomes unresponsive.
     *                  responsive: Emitted when the unresponsive web page becomes responsive again.
     *                  blur: Emitted when the window loses focus.
     *                  focus: Emitted when the window gains focus.
     *                  show: Emitted when the window is shown.
     *                  hide: Emitted when the window is hidden.
     *                  ready-to-show: Emitted when the web page has been rendered (while not being shown) and window can be displayed without a visual flash.
     *                  maximize: Emitted when window is maximized.
     *                  unmaximize: Emitted when the window exits from a maximized state.
     *                  minimize: Emitted when the window is minimized.
     *                  restore: Emitted when the window is restored from a minimized state.
     *                  resize: Emitted when the window is being resized.
     *                  move: Emitted when the window is being moved to a new position.
     *                  enter-full-screen: Emitted when the window enters a full-screen state.
     *                  leave-full-screen: Emitted when the window leaves a full-screen state.
     *                  enter-html-full-screen: Emitted when the window enters a full-screen state triggered by HTML API.
     *                  leave-html-full-screen: Emitted when the window leaves a full-screen state triggered by HTML API.
     * @param callback  the function that executes when the event fires. The function is
     *                  passed an InAppBrowserEvent object as a parameter.
     */
    removeEventListener(type: "leave-html-full-screen", callback: (event: InAppBrowserEvent) => void): void;

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