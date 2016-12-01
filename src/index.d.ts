/// <reference path="../typings/globals/cordova/index.d.ts"/>
/// <reference path="../typings/globals/cordova/plugins/inappbrowser/index.d.ts"/>

declare namespace Appworks {
    /** */
    export interface AWAccelerometer {
        /** */
        getCurrentAcceleration(): void;
        /** */
        watchAcceleration(options: any): void;
        /** */
        clearWatch(watchId: number): void;
    }

    /** */
    export interface AWAppManager {
        /** */
        closeActiveApp(): void;
    }

    /** */
    export interface AWAuth {
        /** */
        authenticate(force: boolean): void;
        /** */
        getAuthResponse(): void;
        /** */
        gateway(successCallback: any, errorCallback: any): void;
    }

    /** */
    export interface AWCache {
        /** */
        setItem(key: string, value: any): void;
        /** */
        getItem(key: string): void;
        /** */
        removeItem(key: string): void;
        /** */
        clear(): void;
    }

    /** */
    export interface AWCamera {
        /** */
        openGallery(options?: any): void;
        /** */
        takePicture(options?: any): void;
    }

    export interface AWCompass {
        /** */
        getCurrentHeading(): void;
        /** */
        watchHeading(options: any): void;
        /** */
        clearWatch(id: number): void;
    }

    /** */
    export interface AWComponent {
        /** */
        open(successHandler: any, errorHandler?: any, args?: any[]): void;
        /** */
        list(successHandler: any, errorHandler?: any, args?: any[]): void;
        /** */
        check(successHandler: any, errorHandler?: any, args?: any[]): void;
        /** */
        close(successHandler: any, errorHandler?: any, args?: any[]): void;
    }

    /** */
    export interface AWContacts {
        /** */
        create(contact: any): void;
        /** */
        find(fields: any, options?: any): void;
        /** */
        pickContact(): void;
    }

    /** */
    export interface AWDevice {
    }

    /** */
    export interface AWFileChooser {
        /** */
        selectAndUpload(action: string): void;
    }

    /** */
    export interface AWFileTransfer {
        /** */
        abort(): void;
        /** */
        download(url: string, target: string, options?: any, shared?: boolean): void;
        /** */
        progressHandler(handler: any): void;
        /** */
        upload(source: string, url: string, options?: any, shared?: boolean): void;
    }

    /** */
    export interface AWFinder {
        /** */
        open(path: string, filename: string): void;
        /** */
        openIn(filename: string): void;
        /** */
        list(path: string): void;
    }

    /** */
    export interface AWHeaderBar {
        /** */
        setHeader(config: any): void;
        /** */
        getHeader(): void;
    }

    /** */
    export interface AWKeyboard {
        /** */
        hideKeyboardAccessoryBar(hide: boolean): void;
        /** */
        close(): void;
        /** */
        show(): void;
        /** */
        disableScroll(disable: boolean): void;
    }

    export interface AWLocation {
        /** */
        getCurrentPosition(options?: any): void;
        /** */
        watchPosition(options?: any): void;
        /** */
        clearWatch(watchId: number): void;
    }

    /** */
    export interface AWMedia {
        /** */
        getCurrentPosition(successHandler: any, errorHandler?: any): void;
        /** */
        getDuration(): void;
        /** */
        pause(): void;
        /** */
        play(): void;
        /** */
        release(): void;
        /** */
        seekTo(value: number): void;
        /** */
        setVolume(value: number): void;
        /** */
        startRecord(): void;
        /** */
        stop(): void;
        /** */
        stopRecord(): void;
    }

    /** */
    export interface AWMediaCapture {
        /** */
        captureAudio(options?: any): void;
        /** */
        captureImage(options?: any): void;
        /** */
        captureVideo(options?: any): void;
    }

    /** */
    export interface AWMenu {
        /** */
        push(items: any): void;
        /** */
        openListener(listener: any): void;
    }

    /** */
    export interface AWNotificationManager {
        /** */
        enablePushNotifications(handler: any, errorHandler?: any): void;
        /** */
        disablePushNotifications(): void;
        /** */
        getNotifications(handler, errorHandler?: any): void;
        /** */
        notificationDidLaunchApp(handler, errorHandler?: any): void;
        /** */
        didTapNotificationFromActivityView(handler, errorHandler?: any): void;
    }

    /** */
    export interface AWOfflineManager {
        /** */
        defer(eventName: string, args: any): void;
        /** */
        cancel(id: number): void;
        /** */
        networkStatus(): any;
    }

    /** */
    export interface AWPage {
        /** */
        setPageUrl(url: string): void;
    }

    /** */
    export interface AWQRReader {
        /** */
        scan(): void;
        /** */
        rename(): void;
    }

    /** */
    export interface AWSecureStorage {
        /** */
        store(url: string, target: string, options?: any): void;
        /** */
        retrieve(filename: string, options?: any): void;
        /** */
        remove(target: string): void;
        /** */
        fileExistsAtPath(target: string): void;
    }

    /** */
    export interface AWVibration {
        /** */
        vibrate(time: number): void;
    }

    /** */
    export interface AWWebView {
        /** */
        open(url: string, target?: string, options?: string): InAppBrowser;
    }
}
