import { AWPlugin } from '../../common/plugin';
export declare class AWAppManager extends AWPlugin {
    closeActiveApp(): void;
    getAppName(): void;
    resetShouldClearCache(): void;
    shouldClearCache(success: any): void;
}
