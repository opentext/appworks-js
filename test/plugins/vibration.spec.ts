import {expect} from "chai";
import {AWVibration} from "../../src/plugins/vibration/vibration";

describe("Vibration", () => {
  it("should define a vibrate function", () => {
    let o = new AWVibration();
    expect(o.vibrate).to.not.equal(undefined);
  });
});
