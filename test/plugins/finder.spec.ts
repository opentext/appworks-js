import {expect} from 'chai';
import {Util} from "../../src/common/util";
import {AWFinder} from "../../src/plugins/finder/finder";

describe('Finder', () => {
    it('should define an open function', () => {
        let o = new AWFinder(Util.noop, Util.noop);
        expect(o.open).to.not.equal(undefined);
    });

    it('should define an openIn function', () => {
        let o = new AWFinder(Util.noop, Util.noop);
        expect(o.openIn).to.not.equal(undefined);
    });

    it('should define an list function', () => {
        let o = new AWFinder(Util.noop, Util.noop);
        expect(o.list).to.not.equal(undefined);
    });
});