import { Acceleration, Accelerometer, AccelerometerOptions, WatchHandle } from "../../src/plugins/device-motion/index";
export declare class MockAccelerometer implements Accelerometer {
    getCurrentAcceleration(accelerometerSuccess: (acceleration: Acceleration) => void, accelerometerError: () => void, accelerometerOptions?: AccelerometerOptions): WatchHandle;
    watchAcceleration(accelerometerSuccess: (acceleration: Acceleration) => void, accelerometerError: () => void, accelerometerOptions?: AccelerometerOptions): WatchHandle;
    clearWatch(watchID: WatchHandle): void;
}
