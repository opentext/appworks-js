function AppWorksAuth() {
    'use strict';

    var authObject;

    var authPromise = {
        defer: function () {
            var handler,
                promise = {
                    then: function (callback) {
                        handler = callback;
                    }
                },
                onAuth = function onAuth(data) {
                    if (typeof handler === 'function') {
                        handler(data.data);
                    }
                    document.removeEventListener('appworksjs.auth', onAuth);
                };
            document.addEventListener('appworksjs.auth', onAuth);
            return promise;
        }
    };

    function bindGlobalAuthObject(auth) {
        var event = new CustomEvent('appworksjs.auth');
        window.otagtoken = auth.otagtoken;
        window.otdsticket = auth.otdsticket;
        window.gatewayUrl = auth.gatewayUrl;
        authObject = auth;
        event.data = auth;
        document.dispatchEvent(event);
    }

    function getAuthObject() {
        return authObject;
    }

    function authenticate() {
        var deferred = authPromise.defer();
        if (cordova) {
            cordova.exec(onAuthenticationSuccess, onAuthenticationError, 'authenticateCordovaController', 'reAuthenticate');
        } else {
            console.error('Cordova must be loaded before authenticating');
        }
        return deferred.promise;
    }

    function onAuthenticationSuccess(data) {
        console.log(data);
    }

    function onAuthenticationError(err) {
        console.log(err);
    }

    return {
        bindGlobalAuthObject: bindGlobalAuthObject,
        getAuth: getAuthObject,
        authenticate: authenticate
    };
}