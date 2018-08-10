import { Notification, NotificationPromptResult } from "../../src/plugins/dialogs/index";
export declare class MockNotification implements Notification {
    body: any;
    dir: any;
    icon: any;
    lang: any;
    onclick: any;
    onclose: any;
    onerror: any;
    onshow: any;
    permission: any;
    title: any;
    tag: any;
    close: any;
    addEventListener: any;
    removeEventListener: any;
    dispatchEvent: any;
    alert(message: string, alertCallback: () => void, title?: string, buttonName?: string): void;
    beep(times: number): void;
    confirm(message: string, confirmCallback: (choice: number) => void, title?: string, buttonLabels?: string[]): void;
    prompt(message: string, promptCallback: (result: NotificationPromptResult) => void, title?: string, buttonLabels?: string[], defaultText?: string): void;
    vibrate(): void;
    vibrateWithPattern(): void;
    cancelVibration(): void;
}
