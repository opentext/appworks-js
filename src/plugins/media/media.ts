import {AWPlugin} from '../../plugin';
import {AWProxy} from '../../proxy';

export class AWMedia extends AWPlugin {

    media: any;
    src: string;
    position: any;
    duration: number;

    constructor(src: string, successHandler: any, errorHandler?: any, statusChangeHandler?: any) {
        super(successHandler, errorHandler);
        this.media = AWProxy.media(src, successHandler, errorHandler, statusChangeHandler);
        this.src = src;
        this.position = this.media.position;
        this.duration = this.media.duration;
    }

    getCurrentPosition(successHandler: any, errorHandler?: any) {
        return this.media.getCurrentPosition(successHandler, errorHandler);
    }

    getDuration() {
        return this.media.getDuration();
    }

    pause() {
        return this.media.pause();
    }

    play() {
        return this.media.play();
    }

    release() {
        return this.media.release();
    }

    seekTo(value: number) {
        return this.media.seekTo(value);
    }

    setVolume(value: number) {
        return this.media.setVolume(value);
    }

    startRecord() {
        return this.media.startRecord();
    }

    stop() {
        return this.media.stop();
    }

    stopRecord() {
        return this.media.stopRecord();
    }
}