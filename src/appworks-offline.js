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

    function networkOnline() {
        aw.network = aw.network || {};
        aw.network.online = true;
        aw.network.offline = false;
    }

    function networkOffline() {
        aw.network = aw.network || {};
        aw.network.online = false;
        aw.network.offline = true;
    }

    function sendQueuedRequests() {// TODO
    }

    var awOffline = {
        queueRequest: function () {// TODO
        }
    };

    return awOffline;
}