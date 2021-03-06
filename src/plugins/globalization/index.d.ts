export * from './globalization';
export interface Navigator {
    /** This plugin obtains information and performs operations specific to the user's locale and timezone. */
    globalization: Globalization;
}
/** This plugin obtains information and performs operations specific to the user's locale and timezone. */
export interface Globalization {
    /**
     * Get the string identifier for the client's current language.
     * @param onSuccess Called on success getting the language with a properties object,
     *                  that should have a value property with a String value.
     * @param onError   Called on error getting the language with a GlobalizationError object.
     *                  The error's expected code is GlobalizationError.UNKNOWN_ERROR.
     */
    getPreferredLanguage(onSuccess: (language: {
        value: string;
    }) => void, onError: (error: GlobalizationError) => void): void;
    /**
     * Get the string identifier for the client's current locale setting.
     * @param onSuccess Called on success getting the locale identifier with a properties object,
     *                  that should have a value property with a String value.
     * @param onError   Called on error getting the locale identifier with a GlobalizationError object.
     *                  The error's expected code is GlobalizationError.UNKNOWN\_ERROR.
     */
    getLocaleName(onSuccess: (locale: {
        value: string;
    }) => void, onError: (error: GlobalizationError) => void): void;
    /**
     * Returns a date formatted as a string according to the client's locale and timezone.
     * @param date      Date to format.
     * @param onSuccess Called on success with a properties object,
     *                  that should have a value property with a String value.
     * @param onError   Called on error with a GlobalizationError object.
     *                  The error's expected code is GlobalizationError.FORMATTING_ERROR.
     * @param options   Optional format parameters. Default {formatLength:'short', selector:'date and time'}
     *                      - 'formatLength' can be "short", "medium", "long", or "full".
     *                      - 'selector' can be "date", "time", or "date and time".
     */
    dateToString(date: Date, onSuccess: (date: {
        value: string;
    }) => void, onError: (error: GlobalizationError) => void, options?: {
        formatLength?: string;
        selector?: string;
    }): void;
    /**
     * Parses a date formatted as a string, according to the client's user preferences
     * and calendar using the time zone of the client, and returns the corresponding date object.
     * @param dateString  String to parse
     * @param onSuccess   Called on success with GlobalizationDate object
     * @param onError     Called on error getting the language with a GlobalizationError object.
     *                    The error's expected code is GlobalizationError.PARSING_ERROR.
     * @param options     Optional parse parameters. Default {formatLength:'short', selector:'date and time'}
     */
    stringToDate(dateString: string, onSuccess: (date: GlobalizationDate) => void, onError: (error: GlobalizationError) => void, options?: {
        type?: string;
        item?: string;
    }): void;
    /**
     * Returns a pattern string to format and parse dates according to the client's user preferences.
     * @param onSuccess Called on success getting pattern with a GlobalizationDatePattern object
     * @param onError   Called on error getting pattern with a GlobalizationError object.
     *                  The error's expected code is GlobalizationError.PATTERN_ERROR.
     * @param options   Optional format parameters. Default {formatLength:'short', selector:'date and time'}
     */
    getDatePattern(onSuccess: (datePattern: GlobalizationDatePattern) => void, onError: (error: GlobalizationError) => void, options?: {
        type?: string;
        item?: string;
    }): void;
    /**
     * Returns an array of the names of the months or days of the week, depending on the client's user preferences and calendar.
     * @param onSuccess Called on success getting names with a properties object,
     *                  that should have a value property with a String[] value.
     * @param onError   Called on error getting the language with a GlobalizationError object.
     *                  The error's expected code is GlobalizationError.UNKNOWN_ERROR.
     * @param options   Optional parameters. Default: {type:'wide', item:'months'}
     */
    getDateNames(onSuccess: (names: {
        value: string[];
    }) => void, onError: (error: GlobalizationError) => void, options?: {
        type?: string;
        item?: string;
    }): void;
    isDaylightSavingsTime(date: Date, onSuccess: (result: {
        dst: boolean;
    }) => void, onError: (error: GlobalizationError) => void): void;
    /**
     * Returns the first day of the week according to the client's user preferences and calendar.
     * @param onSuccess Called on success with a day object,
     *                  that should have a value property with a number value.
     * @param onError   Called on error with a GlobalizationError object.
     *                  The error's expected code is GlobalizationError.UNKNOWN_ERROR.
     */
    getFirstDayOfWeek(onSuccess: (day: {
        value: number;
    }) => void, onError: (error: GlobalizationError) => void): void;
    /**
     * Returns a number formatted as a string according to the client's user preferences.
     * @param value     Number to format
     * @param onSuccess Called on success with a result object,
     *                  that should have a value property with a String value.
     * @param onError   Called on error with a GlobalizationError object.
     *                  The error's expected code is GlobalizationError.FORMATTING_ERROR.
     * @param format    Optional format parameters. Default: {type:'decimal'}
     */
    nubmerToString(value: number, onSuccess: (result: {
        value: string;
    }) => void, onError: (error: GlobalizationError) => void, format?: {
        type?: string;
    }): void;
    /**
     * Parses a number formatted as a string according to the client's user preferences and returns the corresponding number.
     * @param value     String to parse
     * @param onSuccess Called on success with a result object,
     *                  that should have a value property with a number value.
     * @param onError   Called on error with a GlobalizationError object.
     *                  The error's expected code is GlobalizationError.FORMATTING_ERROR.
     * @param format    Optional format parameters. Default: {type:'decimal'}
     */
    stringToNumber(value: string, onSuccess: (result: {
        value: number;
    }) => void, onError: (error: GlobalizationError) => void, format?: {
        type?: string;
    }): void;
    /**
     * Returns a pattern string to format and parse numbers according to the client's user preferences.
     * @param onSuccess Called on success getting pattern with a GlobalizationNumberPattern object
     * @param onError   Called on error getting the language with a GlobalizationError object.
     *                  The error's expected code is GlobalizationError.PATTERN_ERROR.
     * @param options   Optional format parameters. Default {type:'decimal'}.
     */
    getNumberPattern(onSuccess: (result: GlobalizationNumberPattern) => void, onError: (error: GlobalizationError) => void, format?: {
        type?: string;
    }): void;
    /**
     * Returns a pattern string to format and parse currency values according to the client's user preferences and ISO 4217 currency code.
     * @param currencyCode Should be a String of one of the ISO 4217 currency codes, for example 'USD'.
     * @param onSuccess     Called on success getting pattern with a GlobalizatioCurrencyPattern object
     * @param onError       Called on error getting pattern with a GlobalizationError object.
     *                      The error's expected code is GlobalizationError.FORMATTING_ERROR.
     * @param options       Optional format parameters. Default {type:'decimal'}.
     */
    getCurrencyPattern(currencyCode: string, onSuccess: (result: GlobalizationCurrencyPattern) => void, onError: (error: GlobalizationError) => void): void;
}
/** Date returned by stringToDate */
export interface GlobalizationDate {
    year: number;
    month: number;
    day: number;
    hour: number;
    minute: number;
    second: number;
    millisecond: number;
}
/** Pattern to format and parse dates according to the client's user preferences.*/
export interface GlobalizationDatePattern {
    pattern: string;
    timezone: string;
    utc_offset: number;
    dst_offset: number;
}
export interface GlobalizationDateNameOptions {
    type?: string;
    item?: string;
}
/** Pattern to format and parse numbers according to the client's user preferences. */
export interface GlobalizationNumberPattern {
    pattern: string;
    symbol: string;
    fraction: number;
    rounding: number;
    positive: string;
    negative: string;
    decimal: string;
    grouping: string;
}
/**
 * Pattern to format and parse currency values according
 * to the client's user preferences and ISO 4217 currency code.
 */
export interface GlobalizationCurrencyPattern {
    /** The currency pattern to format and parse currency values. The patterns follow Unicode Technical Standard #35. */
    pattern: string;
    /** The ISO 4217 currency code for the pattern. */
    code: string;
    /** The number of fractional digits to use when parsing and formatting currency. */
    fraction: number;
    /** The rounding increment to use when parsing and formatting. */
    rounding: number;
    /** The decimal symbol to use for parsing and formatting. */
    decimal: string;
    /** The grouping symbol to use for parsing and formatting. */
    grouping: string;
}
/** An object representing a error from the Globalization API. */
export interface GlobalizationError {
    /** One of the following codes representing the error type:
     * GlobalizationError.UNKNOWN_ERROR: 0
     * GlobalizationError.FORMATTING_ERROR: 1
     * GlobalizationError.PARSING_ERROR: 2
     * GlobalizationError.PATTERN_ERROR: 3
     */
    code: number;
    /** A text message that includes the error's explanation and/or details */
    message: string;
}
/** An object representing a error from the Globalization API. */
export declare var GlobalizationError: {
    UNKNOWN_ERROR: number;
    FORMATTING_ERROR: number;
    PARSING_ERROR: number;
    PATTERN_ERROR: number;
};
