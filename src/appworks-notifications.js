function AppWorksNotifications(aw) {
    'use strict';

    var self = this;

    var wsProtocol = 'appworks',
        wsHost =  '127.0.0.1',
        wsPort = '9000',
        wsFull = 'ws://' + wsHost + ':' + wsPort,
        websocket = new WebSocket(wsFull, wsProtocol),
        notifications = [];

    // notifications enabled by default
    on();

    function onNotification(message) {
        // TODO determine if this notification is intended for this app
        notifications.push(message.data);
        // execute the user defined callback
        if (self.onmessage) {
            self.onmessage(message);
        }
    }

    function get() {
        return notifications;
    }

    function clear() {
        notifications = [];
    }

    function on() {
        websocket.onmessage = onNotification;
    }

    function off() {
        clear();
        websocket.onmessage = null;
    }

    var awNotifications = {
        get: get,
        clear: clear,
        on: on,
        off: off
    };

    return awNotifications;
}