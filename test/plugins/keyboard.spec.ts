import {expect} from 'chai';
import {AWKeyboard} from "../../src/plugins/keyboard/keyboard";

describe('Keyboard', () => {
    it('should define a hideKeyboardAccessoryBar function', () => {
        let o = new AWKeyboard();
        expect(o.hideKeyboardAccessoryBar).to.not.equal(undefined);
    });

    it('should define a close function', () => {
        let o = new AWKeyboard();
        expect(o.close).to.not.equal(undefined);
    });

    it('should define a show function', () => {
        let o = new AWKeyboard();
        expect(o.show).to.not.equal(undefined);
    });

    it('should define a disableScroll function', () => {
        let o = new AWKeyboard();
        expect(o.disableScroll).to.not.equal(undefined);
    });
});