import {AWPlugin} from "../../common/plugin";
import {AWProxy} from "../../common/proxy";
import {noop} from "../../common/util";

export class AWGlobalization extends AWPlugin {
  constructor() {
    super(noop, noop);
  }

  getPreferredLanguage(successFn: Function, errorFn?: Function) {
    AWProxy.exec(
      successFn,
      errorFn,
      "AWGlobalization",
      "getPreferredLanguage",
      []
    );
  }
}
