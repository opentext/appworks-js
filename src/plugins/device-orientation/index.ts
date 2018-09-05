export * from './compass';

export interface Navigator {
  /**
   * This plugin provides access to the device's compass. The compass is a sensor that detects
   * the direction or heading that the device is pointed, typically from the top of the device.
   * It measures the heading in degrees from 0 to 359.99, where 0 is north.
   */
  compass: Compass;
}

/**
 * This plugin provides access to the device's compass. The compass is a sensor that detects
 * the direction or heading that the device is pointed, typically from the top of the device.
 * It measures the heading in degrees from 0 to 359.99, where 0 is north.
 */
export interface Compass {
  /**
   * Get the current compass heading. The compass heading is returned via a CompassHeading
   * object using the onSuccess callback function.
   * @param onSuccess Success callback that passes CompassHeading object.
   * @param onError Error callback that passes CompassError object.
   */
  getCurrentHeading(
    onSuccess: (heading: CompassHeading) => void,
    onError: (error: CompassError) => void,
    options?: CompassOptions): void;

  /**
   * Gets the device's current heading at a regular interval. Each time the heading is retrieved,
   * the headingSuccess callback function is executed. The returned watch ID references the compass
   * watch interval. The watch ID can be used with navigator.compass.clearWatch to stop watching
   * the navigator.compass.
   * @param onSuccess Success callback that passes CompassHeading object.
   * @param onError   Error callback that passes CompassError object.
   * @param options   CompassOptions object
   */
  watchHeading(
    onSuccess: (heading: CompassHeading) => void,
    onError: (error: CompassError) => void,
    options?: CompassOptions): number;

  /**
   * Stop watching the compass referenced by the watch ID parameter.
   * @param id The ID returned by navigator.compass.watchHeading.
   */
  clearWatch(id: number): void;
}

/** A CompassHeading object is returned to the compassSuccess callback function. */
export interface CompassHeading {
  /** The heading in degrees from 0-359.99 at a single moment in time. */
  magneticHeading: number;
  /** The heading relative to the geographic North Pole in degrees 0-359.99 at a single moment in time. A negative value indicates that the true heading can't be determined. */
  trueHeading: number;
  /** The deviation in degrees between the reported heading and the true heading. */
  headingAccuracy: number;
  /** The time at which this heading was determined. */
  timestamp: number;
}

export interface CompassOptions {
  filter?: number;
  frequency?: number;
}

/** A CompassError object is returned to the onError callback function when an error occurs. */
export interface CompassError {
  /**
   * One of the predefined error codes
   *     CompassError.COMPASS_INTERNAL_ERR
   *     CompassError.COMPASS_NOT_SUPPORTED
   */
  code: number;
}

export declare var CompassError: {
  /** Constructor for CompassError object */
  new(code: number): CompassError;
  COMPASS_INTERNAL_ERR: number;
  COMPASS_NOT_SUPPORTED: number
};
