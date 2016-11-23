import {AWPlugin} from '../core/aw-plugin';

export class AWNotificationManager extends AWPlugin {

    constructor() {
        super(() => {}, () => {});
    }

    enablePushNotifications(handler: any, errorHandler?: any) {
        // TODO
    }

    disablePushNotifications() {
        // TODO
    }

    getNotifications(handler: any, errorHandler?: any) {
        // TODO
    }

    getOpeningNotification(handler: any, errorHandler?: any) {
        // TODO
    }

    notificationDidLaunchApp(handler: any, errorHandler: any) {
        // TODO
    }

    openListener(handler: any, errorHandler: any) {
        // TODO
    }

    didTapNotificationFromActivityView(handler: any, errorHandler: any) {
        // TODO
    }

    static alert(message: string, alertCallback: any, title?: string, buttonName?: string) {
        // TODO
    }

    static beep(times: number) {
        // TODO
    }

    static confirm(message: string, confirmCallback: any, title?: string, buttonLabels?: string[]) {
        // TODO
    }

    static prompt(message: string, promptCallback: any, title?: string, buttonLabels?: string[], defaultText?: string) {
        // TODO
    }
}