function AppWorksQR() {
    'use strict';

    var qrObject;

    var qrPromise = {
        defer: function () {
            var handler,
                promise = {
                    then: function (callback) {
                        handler = callback;
                    }
                },
                onQr = function onQr(data) {
                    if (typeof handler === 'function') {
                        handler(data.data);
                    }
                    document.removeEventListener('appworksjs.qr', onQr);
                };
            document.addEventListener('appworksjs.qr', onQr);
            return promise;
        }
    };

    function qrInvoke(successFn) {
        var deferred = qrPromise.defer();
        if (cordova) {
            cordova.exec(successFn, onQRError, 'qrReaderCordovaPlugin', 'qrInvoke');
        } else {
            console.error('Cordova must be loaded before authenticating');
        }
        return deferred.promise;
    }

    function onQRSuccess(data) {
        console.log(data);
    }

    function onQRError(err) {
        console.log(err);
    }

    return {
        qrInvoke: qrInvoke
    };
}