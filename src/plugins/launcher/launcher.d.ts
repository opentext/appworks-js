import { AWPlugin } from "../../common/plugin";
export declare class AWLauncher extends AWPlugin {
    constructor(successHandler?: any, errorHandler?: any);
    getLaunchURL(successHandler: any, errorHandler: any): void;
    clearLaunchURL(): void;
}
