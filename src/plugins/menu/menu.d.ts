import { AWPlugin } from '../../common/plugin';
import { MenuSection } from './index';
export declare class AWMenu extends AWPlugin {
    push(items: any): void;
    setMenu(menuSections: MenuSection[]): Promise<{}>;
    didOpenMenuItem(callback: any): void;
    openListener(listener: any): void;
    didTapMenuItem(listener: any): void;
}
