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

  barcode(multiple?: boolean, timeout?: number) {
    AWProxy.exec(
      (() => this.successHandler)(),
      (() => this.errorHandler)(),
      'AWQRCodeReader',
      'barcode',
      [multiple, timeout]
    );
  }
}

export class AWQRReader extends QRReader {
}
