import {expect} from "chai";
import {noop} from "../../src/common/util";
import {AWPrint, Print} from "../../src/plugins/print/print";

describe("Print", () => {
  it("should define a print function", () => {
    let o = new AWPrint(noop, noop);
    expect(o.print).to.not.equal(undefined);
  });

  it("should define a getPrinters function", () => {
    let o = new AWPrint(noop, noop);
    expect(o.getPrinters).to.not.equal(undefined);
  });

  it("should define a printToPDF function", () => {
    let o = new AWPrint(noop, noop);
    expect(o.printToPDF).to.not.equal(undefined);
  });
});
