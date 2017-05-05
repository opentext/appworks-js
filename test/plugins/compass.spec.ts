import {expect} from 'chai';
import {Util} from "../../src/common/util";
import {AWCompass} from "../../src/plugins/device-orientation/compass";

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