"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var plugin_1 = require("../../common/plugin");
var proxy_1 = require("../../common/proxy");
var util_1 = require("../../common/util");
var AWCalendar = (function (_super) {
    __extends(AWCalendar, _super);
    function AWCalendar() {
        return _super.call(this, util_1.noop, util_1.noop) || this;
    }
    AWCalendar.getCalendarOptions = function () {
        return {
            firstReminderMinutes: 60,
            secondReminderMinutes: null,
            recurrence: null,
            recurrenceInterval: 1,
            recurrenceWeekstart: 'MO',
            recurrenceByDay: null,
            recurrenceByMonthDay: null,
            recurrenceEndDate: null,
            recurrenceCount: null,
            calendarName: null,
            calendarId: null,
            url: null
        };
    };
    AWCalendar.prototype.hasReadPermission = function (successHandler, errorHandler) {
        return new Promise(function (resolve, reject) {
            proxy_1.AWProxy.exec(successHandler || resolve, errorHandler || reject, 'AWCalendar', 'hasReadPermission', []);
        });
    };
    AWCalendar.prototype.requestReadPermission = function (successHandler, errorHandler) {
        return new Promise(function (resolve, reject) {
            proxy_1.AWProxy.exec(successHandler || resolve, errorHandler || reject, 'AWCalendar', 'requestReadPermission', []);
        });
    };
    AWCalendar.prototype.hasWritePermission = function (successHandler, errorHandler) {
        return new Promise(function (resolve, reject) {
            proxy_1.AWProxy.exec(successHandler || resolve, errorHandler || reject, 'AWCalendar', 'hasWritePermission', []);
        });
    };
    AWCalendar.prototype.requestWritePermission = function (successHandler, errorHandler) {
        return new Promise(function (resolve, reject) {
            proxy_1.AWProxy.exec(successHandler || resolve, errorHandler || reject, 'AWCalendar', 'requestWritePermission', []);
        });
    };
    AWCalendar.prototype.hasReadWritePermission = function (successHandler, errorHandler) {
        return new Promise(function (resolve, reject) {
            proxy_1.AWProxy.exec(successHandler || resolve, errorHandler || reject, 'AWCalendar', 'hasReadWritePermission', []);
        });
    };
    AWCalendar.prototype.requestReadWritePermission = function (successHandler, errorHandler) {
        return new Promise(function (resolve, reject) {
            proxy_1.AWProxy.exec(successHandler || resolve, errorHandler || reject, 'AWCalendar', 'requestReadWritePermission', []);
        });
    };
    AWCalendar.prototype.createCalendar = function (options, successHandler, errorHandler) {
        if (options === void 0) { options = {
            calendarName: null,
            calendarColor: null
        }; }
        return new Promise(function (resolve, reject) {
            proxy_1.AWProxy.exec(successHandler || resolve, errorHandler || reject, 'AWCalendar', 'createCalendar', [options]);
        });
    };
    AWCalendar.prototype.deleteCalendar = function (calendarName, successHandler, errorHandler) {
        return new Promise(function (resolve, reject) {
            proxy_1.AWProxy.exec(successHandler || resolve, errorHandler || reject, 'AWCalendar', 'deleteCalendar', [{ calendarName: calendarName }]);
        });
    };
    AWCalendar.prototype.openCalendar = function (date, successHandler, errorHandler) {
        return new Promise(function (resolve, reject) {
            proxy_1.AWProxy.exec(successHandler || resolve, errorHandler || reject, 'AWCalendar', 'openCalendar', [{ date: date.getTime() }]);
        });
    };
    AWCalendar.prototype.createEventWithOptions = function (title, location, notes, startDate, endDate, options, successHandler, errorHandler) {
        if (options === void 0) { options = AWCalendar.getCalendarOptions(); }
        return new Promise(function (resolve, reject) {
            proxy_1.AWProxy.exec(successHandler || resolve, errorHandler || reject, 'AWCalendar', 'createEventWithOptions', [{
                    title: title,
                    location: location,
                    notes: notes,
                    startTime: startDate.getTime(),
                    endTime: endDate.getTime(),
                    options: options
                }]);
        });
    };
    AWCalendar.prototype.createEvent = function (title, location, notes, startDate, endDate, successHandler, errorHandler) {
        return this.createEventWithOptions(title, location, notes, startDate, endDate, AWCalendar.getCalendarOptions(), successHandler, errorHandler);
    };
    AWCalendar.prototype.createEventInteractivelyWithOptions = function (title, location, notes, startDate, endDate, options, successHandler, errorHandler) {
        if (options === void 0) { options = AWCalendar.getCalendarOptions(); }
        return new Promise(function (resolve, reject) {
            proxy_1.AWProxy.exec(successHandler || resolve, errorHandler || reject, 'AWCalendar', 'createEventInteractively', [{
                    title: title,
                    location: location,
                    notes: notes,
                    startTime: startDate.getTime(),
                    endTime: endDate.getTime(),
                    options: options
                }]);
        });
    };
    AWCalendar.prototype.createEventInteractively = function (title, location, notes, startDate, endDate, successHandler, errorHandler) {
        return this.createEventInteractivelyWithOptions(title, location, notes, startDate, endDate, AWCalendar.getCalendarOptions(), successHandler, errorHandler);
    };
    AWCalendar.prototype.findEventWithOptions = function (title, location, notes, startDate, endDate, options, successHandler, errorHandler) {
        if (options === void 0) { options = AWCalendar.getCalendarOptions(); }
        return new Promise(function (resolve, reject) {
            proxy_1.AWProxy.exec(successHandler || resolve, errorHandler || reject, 'AWCalendar', 'findEventWithOptions', [{
                    title: title,
                    location: location,
                    notes: notes,
                    startTime: startDate.getTime(),
                    endTime: endDate.getTime(),
                    options: options
                }]);
        });
    };
    AWCalendar.prototype.findEvent = function (title, location, notes, startDate, endDate, successHandler, errorHandler) {
        return this.findEventWithOptions(title, location, notes, startDate, endDate, AWCalendar.getCalendarOptions(), successHandler, errorHandler);
    };
    AWCalendar.prototype.findAllEventsInNamedCalendar = function (calendarName, successHandler, errorHandler) {
        return new Promise(function (resolve, reject) {
            proxy_1.AWProxy.exec(successHandler || resolve, errorHandler || reject, 'AWCalendar', 'findAllEventsInNamedCalendar', [{ calendarName: calendarName }]);
        });
    };
    AWCalendar.prototype.deleteEvent = function (title, location, notes, startDate, endDate, successHandler, errorHandler) {
        return new Promise(function (resolve, reject) {
            proxy_1.AWProxy.exec(successHandler || resolve, errorHandler || reject, 'AWCalendar', 'deleteEvent', [{
                    title: title,
                    location: location,
                    startTime: startDate.getTime(),
                    endTime: endDate.getTime(),
                }]);
        });
    };
    AWCalendar.prototype.deleteEventFromNamedCalendar = function (title, location, notes, startDate, endDate, calendarName, successHandler, errorHandler) {
        return new Promise(function (resolve, reject) {
            proxy_1.AWProxy.exec(successHandler || resolve, errorHandler || reject, 'AWCalendar', 'deleteEventFromNamedCalendar', [{
                    title: title,
                    location: location,
                    startTime: startDate.getTime(),
                    endTime: endDate.getTime(),
                    calendarName: calendarName
                }]);
        });
    };
    AWCalendar.prototype.modifyEventWithOptions = function (title, location, notes, startDate, endDate, newTitle, newLocation, newNotes, newStartDate, newEndDate, options, newOptions, successHandler, errorHandler) {
        if (options === void 0) { options = AWCalendar.getCalendarOptions(); }
        if (newOptions === void 0) { newOptions = AWCalendar.getCalendarOptions(); }
        return new Promise(function (resolve, reject) {
            proxy_1.AWProxy.exec(successHandler || resolve, errorHandler || reject, 'AWCalendar', 'modifyEventWithOptions', [{
                    title: title,
                    location: location,
                    notes: notes,
                    startTime: startDate.getTime(),
                    endTime: endDate.getTime(),
                    newTitle: newTitle,
                    newLocation: newLocation,
                    newNotes: newNotes,
                    newStartTime: newStartDate.getTime(),
                    newEndDate: newEndDate.getTime(),
                    options: options,
                    newOptions: newOptions
                }]);
        });
    };
    AWCalendar.prototype.modifyEvent = function (title, location, notes, startDate, endDate, newTitle, newLocation, newNotes, newStartDate, newEndDate, successHandler, errorHandler) {
        return this.modifyEventWithOptions(title, location, notes, startDate, endDate, newTitle, newLocation, newNotes, newStartDate, newEndDate, AWCalendar.getCalendarOptions(), AWCalendar.getCalendarOptions(), successHandler, errorHandler);
    };
    AWCalendar.prototype.modifyEventInNamedCalendar = function (title, location, notes, startDate, endDate, newTitle, newLocation, newNotes, newStartDate, newEndDate, calendarName, successHandler, errorHandler) {
        var options = AWCalendar.getCalendarOptions();
        options.calendarName = calendarName;
        return this.modifyEventWithOptions(title, location, notes, startDate, endDate, newTitle, newLocation, newNotes, newStartDate, newEndDate, options, successHandler, errorHandler);
    };
    AWCalendar.prototype.listCalendars = function (successHandler, errorHandler) {
        return new Promise(function (resolve, reject) {
            proxy_1.AWProxy.exec(successHandler || resolve, errorHandler || reject, 'AWCalendar', 'listCalendars', []);
        });
    };
    AWCalendar.prototype.listEventsInRange = function (startDate, endDate, successHandler, errorHandler) {
        return new Promise(function (resolve, reject) {
            proxy_1.AWProxy.exec(successHandler || resolve, errorHandler || reject, 'AWCalendar', 'listEventsInRange', [{
                    startTime: startDate.getTime(),
                    endTime: endDate.getTime()
                }]);
        });
    };
    return AWCalendar;
}(plugin_1.AWPlugin));
exports.AWCalendar = AWCalendar;
//# sourceMappingURL=calendar.js.map