import * as yup from 'yup';
import { TimestampLike } from '../utils/TimestampLike';
import { TacticValue, WithTacticsById } from './tactic';
export declare const strategy: yup.ObjectSchema<{
    tacticIds: any[];
    suggestedTacticIds: any[];
    conditionalTacticIds: {
        [x: string]: any[];
    } | null | undefined;
}, yup.AnyObject, {
    tacticIds: "";
    suggestedTacticIds: "";
    conditionalTacticIds: undefined;
}, "">;
export type Strategy = yup.InferType<typeof strategy>;
export type GameplanValue = WithTypes<typeof gameplanSchema>;
export declare const gameplanSchema: yup.ObjectSchema<{
    uid: string;
    createdAt: yup.Maybe<{} | undefined> | {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    updatedAt: yup.Maybe<{} | undefined> | {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    parentIssueIds: string[] | undefined;
    recommendationsCount: number | undefined;
    impulse: {
        [x: string]: {
            conditionalTacticIds?: {
                [x: string]: any[];
            } | null | undefined;
            tacticIds: any[];
            suggestedTacticIds: any[];
        };
    };
    impulseDebrief: {
        [x: string]: {
            conditionalTacticIds?: {
                [x: string]: any[];
            } | null | undefined;
            tacticIds: any[];
            suggestedTacticIds: any[];
        };
    };
    routine: {
        [x: string]: {
            conditionalTacticIds?: {
                [x: string]: any[];
            } | null | undefined;
            tacticIds: any[];
            suggestedTacticIds: any[];
        };
    };
    tacticsById: any;
    routinesById: {
        [x: string]: {
            createdAt?: yup.Maybe<{} | undefined> | {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt?: yup.Maybe<{} | undefined> | {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            isTemplate?: boolean | null | undefined;
            scheduledNotificationIds?: any[] | undefined;
            uid: string;
            title: string;
            summary: string;
            timezone: string;
            type: "time";
            weekdays: any[];
            hour: number;
            minute: number;
        } | {
            createdAt?: yup.Maybe<{} | undefined> | {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt?: yup.Maybe<{} | undefined> | {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            isTemplate?: boolean | null | undefined;
            scheduledNotificationIds?: any[] | undefined;
            uid: string;
            title: string;
            summary: string;
            timezone: string;
            type: "dayDebrief";
            weekdays: any[];
            hour: number;
            minute: number;
        } | {
            createdAt?: yup.Maybe<{} | undefined> | {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt?: yup.Maybe<{} | undefined> | {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            isTemplate?: boolean | null | undefined;
            timezone?: string | null | undefined;
            locationId?: string | null | undefined;
            uid: string;
            title: string;
            summary: string;
            type: "location";
            mode: {};
        };
    };
    patternsById: {
        [x: string]: {
            createdAt?: yup.Maybe<{} | undefined> | {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt?: yup.Maybe<{} | undefined> | {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            supportGroupIds?: string[] | undefined;
            notification?: {
                title: string;
                body: string;
            } | null | undefined;
            setbackTacticId?: yup.Maybe<string | undefined>;
            issueId?: yup.Maybe<string | undefined>;
            parentIssueIds?: string[] | undefined;
            uid: string;
            name: string;
            ordinal: number;
            setbackThreshold: number;
            sendWeeklyReports: NonNullable<boolean | undefined>;
        };
    };
}, yup.AnyObject, {
    uid: undefined;
    createdAt: undefined;
    updatedAt: undefined;
    parentIssueIds: "";
    recommendationsCount: undefined;
    impulse: undefined;
    impulseDebrief: undefined;
    routine: undefined;
    tacticsById: any;
    routinesById: undefined;
    patternsById: undefined;
}, "">;
type WithTypes<T extends yup.ISchema<unknown>> = WithTacticsById<yup.InferType<T>> & {
    createdAt: TimestampLike;
    updatedAt: TimestampLike;
    tacticsById: Record<string, TacticValue>;
};
export {};
