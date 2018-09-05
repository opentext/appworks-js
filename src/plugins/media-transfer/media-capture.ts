import {AWPlugin} from '../../common/plugin';
import {AWProxy} from '../../common/proxy';
import {Capture} from './index';

export class AWMediaCapture extends AWPlugin implements Capture {

  supportedAudioModes: any;
  supportedImageModes: any;
  supportedVideoModes: any;

  constructor(successHandler: any, errorHandler?: any) {
    super(successHandler, errorHandler);
    this.supportedAudioModes = AWProxy.device().capture.supportedAudioModes;
    this.supportedImageModes = AWProxy.device().capture.supportedImageModes;
    this.supportedVideoModes = AWProxy.device().capture.supportedVideoModes;
  }

  captureAudio(options?: any) {
    AWProxy.device().capture.captureAudio(
      (() => this.successHandler)(),
      (() => this.errorHandler)(),
      options
    );
  }

  captureImage(options?: any) {
    AWProxy.device().capture.captureImage(
      (() => this.successHandler)(),
      (() => this.errorHandler)(),
      options
    );
  }

  captureVideo(options?: any) {
    AWProxy.device().capture.captureVideo(
      (() => this.successHandler)(),
      (() => this.errorHandler)(),
      options
    );
  }
}
