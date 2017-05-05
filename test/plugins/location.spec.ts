import {expect} from 'chai';
import {AWLocation} from "../../src/plugins/location/location";
import {Util} from "../../src/common/util";

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