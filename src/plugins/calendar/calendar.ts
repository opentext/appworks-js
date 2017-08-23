import {AWPlugin} from '../../common/plugin';
import {AWProxy} from '../../common/proxy';
import {AWCalendarInterface, CalendarArgs, CalendarCreateOptions, CalendarOptions} from './index';
import {noop} from '../../common/util';

export class AWCalendar extends AWPlugin implements AWCalendarInterface {

    static getCalendarOptions(): CalendarOptions {
        return {
            firstReminderMinutes: 60,
            secondReminderMinutes: null,
            recurrence: null, // options are: 'daily', 'weekly', 'monthly', 'yearly'
            recurrenceInterval: 1, // only used when recurrence is set
            recurrenceWeekstart: "MO",
            recurrenceByDay: null,
            recurrenceByMonthDay: null,
            recurrenceEndDate: null,
            recurrenceCount: null,
            calendarName: null,
            calendarId: null,
            url: null
        };
    }

    constructor() {
        super(noop, noop);
    }

    hasReadPermission(successHandler?: any, errorHandler?: any) {
        return new Promise((resolve, reject) => {
            AWProxy.exec(
                successHandler || resolve,
                errorHandler || reject,
                'AWCalendar',
                'hasReadPermission',
                []
            );
        });
    }

    requestReadPermission(successHandler?: any, errorHandler?: any) {
        return new Promise((resolve, reject) => {
            AWProxy.exec(
                successHandler || resolve,
                errorHandler || reject,
                'AWCalendar',
                'requestReadPermission',
                []
            );
        });
    }

    hasWritePermission(successHandler?: any, errorHandler?: any) {
        return new Promise((resolve, reject) => {
            AWProxy.exec(
                successHandler || resolve,
                errorHandler || reject,
                'AWCalendar',
                'hasWritePermission',
                []
            );
        });
    }

    requestWritePermission(successHandler?: any, errorHandler?: any) {
        return new Promise((resolve, reject) => {
            AWProxy.exec(
                successHandler || resolve,
                errorHandler || reject,
                'AWCalendar',
                'requestWritePermission',
                []
            );
        });
    }

    hasReadWritePermission(successHandler?: any, errorHandler?: any) {
        return new Promise((resolve, reject) => {
            AWProxy.exec(
                successHandler || resolve,
                errorHandler || reject,
                'AWCalendar',
                'hasReadWritePermission',
                []
            );
        });
    }

    requestReadWritePermission(successHandler?: any, errorHandler?: any) {
        return new Promise((resolve, reject) => {
            AWProxy.exec(
                successHandler || resolve,
                errorHandler || reject,
                'AWCalendar',
                'requestReadWritePermission',
                []
            );
        });
    }

    createCalendar(options: CalendarCreateOptions = {
        calendarName: null,
        calendarColor: null
    }, successHandler?: any, errorHandler?: any) {
        return new Promise((resolve, reject) => {
            AWProxy.exec(
                successHandler || resolve,
                errorHandler || reject,
                'AWCalendar',
                'createCalendar',
                [options]
            );
        });
    }

    deleteCalendar(calendarName: string, successHandler?: any, errorHandler?: any) {
        return new Promise((resolve, reject) => {
            AWProxy.exec(
                successHandler || resolve,
                errorHandler || reject,
                'AWCalendar',
                'deleteCalendar',
                [{calendarName: calendarName} as CalendarArgs]
            );
        });
    }

    openCalendar(date: Date, successHandler?: any, errorHandler?: any) {
        return new Promise((resolve, reject) => {
            AWProxy.exec(
                successHandler || resolve,
                errorHandler || reject,
                'AWCalendar',
                'openCalendar',
                [{date: date.getTime()} as CalendarArgs]
            );
        });
    }

    createEventWithOptions(title: string,
                           location: string,
                           notes: string,
                           startDate: Date,
                           endDate: Date,
                           options: CalendarOptions = AWCalendar.getCalendarOptions(),
                           successHandler?: any,
                           errorHandler?: any) {
        return new Promise((resolve, reject) => {
            AWProxy.exec(
                successHandler || resolve,
                errorHandler || reject,
                'AWCalendar',
                'createEventWithOptions',
                [{
                    title: title,
                    location: location,
                    notes: notes,
                    startTime: startDate.getTime(),
                    endTime: endDate.getTime(),
                    options: options
                } as CalendarArgs]
            );
        });
    }

    createEvent(title: string,
                location: string,
                notes: string,
                startDate: Date,
                endDate: Date,
                successHandler?: any,
                errorHandler?: any) {
        return this.createEventWithOptions(
            title,
            location,
            notes,
            startDate,
            endDate,
            AWCalendar.getCalendarOptions(),
            successHandler,
            errorHandler
        );
    }

    createEventInteractivelyWithOptions(title: string,
                                        location: string,
                                        notes: string,
                                        startDate: Date,
                                        endDate: Date,
                                        options: CalendarOptions = AWCalendar.getCalendarOptions(),
                                        successHandler?: any,
                                        errorHandler?: any): Promise<any> {
        return new Promise((resolve, reject) => {
            AWProxy.exec(
                successHandler || resolve,
                errorHandler || reject,
                'AWCalendar',
                'createEventInteractively',
                [{
                    title: title,
                    location: location,
                    notes: notes,
                    startTime: startDate.getTime(),
                    endTime: endDate.getTime(),
                    options: options
                } as CalendarArgs]
            );
        });
    }

    createEventInteractively(title: string,
                             location: string,
                             notes: string,
                             startDate: Date,
                             endDate: Date,
                             successHandler?: any,
                             errorHandler?: any) {
        return this.createEventInteractivelyWithOptions(
            title,
            location,
            notes,
            startDate,
            endDate,
            AWCalendar.getCalendarOptions(),
            successHandler,
            errorHandler
        );
    }

    findEventWithOptions(title: string,
                         location: string,
                         notes: string,
                         startDate: Date,
                         endDate: Date,
                         options: CalendarOptions = AWCalendar.getCalendarOptions(),
                         successHandler?: any,
                         errorHandler?: any) {
        return new Promise((resolve, reject) => {
            AWProxy.exec(
                successHandler || resolve,
                errorHandler || reject,
                'AWCalendar',
                'findEventWithOptions',
                [{
                    title: title,
                    location: location,
                    notes: notes,
                    startTime: startDate.getTime(),
                    endTime: endDate.getTime(),
                    options: options
                } as CalendarArgs]
            );
        });
    }

    findEvent(title: string,
              location: string,
              notes: string,
              startDate: Date,
              endDate: Date,
              successHandler?: any,
              errorHandler?: any) {
        return this.findEventWithOptions(
            title,
            location,
            notes,
            startDate,
            endDate,
            AWCalendar.getCalendarOptions(),
            successHandler,
            errorHandler
        );
    }

    findAllEventsInNamedCalendar(calendarName: string, successHandler?: any, errorHandler?: any) {
        return new Promise((resolve, reject) => {
            AWProxy.exec(
                successHandler || resolve,
                errorHandler || reject,
                'AWCalendar',
                'findAllEventsInNamedCalendar',
                [{calendarName: calendarName} as CalendarArgs]
            );
        });
    }

    deleteEvent(title: string,
                location: string,
                notes: string,
                startDate: Date,
                endDate: Date,
                successHandler?: any, errorHandler?: any) {
        return new Promise((resolve, reject) => {
            AWProxy.exec(
                successHandler || resolve,
                errorHandler || reject,
                'AWCalendar',
                'deleteEvent',
                [{
                    title: title,
                    location: location,
                    startTime: startDate.getTime(),
                    endTime: endDate.getTime(),
                } as CalendarArgs]
            );
        });
    }

    deleteEventFromNamedCalendar(title: string,
                                 location: string,
                                 notes: string,
                                 startDate: Date,
                                 endDate: Date,
                                 calendarName: string,
                                 successHandler?: any,
                                 errorHandler?: any) {
        return new Promise((resolve, reject) => {
            AWProxy.exec(
                successHandler || resolve,
                errorHandler || reject,
                'AWCalendar',
                'deleteEventFromNamedCalendar',
                [{
                    title: title,
                    location: location,
                    startTime: startDate.getTime(),
                    endTime: endDate.getTime(),
                    calendarName: calendarName
                } as CalendarArgs]
            );
        });
    }

    modifyEventWithOptions(title: string,
                           location: string,
                           notes: string,
                           startDate: Date,
                           endDate: Date,
                           newTitle: string,
                           newLocation: string,
                           newNotes: string,
                           newStartDate: Date,
                           newEndDate: Date,
                           options: CalendarOptions = AWCalendar.getCalendarOptions(),
                           newOptions: CalendarOptions = AWCalendar.getCalendarOptions(),
                           successHandler?: any,
                           errorHandler?: any) {
        return new Promise((resolve, reject) => {
            AWProxy.exec(
                successHandler || resolve,
                errorHandler || reject,
                'AWCalendar',
                'modifyEventWithOptions',
                [{
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
                } as CalendarArgs]
            );
        });
    }

    modifyEvent(title: string,
                location: string,
                notes: string,
                startDate: Date,
                endDate: Date,
                newTitle: string,
                newLocation: string,
                newNotes: string,
                newStartDate: Date,
                newEndDate: Date,
                successHandler?: any,
                errorHandler?: any) {
        return this.modifyEventWithOptions(
            title,
            location,
            notes,
            startDate,
            endDate,
            newTitle,
            newLocation,
            newNotes,
            newStartDate,
            newEndDate,
            AWCalendar.getCalendarOptions(),
            AWCalendar.getCalendarOptions(),
            successHandler,
            errorHandler
        );
    }

    modifyEventInNamedCalendar(title: string,
                               location: string,
                               notes: string,
                               startDate: Date,
                               endDate: Date,
                               newTitle: string,
                               newLocation: string,
                               newNotes: string,
                               newStartDate: Date,
                               newEndDate: Date,
                               calendarName: string,
                               successHandler?: any,
                               errorHandler?: any) {

        const options = AWCalendar.getCalendarOptions();
        options.calendarName = calendarName;

        return this.modifyEventWithOptions(
            title,
            location,
            notes,
            startDate,
            endDate,
            newTitle,
            newLocation,
            newNotes,
            newStartDate,
            newEndDate,
            options,
            successHandler,
            errorHandler
        );
    }

    listCalendars(successHandler?: any, errorHandler?: any) {
        return new Promise((resolve, reject) => {
            AWProxy.exec(
                successHandler || resolve,
                errorHandler || reject,
                'AWCalendar',
                'listCalendars',
                []
            );
        });
    }

    listEventsInRange(startDate: Date, endDate: Date, successHandler?: any, errorHandler?: any) {
        return new Promise((resolve, reject) => {
            AWProxy.exec(
                successHandler || resolve,
                errorHandler || reject,
                'AWCalendar',
                'listEventsInRange',
                [{
                    startTime: startDate.getTime(),
                    endTime: endDate.getTime()
                } as CalendarArgs]
            );
        });
    }
}