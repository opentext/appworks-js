// Copyright 2015-2017 Open Text
//
// Licensed under the Apache License, Version 2.0 (the "License”);
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/// <reference path="../typings/globals/cordova/index.d.ts"/>
/// <reference path="../typings/globals/cordova/plugins/inappbrowser/index.d.ts"/>

/** */
interface AWAccelerometer {
    /** */
    getCurrentAcceleration(): void;
    /** */
    watchAcceleration(options: any): void;
    /** */
    clearWatch(watchId: number): void;
}

/** */
interface AWAppManager {
    /** */
    closeActiveApp(): void;
}

/** */
interface AWAuth {
    /** */
    authenticate(force: boolean): void;
    /** */
    getAuthResponse(): void;
    /** */
    gateway(successCallback: any, errorCallback: any): void;
}

/** */
interface AWCache {
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
interface AWCamera {
    /** */
    openGallery(options?: any): void;
    /** */
    takePicture(options?: any): void;
}

interface AWCompass {
    /** */
    getCurrentHeading(): void;
    /** */
    watchHeading(options: any): void;
    /** */
    clearWatch(id: number): void;
}

/** */
interface AWComponent {
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
interface AWContacts {
    /** */
    create(contact: any): void;
    /** */
    find(fields: any, options?: any): void;
    /** */
    pickContact(): void;
}

/** */
interface AWDevice {
}

/** */
interface AWFileChooser {
    /** */
    selectAndUpload(action: string): void;
}

/** */
interface AWFileTransfer {
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
interface AWFinder {
    /** */
    open(path: string, filename: string): void;
    /** */
    openIn(filename: string): void;
    /** */
    list(path: string): void;
}

/** */
interface AWHeaderBar {
    /** */
    setHeader(config: any): void;
    /** */
    getHeader(): void;
}

/** */
interface AWKeyboard {
    /** */
    hideKeyboardAccessoryBar(hide: boolean): void;
    /** */
    close(): void;
    /** */
    show(): void;
    /** */
    disableScroll(disable: boolean): void;
}

interface AWLocation {
    /** */
    getCurrentPosition(options?: any): void;
    /** */
    watchPosition(options?: any): void;
    /** */
    clearWatch(watchId: number): void;
}

/** */
interface AWMedia {
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
interface AWMediaCapture {
    /** */
    captureAudio(options?: any): void;
    /** */
    captureImage(options?: any): void;
    /** */
    captureVideo(options?: any): void;
}

/** */
interface AWMenu {
    /** */
    push(items: any): void;
    /** */
    openListener(listener: any): void;
}

/** */
interface AWNotificationManager {
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
interface AWOfflineManager {
    /** */
    defer(eventName: string, args: any): void;
    /** */
    cancel(id: number): void;
    /** */
    networkStatus(): any;
}

/** */
interface AWPage {
    /** */
    setPageUrl(url: string): void;
}

/** */
interface AWQRReader {
    /** */
    scan(): void;
    /** */
    rename(): void;
}

/** */
interface AWSecureStorage {
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
interface AWVibration {
    /** */
    vibrate(time: number): void;
}

/** */
interface AWWebView {
    /** */
    open(url: string, target?: string, options?: string): InAppBrowser;
}