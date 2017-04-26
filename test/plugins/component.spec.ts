import {expect} from 'chai';
import {Util} from "../../src/util";
import {AWComponent} from "../../src/plugins/component/component";

describe('Component', () => {
    it('should define a open function', () => {
        let component = new AWComponent(Util.noop, Util.noop);
        expect(component.open).to.not.equal(undefined);
    });

    it('should define a list function', () => {
        let component = new AWComponent(Util.noop, Util.noop);
        expect(component.list).to.not.equal(undefined);
    });

    it('should define a check function', () => {
        let component = new AWComponent(Util.noop, Util.noop);
        expect(component.check).to.not.equal(undefined);
    });

    it('should define a close function', () => {
        let component = new AWComponent(Util.noop, Util.noop);
        expect(component.close).to.not.equal(undefined);
    });

});