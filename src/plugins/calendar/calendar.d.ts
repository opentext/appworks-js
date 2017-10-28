import { AWPlugin } from '../../common/plugin';
import { AWCalendarInterface, CalendarCreateOptions, CalendarOptions } from './index';
export declare class AWCalendar extends AWPlugin implements AWCalendarInterface {
    static getCalendarOptions(): CalendarOptions;
    constructor();
    hasReadPermission(successHandler?: any, errorHandler?: any): Promise<{}>;
    requestReadPermission(successHandler?: any, errorHandler?: any): Promise<{}>;
    hasWritePermission(successHandler?: any, errorHandler?: any): Promise<{}>;
    requestWritePermission(successHandler?: any, errorHandler?: any): Promise<{}>;
    hasReadWritePermission(successHandler?: any, errorHandler?: any): Promise<{}>;
    requestReadWritePermission(successHandler?: any, errorHandler?: any): Promise<{}>;
    createCalendar(options?: CalendarCreateOptions, successHandler?: any, errorHandler?: any): Promise<{}>;
    deleteCalendar(calendarName: string, successHandler?: any, errorHandler?: any): Promise<{}>;
    openCalendar(date: Date, successHandler?: any, errorHandler?: any): Promise<{}>;
    createEventWithOptions(title: string, location: string, notes: string, startDate: Date, endDate: Date, options?: CalendarOptions, successHandler?: any, errorHandler?: any): Promise<{}>;
    createEvent(title: string, location: string, notes: string, startDate: Date, endDate: Date, successHandler?: any, errorHandler?: any): Promise<{}>;
    createEventInteractivelyWithOptions(title: string, location: string, notes: string, startDate: Date, endDate: Date, options?: CalendarOptions, successHandler?: any, errorHandler?: any): Promise<any>;
    createEventInteractively(title: string, location: string, notes: string, startDate: Date, endDate: Date, successHandler?: any, errorHandler?: any): Promise<any>;
    findEventWithOptions(title: string, location: string, notes: string, startDate: Date, endDate: Date, options?: CalendarOptions, successHandler?: any, errorHandler?: any): Promise<{}>;
    findEvent(title: string, location: string, notes: string, startDate: Date, endDate: Date, successHandler?: any, errorHandler?: any): Promise<{}>;
    findAllEventsInNamedCalendar(calendarName: string, successHandler?: any, errorHandler?: any): Promise<{}>;
    deleteEvent(title: string, location: string, notes: string, startDate: Date, endDate: Date, successHandler?: any, errorHandler?: any): Promise<{}>;
    deleteEventFromNamedCalendar(title: string, location: string, notes: string, startDate: Date, endDate: Date, calendarName: string, successHandler?: any, errorHandler?: any): Promise<{}>;
    modifyEventWithOptions(title: string, location: string, notes: string, startDate: Date, endDate: Date, newTitle: string, newLocation: string, newNotes: string, newStartDate: Date, newEndDate: Date, options?: CalendarOptions, newOptions?: CalendarOptions, successHandler?: any, errorHandler?: any): Promise<{}>;
    modifyEvent(title: string, location: string, notes: string, startDate: Date, endDate: Date, newTitle: string, newLocation: string, newNotes: string, newStartDate: Date, newEndDate: Date, successHandler?: any, errorHandler?: any): Promise<{}>;
    modifyEventInNamedCalendar(title: string, location: string, notes: string, startDate: Date, endDate: Date, newTitle: string, newLocation: string, newNotes: string, newStartDate: Date, newEndDate: Date, calendarName: string, successHandler?: any, errorHandler?: any): Promise<{}>;
    listCalendars(successHandler?: any, errorHandler?: any): Promise<{}>;
    listEventsInRange(startDate: Date, endDate: Date, successHandler?: any, errorHandler?: any): Promise<{}>;
}
