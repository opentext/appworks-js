import {expect} from 'chai';
import {AWOfflineManager} from "../../src/plugins/offline/offline-manager";

describe('OfflineManager', () => {
    it('should define a defer function', () => {
        let o = new AWOfflineManager();
        expect(o.defer).to.not.equal(undefined);
    });

    it('should define a cancel function', () => {
        let o = new AWOfflineManager();
        expect(o.cancel).to.not.equal(undefined);
    });

    it('should define a networkStatus function', () => {
        let o = new AWOfflineManager();
        expect(o.networkStatus).to.not.equal(undefined);
    });
});
