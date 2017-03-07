export class MockNotification implements Notification {
    body: any = null;
    dir: any = null;
    icon: any = null;
    lang: any = null;
    onclick: any = null;
    onclose: any = null;
    onerror: any = null;
    onshow: any = null;
    permission: any = null;
    title: any = null;
    tag: any = null;
    close: any = null;
    addEventListener: any = (name: string) => {};
    removeEventListener: any = (name: string) => {};
    dispatchEvent: any = (name: string) => {};

    alert(message: string,
          alertCallback: () => void,
          title?: string,
          buttonName?: string): void {

    }

    beep(times: number): void {

    }

    confirm(message: string,
            confirmCallback: (choice: number) => void,
            title?: string,
            buttonLabels?: string[]): void {

    }

    prompt(message: string,
           promptCallback: (result: NotificationPromptResult) => void,
           title?: string,
           buttonLabels?: string[],
           defaultText?: string): void {

    }

    vibrate(): void {

    }

    vibrateWithPattern(): void {

    }

    cancelVibration(): void {

    }
}