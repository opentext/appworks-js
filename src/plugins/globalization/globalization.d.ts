import { AWPlugin } from '../../common/plugin';
export declare class AWGlobalization extends AWPlugin {
    constructor();
    getPreferredLanguage(successFn: Function, errorFn?: Function): void;
}
