import {expect} from 'chai';
import {noop} from "../../src/common/util";
import {AWScanner, Scanner} from "../../src/plugins/document-scanner/scanner";

describe('Scanner', () => {
    it('should define a scan function', () => {
        let o = new Scanner(noop, noop);
        expect(o.scanDocument).to.not.equal(undefined);
    });

    it('should define a scan function via alias', () => {
        let o = new AWScanner(noop, noop);
        expect(o.scanDocument).to.not.equal(undefined);
    });
});