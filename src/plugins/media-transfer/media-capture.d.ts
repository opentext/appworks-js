import { AWPlugin } from '../../common/plugin';
import { Capture } from './index';
export declare class AWMediaCapture extends AWPlugin implements Capture {
    supportedAudioModes: any;
    supportedImageModes: any;
    supportedVideoModes: any;
    constructor(successHandler: any, errorHandler?: any);
    captureAudio(options?: any): void;
    captureImage(options?: any): void;
    captureVideo(options?: any): void;
}
