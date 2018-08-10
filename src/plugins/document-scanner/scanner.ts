import {AWPlugin} from "../../common/plugin";
import {AWProxy} from "../../common/proxy";

export class Scanner extends AWPlugin {
  scanDocument(returnType: Number, successHandler: Function, errorHandler: Function) {
    AWProxy.exec(
      successHandler,
      errorHandler,
      "AWScanner",
      "scanDocument",
      [returnType]
    );
  }
}

export class AWScanner extends Scanner {
}
