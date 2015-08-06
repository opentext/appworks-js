(function (global) {
    'use strict';

    var aw = AppWorksCore();
    document.addEventListener('deviceready', bindModules);

    function bindModules() {
        // add appworks plugins
        aw.storage = AppWorksStorage(aw);
        aw.cache = AppWorksCache(aw);
        aw.comms = AppWorksComms(aw);
        aw.offline = AppWorksOffline(aw);
        aw.notifications = AppWorksNotifications(aw);

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