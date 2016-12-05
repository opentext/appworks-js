/// <reference path='../typings/globals/chai/index.d.ts' />
/// <reference path='../typings/globals/mocha/index.d.ts' />

import {expect} from 'chai';
import {Util} from "../src/util";

describe('Util', () => {
    it('should define a noop function', () => {
        const noop = Util.noop;
        expect(noop).to.not.equal(undefined);
        expect(noop()).to.equal(undefined);
    });
});