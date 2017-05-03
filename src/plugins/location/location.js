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
var AWLocation = (function (_super) {
    __extends(AWLocation, _super);
    function AWLocation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AWLocation.prototype.getCurrentPosition = function (options) {
        var _this = this;
        return AWProxy.geolocation().getCurrentPosition((function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })(), options);
    };
    AWLocation.prototype.watchPosition = function (options) {
        var _this = this;
        return AWProxy.geolocation().watchPosition((function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })(), options);
    };
    AWLocation.prototype.clearWatch = function (watchId) {
        AWProxy.geolocation().clearWatch(watchId);
    };
    return AWLocation;
}(AWPlugin));
export { AWLocation };
//# sourceMappingURL=location.js.map