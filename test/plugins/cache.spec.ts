import {expect} from 'chai';
import {AWCache} from "../../src/plugins/cache";

describe('Cache', () => {
    it('should define a setItem function', () => {
        let o = new AWCache();
        expect(o.setItem).to.not.equal(undefined);
    });

    it('should define a getItem function', () => {
        let o = new AWCache();
        expect(o.getItem).to.not.equal(undefined);
    });

    it('should define a removeItem function', () => {
        let o = new AWCache();
        expect(o.removeItem).to.not.equal(undefined);
    });

    it('should define a clear function', () => {
        let o = new AWCache();
        expect(o.clear).to.not.equal(undefined);
    });
});
