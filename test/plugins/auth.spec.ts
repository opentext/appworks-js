import {expect} from "chai";
import {noop} from "../../src/common/util";
import {AWAuth} from "../../src/plugins/auth/auth";

describe("Auth", () => {
  it("should define an authenticate function", () => {
    let auth = new AWAuth(noop, noop);
    expect(auth.authenticate).to.not.equal(undefined);
  });

  it("should define a getAuthResponse function", () => {
    let auth = new AWAuth(noop, noop);
    expect(auth.getAuthResponse).to.not.equal(undefined);
  });

  it("should define a online function", () => {
    let auth = new AWAuth(noop, noop);
    expect(auth.online).to.not.equal(undefined);
  });

  it("should define a gateway function", () => {
    let auth = new AWAuth(noop, noop);
    expect(auth.gateway).to.not.equal(undefined);
    auth.gateway(noop, (msg) => {
      expect(msg).to.not.equal(undefined);
    });
  });

  it("should define a otdsssoticket function", () => {
    let auth = new AWAuth(noop, noop);
    expect(auth.otdsssoticket).to.not.equal(undefined);
  });
});
