/// <reference path='../../typings/globals/chai/index.d.ts' />
/// <reference path='../../typings/globals/mocha/index.d.ts' />

import {expect} from 'chai';
import {Util} from "../../src/util";
import {AWSecureStorage} from "../../src/plugins/secure-storage";

describe('SecureStorage', () => {
    it('should define a store function', () => {
        let o = new AWSecureStorage(Util.noop, Util.noop);
        expect(o.store).to.not.equal(undefined);
    });

    it('should define a retrieve function', () => {
        let o = new AWSecureStorage(Util.noop, Util.noop);
        expect(o.retrieve).to.not.equal(undefined);
    });

    it('should define a remove function', () => {
        let o = new AWSecureStorage(Util.noop, Util.noop);
        expect(o.remove).to.not.equal(undefined);
    });

    it('should define a fileExistsAtPath function', () => {
        let o = new AWSecureStorage(Util.noop, Util.noop);
        expect(o.fileExistsAtPath).to.not.equal(undefined);
    });
});