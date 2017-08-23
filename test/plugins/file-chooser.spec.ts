import {expect} from 'chai';
import {noop} from "../../src/common/util";
import {AWFileChooser} from "../../src/plugins/file/file-chooser";

describe('FileChooser', () => {
    it('should define a selectAndUpload function', () => {
        let o = new AWFileChooser(noop, noop);
        expect(o.selectAndUpload).to.not.equal(undefined);
    });
});