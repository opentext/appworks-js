import {expect} from 'chai';
import {noop} from "../../src/common/util";
import {AWMenu} from "../../src/plugins/menu/menu";

describe('Menu', () => {
    it('should define a push function', () => {
        let o = new AWMenu(noop, noop);
        expect(o.push).to.not.equal(undefined);
    });

    it('should define a openListener function', () => {
        let o = new AWMenu(noop, noop);
        expect(o.openListener).to.not.equal(undefined);
    });

    it('should define a didTapMenuItem function', () => {
        let o = new AWMenu(noop, noop);
        expect(o.didTapMenuItem).to.not.equal(undefined);
    });

    it('should define a setMenu function', () => {
        let o = new AWMenu(noop, noop);
        expect(o.setMenu).to.not.equal(undefined);
    });
});