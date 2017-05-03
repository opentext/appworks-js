import {expect} from 'chai';
import {Util} from "../../src/common/util";
import {AWLauncher} from "../../src/plugins/launcher/launcher";

describe('Launcher', () => {
    it('should define a getLaunchURL function', () => {
        let o = new AWLauncher();
        expect(o.getLaunchURL).to.not.equal(undefined);
    });

    it('should define a clearLaunchURL function', () => {
        let o = new AWLauncher(Util.noop, Util.noop);
        expect(o.clearLaunchURL).to.not.equal(undefined);
    });
});