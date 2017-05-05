import { AWPlugin } from '../../common/plugin';
export declare class AWNotificationManager extends AWPlugin {
    constructor();
    enablePushNotifications(handler: any, errorHandler?: any): void;
    disablePushNotifications(): void;
    getNotifications(handler: any, errorHandler?: any): void;
    getOpeningNotification(handler: any, errorHandler?: any): void;
    notificationDidLaunchApp(handler: any, errorHandler: any): void;
    openListener(handler: any, errorHandler: any): void;
    didTapNotificationFromActivityView(handler: any, errorHandler: any): void;
    removeNotification(seqNo: any, handler: any, errorHandler?: any): void;
    alert(message: string, alertCallback: any, title?: string, buttonName?: string): void;
    beep(times: number): void;
    confirm(message: string, confirmCallback: any, title?: string, buttonLabels?: string[]): void;
    prompt(message: string, promptCallback: any, title?: string, buttonLabels?: string[], defaultText?: string): void;
}
