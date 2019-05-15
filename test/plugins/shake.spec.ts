import {expect} from "chai";
import {noop} from "../../src/common/util";
import {AWShake, Shake} from "../../src/plugins/shake/shake";

describe("Shake", () => {
  it("should define a AWShake.enableShake function", () => {
    let o = new AWShake(noop, noop);
    expect(o.enableShake).to.not.equal(undefined);
  });
  it("should define a AWShake.disableShake function", () => {
    let o = new AWShake(noop, noop);
    expect(o.disableShake).to.not.equal(undefined);
  });
  it("should define a Shake.enableShake function", () => {
    let o = new Shake(noop, noop);
    expect(o.enableShake).to.not.equal(undefined);
  });
  it("should define a Shake.disableShake function", () => {
    let o = new Shake(noop, noop);
    expect(o.disableShake).to.not.equal(undefined);
  });
});
