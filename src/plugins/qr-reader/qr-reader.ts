import {AWPlugin} from '../../common/plugin';
import {AWProxy} from '../../common/proxy';

export class QRReader extends AWPlugin {
  scan() {
    AWProxy.exec(
      (() => this.successHandler)(),
      (() => this.errorHandler)(),
      'AWQRCodeReader',
      'scan',
      []
    );
  }

  rename() {
    AWProxy.exec(
      (() => this.successHandler)(),
      (() => this.errorHandler)(),
      'AWQRCodeReader',
      'rename',
      []
    );
  }

  barcode(multiple?: boolean, timeout?: number, finishTitle?: string, cancelTitle?: string) {
    AWProxy.exec(
      (() => this.successHandler)(),
      (() => this.errorHandler)(),
      'AWQRCodeReader',
      'barcode',
      [multiple, timeout, finishTitle, cancelTitle]
    );
  }
}

export class AWQRReader extends QRReader {
}
