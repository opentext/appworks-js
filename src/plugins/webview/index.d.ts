export * from "./webview";
export * from "./desktop-webview";
export interface DesktopWebviewInterface {
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
    executeScript(script: {
        code: string;
    }, callback: (result: any) => void): void;
    /**
     * Injects CSS into the InAppBrowser window.
     * @param css       Details of the script to run, specifying either a file or code key.
     * @param callback  The function that executes after the CSS is injected.
     */
    insertCSS(css: {
        code: string;
    }, callback: () => void): void;
}
export interface Window {
    /**
     * Opens a URL in a new InAppBrowser instance, the current browser instance, or the system browser.
     * @param  url     The URL to load.
     * @param  target  The target in which to load the URL, an optional parameter that defaults to _self.
     * @param  options Options for the InAppBrowser. Optional, defaulting to: location=yes.
     *                 The options string must not contain any blank space, and each feature's
     *                 name/value pairs must be separated by a comma. Feature names are case insensitive.
     */
    open(url: string, target?: "_self", options?: string): InAppBrowser;
    /**
     * Opens a URL in a new InAppBrowser instance, the current browser instance, or the system browser.
     * @param  url     The URL to load.
     * @param  target  The target in which to load the URL, an optional parameter that defaults to _self.
     * @param  options Options for the InAppBrowser. Optional, defaulting to: location=yes.
     *                 The options string must not contain any blank space, and each feature's
     *                 name/value pairs must be separated by a comma. Feature names are case insensitive.
     */
    open(url: string, target?: "_blank", options?: string): InAppBrowser;
    /**
     * Opens a URL in a new InAppBrowser instance, the current browser instance, or the system browser.
     * @param  url     The URL to load.
     * @param  target  The target in which to load the URL, an optional parameter that defaults to _self.
     * @param  options Options for the InAppBrowser. Optional, defaulting to: location=yes.
     *                 The options string must not contain any blank space, and each feature's
     *                 name/value pairs must be separated by a comma. Feature names are case insensitive.
     */
    open(url: string, target?: "_system", options?: string): InAppBrowser;
    /**
     * Opens a URL in a new InAppBrowser instance, the current browser instance, or the system browser.
     * @param  url     The URL to load.
     * @param  target  The target in which to load the URL, an optional parameter that defaults to _self.
     * @param  options Options for the InAppBrowser. Optional, defaulting to: location=yes.
     *                 The options string must not contain any blank space, and each feature's
     *                 name/value pairs must be separated by a comma. Feature names are case insensitive.
     */
    open(url: string, target?: string, options?: string, replace?: boolean): InAppBrowser;
}
/**
 * The object returned from a call to window.open.
 * NOTE: The InAppBrowser window behaves like a standard web browser, and can't access Cordova APIs.
 */
export interface InAppBrowser extends Window {
    onloadstart: (type: InAppBrowserEvent) => void;
    onloadstop: (type: InAppBrowserEvent) => void;
    onloaderror: (type: InAppBrowserEvent) => void;
    onexit: (type: InAppBrowserEvent) => void;
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
    /** Hides the InAppBrowser window. Calling this has no effect if the InAppBrowser was already hidden. */
    hide(): void;
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
    executeScript(script: {
        code: string;
    }, callback: (result: any) => void): void;
    /**
     * Injects JavaScript code into the InAppBrowser window.
     * @param script    Details of the script to run, specifying either a file or code key.
     * @param callback  The function that executes after the JavaScript code is injected.
     *                  If the injected script is of type code, the callback executes with
     *                  a single parameter, which is the return value of the script, wrapped in an Array.
     *                  For multi-line scripts, this is the return value of the last statement,
     *                  or the last expression evaluated.
     */
    executeScript(script: {
        file: string;
    }, callback: (result: any) => void): void;
    /**
     * Injects CSS into the InAppBrowser window.
     * @param css       Details of the script to run, specifying either a file or code key.
     * @param callback  The function that executes after the CSS is injected.
     */
    insertCSS(css: {
        code: string;
    }, callback: () => void): void;
    /**
     * Injects CSS into the InAppBrowser window.
     * @param css       Details of the script to run, specifying either a file or code key.
     * @param callback  The function that executes after the CSS is injected.
     */
    insertCSS(css: {
        file: string;
    }, callback: () => void): void;
}
export interface InAppBrowserEvent extends Event {
    /** the eventname, either loadstart, loadstop, loaderror, or exit. */
    type: string;
    /** the URL that was loaded. */
    url: string;
    /** the error code, only in the case of loaderror. */
    code: number;
    /** the error message, only in the case of loaderror. */
    message: string;
}
