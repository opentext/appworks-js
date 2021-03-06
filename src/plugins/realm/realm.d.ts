import { AWPlugin } from '../../common/plugin';
export declare class Realm extends AWPlugin {
    FIELD_OBJECT_NAME: string;
    FIELD_OBJECT_TYPE: string;
    FIELD_OBJECT_PRIMARYKEY: string;
    FIELD_OBJECT_INDEX: string;
    FIELD_OBJECT_RELATIONSHIP: string;
    OBJECT_DESCRIPTION_NAME: string;
    OBJECT_DESCRIPTION_TYPE: string;
    OBJECT_DESCRIPTION_FIELDS: string;
    OBJECT_DESCRIPTION_KEY: string;
    OBJECT_DESCRIPTION_INDEX: string;
    FIELD_TYPE_STRING: string;
    FIELD_TYPE_INTEGER: string;
    FIELD_TYPE_BOOLEAN: string;
    FIELD_TYPE_LONG: string;
    FIELD_TYPE_SHORT: string;
    FIELD_TYPE_DOUBLE: string;
    FIELD_TYPE_FLOAT: string;
    FIELD_TYPE_BINARY: string;
    FIELD_TYPE_BYTE: string;
    FIELD_TYPE_OBJECT: string;
    FIELD_TYPE_LIST: string;
    FIELD_TYPE_DATE: string;
    QUERY_OBJECT_NAME: string;
    QUERY_TYPE: string;
    QUERY_FIELD: string;
    QUERY_SORT: string;
    QUERY_SORT_ASC: string;
    QUERY_SORT_DESC: string;
    QUERY_VALUE: string;
    QUERY_VALUE_2: string;
    QUERY_TYPE_BEGIN_GROUP: string;
    QUERY_TYPE_END_GROUP: string;
    QUERY_TYPE_AND: string;
    QUERY_TYPE_OR: string;
    QUERY_TYPE_EQUAL_TO: string;
    QUERY_TYPE_NOT_EQUAL_TO: string;
    QUERY_TYPE_BEGINS_WITH: string;
    QUERY_TYPE_ENDS_WITH: string;
    QUERY_TYPE_CONTAINS: string;
    QUERY_TYPE_BETWEEN: string;
    QUERY_TYPE_GREATER_THAN: string;
    QUERY_TYPE_GREATER_THAN_OR_EQUAL_TO: string;
    QUERY_TYPE_LESS_THAN: string;
    QUERY_TYPE_LESS_THAN_OR_EQUAL_TO: string;
    QUERY_TYPE_LIKE: string;
    QUERY_TYPE_IN: string;
    queryBuilder: {
        arr: any[];
        subArray: any[];
        inSubArray: boolean;
        addToArray: (obj: object, isSubArray: boolean) => void;
        equalTo: (field: string, value: any) => any;
        notEqualTo: (field: string, value: any) => any;
        beginsWith: (field: string, value: any) => any;
        endsWith: (field: string, value: any) => any;
        contains: (field: string, value: any) => any;
        between: (field: string, value: any, value2: any) => any;
        greaterThan: (field: string, value: any) => any;
        greaterThanOrEqualTo: (field: string, value: any) => any;
        lessThan: (field: string, value: any) => any;
        lessThanOrEqualTo: (field: string, value: any) => any;
        like: (field: string, value: any) => any;
        and: () => any;
        or: () => any;
        beginGroup: () => any;
        endGroup: () => any;
        done: () => any;
        clear: () => void;
    };
    startRealm(successHandler: any, errorHandler: any): void;
    getAllObjectNames(successHandler: any, errorHandler: any): void;
    objectExists(objectName: string, successHandler: any, errorHandler: any): void;
    createObject(objectName: string, successHandler: any, errorHandler: any): void;
    addField(objectName: string, field: object, successHandler: any, errorHandler: any): void;
    addFields(objectName: string, field: Array<object>, successHandler: any, errorHandler: any): void;
    describeObject(objectName: string, successHandler: any, errorHandler: any): void;
    objectHasField(objectName: string, fieldName: string, successHandler: any, errorHandler: any): void;
    getFieldType(objectName: string, fieldName: string, successHandler: any, errorHandler: any): void;
    insert(objectName: string, dataObject: object, successHandler: any, errorHandler: any): void;
    update(objectName: string, dataObject: object, queryArray: Array<object>, successHandler: any, errorHandler: any): void;
    select(objectName: string, queryArray: Array<object>, sort: object, successHandler: any, errorHandler: any): void;
    remove(objectName: string, queryArray: Array<object>, successHandler: any, errorHandler: any): void;
    removeAll(objectName: string, successHandler: any, errorHandler: any): void;
}
export declare class AWRealm extends Realm {
}
