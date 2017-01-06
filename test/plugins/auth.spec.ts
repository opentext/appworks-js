import {expect} from 'chai';
import {Util} from "../../src/util";
import {AWAuth} from "../../src/plugins/auth";

describe('Auth', () => {
    it('should define an authenticate function', () => {
        let auth = new AWAuth(Util.noop, Util.noop);
        expect(auth.authenticate).to.not.equal(undefined);
    });

    it('should define a getAuthResponse function', () => {
        let auth = new AWAuth(Util.noop, Util.noop);
        expect(auth.getAuthResponse).to.not.equal(undefined);
    });

    it('should define a online function', () => {
        let auth = new AWAuth(Util.noop, Util.noop);
        expect(auth.online).to.not.equal(undefined);
    });

    it('should define a gateway function', () => {
        let auth = new AWAuth(Util.noop, Util.noop);
        expect(auth.gateway).to.not.equal(undefined);
        auth.gateway(Util.noop, (msg) => {
            expect(msg).to.not.equal(undefined);
        });
    });
});