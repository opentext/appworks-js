(function (global) {
    'use strict';

    var aw = new AppWorksCore();
    aw.cache = new AppWorksCache(aw);
    document.addEventListener('deviceready', bindDependentModules);

    function bindDependentModules() {
        // add appworks plugins
        aw.storage = new AppWorksStorage(aw);
        aw.comms = new AppWorksComms(aw);
        aw.offline = new AppWorksOffline(aw);
        aw.auth = new AppWorksAuth(aw);
        aw.notifications = new AppWorksNotifications(aw, aw.auth);

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
        aw.geolocation = global.navigator.geolocation;

        global.appworks = aw;
    }

    global.appworks = aw;

})(window);