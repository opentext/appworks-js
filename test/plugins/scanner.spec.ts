import {expect} from 'chai';
import {Util} from "../../src/util";
import {AWScanner, Scanner} from "../../src/plugins/document-scanner/scanner";

describe('Scanner', () => {
    it('should define a scan function', () => {
        let o = new Scanner(Util.noop, Util.noop);
        expect(o.scanDocument).to.not.equal(undefined);
    });

    it('should define a scan function via alias', () => {
        let o = new AWScanner(Util.noop, Util.noop);
        expect(o.scanDocument).to.not.equal(undefined);
    });
});