import {Acceleration, Accelerometer, AccelerometerOptions, WatchHandle} from "../../src/plugins/device-motion/index";

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
