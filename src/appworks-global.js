(function (global) {
    'use strict';

    var aw = AppWorksCore();

    document.addEventListener('deviceready', function () {

        // add appworks plugins
        aw.storage = AppWorksStorage(aw);
        aw.cache = AppWorksCache(aw);
        aw.comms = AppWorksComms(aw);

        // add cordova plugins to mask calls
        aw.accelerometer = global.navigator.accelerometer;
        aw.battery = global.navigator.battery;
        aw.camera = global.navigator.camera;
        aw.cancelVibration = global.navigator.cancelVibration;
        aw.compass = global.navigator.compass;
        aw.connection = global.navigator.connection;
        aw.contacts = global.navigator.contacts;
        aw.device = global.navigator.device;
        aw.globalization = global.navigator.globalization;
        aw.getStorageUpdates = global.navigator.getStorageUpdates;

        global.appworks = aw;
    });

    global.appworks = aw;

})(window);