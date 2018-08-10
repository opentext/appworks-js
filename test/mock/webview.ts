import {InAppBrowser} from "../../src/plugins/webview/index";

export class MockWebview {
  open(url: string, target?: string, options?: string): InAppBrowser {
    return null;
  }
}
