import {expect} from 'chai';
import {noop} from "../../src/common/util";
import {AWComponent} from "../../src/plugins/component/component";

describe('Component', () => {
    it('should define a open function', () => {
        let component = new AWComponent(noop, noop);
        expect(component.open).to.not.equal(undefined);
    });

    it('should define a list function', () => {
        let component = new AWComponent(noop, noop);
        expect(component.list).to.not.equal(undefined);
    });

    it('should define a check function', () => {
        let component = new AWComponent(noop, noop);
        expect(component.check).to.not.equal(undefined);
    });

    it('should define a close function', () => {
        let component = new AWComponent(noop, noop);
        expect(component.close).to.not.equal(undefined);
    });

});