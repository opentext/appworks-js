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
var Realm = (function (_super) {
    __extends(Realm, _super);
    function Realm() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.FIELD_OBJECT_NAME = "name";
        _this.FIELD_OBJECT_TYPE = "type";
        _this.FIELD_OBJECT_PRIMARYKEY = "key";
        _this.FIELD_OBJECT_INDEX = "index";
        _this.FIELD_OBJECT_RELATIONSHIP = "relationship";
        _this.OBJECT_DESCRIPTION_NAME = "name";
        _this.OBJECT_DESCRIPTION_TYPE = "type";
        _this.OBJECT_DESCRIPTION_FIELDS = "fields";
        _this.OBJECT_DESCRIPTION_KEY = "key";
        _this.OBJECT_DESCRIPTION_INDEX = "index";
        _this.FIELD_TYPE_STRING = "STRING";
        _this.FIELD_TYPE_INTEGER = "INTEGER";
        _this.FIELD_TYPE_BOOLEAN = "BOOLEAN";
        _this.FIELD_TYPE_LONG = "LONG";
        _this.FIELD_TYPE_SHORT = "SHORT";
        _this.FIELD_TYPE_DOUBLE = "DOUBLE";
        _this.FIELD_TYPE_FLOAT = "FLOAT";
        _this.FIELD_TYPE_BINARY = "BINARY";
        _this.FIELD_TYPE_BYTE = "BYTE";
        _this.FIELD_TYPE_OBJECT = "OBJECT";
        _this.FIELD_TYPE_LIST = "LIST";
        _this.FIELD_TYPE_DATE = "DATE";
        _this.QUERY_OBJECT_NAME = "object";
        _this.QUERY_TYPE = "type";
        _this.QUERY_FIELD = "field";
        _this.QUERY_SORT = "sort";
        _this.QUERY_SORT_ASC = "asc";
        _this.QUERY_SORT_DESC = "desc";
        _this.QUERY_VALUE = "value";
        _this.QUERY_VALUE_2 = "value2";
        _this.QUERY_TYPE_BEGIN_GROUP = "beginGroup";
        _this.QUERY_TYPE_END_GROUP = "endGroup";
        _this.QUERY_TYPE_AND = "and";
        _this.QUERY_TYPE_OR = "or";
        _this.QUERY_TYPE_EQUAL_TO = "equalTo";
        _this.QUERY_TYPE_NOT_EQUAL_TO = "notEqualTo";
        _this.QUERY_TYPE_BEGINS_WITH = "beginsWith";
        _this.QUERY_TYPE_ENDS_WITH = "endsWith";
        _this.QUERY_TYPE_CONTAINS = "contains";
        _this.QUERY_TYPE_BETWEEN = "between";
        _this.QUERY_TYPE_GREATER_THAN = "greaterThan";
        _this.QUERY_TYPE_GREATER_THAN_OR_EQUAL_TO = "greaterThanOrEqualTo";
        _this.QUERY_TYPE_LESS_THAN = "lessThan";
        _this.QUERY_TYPE_LESS_THAN_OR_EQUAL_TO = "lessThanOrEqualTo";
        _this.QUERY_TYPE_LIKE = "like";
        _this.QUERY_TYPE_IN = "in";
        _this.queryBuilder = {
            arr: [],
            subArray: [],
            inSubArray: false,
            addToArray: function (obj, isSubArray) {
                if (isSubArray) {
                    this.subArray.push(obj);
                }
                else {
                    this.arr.push(obj);
                }
            },
            equalTo: function (field, value) {
                var obj = {
                    "type": "equalTo",
                    "field": field,
                    "value": value
                };
                this.addToArray(obj, this.inSubArray);
                return this;
            },
            notEqualTo: function (field, value) {
                var obj = {
                    "type": "notEqualTo",
                    "field": field,
                    "value": value
                };
                this.addToArray(obj, this.inSubArray);
                return this;
            },
            beginsWith: function (field, value) {
                var obj = {
                    "type": "beginsWith",
                    "field": field,
                    "value": value
                };
                this.addToArray(obj, this.inSubArray);
                return this;
            },
            endsWith: function (field, value) {
                var obj = {
                    "type": "endsWith",
                    "field": field,
                    "value": value
                };
                this.addToArray(obj, this.inSubArray);
                return this;
            },
            contains: function (field, value) {
                var obj = {
                    "type": "contains",
                    "field": field,
                    "value": value
                };
                this.addToArray(obj, this.inSubArray);
                return this;
            },
            between: function (field, value, value2) {
                var obj = {
                    "type": "between",
                    "field": field,
                    "value": value,
                    "value2": value2
                };
                this.addToArray(obj, this.inSubArray);
                return this;
            },
            greaterThan: function (field, value) {
                var obj = {
                    "type": "greaterThan",
                    "field": field,
                    "value": value
                };
                this.addToArray(obj, this.inSubArray);
                return this;
            },
            greaterThanOrEqualTo: function (field, value) {
                var obj = {
                    "type": "greaterThanOrEqualTo",
                    "field": field,
                    "value": value
                };
                this.addToArray(obj, this.inSubArray);
                return this;
            },
            lessThan: function (field, value) {
                var obj = {
                    "type": "lessThan",
                    "field": field,
                    "value": value
                };
                this.addToArray(obj, this.inSubArray);
                return this;
            },
            lessThanOrEqualTo: function (field, value) {
                var obj = {
                    "type": "lessThanOrEqualTo",
                    "field": field,
                    "value": value
                };
                this.addToArray(obj, this.inSubArray);
                return this;
            },
            like: function (field, value) {
                var obj = {
                    "type": "like",
                    "field": field,
                    "value": value
                };
                this.addToArray(obj, this.inSubArray);
                return this;
            },
            and: function () {
                var obj = {
                    "type": "and"
                };
                this.addToArray(obj, this.inSubArray);
                return this;
            },
            or: function () {
                var obj = {
                    "type": "or"
                };
                this.addToArray(obj, this.inSubArray);
                return this;
            },
            beginGroup: function () {
                this.subArray = [];
                this.inSubArray = true;
                return this;
            },
            endGroup: function () {
                this.arr.push(this.subArray);
                this.inSubArray = false;
                return this;
            },
            done: function () {
                var tempArray = this.arr;
                this.clear();
                return tempArray;
            },
            clear: function () {
                this.inSubArray = false;
                this.subArray = [];
                this.arr = [];
            }
        };
        return _this;
    }
    Realm.prototype.startRealm = function (successHandler, errorHandler) {
        proxy_1.AWProxy.exec(successHandler, errorHandler, "AWRealm", "start_realm", []);
    };
    Realm.prototype.getAllObjectNames = function (successHandler, errorHandler) {
        proxy_1.AWProxy.exec(successHandler, errorHandler, "AWRealm", "get_all_object_names", []);
    };
    Realm.prototype.objectExists = function (objectName, successHandler, errorHandler) {
        proxy_1.AWProxy.exec(successHandler, errorHandler, "AWRealm", "object_exists", [objectName]);
    };
    Realm.prototype.createObject = function (objectName, successHandler, errorHandler) {
        proxy_1.AWProxy.exec(successHandler, errorHandler, "AWRealm", "create_object", [objectName]);
    };
    Realm.prototype.addField = function (objectName, field, successHandler, errorHandler) {
        proxy_1.AWProxy.exec(successHandler, errorHandler, "AWRealm", "add_field", [objectName, field]);
    };
    Realm.prototype.addFields = function (objectName, field, successHandler, errorHandler) {
        proxy_1.AWProxy.exec(successHandler, errorHandler, "AWRealm", "add_fields", [objectName, field]);
    };
    Realm.prototype.describeObject = function (objectName, successHandler, errorHandler) {
        proxy_1.AWProxy.exec(successHandler, errorHandler, "AWRealm", "describe_object", [objectName]);
    };
    Realm.prototype.objectHasField = function (objectName, fieldName, successHandler, errorHandler) {
        proxy_1.AWProxy.exec(successHandler, errorHandler, "AWRealm", "object_has_field", [objectName, fieldName]);
    };
    Realm.prototype.getFieldType = function (objectName, fieldName, successHandler, errorHandler) {
        proxy_1.AWProxy.exec(successHandler, errorHandler, "AWRealm", "get_field_type", [objectName, fieldName]);
    };
    Realm.prototype.insert = function (objectName, dataObject, successHandler, errorHandler) {
        proxy_1.AWProxy.exec(successHandler, errorHandler, "AWRealm", "insert", [objectName, dataObject]);
    };
    Realm.prototype.update = function (objectName, dataObject, queryArray, successHandler, errorHandler) {
        proxy_1.AWProxy.exec(successHandler, errorHandler, "AWRealm", "update", [objectName, dataObject, queryArray]);
    };
    Realm.prototype.select = function (objectName, queryArray, sort, successHandler, errorHandler) {
        proxy_1.AWProxy.exec(successHandler, errorHandler, "AWRealm", "select", [objectName, queryArray, sort]);
    };
    Realm.prototype.remove = function (objectName, queryArray, successHandler, errorHandler) {
        proxy_1.AWProxy.exec(successHandler, errorHandler, "AWRealm", "remove", [objectName, queryArray]);
    };
    Realm.prototype.removeAll = function (objectName, successHandler, errorHandler) {
        proxy_1.AWProxy.exec(successHandler, errorHandler, "AWRealm", "remove_all", [objectName]);
    };
    return Realm;
}(plugin_1.AWPlugin));
exports.Realm = Realm;
var AWRealm = (function (_super) {
    __extends(AWRealm, _super);
    function AWRealm() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return AWRealm;
}(Realm));
exports.AWRealm = AWRealm;
//# sourceMappingURL=realm.js.map