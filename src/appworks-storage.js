/**
 * General light-weight JSON data storage solution. This client creates user defined "dataTypes"
 * within an apps dedicated storage area on the device. A more persistent version of HTML5 local
 * storage essentially.
 *
 * It is assumed that we are persisting String data only, dates should there be represented using
 * millisecond Strings, a utility function (see millisToDate) is provided for convenience.
 */
function AppWorksStorage(aw) {
    'use strict';

    // private variables
    var requestPrefix = 'storage.',
        callbackIdPrefix = 'storageReq.',
        invalidRequestMessage = 'Invalid request object passed to function.';

    function createStorageRequestString(action, data, options) {

        function merge(obj1, obj2) {
            var finalobj={};
            for(var _obj in obj1) finalobj[_obj ] = obj1[_obj];
            for(var _obj in obj2) finalobj[_obj ] = obj2[_obj];
            return finalobj;
        }

        return JSON.stringify(merge({
            action: requestPrefix + action,
            callbackID: aw.getNewCallbackId(),
            data: JSON.stringify(data)
        }, (options || {})));
    }

    var awStorage = {
        /**
         * Add some JSON to the device store, this operation will automatically overwrite
         * the value identified in the request with the new data supplied (hence 'put' not
         * 'add'). Generate a basic request object via the getBaseStorageRequest function, and
         * add any other properties to the data as you see fit, they will all be persisted.
         *
         * @return 	response {
	     * 				"callbackID" : "val",
	     *				"success" : "true|false"
	     * 			}
         *
         * @param requestObj 	the request, the contents of which will be validated
         * @param callback 		callback
         */
        put: function (requestObj, callback) {
            // these fields are mandatory when adding data
            if (!requestObj.app || !requestObj.dataType || !requestObj.id) {
                throw new Error(invalidRequestMessage);
            }

            var req = createStorageRequestString('put', requestObj);
            aw.blackberryCommunication(req, callback);
        },
        /**
         * Lookup a single item (by id) in the persistent JSON store.
         *
         * @return 	response {
         *              "callbackID" : "val",
 	     *				"app" : "val",
	     *				"dataType" : "some.type",
	     *				"id" : "val",
	     *				"data" : {
	     *					"prop1" : "val1",
	     *					"prop2" : "val2",
	     *					...
	     *				}
	     * 			}
         *
         * @param app 		the app the data belongs to
         * @param dataType	the data type
         * @param id 		unique identifier
         * @param callback 	callback
         */
        getItemFromStore: function (app, dataType, id, callback) {
            if (!app || !dataType || !id) {
                throw new Error(invalidRequestMessage);
            }

            var req = createStorageRequestString('getItem', null, {
                app: app,
                dataType: dataType,
                id: id
            });
            aw.blackberryCommunication(req, callback);
        },
        /**
         * Lookup all data stored under a type. Returns a (potentially empty) list of items.
         *
         * @return 	response {
 	     * 				"callbackID" : "val",
	     *				"data" : [
	     *					{
	     * 						"app" : "val",
	     *						"dataType" : "some.type",
	     *						"id" : "val",
	     *						"data" : {
	     *							"prop1" : "val1",
	     *							"prop2" : "val2",
	     *							...
	     *						}
	     *					},
	     *					{
	     *						"app" : "val",
	     *						...
	     *					},
	     *					...]
	     * 			}
         *
         * @param requestObj 	the request, will be validated for "app" and "dataType"
         * @param callback 		callback
         */
        getByTypeFromStore: function (app, dataType, callback) {
            // this time "id" must nit
            if (!app || !dataType) {
                throw new Error(invalidRequestMessage);
            }

            var req = createStorageRequestString('getByType', null, {
                app: app,
                dataType: dataType
            });
            aw.blackberryCommunication(req, callback);
        },
        /**
         * Build the basic JSON storage request. All fields are mandatory.
         *
         * @param dataType 	data type name
         * @param app 		the app the data should be stored for (use a unique key your
         *       			app knows about)
         * @param id 		the identifier for the data item (optional)
         * @param dataObj	extra properties to add to the request (optional)
         */
        getStorageRequest: function (dataType, app, id, dataObj) {
            if (app === null) {
                throw new Error("app cannot be null");
            }

            if (dataType === null) {
                throw new Error("dataType cannot be null");
            }

            var baseReq = {
                app: app,
                dataType: dataType
            };

            if (id != null) {
                baseReq.id = id;
            }

            if (dataObj) {
                baseReq.data = dataObj;
            }

            return baseReq;
        },
        /**
         * Constructs a JavaScript Date from a millisecond String. This is the format
         * used by this cache to represent time values (modified, expires).
         */
        millisToDate: function (millisString) {
            return new Date(parseInt(millisString, 10));
        },
        /**
         * store a file on the device securely.
         * usage example:
         *
         *      appworks.storage.storeFile('file.png', 'http://i.imgur.com/DLunVNs.jpg', onSuccess, onError);
         *
         *      function onSuccess() {}
         *      function onError() {}
         *
         * @param filename - the name to store the file on the device as
         * @param downloadUri - the url to download the file from
         * @param onSuccess - a success handler to run when the execution completes successfully
         * @param onError - an error handler to run when the execution encounters an error
         */
        storeFile: function (filename, downloadUri, onSuccess, onError) {

            window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, fileTransfer, errorHandler);

            function fileTransfer() {
                var ft = new FileTransfer(),
                    uri = encodeURI(downloadUri),
                    fileUrl = 'cdvfile://localhost/persistent/' + filename;

                return ft.download(uri, fileUrl, onSuccess, onError);
            }

            function errorHandler(e) {
                var msg = '';

                switch (e.code) {
                    case FileError.QUOTA_EXCEEDED_ERR:
                        msg = 'QUOTA_EXCEEDED_ERR';
                        break;
                    case FileError.NOT_FOUND_ERR:
                        msg = 'NOT_FOUND_ERR';
                        break;
                    case FileError.SECURITY_ERR:
                        msg = 'SECURITY_ERR';
                        break;
                    case FileError.INVALID_MODIFICATION_ERR:
                        msg = 'INVALID_MODIFICATION_ERR';
                        break;
                    case FileError.INVALID_STATE_ERR:
                        msg = 'INVALID_STATE_ERR';
                        break;
                    default:
                        msg = 'Unknown Error';
                        break;
                }

                alert('Error: ' + msg);
            }

        }

    };

    return awStorage;
}