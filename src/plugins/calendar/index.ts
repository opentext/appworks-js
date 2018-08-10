export * from "./calendar";

export interface CalendarOptions {
  firstReminderMinutes: number;
  secondReminderMinutes: number;
  recurrence: "daily" | "weekly" | "monthly" | "yearly";
  recurrenceInterval: number; // only used when recurrence is set
  recurrenceWeekstart: string;
  recurrenceByDay: string;
  recurrenceByMonthDay: string;
  recurrenceEndDate: Date;
  recurrenceCount: number;
  calendarName: string;
  calendarId: string;
  url: string;
}

export interface CalendarCreateOptions {
  calendarName: string;
  calendarColor: string;
}

export interface CalendarArgs {
  title?: string;
  location?: string;
  notes?: string;
  startTime?: number;
  endTime?: number;
  options?: CalendarOptions;
  calendarName?: string;
  date?: number;
  newTitle?: string;
  newLocation?: string;
  newNotes?: string;
  newStartTime?: number;
  newEndTime?: number;
  newOptions?: CalendarOptions;
}

export interface AWCalendarInterface {

  /**
   *
   * @param successHandler
   * @param errorHandler
   */
  hasReadPermission(successHandler?: any, errorHandler?: any): Promise<any>;

  /**
   *
   * @param successHandler
   * @param errorHandler
   */
  hasWritePermission(successHandler?: any, errorHandler?: any): Promise<any>;

  /**
   *
   * @param successHandler
   * @param errorHandler
   */
  requestReadPermission(successHandler?: any, errorHandler?: any): Promise<any>;

  /**
   *
   * @param successHandler
   * @param errorHandler
   */
  requestWritePermission(successHandler?: any, errorHandler?: any): Promise<any>;

  /**
   *
   * @param successHandler
   * @param errorHandler
   */
  hasReadWritePermission(successHandler?: any, errorHandler?: any): Promise<any>;

  /**
   *
   * @param successHandler
   * @param errorHandler
   */
  requestReadWritePermission(successHandler?: any, errorHandler?: any): Promise<any>;

  /**
   *
   * @param date
   * @param successHandler
   * @param errorHandler
   */
  openCalendar(date: Date, successHandler?: any, errorHandler?: any): Promise<any>;

  /**
   *
   * @param options
   * @param successHandler
   * @param errorHandler
   */
  createCalendar(options: CalendarCreateOptions, successHandler?: any, errorHandler?: any): Promise<any>;

  /**
   *
   * @param calendarName
   * @param successHandler
   * @param errorHandler
   */
  deleteCalendar(calendarName: string, successHandler?: any, errorHandler?: any): Promise<any>;

  /**
   *
   * @param title
   * @param location
   * @param notes
   * @param startDate
   * @param endDate
   * @param options
   * @param successHandler
   * @param errorHandler
   */
  createEventWithOptions(title: string,
                         location: string,
                         notes: string,
                         startDate: Date,
                         endDate: Date,
                         options: CalendarOptions,
                         successHandler?: any,
                         errorHandler?: any): Promise<any>;

  /**
   *
   * @param title
   * @param location
   * @param notes
   * @param startDate
   * @param endDate
   * @param successHandler
   * @param errorHandler
   */
  createEvent(title: string,
              location: string,
              notes: string,
              startDate: Date,
              endDate: Date,
              successHandler?: any,
              errorHandler?: any): Promise<any>;

  /**
   *
   * @param title
   * @param location
   * @param notes
   * @param startDate
   * @param endDate
   * @param options
   * @param successHandler
   * @param errorHandler
   */
  createEventInteractivelyWithOptions(title: string,
                                      location: string,
                                      notes: string,
                                      startDate: Date,
                                      endDate: Date,
                                      options: CalendarOptions,
                                      successHandler?: any,
                                      errorHandler?: any): Promise<any>;

  /**
   *
   * @param title
   * @param location
   * @param notes
   * @param startDate
   * @param endDate
   * @param successHandler
   * @param errorHandler
   */
  createEventInteractively(title: string,
                           location: string,
                           notes: string,
                           startDate: Date,
                           endDate: Date,
                           successHandler?: any,
                           errorHandler?: any): Promise<any>;

  /**
   *
   * @param title
   * @param location
   * @param notes
   * @param startDate
   * @param endDate
   * @param newTitle
   * @param newLocation
   * @param newNotes
   * @param newStartDate
   * @param newEndDate
   * @param options
   * @param newOptions
   * @param successHandler
   * @param errorHandler
   */
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
                         options: CalendarOptions,
                         newOptions: CalendarOptions,
                         successHandler?: any,
                         errorHandler?: any): Promise<any>;

  /**
   *
   * @param title
   * @param location
   * @param notes
   * @param startDate
   * @param endDate
   * @param newTitle
   * @param newLocation
   * @param newNotes
   * @param newStartDate
   * @param newEndDate
   * @param successHandler
   * @param errorHandler
   */
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
              errorHandler?: any): Promise<any>;

  /**
   *
   * @param title
   * @param location
   * @param notes
   * @param startDate
   * @param endDate
   * @param newTitle
   * @param newLocation
   * @param newNotes
   * @param newStartDate
   * @param newEndDate
   * @param calendarName
   * @param successHandler
   * @param errorHandler
   */
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
                             errorHandler?: any): Promise<any>;

  /**
   *
   * @param successHandler
   * @param errorHandler
   */
  findEventWithOptions(title: string,
                       location: string,
                       notes: string,
                       startDate: Date,
                       endDate: Date,
                       options: CalendarOptions,
                       successHandler?: any,
                       errorHandler?: any): Promise<any>;

  /**
   *
   * @param title
   * @param location
   * @param notes
   * @param startDate
   * @param endDate
   * @param successHandler
   * @param errorHandler
   */
  findEvent(title: string,
            location: string,
            notes: string,
            startDate: Date,
            endDate: Date,
            successHandler?: any,
            errorHandler?: any): Promise<any>;

  /**
   *
   * @param successHandler
   * @param errorHandler
   */
  findAllEventsInNamedCalendar(calendarName: string, successHandler?: any, errorHandler?: any): Promise<any>;

  /**
   *
   * @param successHandler
   * @param errorHandler
   */
  listCalendars(successHandler?: any, errorHandler?: any): Promise<any>;

  /**
   *
   * @param title
   * @param location
   * @param notes
   * @param startDate
   * @param endDate
   * @param successHandler
   * @param errorHandler
   */
  deleteEvent(title: string,
              location: string,
              notes: string,
              startDate: Date,
              endDate: Date,
              successHandler?: any,
              errorHandler?: any): Promise<any>;

  /**
   *
   * @param title
   * @param location
   * @param notes
   * @param startDate
   * @param endDate
   * @param calendarName
   * @param successHandler
   * @param errorHandler
   */
  deleteEventFromNamedCalendar(title: string,
                               location: string,
                               notes: string,
                               startDate: Date,
                               endDate: Date,
                               calendarName: string,
                               successHandler?: any,
                               errorHandler?: any): Promise<any>;
}
