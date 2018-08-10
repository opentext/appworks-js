import { AWPlugin } from "../../common/plugin";
export declare class AWLocation extends AWPlugin {
    getCurrentPosition(options?: any): void;
    watchPosition(options?: any): number;
    clearWatch(watchId: number): void;
}
