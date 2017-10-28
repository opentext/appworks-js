import {expect} from 'chai';
import {AWDevice} from "../../src/plugins/device/device";

describe('Contacts', () => {
    it('should define a device object function', () => {
        let o = new AWDevice();
        expect(o.cordova).to.not.equal(undefined);
        expect(o.model).to.not.equal(undefined);
        expect(o.platform).to.not.equal(undefined);
        expect(o.uuid).to.not.equal(undefined);
        expect(o.version).to.not.equal(undefined);
        expect(o.manufacturer).to.not.equal(undefined);
        expect(o.capture).to.not.equal(undefined);
    });
});