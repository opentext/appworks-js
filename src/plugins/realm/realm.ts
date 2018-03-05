import {AWPlugin} from '../../common/plugin';
import {AWProxy} from '../../common/proxy';

export class Realm extends AWPlugin {
    FIELD_OBJECT_NAME = "name";
    FIELD_OBJECT_TYPE = "type";
    FIELD_OBJECT_PRIMARYKEY = "key";
    FIELD_OBJECT_INDEX = "index";

    OBJECT_DESCRIPTION_NAME = "name";
    OBJECT_DESCRIPTION_TYPE = "type";
    OBJECT_DESCRIPTION_FIELDS = "fields";
    OBJECT_DESCRIPTION_KEY = "key";
    OBJECT_DESCRIPTION_INDEX = "index";

    FIELD_TYPE_STRING = "STRING";
    FIELD_TYPE_INTEGER = "INTEGER";
    FIELD_TYPE_BOOLEAN = "BOOLEAN";
    FIELD_TYPE_LONG = "LONG";
    FIELD_TYPE_DOUBLE = "DOUBLE";
    FIELD_TYPE_FLOAT = "FLOAT";
    FIELD_TYPE_BINARY = "BINARY";
    FIELD_TYPE_OBJECT = "OBJECT";
    FIELD_TYPE_LIST= "LIST";
    FIELD_TYPE_DATE = "DATE";

    QUERY_TYPE = "type";
    QUERY_FIELD = "field";
    QUERY_SORT = "sort";
    QUERY_SORT_ASC = "asc";
    QUERY_SORT_DESC = "desc";

    QUERY_VALUE = "value";
    QUERY_VALUE_2 = "value2";

    QUERY_TYPE_BEGIN_GROUP = "beginGroup";
    QUERY_TYPE_END_GROUP = "endGroup";
    QUERY_TYPE_AND = "and";
    QUERY_TYPE_OR = "or";

    QUERY_TYPE_EQUAL_TO = "equalTo";
    QUERY_TYPE_NOT_EQUAL_TO = "notEqualTo";
    QUERY_TYPE_BEGINS_WITH = "beginsWith";
    QUERY_TYPE_ENDS_WITH = "endsWith";
    QUERY_TYPE_CONTAINS = "contains";
    QUERY_TYPE_BETWEEN = "between";
    QUERY_TYPE_GREATER_THAN = "greaterThan";
    QUERY_TYPE_GREATER_THAN_OR_EQUAL_TO = "greaterThanOrEqualTo";
    QUERY_TYPE_LESS_THAN = "lessThan";
    QUERY_TYPE_LESS_THAN_OR_EQUAL_TO = "lessThanOrEqualTo";
    QUERY_TYPE_LIKE = "like";
    startRealm(successHandler: any, errorHandler: any) {
        AWProxy.exec(
            successHandler,
            errorHandler,
            'AWRealm',
            'start_realm',
            []
        );
    }

    getAllObjectNames(successHandler: any, errorHandler: any) {
        AWProxy.exec(
            successHandler,
            errorHandler,
            'AWRealm',
            'get_all_object_names',
            []
        );
    }

    objectExists(objectName: string, successHandler: any, errorHandler: any) {
        AWProxy.exec(
            successHandler,
            errorHandler,
            'AWRealm',
            'object_exists',
            [objectName]
        );
    }

    createObject(objectName: string, successHandler: any, errorHandler: any) {
        AWProxy.exec(
            successHandler,
            errorHandler,
            'AWRealm',
            'create_object',
            [objectName]
        );
    }

    addField(objectName: string, field: object, successHandler: any, errorHandler: any) {
        AWProxy.exec(
            successHandler,
            errorHandler,
            'AWRealm',
            'add_field',
            [objectName, field]
        );
    }

    addFields(objectName: string, field: Array<object>, successHandler: any, errorHandler: any) {
        AWProxy.exec(
            successHandler,
            errorHandler,
            'AWRealm',
            'add_fields',
            [objectName, field]
        );
    }

    describeObject(objectName: string, successHandler: any, errorHandler: any) {
        AWProxy.exec(
            successHandler,
            errorHandler,
            'AWRealm',
            'describe_object',
            [objectName]
        );
    }

    objectHasField(objectName: string, fieldName: string, successHandler: any, errorHandler: any) {
        AWProxy.exec(
            successHandler,
            errorHandler,
            'AWRealm',
            'object_has_field',
            [objectName, fieldName]
        );
    }

    getFieldType(objectName: string, fieldName: string, successHandler: any, errorHandler: any) {
        AWProxy.exec(
            successHandler,
            errorHandler,
            'AWRealm',
            'get_field_type',
            [objectName, fieldName]
        );
    }

    insert(objectName: string, dataObject: object, successHandler: any, errorHandler: any) {
        AWProxy.exec(
            successHandler,
            errorHandler,
            'AWRealm',
            'insert',
            [objectName, dataObject]
        );
    }

    update(objectName: string, dataObject: object, queryArray: Array<object>, successHandler: any, errorHandler: any) {
        AWProxy.exec(
            successHandler,
            errorHandler,
            'AWRealm',
            'update',
            [objectName, dataObject, queryArray]
        );
    }

    select(objectName: string, queryArray: Array<object>, sort: object, successHandler: any, errorHandler: any) {
        AWProxy.exec(
            successHandler,
            errorHandler,
            'AWRealm',
            'select',
            [objectName, queryArray, sort]
        );
    }

    remove(objectName: string, queryArray: Array<object>, successHandler: any, errorHandler: any) {
        AWProxy.exec(
            successHandler,
            errorHandler,
            'AWRealm',
            'remove',
            [objectName, queryArray]
        );
    }

    removeAll(objectName: string, successHandler: any, errorHandler: any) {
        AWProxy.exec(
            successHandler,
            errorHandler,
            'AWRealm',
            'remove_all',
            [objectName]
        );
    }

    queryBuilder = {
        arr : [],
        subArray : [],
        inSubArray : false,
        addToArray : function (obj: object, isSubArray: boolean) {
            if (isSubArray) {
                this.subArray.push(obj);
            } else {
                this.arr.push(obj);
            }
        },
        equalTo: function (field: string, value: any) {
            let obj = {
                "type" : "equalTo",
                "field" : field,
                "value" : value
            };
            this.addToArray(obj, this.inSubArray);
            return this;
        },
        notEqualTo: function (field: string, value: any) {
            let obj = {
                "type" : "notEqualTo",
                "field" : field,
                "value" : value
            };
            this.addToArray(obj, this.inSubArray);
            return this;
        },
        beginsWith: function (field: string, value: any) {
            let obj = {
                "type" : "beginsWith",
                "field" : field,
                "value" : value
            };
            this.addToArray(obj, this.inSubArray);
            return this;
        },
        endsWith: function (field: string, value: any) {
            let obj = {
                "type" : "endsWith",
                "field" : field,
                "value" : value
            };
            this.addToArray(obj, this.inSubArray);
            return this;
        },
        contains: function (field: string, value: any) {
            let obj = {
                "type" : "contains",
                "field" : field,
                "value" : value
            };
            this.addToArray(obj, this.inSubArray);
            return this;
        },
        between: function (field: string, value: any, value2: any) {
            let obj = {
                "type" : "between",
                "field" : field,
                "value" : value,
                "value2" : value2
            };
            this.addToArray(obj, this.inSubArray);
            return this;
        },
        greaterThan: function (field: string, value: any) {
            let obj = {
                "type" : "greaterThan",
                "field" : field,
                "value" : value
            };
            this.addToArray(obj, this.inSubArray);
            return this;
        },
        greaterThanOrEqualTo: function (field: string, value: any) {
            let obj = {
                "type" : "greaterThanOrEqualTo",
                "field" : field,
                "value" : value
            };
            this.addToArray(obj, this.inSubArray);
            return this;
        },
        lessThan: function (field: string, value: any) {
            let obj = {
                "type" : "lessThan",
                "field" : field,
                "value" : value
            };
            this.addToArray(obj, this.inSubArray);
            return this;
        },
        lessThanOrEqualTo: function (field: string, value: any) {
            let obj = {
                "type" : "lessThanOrEqualTo",
                "field" : field,
                "value" : value
            };
            this.addToArray(obj, this.inSubArray);
            return this;
        },
        like: function (field: string, value: any) {
            let obj = {
                "type" : "like",
                "field" : field,
                "value" : value
            };
            this.addToArray(obj, this.inSubArray);
            return this;
        },
        and: function () {
            let obj = {
                "type" : "and"
            };
            this.addToArray(obj, this.inSubArray);
            return this;
        },
        or: function () {
            let obj = {
                "type" : "or"
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
            let tempArray = this.arr;
            this.clear();
            return tempArray;
        },
        clear: function() {
            this.inSubArray = false;
            this.subArray = [];
            this.arr = [];
        }
    };
}

export class AWRealm extends Realm {
}