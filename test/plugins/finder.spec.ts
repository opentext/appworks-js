/// <reference path='../../typings/globals/chai/index.d.ts' />
/// <reference path='../../typings/globals/mocha/index.d.ts' />

import {expect} from 'chai';
import {Util} from "../../src/util";
import {AWFinder} from "../../src/plugins/finder";

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

    it('should define an filePathToData function', () => {
        let o = new AWFinder(Util.noop, Util.noop);
        expect(o.filePathToData).to.not.equal(undefined);
    });
});