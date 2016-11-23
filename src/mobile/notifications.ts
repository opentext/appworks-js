/// <reference path="../../typings/globals/cordova/index.d.ts"/>
/// <reference path="../../typings/globals/cordova/plugins/dialogs/index.d.ts"/>

import {AWPlugin} from '../core/aw-plugin';

export class AWNotificationManager extends AWPlugin {

    constructor() {
        super(() => {}, () => {});
    }

    enablePushNotifications(handler: any, errorHandler?: any) {
        cordova.exec(
            handler,
            errorHandler,
            'AWNotificationManager',
            'enablePushNotifications',
            []
        );
    }

    disablePushNotifications() {
        cordova.exec(
            null,
            null,
            'AWNotificationManager',
            'disablePushNotifications',
            []
        );
    }

    getNotifications(handler: any, errorHandler?: any) {
        cordova.exec(
            handler,
            errorHandler,
            'AWNotificationManager',
            'getPushNotifications',
            []
        );
    }

    getOpeningNotification(handler: any, errorHandler?: any) {
        cordova.exec(
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
        cordova.exec(
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

    static alert(message: string, alertCallback: any, title?: string, buttonName?: string) {
        navigator.notification.alert(message, alertCallback, title, buttonName);
    }

    static beep(times: number) {
        navigator.notification.beep(times);
    }

    static confirm(message: string, confirmCallback: any, title?: string, buttonLabels?: string[]) {
        navigator.notification.confirm(message, confirmCallback, title, buttonLabels);
    }

    static prompt(message: string, promptCallback: any, title?: string, buttonLabels?: string[], defaultText?: string) {
        navigator.notification.prompt(message, promptCallback, title, buttonLabels, defaultText);
    }
}