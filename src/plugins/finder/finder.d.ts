import { AWPlugin } from '../../common/plugin';
export declare class AWFinder extends AWPlugin {
    open(path: string, filename: string): void;
    openIn(filename: string): void;
    list(path: string): void;
    private openDirect(filename);
    share(filename: string): void;
}
