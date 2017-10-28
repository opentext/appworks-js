import { Compass, CompassError, CompassHeading, CompassOptions } from '../../src/plugins/device-orientation/index';
export declare class MockCompass implements Compass {
    getCurrentHeading(onSuccess: (heading: CompassHeading) => void, onError: (error: CompassError) => void, options?: CompassOptions): void;
    watchHeading(onSuccess: (heading: CompassHeading) => void, onError: (error: CompassError) => void, options?: CompassOptions): number;
    clearWatch(id: number): void;
}
