var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { AWPlugin } from '../../common/plugin';
import { AWProxy } from '../../common/proxy';
import { Util } from '../../common/util';
var AWWebView = (function (_super) {
    __extends(AWWebView, _super);
    function AWWebView() {
        return _super.call(this, Util.noop, Util.noop) || this;
    }
    AWWebView.prototype.open = function (url, target, options) {
        return AWProxy.webview().open(url, target, options);
    };
    AWWebView.prototype.addEventListener = function (type, callback) {
        AWProxy.webview().addEventListener(type, callback);
    };
    AWWebView.prototype.removeEventListener = function (type, callback) {
        AWProxy.webview().removeEventListener(type, callback);
    };
    AWWebView.prototype.show = function () {
        AWProxy.webview().show();
    };
    AWWebView.prototype.close = function () {
        AWProxy.webview().close();
    };
    AWWebView.prototype.executeScript = function (script, callback) {
        AWProxy.webview().executeScript(script, callback);
    };
    AWWebView.prototype.insertCSS = function (script, callback) {
        AWProxy.webview().insertCSS(script, callback);
    };
    return AWWebView;
}(AWPlugin));
export { AWWebView };
//# sourceMappingURL=webview.js.map