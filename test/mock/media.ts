import {IosPlayOptions, MediaInterface} from '../../src/plugins/media/index';

export class MockMedia implements MediaInterface {
    position: number;
    duration: number;

    constructor(src, successHandler, errorHandler, statusChangeHandler) {

    }

    getCurrentPosition(mediaSuccess: (position: number) => void,
                       mediaError?: (error: MediaError) => void): void {
    }

    getDuration(): number {
        return null;
    }

    play(iosPlayOptions?: IosPlayOptions): void {

    }

    pause(): void {

    }

    release(): void {

    }

    seekTo(position: number): void {

    }

    setVolume(volume: number): void {

    }

    startRecord(): void {

    }

    stopRecord(): void {

    }

    stop(): void {

    }
}
