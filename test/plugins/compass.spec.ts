import {expect} from 'chai';
import {noop} from "../../src/common/util";
import {AWCompass} from "../../src/plugins/device-orientation/compass";

describe('Compass', () => {
    it('should define a getCurrentHeading function', () => {
        let compass = new AWCompass(noop, noop);
        expect(compass.getCurrentHeading).to.not.equal(undefined);
    });

    it('should define a getCurrentHeading function', () => {
        let compass = new AWCompass(noop, noop);
        expect(compass.watchHeading).to.not.equal(undefined);
    });

    it('should define a getCurrentHeading function', () => {
        let compass = new AWCompass(noop, noop);
        expect(compass.clearWatch).to.not.equal(undefined);
    });
});