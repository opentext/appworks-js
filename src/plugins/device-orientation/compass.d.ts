import { AWPlugin } from '../../common/plugin';
export declare class AWCompass extends AWPlugin {
    getCurrentHeading(): void;
    watchHeading(options?: any): number;
    clearWatch(watchId: number): void;
}
