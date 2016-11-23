/// <reference path="../../typings/cordova/cordova.d.ts"/>

(function initBackButton() {
    document.addEventListener('deviceready', onDeviceReady, false);
    function onDeviceReady() {
        document.addEventListener('backbutton', onBackKeyDown, false);
    }

    function onBackKeyDown() {
        cordova.exec(null, null, 'AWBackButton', 'backButtonTap', []);
    }
})();