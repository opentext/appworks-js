import {expect} from 'chai';
import {Util} from "../src/common/util";

describe('Util', () => {
    it('should define a noop function', () => {
        const noop = Util.noop;
        expect(noop).to.not.equal(undefined);
        expect(noop()).to.equal(undefined);
    });
});