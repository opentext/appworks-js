import { AWPlugin } from '../../common/plugin';
export declare class AWMedia extends AWPlugin {
    media: any;
    src: string;
    position: any;
    duration: number;
    constructor(src: string, successHandler: any, errorHandler?: any, statusChangeHandler?: any);
    getCurrentPosition(successHandler: any, errorHandler?: any): any;
    getDuration(): any;
    pause(): any;
    play(): any;
    release(): any;
    seekTo(value: number): any;
    setVolume(value: number): any;
    startRecord(): any;
    stop(): any;
    stopRecord(): any;
}
