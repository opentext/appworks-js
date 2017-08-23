import {expect} from 'chai';
import {noop} from "../../src/common/util";
import {AWSecureStorage} from "../../src/plugins/storage/secure-storage";

describe('SecureStorage', () => {
    it('should define a store function', () => {
        let o = new AWSecureStorage(noop, noop);
        expect(o.store).to.not.equal(undefined);
    });

    it('should define a retrieve function', () => {
        let o = new AWSecureStorage(noop, noop);
        expect(o.retrieve).to.not.equal(undefined);
    });

    it('should define a remove function', () => {
        let o = new AWSecureStorage(noop, noop);
        expect(o.remove).to.not.equal(undefined);
    });

    it('should define a fileExistsAtPath function', () => {
        let o = new AWSecureStorage(noop, noop);
        expect(o.fileExistsAtPath).to.not.equal(undefined);
    });
});