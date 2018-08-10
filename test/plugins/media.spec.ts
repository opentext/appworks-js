import {expect} from "chai";
import {noop} from "../../src/common/util";
import {AWMedia} from "../../src/plugins/media/media";

describe("Media", () => {
  it("should define a getCurrentPosition function", () => {
    let o = new AWMedia(null, noop, noop, noop);
    expect(o.getCurrentPosition).to.not.equal(undefined);
    o.getCurrentPosition((msg) => {
      expect(msg).to.not.equal(undefined);
    });
  });

  it("should define a getDuration function", () => {
    let o = new AWMedia(null, noop, noop, noop);
    expect(o.getDuration).to.not.equal(undefined);
  });

  it("should define a pause function", () => {
    let o = new AWMedia(null, noop, noop, noop);
    expect(o.pause).to.not.equal(undefined);
  });

  it("should define a play function", () => {
    let o = new AWMedia(null, noop, noop, noop);
    expect(o.play).to.not.equal(undefined);
  });

  it("should define a release function", () => {
    let o = new AWMedia(null, noop, noop, noop);
    expect(o.release).to.not.equal(undefined);
  });

  it("should define a seekTo function", () => {
    let o = new AWMedia(null, noop, noop, noop);
    expect(o.seekTo).to.not.equal(undefined);
  });

  it("should define a setVolume function", () => {
    let o = new AWMedia(null, noop, noop, noop);
    expect(o.setVolume).to.not.equal(undefined);
  });

  it("should define a startRecord function", () => {
    let o = new AWMedia(null, noop, noop, noop);
    expect(o.startRecord).to.not.equal(undefined);
  });

  it("should define a stop function", () => {
    let o = new AWMedia(null, noop, noop, noop);
    expect(o.stop).to.not.equal(undefined);
  });

  it("should define a stopRecord function", () => {
    let o = new AWMedia(null, noop, noop, noop);
    expect(o.stopRecord).to.not.equal(undefined);
  });
});
