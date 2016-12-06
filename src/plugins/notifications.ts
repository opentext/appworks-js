import {AWPlugin} from '../plugin';
import {AWProxy} from '../proxy';
import {Util} from '../util';

export class AWNotificationManager extends AWPlugin {

    constructor() {
        super(Util.noop, Util.noop);
    }

    enablePushNotifications(handler: any, errorHandler?: any) {
        AWProxy.exec(
            handler,
            errorHandler,
            'AWNotificationManager',
            'enablePushNotifications',
            []
        );
    }

    disablePushNotifications() {
        AWProxy.exec(
            null,
            null,
            'AWNotificationManager',
            'disablePushNotifications',
            []
        );
    }

    getNotifications(handler: any, errorHandler?: any) {
        AWProxy.exec(
            handler,
            errorHandler,
            'AWNotificationManager',
            'getPushNotifications',
            []
        );
    }

    getOpeningNotification(handler: any, errorHandler?: any) {
        AWProxy.exec(
            handler,
            errorHandler,
            'AWNotificationManager',
            'getOpeningNotification',
            []
        );
    }

    notificationDidLaunchApp(handler: any, errorHandler: any) {
        this.getOpeningNotification(handler, errorHandler);
    }

    openListener(handler: any, errorHandler: any) {
        AWProxy.exec(
            handler,
            errorHandler,
            'AWNotificationManager',
            'openListener',
            []
        );
    }

    didTapNotificationFromActivityView(handler: any, errorHandler: any) {
        this.openListener(handler, errorHandler);
    }

    removeNotification(seqNo, handler, errorHandler?: any) {
        AWProxy.exec(
            handler,
            errorHandler,
            'AWNotificationManager',
            'removeNotification',
            [seqNo]
        );
    }

    alert(message: string, alertCallback: any, title?: string, buttonName?: string) {
        AWProxy.notification().alert(message, alertCallback, title, buttonName);
    }

    beep(times: number) {
        AWProxy.notification().beep(times);
    }

    confirm(message: string, confirmCallback: any, title?: string, buttonLabels?: string[]) {
        AWProxy.notification().confirm(message, confirmCallback, title, buttonLabels);
    }

    prompt(message: string, promptCallback: any, title?: string, buttonLabels?: string[], defaultText?: string) {
        AWProxy.notification().prompt(message, promptCallback, title, buttonLabels, defaultText);
    }
}