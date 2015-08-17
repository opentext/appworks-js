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