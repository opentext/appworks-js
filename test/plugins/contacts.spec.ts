import {expect} from 'chai';
import {Util} from "../../src/util";
import {AWContacts} from "../../src/plugins/contacts/contacts";

describe('Contacts', () => {
    it('should define a create function', () => {
        let o = new AWContacts(Util.noop, Util.noop);
        expect(o.create).to.not.equal(undefined);
    });

    it('should define a find function', () => {
        let o = new AWContacts(Util.noop, Util.noop);
        expect(o.find).to.not.equal(undefined);
    });

    it('should define a pickContact function', () => {
        let o = new AWContacts(Util.noop, Util.noop);
        expect(o.pickContact).to.not.equal(undefined);
    });
});