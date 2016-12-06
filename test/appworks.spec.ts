/// <reference path='../typings/globals/chai/index.d.ts' />
/// <reference path='../typings/globals/mocha/index.d.ts' />

import {expect} from 'chai';
import {
    AWAccelerometer, Accelerometer, AppManager, AWAppManager,
    Vibration, WebView, AWAuth, Auth, AWCache, Cache, AWCamera, AWCompass, Compass, AWComponent, Component, AWContacts,
    Contacts, AWDevice, Device, Media, Location, FileTransfer, Camera, AWFileChooser, FileChooser, AWFileTransfer, AWFinder, Finder, AWHeaderBar, HeaderBar,
    AWKeyboard, Keyboard, AWLocation, AWMedia, AWMediaCapture, MediaCapture, AWMenu, Menu, AWNotificationManager,
    NotificationManager, AWOfflineManager, OfflineManager, AWPage, Page, QRReader, AWSecureStorage, SecureStorage,
    AWVibration, AWWebView, AWQRReader,
} from "../src/appworks";

describe('Appworks namespace', () => {
    it('should define Accelerometer as a global relative to the Appworks namespace', () => {
        expect(AWAccelerometer).to.not.equal(undefined);
        expect(Accelerometer).to.not.equal(undefined);
    });

    it('should define AppManager as a global relative to the Appworks namespace', () => {
        expect(AWAppManager).to.not.equal(undefined);
        expect(AppManager).to.not.equal(undefined);
    });

    it('should define Auth as a global relative to the Appworks namespace', () => {
        expect(AWAuth).to.not.equal(undefined);
        expect(Auth).to.not.equal(undefined);
    });

    it('should define Cache as a global relative to the Appworks namespace', () => {
        expect(AWCache).to.not.equal(undefined);
        expect(Cache).to.not.equal(undefined);
    });

    it('should define Camera as a global relative to the Appworks namespace', () => {
        expect(AWCamera).to.not.equal(undefined);
        expect(Camera).to.not.equal(undefined);
    });

    it('should define Compass as a global relative to the Appworks namespace', () => {
        expect(AWCompass).to.not.equal(undefined);
        expect(Compass).to.not.equal(undefined);
    });

    it('should define Component as a global relative to the Appworks namespace', () => {
        expect(AWComponent).to.not.equal(undefined);
        expect(Component).to.not.equal(undefined);
    });

    it('should define Contacts as a global relative to the Appworks namespace', () => {
        expect(AWContacts).to.not.equal(undefined);
        expect(Contacts).to.not.equal(undefined);
    });

    it('should define Device as a global relative to the Appworks namespace', () => {
        expect(AWDevice).to.not.equal(undefined);
        expect(Device).to.not.equal(undefined);
    });

    it('should define FileChooser as a global relative to the Appworks namespace', () => {
        expect(AWFileChooser).to.not.equal(undefined);
        expect(FileChooser).to.not.equal(undefined);
    });

    it('should define FileTransfer as a global relative to the Appworks namespace', () => {
        expect(AWFileTransfer).to.not.equal(undefined);
        expect(FileTransfer).to.not.equal(undefined);
    });

    it('should define Finder as a global relative to the Appworks namespace', () => {
        expect(AWFinder).to.not.equal(undefined);
        expect(Finder).to.not.equal(undefined);
    });

    it('should define HeaderBar as a global relative to the Appworks namespace', () => {
        expect(AWHeaderBar).to.not.equal(undefined);
        expect(HeaderBar).to.not.equal(undefined);
    });

    it('should define Keyboard as a global relative to the Appworks namespace', () => {
        expect(AWKeyboard).to.not.equal(undefined);
        expect(Keyboard).to.not.equal(undefined);
    });

    it('should define Location as a global relative to the Appworks namespace', () => {
        expect(AWLocation).to.not.equal(undefined);
        expect(Location).to.not.equal(undefined);
    });

    it('should define Media as a global relative to the Appworks namespace', () => {
        expect(AWMedia).to.not.equal(undefined);
        expect(Media).to.not.equal(undefined);
    });

    it('should define MediaCapture as a global relative to the Appworks namespace', () => {
        expect(AWMediaCapture).to.not.equal(undefined);
        expect(MediaCapture).to.not.equal(undefined);
    });

    it('should define Menu as a global relative to the Appworks namespace', () => {
        expect(AWMenu).to.not.equal(undefined);
        expect(Menu).to.not.equal(undefined);
    });

    it('should define NotificationManager as a global relative to the Appworks namespace', () => {
        expect(AWNotificationManager).to.not.equal(undefined);
        expect(NotificationManager).to.not.equal(undefined);
    });

    it('should define OfflineManager as a global relative to the Appworks namespace', () => {
        expect(AWOfflineManager).to.not.equal(undefined);
        expect(OfflineManager).to.not.equal(undefined);
    });

    it('should define Page as a global relative to the Appworks namespace', () => {
        expect(AWPage).to.not.equal(undefined);
        expect(Page).to.not.equal(undefined);
    });

    it('should define QRReader as a global relative to the Appworks namespace', () => {
        expect(AWQRReader).to.not.equal(undefined);
        expect(QRReader).to.not.equal(undefined);
    });

    it('should define SecureStorage as a global relative to the Appworks namespace', () => {
        expect(AWSecureStorage).to.not.equal(undefined);
        expect(SecureStorage).to.not.equal(undefined);
    });

    it('should define Vibration as a global relative to the Appworks namespace', () => {
        expect(AWVibration).to.not.equal(undefined);
        expect(Vibration).to.not.equal(undefined);
    });

    it('should define WebView as a global relative to the Appworks namespace', () => {
        expect(AWWebView).to.not.equal(undefined);
        expect(WebView).to.not.equal(undefined);
    });
});
