/// <reference path="../../typings/globals/cordova/plugins/camera/index.d.ts"/>

export class MockCamera implements Camera {

    cleanup(
        onSuccess: () => void,
        onError: (message: string) => void): void {
    }

    getPicture(
        cameraSuccess: (data: string) => void,
        cameraError: (message: string) => void,
        cameraOptions?: CameraOptions): void {
    }
}
