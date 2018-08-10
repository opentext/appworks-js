import {AWPlugin} from "../../common/plugin";
import {AWProxy} from "../../common/proxy";
import {noop} from "../../common/util";

export class AWKeyboard extends AWPlugin {
  constructor() {
    super(noop, noop);
  }

  hideKeyboardAccessoryBar(hide: boolean) {
    AWProxy.exec(
      (() => this.successHandler)(),
      (() => this.errorHandler)(),
      "AWKeyboard",
      "hideKeyboardAccessoryBar",
      [hide.toString()]
    );
  }

  close() {
    AWProxy.exec(
      (() => this.successHandler)(),
      (() => this.errorHandler)(),
      "AWKeyboard",
      "close",
      []
    );
  }

  show() {
    AWProxy.exec(
      (() => this.successHandler)(),
      (() => this.errorHandler)(),
      "AWKeyboard",
      "show",
      []
    );
  }

  disableScroll(disable: boolean) {
    disable = !!disable;
    AWProxy.exec(
      (() => this.successHandler)(),
      (() => this.errorHandler)(),
      "AWKeyboard",
      "disableScroll",
      [disable.toString()]
    );
  }
}
