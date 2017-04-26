import {expect} from 'chai';
import {Util} from "../../src/util";
import {AWPage} from "../../src/plugins/page/page";

describe('Page', () => {
    it('should define a setPageUrl function', () => {
        let o = new AWPage(Util.noop, Util.noop);
        expect(o.setPageUrl).to.not.equal(undefined);
    });

    it('should define a openModalAppWebView function', () => {
        let o = new AWPage(Util.noop, Util.noop);
        expect(o.openModalAppWebView).to.not.equal(undefined);
    });

    it('should define a openModalExternalWebView function', () => {
        let o = new AWPage(Util.noop, Util.noop);
        expect(o.openModalExternalWebView).to.not.equal(undefined);
    });

    it('should define a setActionButtonCallback function', () => {
        let o = new AWPage(Util.noop, Util.noop);
        expect(o.setActionButtonCallback).to.not.equal(undefined);
    });

    it('should define a closeModalAppWebView function', () => {
        let o = new AWPage(Util.noop, Util.noop);
        expect(o.closeModalAppWebView).to.not.equal(undefined);
    });
});