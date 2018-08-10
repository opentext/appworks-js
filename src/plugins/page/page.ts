import {AWPlugin} from "../../common/plugin";
import {AWProxy} from "../../common/proxy";

export class AWPage extends AWPlugin {
  setPageUrl(url: string) {
    AWProxy.exec(
      (() => this.successHandler)(),
      (() => this.errorHandler)(),
      "AWPage",
      "setPageUrl",
      [url]
    );
  }

  openModalAppWebView(url: string, title: string, closeTitle: string) {
    AWProxy.exec(
      (() => this.successHandler)(),
      (() => this.errorHandler)(),
      "AWPage",
      "showModalAppWebView",
      [url, title, closeTitle]
    );
  }

  openModalExternalWebView(url: string, title: string, closeTitle: string, options?: object) {
    if (typeof options === "undefined" || !options) {
      options = {};
    }
    AWProxy.exec(
      (() => this.successHandler)(),
      (() => this.errorHandler)(),
      "AWPage",
      "showModalExternalWebView",
      [url, title, closeTitle, options]
    );
  }

  setActionButtonCallback(callback: any, actionTitle: string) {
    AWProxy.exec(
      callback,
      (() => this.errorHandler)(),
      "AWPage",
      "setModalAppWebViewActionCallback",
      [actionTitle]
    );
  }

  closeModalAppWebView() {
    AWProxy.exec(
      (() => this.successHandler)(),
      (() => this.errorHandler)(),
      "AWPage",
      "closeModalAppWebView",
      []
    );
  }

  video(success: any, error: any, url: string) {
    AWProxy.exec(
      success,
      error,
      "AWPage",
      "video",
      [url]
    );
  }

}
