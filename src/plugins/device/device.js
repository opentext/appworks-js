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
var AWDevice = (function (_super) {
    __extends(AWDevice, _super);
    function AWDevice() {
        var _this = _super.call(this, function () { }, function () { }) || this;
        _this.cordova = AWProxy.device().cordova;
        _this.model = AWProxy.device().model;
        _this.platform = AWProxy.device().platform;
        _this.uuid = AWProxy.device().uuid;
        _this.version = AWProxy.device().version;
        _this.manufacturer = AWProxy.device().manufacturer;
        _this.capture = AWProxy.device().capture;
        return _this;
    }
    return AWDevice;
}(AWPlugin));
export { AWDevice };
//# sourceMappingURL=device.js.map