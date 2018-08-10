import {expect} from "chai";
import {noop} from "../../src/common/util";
import {AWLocation} from "../../src/plugins/location/location";

describe("Location", () => {
  it("should define a getCurrentPosition function", () => {
    let o = new AWLocation(noop, noop);
    expect(o.getCurrentPosition).to.not.equal(undefined);
  });

  it("should define a watchPosition function", () => {
    let o = new AWLocation(noop, noop);
    expect(o.watchPosition).to.not.equal(undefined);
  });

  it("should define a clearWatch function", () => {
    let o = new AWLocation(noop, noop);
    expect(o.clearWatch).to.not.equal(undefined);
  });
});
