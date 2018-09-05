import { AWPlugin } from "../../common/plugin";
export declare class AWLauncher extends AWPlugin {
    constructor(successHandler?: any, errorHandler?: any);
    getLaunchData(successHandler: any, errorHandler: any): void;
    getLaunchURL(successHandler: any, errorHandler: any): void;
    clearLaunchData(): void;
    clearLaunchURL(): void;
}
