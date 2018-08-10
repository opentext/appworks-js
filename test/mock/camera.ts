import {CameraInterface, CameraOptions} from "../../src/plugins/camera/index";

export class MockCamera implements CameraInterface {

  cleanup(
    onSuccess: () => void,
    onError: (message: string) => void): void {
  }

  getPicture(
    cameraSuccess: (data: string) => void,
    cameraError: (message: string) => void,
    cameraOptions?: CameraOptions): void {
  }
}
