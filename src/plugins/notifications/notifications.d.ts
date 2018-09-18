import { AWPlugin } from "../../common/plugin";
export declare class AWNotificationManager extends AWPlugin {
    constructor();
    enablePushNotifications(handler: any, errorHandler: any, includeSeqNo: boolean): void;
    disablePushNotifications(): void;
    getNotifications(handler: any, errorHandler: any, includeSeqNo: boolean): void;
    getOpeningNotification(handler: any, errorHandler: any, includeSeqNo: boolean): void;
    notificationDidLaunchApp(handler: any, errorHandler: any, includeSeqNo: boolean): void;
    openListener(handler: any, errorHandler: any, includeSeqNo: boolean): void;
    didTapNotificationFromActivityView(handler: any, errorHandler: any, includeSeqNo: boolean): void;
    removeNotification(seqNo: string, handler: any, errorHandler?: any): void;
    alert(message: string, alertCallback: any, title?: string, buttonName?: string): void;
    beep(times: number): void;
    confirm(message: string, confirmCallback: any, title?: string, buttonLabels?: string[]): void;
    prompt(message: string, promptCallback: any, title?: string, buttonLabels?: string[], defaultText?: string): void;
    registerForTopic(topicName: string): void;
    unregisterFromTopic(topicName: string): void;
}
