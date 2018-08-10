import {expect} from "chai";
import {AWWebView} from "../../src/plugins/webview/webview";

describe("WebView", () => {
  it("should define an open function", () => {
    let o = new AWWebView();
    expect(o.open).to.not.equal(undefined);
  });

  it("should define an addEventListener function", () => {
    let o = new AWWebView();
    expect(o.addEventListener).to.not.equal(undefined);
  });

  it("should define a removeEventListener function", () => {
    let o = new AWWebView();
    expect(o.removeEventListener).to.not.equal(undefined);
  });

  it("should define a show function", () => {
    let o = new AWWebView();
    expect(o.show).to.not.equal(undefined);
  });

  it("should define a close function", () => {
    let o = new AWWebView();
    expect(o.close).to.not.equal(undefined);
  });

  it("should define an executeScript function", () => {
    let o = new AWWebView();
    expect(o.executeScript).to.not.equal(undefined);
  });

  it("should define an insertCSS function", () => {
    let o = new AWWebView();
    expect(o.insertCSS).to.not.equal(undefined);
  });
});
