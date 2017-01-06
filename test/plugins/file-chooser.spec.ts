import {expect} from 'chai';
import {Util} from "../../src/util";
import {AWFileChooser} from "../../src/plugins/file-chooser";

describe('FileChooser', () => {
    it('should define a selectAndUpload function', () => {
        let o = new AWFileChooser(Util.noop, Util.noop);
        expect(o.selectAndUpload).to.not.equal(undefined);
    });
});