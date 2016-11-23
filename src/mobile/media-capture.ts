/// <reference path="../../typings/globals/cordova/index.d.ts"/>
/// <reference path="../../typings/globals/cordova/plugins/mediacapture/index.d.ts"/>

import {AWPlugin} from '../core/aw-plugin';

export class AWMediaCapture extends AWPlugin implements Capture {

    supportedAudioModes: any;
    supportedImageModes: any;
    supportedVideoModes: any;

    constructor(successHandler: any, errorHandler?: any) {
        super(successHandler, errorHandler);
        this.supportedAudioModes = navigator.device.capture.supportedAudioModes;
        this.supportedImageModes = navigator.device.capture.supportedImageModes;
        this.supportedVideoModes = navigator.device.capture.supportedVideoModes;
    }

    captureAudio(options?: any) {
        navigator.device.capture.captureAudio(
            (() => this.successHandler)(),
            (() => this.errorHandler)(),
            options
        );
    }

    captureImage(options?: any) {
        navigator.device.capture.captureImage(
            (() => this.successHandler)(),
            (() => this.errorHandler)(),
            options
        );
    }

    captureVideo(options?: any) {
        navigator.device.capture.captureVideo(
            (() => this.successHandler)(),
            (() => this.errorHandler)(),
            options
        );
    }
}