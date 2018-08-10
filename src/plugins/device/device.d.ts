import { AWPlugin } from "../../common/plugin";
import { Capture } from "../media-transfer/index";
export declare class AWDevice extends AWPlugin {
    cordova: any;
    model: any;
    platform: any;
    uuid: any;
    version: any;
    manufacturer: any;
    capture: Capture;
    constructor();
}
