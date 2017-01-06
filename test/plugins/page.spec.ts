import {expect} from 'chai';
import {Util} from "../../src/util";
import {AWPage} from "../../src/plugins/page";

describe('Page', () => {
    it('should define a setPageUrl function', () => {
        let o = new AWPage(Util.noop, Util.noop);
        expect(o.setPageUrl).to.not.equal(undefined);
    });
});