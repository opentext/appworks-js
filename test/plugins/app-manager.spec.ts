import {expect} from "chai";
import {noop} from "../../src/common/util";
import {AWAppManager} from "../../src/plugins/app-manager/app-manager";

describe("AppManager", () => {
  it("should define a getCurrentAcceleration function", () => {
    let appManager = new AWAppManager(noop, noop);
    expect(appManager.closeActiveApp).to.not.equal(undefined);
  });
});
