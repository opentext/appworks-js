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

  barcode(multiple?: boolean) {
    AWProxy.exec(
      (() => this.successHandler)(),
      (() => this.errorHandler)(),
      'AWQRCodeReader',
      'barcode',
      [multiple]
    );
  }
}

export class AWQRReader extends QRReader {
}
