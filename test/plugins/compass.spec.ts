/// <reference path='../../typings/globals/chai/index.d.ts' />
/// <reference path='../../typings/globals/mocha/index.d.ts' />

import {expect} from 'chai';
import {Util} from "../../src/util";
import {AWCompass} from "../../src/plugins/compass";

describe('Compass', () => {
    it('should define a getCurrentHeading function', () => {
        let compass = new AWCompass(Util.noop, Util.noop);
        expect(compass.getCurrentHeading).to.not.equal(undefined);
    });

    it('should define a getCurrentHeading function', () => {
        let compass = new AWCompass(Util.noop, Util.noop);
        expect(compass.watchHeading).to.not.equal(undefined);
    });

    it('should define a getCurrentHeading function', () => {
        let compass = new AWCompass(Util.noop, Util.noop);
        expect(compass.clearWatch).to.not.equal(undefined);
    });
});