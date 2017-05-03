import { AWPlugin } from '../../common/plugin';
export declare class AWAccelerometer extends AWPlugin {
    getCurrentAcceleration(): void;
    watchAcceleration(options?: any): any;
    clearWatch(watchId: number): void;
}
