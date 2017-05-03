import { IosPlayOptions, MediaInterface } from '../../src/plugins/media/index';
export declare class MockMedia implements MediaInterface {
    position: number;
    duration: number;
    constructor(src: any, successHandler: any, errorHandler: any, statusChangeHandler: any);
    getCurrentPosition(mediaSuccess: (position: number) => void, mediaError?: (error: MediaError) => void): void;
    getDuration(): number;
    play(iosPlayOptions?: IosPlayOptions): void;
    pause(): void;
    release(): void;
    seekTo(position: number): void;
    setVolume(volume: number): void;
    startRecord(): void;
    stopRecord(): void;
    stop(): void;
}
