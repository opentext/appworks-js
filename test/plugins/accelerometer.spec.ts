import {expect} from 'chai';
import {AWAccelerometer} from "../../src/plugins/accelerometer/accelerometer";
import {Util} from "../../src/util";

describe('Accelerometer', () => {
    it('should define a getCurrentAcceleration function', () => {
        let accelerometer = new AWAccelerometer(Util.noop, Util.noop);
        expect(accelerometer.getCurrentAcceleration).to.not.equal(undefined);
    });

    it('should define a watchAcceleration function', () => {
        let accelerometer = new AWAccelerometer(Util.noop, Util.noop);
        expect(accelerometer.watchAcceleration).to.not.equal(undefined);
    });

    it('should define a clearWatch function', () => {
        let accelerometer = new AWAccelerometer(Util.noop, Util.noop);
        expect(accelerometer.clearWatch).to.not.equal(undefined);
    });
});