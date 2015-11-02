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
        CACHE_REQUESTS_ID = '_storedRequests',
        DEFERRED_QUEUE_ID = '__awjsDeferredQueue',
        deferredQueue = [];

    // deferred event processing

    initDeferredQueue();

    function defer(identifier, args, eventListener) {
        var deferred;

        if (identifier && args && eventListener) {
            deferred = {
                identifier: identifier,
                args: JSON.stringify(Array.prototype.slice.call(args)),
                eventListener: eventListener
            };
            // push event onto deferred queue to be processed when the device comes back online
            deferredQueue.push(deferred);
            aw.cache.setItem(DEFERRED_QUEUE_ID, deferredQueue);
        } else {
            throw new Error('Arguments must include identifier, args, and eventListener');
        }

    }

    // load the deferred queue into memory or create a queue if one does not exist
    function initDeferredQueue() {
        aw.cache.getItem(DEFERRED_QUEUE_ID, function (queue) {
            if (queue) {
                deferredQueue = queue;
            } else {
                aw.cache.setItem(DEFERRED_QUEUE_ID, deferredQueue);
            }
        });
        // process pending events
        processDeferredQueue();
        // watch for the online event to process events that were deferred while the device was offline
        document.addEventListener('online', processDeferredQueue);
    }

    function processDeferredQueue() {
        // provide a buffer of time for other objects to get instantiated
        setTimeout(function () {
            console.log('Processing deferred queue...');
            aw.cache.getItem(DEFERRED_QUEUE_ID, function (queue) {
                if (queue) {
                    queue.forEach(function (deferred) {
                        var data = {
                                identifier: deferred.identifier,
                                args: JSON.parse(deferred.args),
                                eventListener: deferred.eventListener
                            },
                            evt = createEvent(deferred.eventListener, {detail: data});
                        document.dispatchEvent(evt);
                    });
                    deferredQueue = [];
                    aw.cache.setItem(DEFERRED_QUEUE_ID, deferredQueue);
                }
            });
        }, 5000);
    }

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

    function createEvent(name, data) {
        return new CustomEvent(name, {detail: {data: data}});
    }

    var awOffline = {

        registerEventHandler: registerEventHandler,
        removeEventHandler: removeEventHandler,
        flush: sendQueuedRequests,
        queuedRequests: getStoredRequests,
        id: String.random,
        defer: defer,
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