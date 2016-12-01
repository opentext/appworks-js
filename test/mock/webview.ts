/// <reference path="../../typings/globals/cordova/plugins/inappbrowser/index.d.ts"/>

export class MockWebview {
    open(url: string, target?: string, options?: string): InAppBrowser {
        return null;
    }
}