(function (global) {
    'use strict';

    require(['appworks-core', 'appworks-cache', 'appworks-comms', 'appworks-storage'],
        function (aw, awCache, awComms, awStorage) {
            aw.cache = awCache;
            aw.comms = awComms;
            aw.storage = awStorage;
            global.AppWorks = aw;
        })
})(window);