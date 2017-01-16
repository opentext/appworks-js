import {expect} from "chai";
import {AWFileSystem} from "../../src/plugins/file-system";
import {Util} from "../../src/util";

describe('FileSystem', () => {
    let underTest: AWFileSystem;

    beforeEach(() => {
       underTest = new AWFileSystem();
    });

    it('should define an exists method', () => {
        expect(underTest.exists).to.not.equal(undefined);
    });

    it('should define an isDir method', () => {
        expect(underTest.isDir).to.not.equal(undefined);
    });

    it('should define an open method', () => {
        expect(underTest.open).to.not.equal(undefined);
    });

    it('should define an reveal method', () => {
        expect(underTest.reveal).to.not.equal(undefined);
    });

    it('should define an getDetails method', () => {
        expect(underTest.getDetails).to.not.equal(undefined);
    });

    it('should define an listDirContents method', () => {
        expect(underTest.listDirContents).to.not.equal(undefined);
    });

    it('should define an showSaveDialog method', () => {
        expect(underTest.showSaveDialog).to.not.equal(undefined);
    });

    it('should define an showDirSelector method', () => {
        expect(underTest.showDirSelector).to.not.equal(undefined);
    });

    it('should define an showFileSelector method', () => {
        expect(underTest.showFileSelector).to.not.equal(undefined);
    });

    it('should throw an exception when a validateEnv is called outside of the Desktop environment', () => {
       try {
           underTest.validateEnv();
           fail('We expected an error to be thrown');
       } catch (e) {
           expect(e).to.not.equal(undefined);
           expect(e.message).to.equal('This method is only available in the AppWorks Desktop environment');
       }
    });

});
