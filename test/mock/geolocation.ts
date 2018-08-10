import {Geolocation} from "../../src/plugins/location/index";

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
