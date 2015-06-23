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
    }

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