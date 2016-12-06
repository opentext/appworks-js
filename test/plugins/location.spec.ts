/// <reference path='../../typings/globals/chai/index.d.ts' />
/// <reference path='../../typings/globals/mocha/index.d.ts' />

import {expect} from 'chai';
import {AWLocation} from "../../src/plugins/location";
import {Util} from "../../src/util";

describe('Location', () => {
    it('should define a getCurrentPosition function', () => {
        let o = new AWLocation(Util.noop, Util.noop);
        expect(o.getCurrentPosition).to.not.equal(undefined);
    });

    it('should define a watchPosition function', () => {
        let o = new AWLocation(Util.noop, Util.noop);
        expect(o.watchPosition).to.not.equal(undefined);
    });

    it('should define a clearWatch function', () => {
        let o = new AWLocation(Util.noop, Util.noop);
        expect(o.clearWatch).to.not.equal(undefined);
    });
});