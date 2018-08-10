import { AWPlugin } from "../../common/plugin";
import { CameraOptions } from "./index";
export declare class AWCamera extends AWPlugin {
    cleanup(onSuccess: () => void, onError: (message: string) => void): void;
    getPicture(cameraSuccess: (data: string) => void, cameraError: (message: string) => void, cameraOptions?: CameraOptions): void;
    openGallery(options?: any): void;
    takePicture(options?: any): void;
}
