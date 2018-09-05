import {expect} from 'chai';
import {noop} from "../../src/common/util";
import {AWAnonymous} from "../../src/plugins/anonymous/anonymous";

describe('Anonymous', () => {
    it('should define a isAnonymousMode function', () => {
        let anonymous = new AWAnonymous(noop, noop);
        expect(anonymous.isAnonymousMode).to.not.equal(undefined);
    });
    it('should define a getAnonymousUrl function', () => {
        let anonymous = new AWAnonymous(noop, noop);
        expect(anonymous.getAnonymousUrl).to.not.equal(undefined);
    });
});