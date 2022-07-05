import { AWPlugin } from "../../common/plugin";
export declare class AWNotificationManager extends AWPlugin {
    constructor();
    createClientNotification(identifier: string, title: string, subtitle: string, seconds: string, success: any, error: any): void;
    didTapNotificationFromActivityView(handler: any, errorHandler: any, includeSeqNo: boolean): void;
    disablePushNotifications(): void;
    enablePushNotifications(handler: any, errorHandler: any, includeSeqNo: boolean): void;
    getNotifications(handler: any, errorHandler: any, includeSeqNo: boolean): void;
    getOpeningNotification(handler: any, errorHandler: any, includeSeqNo: boolean): void;
    notificationDidLaunchApp(handler: any, errorHandler: any, includeSeqNo: boolean): void;
    openListener(handler: any, errorHandler: any, includeSeqNo: boolean): void;
    registerForTopic(topicName: string): void;
    removeAllClientNotifications(success: any, error: any): void;
    removeClientNotification(identifier: string, success: any, error: any): void;
    removeNotification(seqNo: string, handler: any, errorHandler?: any): void;
    unregisterFromTopic(topicName: string): void;
    alert(message: string, alertCallback: any, title?: string, buttonName?: string): void;
    beep(times: number): void;
    confirm(message: string, confirmCallback: any, title?: string, buttonLabels?: string[]): void;
    prompt(message: string, promptCallback: any, title?: string, buttonLabels?: string[], defaultText?: string): void;
}
