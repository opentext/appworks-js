import { AWProxy } from "../../common/proxy";
import { Util } from "../../common/util";
var DesktopWebviewSequenceStore = {
    seqNo: 0
};
var DesktopWebview = (function () {
    function DesktopWebview() {
        this.id = DesktopWebviewSequenceStore.seqNo++;
    }
    DesktopWebview.prototype.addEventListener = function (type, callback) {
        AWProxy.exec(Util.noop, Util.noop, 'AWWebView', 'addEventListener', [this.id, type, callback]);
    };
    DesktopWebview.prototype.removeEventListener = function (type, callback) {
        AWProxy.exec(Util.noop, Util.noop, 'AWWebView', 'removeEventListener', [this.id, type, callback]);
    };
    DesktopWebview.prototype.close = function () {
        AWProxy.exec(Util.noop, Util.noop, 'AWWebView', 'close', [this.id]);
    };
    DesktopWebview.prototype.show = function () {
        AWProxy.exec(Util.noop, Util.noop, 'AWWebView', 'show', [this.id]);
    };
    DesktopWebview.prototype.open = function (url, target, options) {
        AWProxy.exec(Util.noop, Util.noop, 'AWWebView', 'open', [this.id, url, target, options]);
        return this;
    };
    DesktopWebview.prototype.executeScript = function (script, callback) {
        AWProxy.exec(callback, Util.noop, 'AWWebView', 'executeScript', [this.id, script]);
    };
    DesktopWebview.prototype.insertCSS = function (css, callback) {
        AWProxy.exec(callback, Util.noop, 'AWWebView', 'insertCSS', [this.id, css]);
    };
    return DesktopWebview;
}());
export { DesktopWebview };
//# sourceMappingURL=desktop-webview.js.map