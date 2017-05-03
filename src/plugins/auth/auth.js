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
var AWAuth = (function (_super) {
    __extends(AWAuth, _super);
    function AWAuth() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AWAuth.prototype.authenticate = function (force) {
        var _this = this;
        force = !!force;
        AWProxy.exec((function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })(), 'AWAuth', 'authenticate', [force.toString()]);
    };
    AWAuth.prototype.getAuthResponse = function () {
        var _this = this;
        AWProxy.exec((function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })(), 'AWAuth', 'authobject', []);
    };
    AWAuth.prototype.gateway = function (successHandler, errorHandler) {
        AWProxy.exec(successHandler, errorHandler, 'AWAuth', 'gateway', []);
    };
    AWAuth.prototype.online = function (successHandler, errorHandler) {
        AWProxy.exec(successHandler, errorHandler, 'AWAuth', 'online', []);
    };
    return AWAuth;
}(AWPlugin));
export { AWAuth };
//# sourceMappingURL=auth.js.map