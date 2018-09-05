import {AWPlugin} from '../../common/plugin';
import {AWProxy} from '../../common/proxy';

export class AWAuth extends AWPlugin {
  authenticate(force?: boolean) {
    force = !!force;
    AWProxy.exec(
      (() => this.successHandler)(),
      (() => this.errorHandler)(),
      'AWAuth',
      'authenticate',
      [force.toString()]
    );
  }

  /**
   *  Marked for depreciation
   *  Use authenticate(boolean?), which will get the auth object if the session is valid, else it will refresh the auth object and return that.
   */
  getAuthResponse() {
    AWProxy.exec(
      (() => this.successHandler)(),
      (() => this.errorHandler)(),
      'AWAuth',
      'authobject',
      []
    );
  }

  gateway(successHandler: any, errorHandler?: any) {
    AWProxy.exec(
      successHandler,
      errorHandler,
      'AWAuth',
      'gateway',
      []
    );
  }

  online(successHandler: any, errorHandler?: any) {
    AWProxy.exec(
      successHandler,
      errorHandler,
      'AWAuth',
      'online',
      []
    );
  }

  otdsssoticket(successHandler: any, errorHandler: any) {
    AWProxy.exec(
      successHandler,
      errorHandler,
      'AWAuth',
      'otdsssoticket',
      []
    );
  }
}
