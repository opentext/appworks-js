import {AWPlugin} from '../../common/plugin';
import {AWProxy} from '../../common/proxy';

export class AWComponent extends AWPlugin {
  open(successHandler: any, errorHandler?: any, args?: any[]) {
    AWProxy.exec(
      successHandler,
      errorHandler,
      'AWComponent',
      'open',
      args || []
    );
  }

  list(successHandler: any, errorHandler?: any, args?: any[]) {
    AWProxy.exec(
      successHandler,
      errorHandler,
      'AWComponent',
      'list',
      args || []
    );
  }

  check(successHandler: any, errorHandler?: any, args?: any[]) {
    AWProxy.exec(
      successHandler,
      errorHandler,
      'AWComponent',
      'check',
      args || []
    );
  }

  close(successHandler: any, errorHandler?: any, args?: any[]) {
    AWProxy.exec(
      successHandler,
      errorHandler,
      'AWComponent',
      'close',
      args || []
    );
  }

  registerAppClose(successHandler: any) {
    AWProxy.exec(
      successHandler,
      (() => this.errorHandler)(),
      'AWComponent',
      'registerAppClose',
      []
    );
  }

  closeApp() {
    AWProxy.exec(
      (() => this.successHandler)(),
      (() => this.errorHandler)(),
      'AWComponent',
      'closeApp',
      []
    );
  }

}
