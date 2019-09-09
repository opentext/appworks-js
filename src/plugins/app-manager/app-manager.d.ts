import { AWPlugin } from '../../common/plugin';
export declare class AWAppManager extends AWPlugin {
    closeActiveApp(): void;
    getAppName(): void;
    getAppVersion(success: any, error: any): void;
    isFirstRun(success: any, error: any): void;
    setAppHasRun(success: any, error: any): void;
    resetShouldClearCache(): void;
    shouldClearCache(success: any): void;
}
