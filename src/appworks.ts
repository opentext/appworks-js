/// <reference path="../typings/cordova/cordova.d.ts"/>

class AWPlugin {
    authSuccess: () => void;
    authFail: () => void;

    constructor(successHandler: any, errorHandler: any) {
        this.authSuccess = successHandler;
        this.authFail = errorHandler;
    }
}

module Appworks {
    export class Auth extends AWPlugin {
        authenticate() {
            cordova.exec((() => this.authSuccess)(), (() => this.authFail)(), 'AWAuth', 'authenticate');
        }
    }
    export class QRReader extends AWPlugin {
        scan() {
            cordova.exec((() => this.authSuccess)(), (() => this.authFail)(), 'AWQRCodeReader', 'scan');
        }
        rename() {
            cordova.exec((() => this.authSuccess)(), (() => this.authFail)(), 'AWQRCodeReader', 'rename');
        }
    }
}