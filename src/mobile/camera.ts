/// <reference path="../../typings/globals/cordova/index.d.ts"/>
/// <reference path="../../typings/globals/cordova/plugins/camera/index.d.ts"/>

import {AWPlugin} from '../core/aw-plugin';

export class AWCamera extends AWPlugin implements Camera {
    cleanup(onSuccess: () => void,
            onError: (message: string) => void) {
        navigator.camera.cleanup(onSuccess, onError);
    }

    getPicture(cameraSuccess: (data: string) => void,
               cameraError: (message: string) => void,
               cameraOptions?: CameraOptions) {
        navigator.camera.getPicture(cameraSuccess, cameraError, cameraOptions);
    }

    openGallery(options?: any) {
        options = options || {
                destinationType: Camera.DestinationType.FILE_URI
            };
        options.sourceType = Camera.PictureSourceType.PHOTOLIBRARY;
        this.getPicture((() => this.successHandler)(), (() => this.errorHandler)(), options);
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
        this.getPicture((() => this.successHandler)(), (() => this.errorHandler)(), options);
    }
}