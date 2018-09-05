import {expect} from "chai";
import {noop} from "../../src/common/util";
import {AWMobileFileSystem} from "../../src/plugins/mobile-file-system/mobile-file-system";

describe("MobileFileSystem", () => {
  it("should define an list function", () => {
    let o = new AWMobileFileSystem(noop, noop);
    expect(o.list).to.not.equal(undefined);
  });
  it("should define an listImports function", () => {
    let o = new AWMobileFileSystem(noop, noop);
    expect(o.listImports).to.not.equal(undefined);
  });
  it("should define an moveImport function", () => {
    let o = new AWMobileFileSystem(noop, noop);
    expect(o.moveImport).to.not.equal(undefined);
  });
  it("should define an exists function", () => {
    let o = new AWMobileFileSystem(noop, noop);
    expect(o.exists).to.not.equal(undefined);
  });
  it("should define an isOpen function", () => {
    let o = new AWMobileFileSystem(noop, noop);
    expect(o.isOpen).to.not.equal(undefined);
  });
  it("should define an rename function", () => {
    let o = new AWMobileFileSystem(noop, noop);
    expect(o.rename).to.not.equal(undefined);
  });
  it("should define an copy function", () => {
    let o = new AWMobileFileSystem(noop, noop);
    expect(o.copy).to.not.equal(undefined);
  });
  it("should define an move function", () => {
    let o = new AWMobileFileSystem(noop, noop);
    expect(o.move).to.not.equal(undefined);
  });
  it("should define an remove function", () => {
    let o = new AWMobileFileSystem(noop, noop);
    expect(o.remove).to.not.equal(undefined);
  });
  it("should define an read function", () => {
    let o = new AWMobileFileSystem(noop, noop);
    expect(o.read).to.not.equal(undefined);
  });
  it("should define an open function", () => {
    let o = new AWMobileFileSystem(noop, noop);
    expect(o.open).to.not.equal(undefined);
  });
  it("should define an share function", () => {
    let o = new AWMobileFileSystem(noop, noop);
    expect(o.share).to.not.equal(undefined);
  });
  it("should define an quicklook function", () => {
    let o = new AWMobileFileSystem(noop, noop);
    expect(o.quicklook).to.not.equal(undefined);
  });
  it("should define an download function", () => {
    let o = new AWMobileFileSystem(noop, noop);
    expect(o.download).to.not.equal(undefined);
  });
  it("should define an upload function", () => {
    let o = new AWMobileFileSystem(noop, noop);
    expect(o.upload).to.not.equal(undefined);
  });
});
