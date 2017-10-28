import { AWPlugin } from '../../common/plugin';
export declare class AWAuth extends AWPlugin {
    authenticate(force?: boolean): void;
    /**
     *  Marked for depreciation
     *  Use authenticate(boolean?), which will get the auth object if the session is valid, else it will refresh the auth object and return that.
     */
    getAuthResponse(): void;
    gateway(successHandler: any, errorHandler?: any): void;
    online(successHandler: any, errorHandler?: any): void;
    otdsssoticket(successHandler: any, errorHandler: any): void;
}
