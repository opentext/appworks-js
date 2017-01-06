import {expect} from 'chai';
import {AWNotificationManager} from "../../src/plugins/notifications";

describe('Notifications', () => {
    it('should define a enablePushNotifications function', () => {
        let o = new AWNotificationManager();
        expect(o.enablePushNotifications).to.not.equal(undefined);
    });

    it('should define a disablePushNotifications function', () => {
        let o = new AWNotificationManager();
        expect(o.disablePushNotifications).to.not.equal(undefined);
    });

    it('should define a getNotifications function', () => {
        let o = new AWNotificationManager();
        expect(o.getNotifications).to.not.equal(undefined);
    });

    it('should define a getOpeningNotification function', () => {
        let o = new AWNotificationManager();
        expect(o.getOpeningNotification).to.not.equal(undefined);
    });

    it('should define a notificationDidLaunchApp function', () => {
        let o = new AWNotificationManager();
        expect(o.notificationDidLaunchApp).to.not.equal(undefined);
    });

    it('should define a didTapNotificationFromActivityView function', () => {
        let o = new AWNotificationManager();
        expect(o.didTapNotificationFromActivityView).to.not.equal(undefined);
    });

    it('should define a openListener function', () => {
        let o = new AWNotificationManager();
        expect(o.openListener).to.not.equal(undefined);
    });

    it('should define a removeNotificationi function', () => {
        let o = new AWNotificationManager();
        expect(o.removeNotification).to.not.equal(undefined);
    });

    it('should define a alert function', () => {
        let o = new AWNotificationManager();
        expect(o.alert).to.not.equal(undefined);
    });

    it('should define a beep function', () => {
        let o = new AWNotificationManager();
        expect(o.beep).to.not.equal(undefined);
    });

    it('should define a confirm function', () => {
        let o = new AWNotificationManager();
        expect(o.confirm).to.not.equal(undefined);
    });

    it('should define a prompt function', () => {
        let o = new AWNotificationManager();
        expect(o.prompt).to.not.equal(undefined);
    });

});