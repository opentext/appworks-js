import {expect} from 'chai';
import {Util} from "../../src/util";
import {AWQRReader, QRReader} from "../../src/plugins/qr-reader";

describe('QRReader', () => {
    it('should define a scan function', () => {
        let o = new AWQRReader(Util.noop, Util.noop);
        expect(o.scan).to.not.equal(undefined);
    });

    it('should define a rename function', () => {
        let o = new AWQRReader(Util.noop, Util.noop);
        expect(o.rename).to.not.equal(undefined);
    });

    it('alias should define a scan function', () => {
        let o = new QRReader(Util.noop, Util.noop);
        expect(o.scan).to.not.equal(undefined);
    });

    it('alias should define a rename function', () => {
        let o = new QRReader(Util.noop, Util.noop);
        expect(o.rename).to.not.equal(undefined);
    });
});