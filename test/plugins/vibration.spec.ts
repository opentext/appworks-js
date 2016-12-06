/// <reference path='../../typings/globals/chai/index.d.ts' />
/// <reference path='../../typings/globals/mocha/index.d.ts' />

import {expect} from 'chai';
import {AWVibration} from "../../src/plugins/vibration";

describe('Vibration', () => {
    it('should define a vibrate function', () => {
        let o = new AWVibration();
        expect(o.vibrate).to.not.equal(undefined);
    });
});