// define the AMD module
function AppWorksCore() {
    'use strict';

    // private variables
    var callbacks = [],
        errorCallbacks = [];

    function createRequestString(action) {
        return JSON.stringify({
            action: action,
            callbackID: aw.getNewCallbackId()
        });
    }

    String.random = function () {
        var length = 16;
        return Math.round((Math.pow(36, length + 1) - Math.random() * Math.pow(36, length))).toString(36).slice(1);
    };

    // module definition
    var aw = {
        /**
         * Communication with the BB Cascades framework (QML documents).
         *
         * A Cascades WebView component onMessageReceived: handle intercepts the calls.
         * We register a callback to receive the asyn communication that comes back
         * from that layer.
         *
         * @param message 		the message object to pass to the BB native code
         * @param callback 		callback
         * @param errorCallback errorCallback
         * */
        blackberryCommunication: function (message, callback, errorCallback) {
            if (callback) {
                callbacks.push(callback);
            }
            // Add our error callback if supplied
            if (errorCallback) {
                errorCallbacks.push(errorCallback);
            }
            navigator.cascades.postMessage(encodeURIComponent(message));
        },
        /**
         * Callbacks are handled via their sequential id which forms the index back into
         * our callbacks array.
         */
        getNewCallbackId: function () {
            // use the unique page id assigned by our native layer if its available
            // within the otag object
            if (window.otag && window.otag.pageUUID) {
                return window.otag.pageUUID + "_" + callbacks.length;
            }

            return callbacks.length;
        },
        /**
         * Get the next sequential id from the error callbacks array.
         */
        getNewErrorCallbackId: function () {
            return errorCallbacks.length;
        },
        /**
         * Is the device hosting this app currently connected to the network?
         */
        isOnline: function (callback) {
            var req = createRequestString('isOnline');
            this.blackberryCommunication(req, callback);
        },
        /**
         * Get the available (installed) components, and return them along with the
         * values stored in their component.properties file.
         *
         * @param callback callback
         *
         * @return 	response {
	     *				"components" : {
	     *					"comp1Name" : {
	     *						properties : {
	     *							"prop1" : "prop1Value",
	     *							"prop2" : "prop2Value",
	     *							...
	     *						}
	     *					},
	     *					"component2Name" : {
	     *						...
	     *					},
	     *					...
	     *				}
	     * 			}
         */
        getComponents: function (callback) {
            var req = createRequestString('getComponents');
            this.blackberryCommunication(req, callback);
        },
        /**
         * Download a file using the supplied request object. Use
         * createDownloadRequest to form the request object.
         *
         * @param requestObj 	download request
         * @param successFn		success callback
         * @param errorFn 		error callback
         *
         * @return response {
         *              filePath : {on_device_path},
	     * 		        fileSize : {int_in_bytes},
	     * 		            fileData : {Base64_encoded_string}
	     * 		            headers : {
	     * 			            responseHeader1 : {val},
         *			            responseHeader2 : {val},
	     *			            ...
	     *		            },
	     *		            responseJson : { possibly empty }
	     *              }
         */
        downloadFile: function (requestObj, successFn, errorFn) {
            this.blackberryCommunication(JSON.stringify(requestObj),
                function (params) {
                    successFn(params.data);
                },
                function (params) {
                    errorFn(params.data);
                });
        },
        /**
         * Create a request object that can be used to download a file, and optinally cache it
         * in the local cache provided by the runtime, and also display it using the device's
         * installed apps if one is available that supports the downloaded files type.
         *
         * The only optional argument is the cacheRequest, you may supply empty objects for the
         * headers and query parameters. If no cacheRequest argument is specified then we will
         * not attempt to cache the item for you. See AppWorksCache#getBaseCacheRequest.
         *
         * @param fileName 			the name of the file
         * @param relativePath		url path relative from the base Gateway URL
         * @param headers			headers to use in the request (can be empty)
         * @param queryParams		query params to add to the request url (can be empty)
         * @param openOnReturn		should we attempt to open the file
         * @param cacheRequest		data on how we should cache the downloaded item (optional)
         * @param destinationPath	the on-device path that the file should be downloaded to (optional)
         */
        createDownloadRequest: function (fileName, relativePath, headers, queryParams, openOnReturn, cacheRequest, destinationPath) {
            // cacheRequest is not mandatory but we want to make sure we have values (empty or not) for the rest
            if (arguments.length < 5) {
                throw new Error('insufficient arguments supplied');
            }

            var downloadRequest = {
                action: 'downloadFile',
                callbackID: this.getNewCallbackId(),
                errorCallbackID: this.getNewErrorCallbackId(),
                fileName: fileName,
                relativePath: relativePath,
                headers: headers,
                queryParams: queryParams,
                openOnReturn: openOnReturn
            };

            if (typeof cacheRequest != 'undefined') {
                downloadRequest.cacheRequest = cacheRequest;
            }

            if (typeof destinationPath != 'undefined') {
                downloadRequest.destinationPath = destinationPath;
            }

            return downloadRequest;
        },
        /**
         * Upload a file using the supplied request object. Use createUploadRequest and
         * the other helpers for form construction to create the upload request.
         *
         * @param requestObj 	upload request
         * @param successFn		success callback
         * @param errorFn 		error callback
         *
         * @return response {
	     * 		        message : {reponse_status_message},
	     * 		        headers : {
	     * 			        responseHeader1 : {val},
	     *			        responseHeader2 : {val},
	     *			        ...
	     *		        },
	     *		        responseJson : { possibly empty }
	     *          }
         */
        uploadFile: function (requestObj, successFn, errorFn) {
            this.blackberryCommunication(JSON.stringify(requestObj),
                function (params) {
                    successFn(params.data);
                },
                function (params) {
                    errorFn(params.data);
                });
        },
        /**
         * Create the request object that can be used to perform a form based upload. A JSON
         * representation of the form, plus the URL and any headers/params should be included.
         *
         * We currently support a single file input per form and expect the files content to
         * be provided as the value of the form field in Base64 encoded form.
         *
         * @param relativePath	url path relative from the base Gateway URL
         * @param headers		headers to use in the request (can be empty)
         * @param queryParams	query params to add to the request url (can be empty)
         * @param formFields	an array of form field objects
         */
        createUploadRequest: function (relativePath, headers, queryParams, formFields) {

            var uploadRequest = {
                action: 'uploadFile',
                relativePath: relativePath,
                headers: headers,
                queryParams: queryParams,
                formData: formFields,
                callbackID: this.getNewCallbackId(),
                errorCallbackID: this.getNewErrorCallbackId()
            };

            return uploadRequest;
        },
        /**
         * Create a form field that we can pass with an upload request.
         *
         * @param name 			the name of the form field
         * @param type			the type, text, file, etc... of the form field
         * @param value 		the value of the field, use a base64 encoded String for file content
         * @param fileName 		the name of the file (optional, for file type form fields)
         * @param contentType	the MIME type of file content (optional, for file type form fields)
         */
        createFormField: function (name, type, value, fileName, contentType) {
            // base form field
            var formField = {
                name: name,
                inputType: type,
                value: value
            };

            // file input extras, these are the values used in the Content Disposition
            // section for the file input
            if (typeof fileName !== 'undefined') {
                formField.fileName = fileName;
            }

            if (typeof contentType !== 'undefined') {
                formField.contentType = contentType;
            }

            return formField;
        },
        /**
         * Open a folder picker to allow users to reference an area of the device
         * that they may be interested in. If the user cancels this operation then
         * the reponse will contain an empty filePath property, and success will be
         * set to 'false'. Cancelling is not considered an error so will be handled
         * by the sole callback provided.
         *
         * @param callback callback
         *
         * @return 	response {
	     *              cmd : "selectFilePath",
	     * 	 			success : true,
	     * 				callbackID : callbackID,
	     *				filePath : {file_path_value}
	     * 			}
         */
        selectFilePath: function (callback) {
            var req = createRequestString('selectFilePath');
            this.blackberryCommunication(req, callback);
        },
        camera: {
            /**
             * open the device camera to take a picture. takes a success callback, error callback, and options parameter
             * for options such as quality, save location, and more. by default, success callback will take the dataUrl
             * of the image as a parameter.
             * @param callback
             * @param errorCallback
             * @param options
             */
            takePicture: function (callback, errorCallback, options) {
                options = options || {
                    destinationType: Camera.DestinationType.FILE_URI,
                    encodingType: Camera.EncodingType.JPEG,
                    mediaType: Camera.MediaType.ALLMEDIA,
                    correctOrientation: true,
                    saveToPhotoAlbum: true
                };

                navigator.camera.getPicture(((aw.storage && onCameraSuccess) || callback), errorCallback, options);

                function onCameraSuccess(fileUrl) {
                    var options = {
                        fileSystem: LocalFileSystem.TEMPORARY,
                        resolveLocalFileSystemURL: true
                    };
                    aw.storage.getFile(fileUrl, callback, errorCallback, options);
                }
            },
            chooseFromLibrary: function (callback, errorCallback, options) {
                options = options || {sourceType: Camera.PictureSourceType.PHOTOLIBRARY};

                navigator.camera.getPicture(((aw.storage && onCameraSuccess) || callback), errorCallback, options);

                function onCameraSuccess(fileUrl) {
                    var options = {
                        fileSystem: LocalFileSystem.TEMPORARY,
                        resolveLocalFileSystemURL: true
                    };
                    aw.storage.getFile(fileUrl, callback, errorCallback, options);
                }
            }
        }
    };

    return aw;
}
function AppWorksCache(aw) {
    'use strict';

    // private variables
    var requestPrefix = 'cache.',
        callbackIdPrefix = 'cacheReq.';

    function createCacheRequestString(action, cacheRequest) {
        return JSON.stringify({
            action: requestPrefix + action,
            callbackID: aw.getNewCallbackId(),
            cacheRequest: JSON.stringify(cacheRequest)
        });
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

    // module definition
    var awCache = {
        /**
         * Build the basic cache request, make sure you use nulls where
         * appropriate to ensure object is fully populated. Input is
         * validated.
         *
         * @param fileName 	file name
         * @param app 		the app the cache request is on behalf of, a unique partition
         *					within the cache, this is optional but if set to null or blank
         * 					will result in general cache access where there is a risk of file
         * 					name clashes occurring
         * @param version 	the version of the file (optional)
         */
        getBaseCacheRequest: function (fileName, app, version) {
            if (fileName === null) {
                throw new Error('fileName cannot be null');
            }

            if (typeof fileName === 'undefined' || typeof app === 'undefined' || typeof version === 'undefined') {
                throw new Error('All arguments must be defined, they can be null apart from fileName');
            }

            var namespace = (app !== null) ? app : 'general',
                itemVersion = (version !== null) ? version : 'default';

            return {
                fileName: fileName,
                app: namespace,
                version: itemVersion
            };
        },
        /**
         * Get the maximum size, current used and free in bytes.
         *
         * @param callback callback
         *
         * @return 	response {
		 * 				"callbackID" : "val",
		 *				"cacheInfo" : {
		 *					"maxSize" : "0",
		 *					"currentSize" : "0",
		 *					"freeSpace" : "0"
		 *				}
		 * 			}
         */
        getCacheInfo: function (callback) {
            var req = createCacheRequestString('getCacheInfo');
            aw.blackberryCommunication(req, callback);
        },
        /**
         * Get a cache items details, if the item, identified
         * by the request object details, exists.
         *
         * @param cacheRequest	cache request (see getBaseCacheRequest())
         * @param callback 		callback
         *
         * @return 	response {
	 	 * 				"callbackID" : "val",
		 *				"cacheItem" : {
		 * 					"fileName" : "val",
		 * 					"app" : "val",
		 *					"modifiedDate" : "val",
		 *					"expires" : "val",
		 *					"version" : "val"
		 *				}
		 * 			}
         */
        getCacheItemInfo: function (cacheRequest, callback) {
            var req = createCacheRequestString('getCacheItemInfo', cacheRequest);
            aw.blackberryCommunication(req, callback);
        },
        /**
         * Retrieve the cache item info plus the actual data as a Base64 encoded String.
         *
         * @param cacheRequest	cache request (see getBaseCacheRequest())
         * @param openOnReturn	should we attempt to open the file in a native handler on return
         * @param callback 		callback
         *
         * @return 	response {
	 	 * 				"callbackID" : "val",
		 *				"cacheItem" : {
		 * 					"fileName" : "val",
		 * 					"app" : "val",
		 *					"fileDataString" : "base64EncodedString",
		 *					"modifiedDate" : "val",
		 *					"expires" : "val",
		 *					"version" : "val"
		 *				}
		 * 			}
         */
        getCacheItem: function (cacheRequest, openOnReturn, callback) {
            if (typeof openOnReturn !== 'boolean') {
                throw new Error('openOnReturn must be specified as a boolean value');
            }

            var req;

            cacheRequest.openOnReturn = openOnReturn;

            req = createCacheRequestString('getCacheItem', cacheRequest);
            aw.blackberryCommunication(req, callback);
        },
        /**
         * Determine if a given item exists in the cache.
         *
         * @param cacheRequest	cache request (see getBaseCacheRequest())
         * @param callback 		callback
         *
         * @return 	response {
		 * 				"callbackID" : "val",
		 *				"itemIsInCache" : "true"
		 * 			}
         */
        isItemInCache: function (cacheRequest, callback) {
            var req = createCacheRequestString('isItemInCache', cacheRequest);
            AppWorks.blackberryCommunication(req, callback);
        },
        /**
         * cache an item using the localstorage cache on the device. cache will be cleared when the app is closed.
         * @param key - the key to store the item under
         * @param value - the data to store
         * @param options - an options hash provided to set an expiration date on items. defaults to 24 hours.
         */
        setItem: function (key, value, options) {
            options = options || {};

            var expiry = options.expiry || (new Date().getTime() + (86400000)),
                data = JSON.stringify({value: value, expires: expiry});

            return window.localStorage.setItem(key, data);
        },
        /**
         * return a cached item
         * @param key - the key the item was stored under
         * @param callback - a function to evaluate the retrieved item
         */
        getItem: function (key, callback) {
            var data = JSON.parse(window.localStorage.getItem(key));
            // if item exists and has not expired, execute the callback on the value
            // otherwise, remove the item from the cache and execute the callback on null
            if (data && data.expires > new Date().getTime()) {
                callback(data.value);
            } else {
                // item does not exist or has expired
                window.localStorage.removeItem(key);
                callback(null);
            }
        },
        /**
         * remove an item by key from the cache
         * @param key
         */
        removeItem: function (key) {
            return window.localStorage.removeItem(key);
        },
        /**
         * clear all items from the cache
         */
        clear: function () {
            return window.localStorage.clear();
        }
    };

    return awCache;
}
// define the AMD module
function AppWorksComms(aw) {
    'use strict';

    // module definition
    var awComms = {
        /**
         * Open another app deployed within the AppWorks client container and pass it
         * data. We set info in the URL of the web view using this data so it can be parsed
         * by the destination app/component. Apps and components are uniquely identified by
         * name so a caller must know the specific name/s of its collaborating apps/components.
         *
         * We also allow clients to specify a function name ('method') that should be called
         * on arrival at the destination. You can also tell us to refresh the calling app when
         * control is returned to it.
         *
         * We expect the request object to be in a particular format, please use the supplied
         * convenience function, getOpenAppRequest, to form requests.
         *
         * @param requestObj the request
         */
        openApp: function (requestObj) {
            if (!requestObj || !requestObj.name) {
                throw new Error('Unable to open another app without the name of the app/component to open');
            }

            var json =
                '{'+
                '"action": "openApp", ' +
                '"commsRequest": ' +
                JSON.stringify(requestObj) +
                '}';

            // this is a one-way communication as we alter the URL of the web view
            // if there is an error though it will get returned to the cascades.onmessage
            // handler
            aw.blackberryCommunication(json);
        },
        /**
         * Check the window.location for the appWorksComms object, parse it contents and respond to the
         * the request if we are a reciever or the response if we are recieving a callback from a
         * component we have called.
         *
         * @param callback a callback we pass the resolved received or returned data to
         */
        processComms: function (callback) {
            // read the window.location
            var commsData = this.getCommsData();

            // check for the appworks item in the URL's params
            if (typeof commsData !== 'undefined') {
                if (commsData.method) {
                    this.callMethodFromComms(commsData.method, commsData.data);
                }
                if (typeof(callback) === 'function') {
                    callback(commsData.data);
                }
            }

        },
        /*jslint evil: true */
        callMethodFromComms: function (methodName, data) {
            // form a String for eval using the supplied function name and
            // optional data
            var toEval = 'window.';
            if (methodName) {
                toEval += methodName + '(';

                if (data) {
                    toEval += JSON.stringify(data);
                }

                // close off call
                toEval += ')';

                eval(toEval);
            } else {
                console.log('Unable lo callMethodFromComms as no methodName was supplied');
            }

        },
        /**
         * Extract the data passed from another app via the web view's window.location.search.
         */
        getCommsData: function () {

            var commsObj = null,
                decoded = null;

            try {
                // pull the contents after ?, it should only contain the
                decoded = decodeURIComponent(window.location.search.toString().substring(1));

                commsObj = JSON.parse(decoded);

                if (!commsObj.appWorksComms) {
                    console.log('parsed the window.location.search but did not find the appWorksComms data');
                    return {};
                }
            } catch(e) {
                console.log('failed to parse comms object from window.location - ' + decoded);
            }

            return (commsObj  && commsObj.appWorksComms) ? {} : commsObj.appWorksComms;
        },
        /**
         * Create a request to open another AppWorks app/component. Be sure to pass an empty
         * object or null to the function if you want to define the onReturnMethod argument.
         *
         * @param toName			the name of the app/component to open (mandatory)
         * @param toMethod			the name of the method (function) to call on opening
         * 							the destination app/component
         * @param refreshOnReturn	should we refresh this page when we come back to it?
         *
         * @return open app request object
         */
        getOpenAppRequest: function (toName, toMethod, toData, refreshOnReturn) {

            if (!toName) {
                throw new Error('"toName" is mandatory');
            }

            if (typeof refreshOnReturn !== 'boolean') {
                refreshOnReturn = false;
            }

            // form basic request with mandatory fields
            var openAppRequest = {
                name : toName,
                method : "",
                data : {},
                refreshOnReturn : refreshOnReturn
            };

            // the function to call when we get to the other app
            if (toMethod) {
                openAppRequest.method = toMethod;
            }

            // set the data to pass to the other app/component, it can decide
            // if it wants to pass it to the above function if defined
            if (toData) {
                openAppRequest.data = toData;
            }

            return openAppRequest;
        }
    };

    return awComms;
}
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
            var finalobj={}, _obj;
            for(_obj in obj1) finalobj[_obj ] = obj1[_obj];
            for(_obj in obj2) finalobj[_obj ] = obj2[_obj];
            return finalobj;
        }

        return JSON.stringify(merge({
            action: requestPrefix + action,
            callbackID: aw.getNewCallbackId(),
            data: JSON.stringify(data)
        }, (options || {})));
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
                throw new Error('app cannot be null');
            }

            if (dataType === null) {
                throw new Error('dataType cannot be null');
            }

            var baseReq = {
                app: app,
                dataType: dataType
            };

            if (id !== null) {
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
         *      function onSuccess(entry) {}
         *      function onError(err) {}
         *
         * @param filename - the name to store the file on the device as
         * @param downloadUri - the url to download the file from
         * @param onSuccess - a success handler to run when the execution completes successfully
         * @param onError - an error handler to run when the execution encounters an error
         * @param options - an options object to set headers and params on the request
         */
        storeFile: function (filename, downloadUrl, onSuccess, onError, options) {

            window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, fileTransfer, errorHandler);

            function fileTransfer() {
                var ft = new FileTransfer(),
                    uri = encodeURI(downloadUrl),
                    fileUrl = 'cdvfile://localhost/persistent/' + filename;

                return ft.download(uri, fileUrl, onSuccess, onError, options);
            }

        },
        /**
         * retrieve a file that has been stored on the device and upload it to a server
         *
         * usage example:
         *
         *      appworks.storage.upload('file.png', 'http://my-content-server/nodes', onSuccess, onError);
         *
         *      function onSuccess(entry) {}
         *      function onError(err) {}
         *
         * @param filename - the name of the file to retrieve from the device storage
         * @param uploadUrl - the url of the server to receive the file
         * @param onSuccess - a success handler to run when the execution completes successfully
         * @param onError - an error handler to run when the execution encounters an error
         * @param options - an options object to set headers and params on the request
         */
        uploadFile: function (filename, uploadUrl, onSuccess, onError, options) {

            window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, fileTransfer, errorHandler);

            function fileTransfer() {
                var ft = new FileTransfer(),
                    url = encodeURI(uploadUrl),
                    fileUrl = 'cdvfile://localhost/persistent/' + filename;

                return ft.upload(fileUrl, url, onSuccess, onError, options);
            }
        },
        /**
         * retrieve a file that has been stored previously on the device as a base 64 string
         * @param filename - the name of the file stored
         * @param callback - a function to execute with the base 64 string representation of the file
         * @param errorCallback - a function to execute when the process encounters an error
         * @param options - an options object to set the type of storage (temporary or persistent)
         */
        getFile: function (filename, callback, errorCallback, options) {

            options = options || {};
            options.fileSystem = options.fileSystem || LocalFileSystem.PERSISTENT;

            if (options.resolveLocalFileSystemURL) {
                window.resolveLocalFileSystemURL(filename, fileHandler, errorCallback);
            } else {
                window.requestFileSystem(options.fileSystem, 0, fileSystemHandler, errorHandler);
            }

            function fileSystemHandler(fileSystem) {
                fileSystem.root.getFile(filename, null, fileHandler, errorHandler);
            }

            function fileHandler(entry) {
                entry.file(readAsDataUrl, errorCallback);
            }

            function readAsDataUrl(file) {
                var reader = new FileReader();
                reader.onloadend = function (evt) {
                    callback(evt.target.result);
                };
                reader.readAsDataURL(file);
            }
        }
    };

    return awStorage;
}
function AppWorksOffline(aw) {
    'use strict';

    // add identifier to global appworks object
    aw.network = {
        online: 'onLine' in navigator && navigator.onLine,
        offline: 'onLine' in navigator && !navigator.onLine
    };
    // watch for online event and send all requests queued while device was offline.
    document.addEventListener('online', sendQueuedRequests);
    // watch for online event and set global identifier
    document.addEventListener('online', networkOnline);
    // watch for offline event and set global identifier
    document.addEventListener('offline', networkOffline);

    var xhr = new XMLHttpRequest(),
        CACHE_REQUESTS_ID = '_storedRequests';

    function networkOnline() {
        aw.network = aw.network || {};
        aw.network.online = true;
        aw.network.offline = false;
        //// put a buffer of time between when the network says it is online to ensure that we can make requests
        setTimeout(sendQueuedRequests, 2000);
    }

    function networkOffline() {
        aw.network = aw.network || {};
        aw.network.online = false;
        aw.network.offline = true;
    }

    function getStoredRequests(callback) {
        aw.cache.getItem(CACHE_REQUESTS_ID, callback);
    }

    function clearQueue() {
        aw.cache.removeItem(CACHE_REQUESTS_ID);
    }

    function sendQueuedRequests() {
        if (aw.network.online) {
            getStoredRequests(onGetStoredRequests);
        }

        function onGetStoredRequests(storedRequests) {
            if (storedRequests) {
                for (var i = storedRequests.length - 1; i >= 0; i -= 1) {
                    makeRequest(storedRequests[i]);
                }
                // clear the queue
                clearQueue();
            }
        }
    }

    function findRequestById(requests, id) {
        for (var i = 0; i < requests.length; i += 1) {
            if (requests[i].id === id) {
                return i;
            }
        }
        return -1;
    }

    function removeRequest(requests, index) {
        requests.splice(index, 1);
    }

    function setRequestHeaders(options) {
        for (var option in options) {
            xhr.setRequestHeader(option, options[option]);
        }
    }

    function makeRequest(req) {
        var event;
            xhr = new XMLHttpRequest();

        xhr.addEventListener('load', function () {
            var response = {detail: {data: xhr.response, status: xhr.status}};
            if (xhr.status === 200) {
                event = new CustomEvent(req.id, response);
                event.data = xhr.response;
                document.dispatchEvent(event);
            } else if (xhr.status !== 200) {
                event = new CustomEvent(req.id + '__error', response);
                event.data = xhr.response;
                document.dispatchEvent(event);
            }
        });
        xhr.open(req.options.method, req.url, true);
        setRequestHeaders(req.options);
        xhr.send(req.data || null);
    }

    function registerEventHandler(eventName, handler) {
        return document.addEventListener(eventName, handler);
    }

    function removeEventHandler(eventName, handler) {
        return document.removeEventListener(eventName, handler);
    }

    var awOffline = {

        registerEventHandler: registerEventHandler,
        removeEventHandler: removeEventHandler,
        flush: sendQueuedRequests,
        queuedRequests: getStoredRequests,
        id: String.random,
        /**
         * example:
         *  var headers = {},
         *      options = {method: 'GET', eventListener: 'myEventListener', headers: headers};
         *
         *  appworks.offline.queue('http://thecatapi.com/api/images/get', options)
         *          .success(function (data) {})
         *          .error(function (err) {});
         *
         *
         * @param url
         * @param options
         * @returns {{success: successFn, error: errorFn, then: promiseFn}}
         */
        queue: function (url, options) {

            var requestId = options.eventListener || String.random(),
                request = {id: requestId, url: url, options: options};

            setOptions();

            if (aw.network.offline) {
                // we are offline, store the request to be made later
                aw.cache.getItem(CACHE_REQUESTS_ID, onGetStoredRequests);
            }

            function onGetStoredRequests(storedRequests) {
                if (storedRequests && findRequestById(storedRequests, request.id) === -1) {
                    storedRequests.push(request);
                    aw.cache.setItem(CACHE_REQUESTS_ID, storedRequests);
                } else {
                    aw.cache.setItem(CACHE_REQUESTS_ID, [request]);
                }
            }

            function setOptions() {
                options = options || {};
                options.eventListener = options.eventListener || requestId;
                options.method = options.method || 'GET';
                options.headers = options.headers || {};
            }

            function successFn(handler) {
                // pass callback to event that will be fired when the request is made
                registerEventHandler(requestId, handler);

                if (aw.network.online) {
                    makeRequest(request);
                }

                return {
                    error: errorFn
                };
            }

            function errorFn(errorHandler) {
                registerEventHandler(requestId + '__error', errorHandler);
            }

            function promiseFn(successHandler, errorHandler) {
                successFn(successHandler);
                errorFn(errorHandler);
            }

            return {
                success: successFn,
                error: errorFn,
                then: promiseFn
            };

        }
    };

    return awOffline;
}
function AppWorksNotifications(aw) {
    'use strict';

    var wsProtocol = 'appworks',
        wsHost =  '127.0.0.1',
        wsPort = '9000',
        wsFull = 'ws://' + wsHost + ':' + wsPort,
        websocket = new WebSocket(wsFull, wsProtocol),
        notifications = [],
        userCallback;

    // notifications enabled by default
    on();

    function onNotification(message) {
        // TODO determine if this notification is intended for this app
        notifications.push(message.data);
        // execute the user defined callback
        if (userCallback) {
            userCallback(message.data);
        }
    }

    function registerUserCallback(callback) {
        userCallback = callback;
    }

    function get() {
        return notifications;
    }

    function clear() {
        notifications = [];
    }

    function on() {
        websocket.onmessage = onNotification;
    }

    function off() {
        clear();
        websocket.onmessage = null;
    }

    var awNotifications = {
        get: get,
        clear: clear,
        on: on,
        off: off,
        handler: registerUserCallback
    };

    return awNotifications;
}
(function (global) {
    'use strict';

    var aw = new AppWorksCore();
    document.addEventListener('deviceready', bindModules);

    function bindModules() {
        // add appworks plugins
        aw.storage = new AppWorksStorage(aw);
        aw.cache = new AppWorksCache(aw);
        aw.comms = new AppWorksComms(aw);
        aw.offline = new AppWorksOffline(aw);
        aw.notifications = new AppWorksNotifications(aw);

        // error checking
        if (!global.cordova) {
            throw new Error('cordova not found. deviceready should not have been fired but it was');
        }
        // add cordova plugins to mask calls
        aw.accelerometer = global.navigator.accelerometer;
        aw.battery = global.navigator.battery;
        aw.cancelVibration = global.navigator.cancelVibration;
        aw.compass = global.navigator.compass;
        aw.connection = global.navigator.connection;
        aw.contacts = global.navigator.contacts;
        aw.device = global.navigator.device;
        aw.globalization = global.navigator.globalization;
        aw.getStorageUpdates = global.navigator.getStorageUpdates;

        global.appworks = aw;
    }

    global.appworks = aw;

})(window);