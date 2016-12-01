/// <reference path="../../typings/globals/cordova/plugins/deviceorientation/index.d.ts"/>

export class MockCompass implements Compass {
    getCurrentHeading(
        onSuccess: (heading: CompassHeading) => void,
        onError: (error: CompassError) => void,
        options?: CompassOptions): void {
    }

    watchHeading(
        onSuccess: (heading: CompassHeading) => void,
        onError: (error: CompassError) => void,
        options?: CompassOptions): number {
            return null;
    }

    clearWatch(id: number): void {
    }
}
