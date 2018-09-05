import {AWPlugin} from "../../common/plugin";
import {AWProxy} from "../../common/proxy";

export class AWAnonymous extends AWPlugin {
  isAnonymousMode(successHandler: any, errorHandler: any) {
    AWProxy.exec(
      successHandler,
      errorHandler,
      "AWAnonymous",
      "isAnonymousMode",
      []
    );
  }

  getAnonymousUrl(successHandler: any, errorHandler: any) {
    AWProxy.exec(
      successHandler,
      errorHandler,
      "AWAnonymous",
      "getAnonymousUrl",
      []
    );
  }
}
