import {expect} from "chai";
import {noop} from "../../src/common/util";
import {AWMediaCapture} from "../../src/plugins/media-transfer/media-capture";

describe("MediaCapture", () => {
  it("should define a captureAudio function", () => {
    let o = new AWMediaCapture(noop, noop);
    expect(o.captureAudio).to.not.equal(undefined);
  });

  it("should define a captureImage function", () => {
    let o = new AWMediaCapture(noop, noop);
    expect(o.captureImage).to.not.equal(undefined);
  });

  it("should define a captureVideo function", () => {
    let o = new AWMediaCapture(noop, noop);
    expect(o.captureVideo).to.not.equal(undefined);
  });
});
