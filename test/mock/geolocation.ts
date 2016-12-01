/// <reference path="../../typings/globals/cordova/plugins/devicemotion/index.d.ts"/>

export class MockGeolocation implements Geolocation {
    clearWatch(watchId: number): void {
    }

    getCurrentPosition(successCallback: PositionCallback,
                       errorCallback?: PositionErrorCallback,
                       options?: PositionOptions): void {
    }

    watchPosition(successCallback: PositionCallback,
                  errorCallback?: PositionErrorCallback,
                  options?: PositionOptions): number {
        return null;
    }
}
