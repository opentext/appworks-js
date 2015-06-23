function AppWorksOffline(aw) {
    'use strict';

    // device is online by default. add identifier to global appworks object
    aw.network = {online: true, offline: false};
    // watch for online event and send all requests queued while device was offline.
    document.addEventListener('online', sendQueuedRequests);
    // watch for online event and set global identifier
    document.addEventListener('online', networkOnline);
    // watch for offline event and set global identifier
    document.addEventListener('offline', networkOffline);
    // watch for DOMContentLoaded and send all queued requests
    document.addEventListener('DOMContentLoaded', sendQueuedRequests);

    var xhr = new XMLHttpRequest(),
        CACHE_ID = '_storedRequests';

    function networkOnline() {
        aw.network = aw.network || {};
        aw.network.online = true;
        aw.network.offline = false;
        // put a buffer of time between when the network says it is online to ensure that we can make requests
        setTimeout(sendQueuedRequests, 1000);
    }

    function networkOffline() {
        aw.network = aw.network || {};
        aw.network.online = false;
        aw.network.offline = true;
    }

    function sendQueuedRequests() {
        if (aw.network.online) {
            aw.cache.getItem(CACHE_ID, onGetStoredRequests);
        }

        function onGetStoredRequests(storedRequests) {
            if (storedRequests) {
                for (var i = 0; i < storedRequests.length; i += 1) {
                    makeRequest(storedRequests[i]);
                }
                // clear the queue
                aw.cache.removeItem(CACHE_ID);
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

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                event = new CustomEvent(req.id, {detail: {data: xhr.response, status: xhr.status}});
                event.data = xhr.response;
                document.dispatchEvent(event);
            }
        };
        xhr.open(req.options.method, req.url, true);
        setRequestHeaders(req.options);
        xhr.send(req.data || null);
    }

    var awOffline = {

        registerEventHandler: function (eventName, handler) {
            document.addEventListener(eventName, handler);
        },
        registerForAllEvents: function (handler) {
            aw.cache.getItem(CACHE_ID, onGetStoredRequests);

            function onGetStoredRequests(storedRequests) {
                if (storedRequests) {
                    for (var i = 0; i < storedRequests.length; i += 1) {
                        document.addEventListener(storedRequests[i].id, handler);
                    }
                }
            }
        },
        queue: function (url, options) {

            var requestId = options['eventListener'] || String.random(),
                request = {id: requestId, url: url, options: options};

            setOptions();

            if (aw.network.offline) {
                // we are offline, store the request to be made later
                aw.cache.getItem(CACHE_ID, onGetStoredRequests);
            } else {
                // we are online, fire the request now
                makeRequest(request);
            }

            function onGetStoredRequests(storedRequests) {
                if (storedRequests && findRequestById(storedRequests, request.id) === -1) {
                    storedRequests.push(request);
                } else {
                    aw.cache.setItem(CACHE_ID, [request]);
                }
            }

            function setOptions() {
                options = options || {};
                options['eventListener'] = options['eventListener'] || requestId;
                options['method'] = options['method'] || 'GET';
                options['headers'] = options['headers'] || {};
            }

        }
    };

    return awOffline;
}