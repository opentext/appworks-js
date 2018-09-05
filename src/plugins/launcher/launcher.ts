import {AWPlugin} from '../../common/plugin';
import {AWProxy} from '../../common/proxy';
import {noop} from '../../common/util';

export class AWLauncher extends AWPlugin {

  constructor(successHandler?: any, errorHandler?: any) {
    super(successHandler || noop, errorHandler || noop);
  }

  getLaunchData(successHandler: any, errorHandler: any) {
    AWProxy.exec(
      successHandler,
      errorHandler,
      'AWLauncher',
      'getLaunchData',
      []
    );
  }

  getLaunchURL(successHandler: any, errorHandler: any) {
    AWProxy.exec(
      successHandler,
      errorHandler,
      'AWLauncher',
      'getLaunchURL',
      []
    );
  }

  clearLaunchData() {
    AWProxy.exec(
      (() => this.successHandler)(),
      (() => this.errorHandler)(),
      'AWLauncher',
      'clearLaunchData',
      []
    );
  }

  clearLaunchURL() {
    AWProxy.exec(
      (() => this.successHandler)(),
      (() => this.errorHandler)(),
      'AWLauncher',
      'clearLaunchURL',
      []
    );
  }
}
