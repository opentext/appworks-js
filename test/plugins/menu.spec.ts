import {expect} from 'chai';
import {Util} from "../../src/util";
import {AWMenu} from "../../src/plugins/menu/menu";

describe('Menu', () => {
    it('should define a push function', () => {
        let o = new AWMenu(Util.noop, Util.noop);
        expect(o.push).to.not.equal(undefined);
    });

    it('should define a openListener function', () => {
        let o = new AWMenu(Util.noop, Util.noop);
        expect(o.openListener).to.not.equal(undefined);
    });

    it('should define a didTapMenuItem function', () => {
        let o = new AWMenu(Util.noop, Util.noop);
        expect(o.didTapMenuItem).to.not.equal(undefined);
    });

    it('should define a setMenu function', () => {
        let o = new AWMenu(Util.noop, Util.noop);
        expect(o.setMenu).to.not.equal(undefined);
    });
});