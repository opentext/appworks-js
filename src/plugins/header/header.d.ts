import { AWPlugin } from '../../common/plugin';
export declare class AWHeaderBar extends AWPlugin {
    static readonly ButtonName: {
        LeftOne: number;
        LeftTwo: number;
        RightOne: number;
        RightTwo: number;
    };
    static readonly ButtonImage: {
        Hamburger: number;
        Back: number;
        Settings: number;
        Appmenu: number;
        None: number;
        Dots: number;
        Search: number;
    };
    /**
     * @deprecated
     * @type {{LeftOne: number; LeftTwo: number; RightOne: number; RightTwo: number}}
     */
    ButtonName: {
        LeftOne: number;
        LeftTwo: number;
        RightOne: number;
        RightTwo: number;
    };
    /**
     * @deprecated
     * @type {{Hamburger: number; Back: number; Settings: number; Appmenu: number; None: number; Dots: number; Search: number}}
     */
    ButtonImage: {
        Hamburger: number;
        Back: number;
        Settings: number;
        Appmenu: number;
        None: number;
        Dots: number;
        Search: number;
    };
    private callback;
    setHeader(config: any): void;
    getHeader(): void;
    setHeaderButtons(callback: Function, config: any): void;
    maskHeader(shouldMaskHeader: any): void;
}
export declare class AWHeader extends AWHeaderBar {
}
