import {expect} from 'chai';
import {noop} from "../../src/common/util";
import {AWQRReader, QRReader} from "../../src/plugins/qr-reader/qr-reader";

describe('QRReader', () => {
    it('should define a scan function', () => {
        let o = new AWQRReader(noop, noop);
        expect(o.scan).to.not.equal(undefined);
    });

    it('should define a rename function', () => {
        let o = new AWQRReader(noop, noop);
        expect(o.rename).to.not.equal(undefined);
    });

    it('alias should define a scan function', () => {
        let o = new QRReader(noop, noop);
        expect(o.scan).to.not.equal(undefined);
    });

    it('alias should define a rename function', () => {
        let o = new QRReader(noop, noop);
        expect(o.rename).to.not.equal(undefined);
    });
});