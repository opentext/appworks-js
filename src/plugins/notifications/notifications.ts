import { AWPlugin } from "../../common/plugin";
import { AWProxy } from "../../common/proxy";
import { noop } from "../../common/util";

export class AWNotificationManager extends AWPlugin {

    constructor() {
        super(noop, noop);
    }

    enablePushNotifications(handler: any, errorHandler: any, includeSeqNo: boolean) {
        AWProxy.exec(
            handler,
            errorHandler,
            "AWNotificationManager",
            "enablePushNotifications",
            AWProxy.isDesktopEnv() ? [handler, includeSeqNo] : [includeSeqNo]
        );
    }

    disablePushNotifications() {
        AWProxy.exec(
            null,
            null,
            "AWNotificationManager",
            "disablePushNotifications",
            []
        );
    }

    getNotifications(handler: any, errorHandler: any, includeSeqNo: boolean) {
        AWProxy.exec(
            handler,
            errorHandler,
            "AWNotificationManager",
            "getPushNotifications",
            [includeSeqNo]
        );
    }

    getOpeningNotification(handler: any, errorHandler: any, includeSeqNo: boolean) {
        AWProxy.exec(
            handler,
            errorHandler,
            "AWNotificationManager",
            "getOpeningNotification",
            [includeSeqNo]
        );
    }

    notificationDidLaunchApp(handler: any, errorHandler: any, includeSeqNo: boolean) {
        this.getOpeningNotification(handler, errorHandler, includeSeqNo);
    }

    openListener(handler: any, errorHandler: any, includeSeqNo: boolean) {
        AWProxy.exec(
            handler,
            errorHandler,
            "AWNotificationManager",
            "openListener",
            AWProxy.isDesktopEnv() ? [handler, includeSeqNo] : [includeSeqNo]
        );
    }

    didTapNotificationFromActivityView(handler: any, errorHandler: any, includeSeqNo: boolean) {
        this.openListener(handler, errorHandler, includeSeqNo);
    }

    removeNotification(seqNo: string, handler: any, errorHandler?: any) {
        AWProxy.exec(
            handler,
            errorHandler,
            "AWNotificationManager",
            "removeNotification",
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

    registerForTopic(topicName: string) {
        AWProxy.exec(
            null,
            null,
            "AWNotificationManager",
            "registerForTopic",
            [topicName]
        );
    }

    unregisterFromTopic(topicName: string) {
        AWProxy.exec(
            null,
            null,
            "AWNotificationManager",
            "unregisterFromTopic",
            [topicName]
        );
    }
}
