import {expect} from "chai";
import {noop} from "../../src/common/util";
import {AWFinder} from "../../src/plugins/finder/finder";
import {AWGlobalization} from "../../src/plugins/globalization/globalization";

describe("AWGlobalization", () => {
  it("should define a getPreferredLanguage function", () => {
    let o = new AWGlobalization();
    expect(o.getPreferredLanguage).to.not.equal(undefined);
  });

  it("should define an openIn function", () => {
    let o = new AWFinder(noop, noop);
    expect(o.openIn).to.not.equal(undefined);
  });

  it("should define an list function", () => {
    let o = new AWFinder(noop, noop);
    expect(o.list).to.not.equal(undefined);
  });
});
