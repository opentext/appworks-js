import {expect} from "chai";
import {noop} from "../../src/common/util";
import {AWAppManager} from "../../src/plugins/app-manager/app-manager";

describe("AppManager", () => {
  it("should define a closeActiveApp function", () => {
      let appManager = new AWAppManager(noop, noop);
      expect(appManager.closeActiveApp).to.not.equal(undefined);
  });
  it("should define a getAppName function", () => {
      let appManager = new AWAppManager(noop, noop);
      expect(appManager.getAppName).to.not.equal(undefined);
  });
  it("should define a resetShouldClearCache function", () => {
      let appManager = new AWAppManager(noop, noop);
      expect(appManager.resetShouldClearCache).to.not.equal(undefined);
  });
  it("should define a shouldClearCache function", () => {
      let appManager = new AWAppManager(noop, noop);
      expect(appManager.shouldClearCache).to.not.equal(undefined);
  });
});
