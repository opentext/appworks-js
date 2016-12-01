/// <reference path="../../typings/globals/cordova/plugins/mediacapture/index.d.ts"/>

export class MockCapture implements Capture {
    supportedAudioModes: ConfigurationData[];
    supportedImageModes: ConfigurationData[];
    supportedVideoModes: ConfigurationData[];

    captureAudio(onSuccess: (mediaFiles: MediaFile[]) => void,
                 onError: (error: CaptureError) => void,
                 options?: AudioOptions): void {

    }

    captureImage(onSuccess: (mediaFiles: MediaFile[]) => void,
                 onError: (error: CaptureError) => void,
                 options?: ImageOptions): void {

    }

    captureVideo(onSuccess: (mediaFiles: MediaFile[]) => void,
                 onError: (error: CaptureError) => void,
                 options?: VideoOptions): void {

    }
}
