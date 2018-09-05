import {AWPlugin} from '../../common/plugin';
import {AWProxy} from '../../common/proxy';

export class Print extends AWPlugin {
  print(options?: any) {
    AWProxy.exec(
      (() => this.successHandler)(),
      (() => this.errorHandler)(),
      'AWPrint',
      'print',
      [options]
    );
  }

  getPrinters() {
    AWProxy.exec(
      (() => this.successHandler)(),
      (() => this.errorHandler)(),
      'AWPrint',
      'getPrinters',
      []
    );
  }

  printToPDF(options?: any) {
    AWProxy.exec(
      (() => this.successHandler)(),
      (() => this.errorHandler)(),
      'AWPrint',
      'printToPDF',
      [options]
    );
  }
}

export class AWPrint extends Print {
}
