import {expect} from "chai";
import {noop} from "../../src/common/util";
import {AWContacts} from "../../src/plugins/contacts/contacts";

describe("Contacts", () => {
  it("should define a create function", () => {
    let o = new AWContacts(noop, noop);
    expect(o.create).to.not.equal(undefined);
  });

  it("should define a find function", () => {
    let o = new AWContacts(noop, noop);
    expect(o.find).to.not.equal(undefined);
  });

  it("should define a pickContact function", () => {
    let o = new AWContacts(noop, noop);
    expect(o.pickContact).to.not.equal(undefined);
  });
});
