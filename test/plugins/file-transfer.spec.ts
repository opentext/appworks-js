import {expect} from 'chai';
import {Util} from "../../src/common/util";
import {AWFileTransfer} from "../../src/plugins/file-transfer/file-transfer";

describe('FileTransfer', () => {
    it('should define an abort function', () => {
        let o = new AWFileTransfer(Util.noop, Util.noop);
        expect(o.abort).to.not.equal(undefined);
    });

    it('should define a download function', () => {
        let o = new AWFileTransfer(Util.noop, Util.noop);
        expect(o.download).to.not.equal(undefined);
    });

    it('should define a progressHandler function', () => {
        let o = new AWFileTransfer(Util.noop, Util.noop);
        expect(o.progressHandler).to.not.equal(undefined);
        expect(o.progressHandler(Util.noop)).to.equal(undefined);
    });

    it('should define an upload function', () => {
        let o = new AWFileTransfer(Util.noop, Util.noop);
        expect(o.upload).to.not.equal(undefined);
    });
});