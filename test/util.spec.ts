import {expect} from "chai";
import {isDesktopEnv, isFunction, isMobileEnv, noop} from "../src/common/util";

describe("Util", () => {
  it("should define a noop function", () => {
    expect(noop).to.not.equal(undefined);
    expect(noop()).to.equal(undefined);
  });

  it("should define an isFunction function", () => {
    expect(isFunction).to.not.equal(undefined);
    expect(isFunction(function () {
      console.log("foo");
    })).to.equal(true);
    expect(isFunction("foo")).to.equal(false);
    expect(isFunction(/foo/)).to.equal(false);
  });

  it("should define a isDesktopEnv function", () => {
    expect(isDesktopEnv).to.not.equal(undefined);
  });

  it("should define a isMobileEnv function", () => {
    expect(isMobileEnv).to.not.equal(undefined);
  });
});
