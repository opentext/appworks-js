/// <reference path='../../typings/globals/chai/index.d.ts' />
/// <reference path='../../typings/globals/mocha/index.d.ts' />

import {expect} from 'chai';
import {AWWebView} from "../../src/plugins/webview";

describe('WebView', () => {
    it('should define an open function', () => {
        let o = new AWWebView();
        expect(o.open).to.not.equal(undefined);
    });
});