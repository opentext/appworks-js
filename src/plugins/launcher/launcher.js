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
import { Util } from "../../common/util";
var AWLauncher = (function (_super) {
    __extends(AWLauncher, _super);
    function AWLauncher(successHandler, errorHandler) {
        return _super.call(this, successHandler || Util.noop, errorHandler || Util.noop) || this;
    }
    AWLauncher.prototype.getLaunchURL = function (successHandler, errorHandler) {
        AWProxy.exec(successHandler, errorHandler, 'AWLauncher', 'getLaunchURL', []);
    };
    AWLauncher.prototype.clearLaunchURL = function () {
        var _this = this;
        AWProxy.exec((function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })(), 'AWLauncher', 'clearLaunchURL', []);
    };
    return AWLauncher;
}(AWPlugin));
export { AWLauncher };
//# sourceMappingURL=launcher.js.map