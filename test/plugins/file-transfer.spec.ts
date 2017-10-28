import {expect} from 'chai';
import {noop} from "../../src/common/util";
import {AWFileTransfer} from "../../src/plugins/file-transfer/file-transfer";

describe('FileTransfer', () => {
    it('should define an abort function', () => {
        let o = new AWFileTransfer(noop, noop);
        expect(o.abort).to.not.equal(undefined);
    });

    it('should define a download function', () => {
        let o = new AWFileTransfer(noop, noop);
        expect(o.download).to.not.equal(undefined);
    });

    it('should define a progressHandler function', () => {
        let o = new AWFileTransfer(noop, noop);
        expect(o.progressHandler).to.not.equal(undefined);
        expect(o.progressHandler(noop)).to.equal(undefined);
    });

    it('should define an upload function', () => {
        let o = new AWFileTransfer(noop, noop);
        expect(o.upload).to.not.equal(undefined);
    });
});