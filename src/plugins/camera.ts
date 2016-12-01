import {AWPlugin} from '../plugin';
import {AWProxy} from '../proxy';

export class AWCamera extends AWPlugin {
    cleanup(onSuccess: () => void,
            onError: (message: string) => void) {
        return AWProxy.camera().cleanup(onSuccess, onError);
    }

    getPicture(cameraSuccess: (data: string) => void,
               cameraError: (message: string) => void,
               cameraOptions?: CameraOptions) {
        return AWProxy.camera().getPicture(cameraSuccess, cameraError, cameraOptions);
    }

    openGallery(options?: any) {
        options = options || {
                destinationType: Camera.DestinationType.FILE_URI
            };
        options.sourceType = Camera.PictureSourceType.PHOTOLIBRARY;
        return this.getPicture((() => this.successHandler)(), (() => this.errorHandler)(), options);
    }

    takePicture(options?: any) {
        options = options || {
                destinationType: Camera.DestinationType.FILE_URI,
                encodingType: Camera.EncodingType.JPEG,
                mediaType: Camera.MediaType.ALLMEDIA,
                correctOrientation: true,
                saveToPhotoAlbum: true
            };
        options.sourceType = Camera.PictureSourceType.CAMERA;
        return this.getPicture((() => this.successHandler)(), (() => this.errorHandler)(), options);
    }
}