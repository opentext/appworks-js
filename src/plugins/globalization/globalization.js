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
var AWGlobalization = (function (_super) {
    __extends(AWGlobalization, _super);
    function AWGlobalization() {
        return _super.call(this, Util.noop, Util.noop) || this;
    }
    AWGlobalization.prototype.getPreferredLanguage = function (successFn, errorFn) {
        AWProxy.exec(successFn, errorFn, 'AWGlobalization', 'getPreferredLanguage', []);
    };
    return AWGlobalization;
}(AWPlugin));
export { AWGlobalization };
//# sourceMappingURL=globalization.js.map