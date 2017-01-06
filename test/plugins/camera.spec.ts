import {expect} from 'chai';
import {Util} from "../../src/util";
import {AWCamera} from "../../src/plugins/camera";

describe('Camera', () => {
    it('should define an cleanup function', () => {
        let camera = new AWCamera(Util.noop, Util.noop);
        expect(camera.cleanup).to.not.equal(undefined);
    });

    it('should define an getPicture function', () => {
        let camera = new AWCamera(Util.noop, Util.noop);
        expect(camera.getPicture).to.not.equal(undefined);
        camera.getPicture(Util.noop, (msg) => {
            expect(msg).to.not.equal(undefined);
        });
    });

    it('should define an openGallery function', () => {
        let camera = new AWCamera(Util.noop, (msg) => {
            expect(msg).to.not.equal(undefined);
        });
        expect(camera.openGallery).to.not.equal(undefined);
        camera.openGallery();
    });
});