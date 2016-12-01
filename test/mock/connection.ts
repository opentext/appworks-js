/// <reference path="../../typings/globals/cordova/plugins/networkinformation/index.d.ts"/>

/// <reference path="../../typings/globals/cordova/plugins/dialogs/index.d.ts"/>

export class MockConnection implements Connection {
    type: string;

    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void {

    }

    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void {

    }
}