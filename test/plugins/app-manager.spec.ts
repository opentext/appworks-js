import {expect} from 'chai';
import {Util} from "../../src/util";
import {AWAppManager} from "../../src/plugins/app-manager/app-manager";

describe('AppManager', () => {
    it('should define a getCurrentAcceleration function', () => {
        let appManager = new AWAppManager(Util.noop, Util.noop);
        expect(appManager.closeActiveApp).to.not.equal(undefined);
    });
});