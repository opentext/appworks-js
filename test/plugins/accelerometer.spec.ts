import {expect} from 'chai';
import {AWAccelerometer} from "../../src/plugins/accelerometer/accelerometer";
import {noop} from "../../src/common/util";

describe('Accelerometer', () => {
    it('should define a getCurrentAcceleration function', () => {
        let accelerometer = new AWAccelerometer(noop, noop);
        expect(accelerometer.getCurrentAcceleration).to.not.equal(undefined);
    });

    it('should define a watchAcceleration function', () => {
        let accelerometer = new AWAccelerometer(noop, noop);
        expect(accelerometer.watchAcceleration).to.not.equal(undefined);
    });

    it('should define a clearWatch function', () => {
        let accelerometer = new AWAccelerometer(noop, noop);
        expect(accelerometer.clearWatch).to.not.equal(undefined);
    });
});