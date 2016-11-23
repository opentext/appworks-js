/// <reference path="../../typings/globals/cordova/index.d.ts"/>
/// <reference path="../../typings/globals/cordova/plugins/contacts/index.d.ts"/>
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var aw_plugin_1 = require('../core/aw-plugin');
var AWContacts = (function (_super) {
    __extends(AWContacts, _super);
    function AWContacts() {
        _super.apply(this, arguments);
        this.options = navigator.contacts;
        this.fieldType = null;
    }
    AWContacts.prototype.create = function (contact) {
        return navigator.contacts.create(contact);
    };
    AWContacts.prototype.find = function (fields, options) {
        var _this = this;
        navigator.contacts.find(fields, (function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })(), options);
    };
    AWContacts.prototype.pickContact = function () {
        var _this = this;
        navigator.contacts.pickContact((function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })());
    };
    return AWContacts;
}(aw_plugin_1.AWPlugin));
exports.AWContacts = AWContacts;
