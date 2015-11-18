/// <reference path="../typings/cordova/cordova.d.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AWPlugin = (function () {
    function AWPlugin(successHandler, errorHandler) {
        this.authSuccess = successHandler;
        this.authFail = errorHandler;
    }
    return AWPlugin;
})();
var Appworks;
(function (Appworks) {
    var Auth = (function (_super) {
        __extends(Auth, _super);
        function Auth() {
            _super.apply(this, arguments);
        }
        Auth.prototype.authenticate = function () {
            var _this = this;
            cordova.exec((function () { return _this.authSuccess; })(), (function () { return _this.authFail; })(), 'AWAuth', 'authenticate');
        };
        return Auth;
    })(AWPlugin);
    Appworks.Auth = Auth;
    var QRReader = (function (_super) {
        __extends(QRReader, _super);
        function QRReader() {
            _super.apply(this, arguments);
        }
        QRReader.prototype.scan = function () {
            var _this = this;
            cordova.exec((function () { return _this.authSuccess; })(), (function () { return _this.authFail; })(), 'AWQRCodeReader', 'scan');
        };
        QRReader.prototype.rename = function () {
            var _this = this;
            cordova.exec((function () { return _this.authSuccess; })(), (function () { return _this.authFail; })(), 'AWQRCodeReader', 'rename');
        };
        return QRReader;
    })(AWPlugin);
    Appworks.QRReader = QRReader;
})(Appworks || (Appworks = {}));
//# sourceMappingURL=appworks.js.map