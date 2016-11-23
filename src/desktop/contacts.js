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
    }
    AWContacts.prototype.create = function (contact) {
        // TODO
    };
    AWContacts.prototype.find = function (fields, options) {
        // TODO
    };
    AWContacts.prototype.pickContact = function () {
        // TODO
    };
    return AWContacts;
}(aw_plugin_1.AWPlugin));
exports.AWContacts = AWContacts;
