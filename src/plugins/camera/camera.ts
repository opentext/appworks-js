import {AWPlugin} from '../../common/plugin';
import {AWProxy} from '../../common/proxy';
import {CameraOptions} from './index';

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
                destinationType: AWProxy.Camera().DestinationType.FILE_URI
            };
        options.sourceType = AWProxy.Camera().PictureSourceType.PHOTOLIBRARY;
        return this.getPicture((() => this.successHandler)(), (() => this.errorHandler)(), options);
    }

    takePicture(options?: any) {
        options = options || {
                destinationType: AWProxy.Camera().DestinationType.FILE_URI,
                encodingType: AWProxy.Camera().EncodingType.JPEG,
                mediaType: AWProxy.Camera().MediaType.ALLMEDIA,
                correctOrientation: true,
                saveToPhotoAlbum: true
            };
        options.sourceType = AWProxy.Camera().PictureSourceType.CAMERA;
        return this.getPicture((() => this.successHandler)(), (() => this.errorHandler)(), options);
    }
}