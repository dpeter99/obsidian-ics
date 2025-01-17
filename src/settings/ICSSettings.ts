export interface ICSSettings {
    calendars: Record < string, Calendar > ;
    addEnd: boolean;
    ignoreEvents: string[];
}

export interface Calendar {
    icsUrl: string;
    icsName: string;
}

export const DEFAULT_SETTINGS: ICSSettings = {
    calendars: {
    },
    addEnd: false,
    ignoreEvents: [],
};