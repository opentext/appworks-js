import {expect} from 'chai';
import {Util} from "../../src/util";
import {AWHeader, AWHeaderBar} from "../../src/plugins/header/header";

describe('Header', () => {
    it('should define a setHeader function', () => {
        let o = new AWHeader(Util.noop, Util.noop);
        expect(o.setHeader).to.not.equal(undefined);
    });

    it('should define a getHeader function', () => {
        let o = new AWHeader(Util.noop, Util.noop);
        expect(o.getHeader).to.not.equal(undefined);
    });

    it('should define a setHeaderButtons function', () => {
        let o = new AWHeader(Util.noop, Util.noop);
        expect(o.setHeaderButtons).to.not.equal(undefined);
    });

    it('alias should define a setHeader function', () => {
        let o = new AWHeaderBar(Util.noop, Util.noop);
        expect(o.setHeader).to.not.equal(undefined);
    });

    it('alias should define a getHeader function', () => {
        let o = new AWHeaderBar(Util.noop, Util.noop);
        expect(o.getHeader).to.not.equal(undefined);
    });

    it('should define a maskHeader function', () => {
        let o = new AWHeader(Util.noop, Util.noop);
        expect(o.maskHeader).to.not.equal(undefined);
    });

});