"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var plugin_1 = require("../../common/plugin");
var proxy_1 = require("../../common/proxy");
var AWContacts = (function (_super) {
    __extends(AWContacts, _super);
    function AWContacts() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AWContacts.prototype.create = function (contact) {
        return proxy_1.AWProxy.contacts().create(contact);
    };
    AWContacts.prototype.find = function (fields, options) {
        var _this = this;
        return proxy_1.AWProxy.contacts().find(fields, (function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })(), options);
    };
    AWContacts.prototype.pickContact = function () {
        var _this = this;
        return proxy_1.AWProxy.contacts().pickContact((function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })());
    };
    return AWContacts;
}(plugin_1.AWPlugin));
exports.AWContacts = AWContacts;
//# sourceMappingURL=contacts.js.map