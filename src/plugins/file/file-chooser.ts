import {AWPlugin} from "../../common/plugin";
import {AWProxy} from "../../common/proxy";

export class AWFileChooser extends AWPlugin {
  selectAndUpload(action: string) {
    let args = [action];
    AWProxy.exec(
      (() => this.successHandler)(),
      (() => this.errorHandler)(),
      "AWFileChooser",
      "open",
      args
    );
  }
}
