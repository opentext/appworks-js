export class MockNotification implements Notification {
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