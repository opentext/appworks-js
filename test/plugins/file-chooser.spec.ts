import {expect} from 'chai';
import {Util} from "../../src/common/util";
import {AWFileChooser} from "../../src/plugins/file/file-chooser";

describe('FileChooser', () => {
    it('should define a selectAndUpload function', () => {
        let o = new AWFileChooser(Util.noop, Util.noop);
        expect(o.selectAndUpload).to.not.equal(undefined);
    });
});