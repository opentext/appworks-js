import {expect} from 'chai';
import {noop} from "../../src/common/util";
import {AWCamera} from "../../src/plugins/camera/camera";

describe('Camera', () => {
    it('should define an cleanup function', () => {
        let camera = new AWCamera(noop, noop);
        expect(camera.cleanup).to.not.equal(undefined);
    });

    it('should define an getPicture function', () => {
        let camera = new AWCamera(noop, noop);
        expect(camera.getPicture).to.not.equal(undefined);
        camera.getPicture(noop, (msg) => {
            expect(msg).to.not.equal(undefined);
        });
    });

    it('should define an openGallery function', () => {
        let camera = new AWCamera(noop, (msg) => {
            expect(msg).to.not.equal(undefined);
        });
        expect(camera.openGallery).to.not.equal(undefined);
        camera.openGallery();
    });
});