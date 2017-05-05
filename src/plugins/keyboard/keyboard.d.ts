import { AWPlugin } from '../../common/plugin';
export declare class AWKeyboard extends AWPlugin {
    constructor();
    hideKeyboardAccessoryBar(hide: boolean): void;
    close(): void;
    show(): void;
    disableScroll(disable: boolean): void;
}
