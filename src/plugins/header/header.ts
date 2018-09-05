import {AWPlugin} from "../../common/plugin";
import {AWProxy} from "../../common/proxy";

export class AWHeaderBar extends AWPlugin {

  static readonly ButtonName = {LeftOne: 0, LeftTwo: 1, RightOne: 2, RightTwo: 3};
  static readonly ButtonImage = {
    Hamburger: 0,
    Back: 1,
    Settings: 2,
    Appmenu: 3,
    None: 5,
    Dots: 6,
    Search: 7,
    AppmenuHighlight: 8,
    Close: 9,
    DismissAll: 10,
    Edit: 11
  };

  /**
   * @deprecated
   * @type {{LeftOne: number; LeftTwo: number; RightOne: number; RightTwo: number}}
   */
  ButtonName = {LeftOne: 0, LeftTwo: 1, RightOne: 2, RightTwo: 3};
  /**
   * @deprecated
   * @type {{Hamburger: number; Back: number; Settings: number; Appmenu: number; None: number; Dots: number; Search: number, AppmenuHighlight: number, Close: number, DismissAll: number, Edit: number}}
   */
  ButtonImage = {
    Hamburger: 0,
    Back: 1,
    Settings: 2,
    Appmenu: 3,
    None: 5,
    Dots: 6,
    Search: 7,
    AppmenuHighlight: 8,
    Close: 9,
    DismissAll: 10,
    Edit: 11
  };

  private callback: any;

  setHeader(config: any) {
    if (config && config.callback) {
      this.callback = config.callback;
      config.callback = true;
    } else {
      this.callback = null;
    }
    AWProxy.exec(
      (() => this.callback)(),
      (() => this.errorHandler)(),
      "AWHeaderBar",
      "setHeader",
      [config]
    );
  }

  getHeader() {
    AWProxy.exec(
      (() => this.successHandler)(),
      (() => this.errorHandler)(),
      "AWHeaderBar",
      "getHeader",
      []
    );
  }

  setHeaderButtons(callback: Function, config: any) {
    AWProxy.exec(
      callback,
      (() => this.errorHandler)(),
      "AWHeaderBar",
      "setHeaderButtons",
      [config]
    );
  }

  maskHeader(shouldMaskHeader: any) {
    AWProxy.exec(
      (() => this.successHandler)(),
      (() => this.errorHandler)(),
      "AWHeaderBar",
      "maskHeader",
      [shouldMaskHeader]
    );
  }
}

// alias
export class AWHeader extends AWHeaderBar {
}
