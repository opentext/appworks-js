import { AWPlugin } from '../../common/plugin';
export declare class AWHeaderBar extends AWPlugin {
    ButtonName: {
        LeftOne: number;
        LeftTwo: number;
        RightOne: number;
        RightTwo: number;
    };
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
