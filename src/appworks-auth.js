function AppWorksAuth() {
    'use strict';

    var authObject;

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
        if (cordova) {
            cordova.exec(onAuthenticationSuccess, onAuthenticationError, 'authenticateCordovaController', 'reAuthenticate');
        } else {
            console.error('Cordova must be loaded before authenticating');
        }
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