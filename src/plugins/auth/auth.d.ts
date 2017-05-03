import { AWPlugin } from '../../common/plugin';
export declare class AWAuth extends AWPlugin {
    authenticate(force?: boolean): void;
    getAuthResponse(): void;
    gateway(successHandler: any, errorHandler?: any): void;
    online(successHandler: any, errorHandler?: any): void;
}
