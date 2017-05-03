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
var QRReader = (function (_super) {
    __extends(QRReader, _super);
    function QRReader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    QRReader.prototype.scan = function () {
        var _this = this;
        AWProxy.exec((function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })(), 'AWQRCodeReader', 'scan', []);
    };
    QRReader.prototype.rename = function () {
        var _this = this;
        AWProxy.exec((function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })(), 'AWQRCodeReader', 'rename', []);
    };
    return QRReader;
}(AWPlugin));
export { QRReader };
var AWQRReader = (function (_super) {
    __extends(AWQRReader, _super);
    function AWQRReader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return AWQRReader;
}(QRReader));
export { AWQRReader };
//# sourceMappingURL=qr-reader.js.map