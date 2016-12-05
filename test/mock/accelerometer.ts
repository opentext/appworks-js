/// <reference path="../../typings/globals/cordova/plugins/devicemotion/index.d.ts"/>

export class MockAccelerometer implements Accelerometer {
    getCurrentAcceleration(accelerometerSuccess: (acceleration: Acceleration) => void,
                           accelerometerError: () => void,
                           accelerometerOptions?: AccelerometerOptions): WatchHandle {
                               return null;
    }

    watchAcceleration(accelerometerSuccess: (acceleration: Acceleration) => void,
                      accelerometerError: () => void,
                      accelerometerOptions?: AccelerometerOptions): WatchHandle {
                          return null;
    }

    clearWatch(watchID: WatchHandle): void {

    }
}