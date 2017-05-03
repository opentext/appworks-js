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
var AWAppManager = (function (_super) {
    __extends(AWAppManager, _super);
    function AWAppManager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AWAppManager.prototype.closeActiveApp = function () {
        var _this = this;
        AWProxy.exec((function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })(), 'AWAppManager', 'closeActiveApp', []);
    };
    return AWAppManager;
}(AWPlugin));
export { AWAppManager };
//# sourceMappingURL=app-manager.js.map