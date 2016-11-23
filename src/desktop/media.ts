import {AWPlugin} from '../core/aw-plugin';

export class AWMedia extends AWPlugin {

    media: any;
    src: string;
    position: any;
    duration: number;

    constructor(src: string, successHandler: any, errorHandler?: any, statusChangeHandler?: any) {
        super(successHandler, errorHandler);
        // TODO
    }

    getCurrentPosition(successHandler: any, errorHandler?: any) {
        // TODO
    }

    getDuration() {
        // TODO
    }

    pause() {
        // TODO
    }

    play() {
        // TODO
    }

    release() {
        // TODO
    }

    seekTo(value: number) {
        // TODO
    }

    setVolume(value: number) {
        // TODO
    }

    startRecord() {
        // TODO
    }

    stop() {
        // TODO
    }

    stopRecord() {
        // TODO
    }
}