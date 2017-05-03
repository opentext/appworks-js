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
var AWCompass = (function (_super) {
    __extends(AWCompass, _super);
    function AWCompass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AWCompass.prototype.getCurrentHeading = function () {
        var _this = this;
        return AWProxy.compass().getCurrentHeading((function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })());
    };
    AWCompass.prototype.watchHeading = function (options) {
        var _this = this;
        return AWProxy.compass().watchHeading((function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })(), options);
    };
    AWCompass.prototype.clearWatch = function (watchId) {
        return AWProxy.compass().clearWatch(watchId);
    };
    return AWCompass;
}(AWPlugin));
export { AWCompass };
//# sourceMappingURL=compass.js.map