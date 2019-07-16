import {expect} from "chai";
import {noop} from "../../src/common/util";
import {AWLauncher} from "../../src/plugins/launcher/launcher";

describe("Launcher", () => {
  it("should define a getLaunchData function", () => {
    let o = new AWLauncher();
    expect(o.getLaunchData).to.not.equal(undefined);
  });

  it("should define a getLaunchURL function", () => {
    let o = new AWLauncher();
    expect(o.getLaunchURL).to.not.equal(undefined);
  });

  it("should define a clearLaunchData function", () => {
    let o = new AWLauncher(noop, noop);
    expect(o.clearLaunchData).to.not.equal(undefined);
  });

  it("should define a clearLaunchURL function", () => {
    let o = new AWLauncher(noop, noop);
    expect(o.clearLaunchURL).to.not.equal(undefined);
  });
  it("should define a registerListener function", () => {
      let o = new AWLauncher(noop, noop);
      expect(o.registerListener).to.not.equal(undefined);
  });
  it("should define a getCustomScheme function", () => {
      let o = new AWLauncher(noop, noop);
      expect(o.getCustomScheme).to.not.equal(undefined);
  });
});
