import * as yup from 'yup';
import { TimestampLike } from '../utils/TimestampLike';
import { TacticValue, WithTacticsById } from './tactic';
export declare const strategySchema: yup.ObjectSchema<{
    tacticIds: string[];
    suggestedTacticIds: string[] | undefined;
    conditionalTacticIds: {
        ids: string[];
        condition: NonNullable<"eq" | "gt" | "lt" | "keyword" | undefined>;
        value: {};
    }[] | undefined;
}, yup.AnyObject, {
    tacticIds: "";
    suggestedTacticIds: "";
    conditionalTacticIds: "";
}, "">;
export type Strategy = yup.InferType<typeof strategySchema>;
export type TimeRoutine = yup.InferType<typeof timeRoutineSchema>;
export declare const timeRoutineSchema: yup.ObjectSchema<{
    tacticIds: string[];
    suggestedTacticIds: string[] | undefined;
    conditionalTacticIds: {
        ids: string[];
        condition: NonNullable<"eq" | "gt" | "lt" | "keyword" | undefined>;
        value: {};
    }[] | undefined;
    weekdays: number[];
    hour: number;
    minute: number;
    title: string;
}, yup.AnyObject, {
    tacticIds: "";
    suggestedTacticIds: "";
    conditionalTacticIds: "";
    weekdays: "";
    hour: undefined;
    minute: undefined;
    title: undefined;
}, "">;
export type LocationRoutine = yup.InferType<typeof locationRoutineSchema>;
export declare const locationRoutineSchema: yup.ObjectSchema<{
    tacticIds: string[];
    suggestedTacticIds: string[] | undefined;
    conditionalTacticIds: {
        ids: string[];
        condition: NonNullable<"eq" | "gt" | "lt" | "keyword" | undefined>;
        value: {};
    }[] | undefined;
    locationId: string;
    mode: NonNullable<"enter" | "exit" | undefined>;
    title: string;
}, yup.AnyObject, {
    tacticIds: "";
    suggestedTacticIds: "";
    conditionalTacticIds: "";
    locationId: undefined;
    mode: undefined;
    title: undefined;
}, "">;
export type GameplanValue = WithTypes<typeof gameplanSchema>;
export declare const gameplanSchema: yup.ObjectSchema<{
    uid: string;
    name: yup.Maybe<string | undefined>;
    isFeatured: yup.Maybe<boolean | undefined>;
    createdAt: TimestampLike | yup.Maybe<null>;
    updatedAt: TimestampLike | yup.Maybe<null>;
    parentIssueIds: string[] | undefined;
    programsCount: number | undefined;
    timezone: string;
    impulse: {
        [x: string]: {
            suggestedTacticIds?: string[] | undefined;
            conditionalTacticIds?: {
                ids: string[];
                condition: NonNullable<"eq" | "gt" | "lt" | "keyword" | undefined>;
                value: {};
            }[] | undefined;
            tacticIds: string[];
        };
    };
    impulseDebrief: {
        [x: string]: {
            suggestedTacticIds?: string[] | undefined;
            conditionalTacticIds?: {
                ids: string[];
                condition: NonNullable<"eq" | "gt" | "lt" | "keyword" | undefined>;
                value: {};
            }[] | undefined;
            tacticIds: string[];
        };
    };
    recap: {
        suggestedTacticIds?: string[] | undefined;
        conditionalTacticIds?: {
            ids: string[];
            condition: NonNullable<"eq" | "gt" | "lt" | "keyword" | undefined>;
            value: {};
        }[] | undefined;
        title: string;
        tacticIds: string[];
        weekdays: number[];
        hour: number;
        minute: number;
    } | undefined;
    time: {
        [x: string]: {
            suggestedTacticIds?: string[] | undefined;
            conditionalTacticIds?: {
                ids: string[];
                condition: NonNullable<"eq" | "gt" | "lt" | "keyword" | undefined>;
                value: {};
            }[] | undefined;
            title: string;
            tacticIds: string[];
            weekdays: number[];
            hour: number;
            minute: number;
        };
    } | null | undefined;
    location: {
        [x: string]: {
            suggestedTacticIds?: string[] | undefined;
            conditionalTacticIds?: {
                ids: string[];
                condition: NonNullable<"eq" | "gt" | "lt" | "keyword" | undefined>;
                value: {};
            }[] | undefined;
            title: string;
            tacticIds: string[];
            locationId: string;
            mode: NonNullable<"enter" | "exit" | undefined>;
        };
    } | null | undefined;
    tacticsById: any;
    patternsById: {
        [x: string]: {
            createdAt?: TimestampLike | yup.Maybe<null>;
            updatedAt?: TimestampLike | yup.Maybe<null>;
            supportGroupIds?: string[] | undefined;
            notification?: yup.Maybe<{} | undefined> | {
                title: string;
                body: string;
            };
            setbackTacticId?: yup.Maybe<string | undefined>;
            setbackThreshold?: yup.Maybe<number | undefined>;
            issueId?: yup.Maybe<string | undefined>;
            parentIssueIds?: string[] | undefined;
            sendWeeklyReports?: yup.Maybe<boolean | undefined>;
            uid: string;
            name: string;
            ordinal: number;
        };
    };
    scheduledNotificationIds: string[] | undefined;
    dontGenerateRecapTacticsForTacticIds: string[] | undefined;
}, yup.AnyObject, {
    uid: undefined;
    name: undefined;
    isFeatured: undefined;
    createdAt: undefined;
    updatedAt: undefined;
    parentIssueIds: "";
    programsCount: undefined;
    timezone: undefined;
    impulse: undefined;
    impulseDebrief: undefined;
    recap: undefined;
    time: undefined;
    location: undefined;
    tacticsById: any;
    patternsById: undefined;
    scheduledNotificationIds: "";
    dontGenerateRecapTacticsForTacticIds: "";
}, "">;
type WithTypes<T extends yup.ISchema<unknown>> = WithTacticsById<yup.InferType<T>> & {
    createdAt: TimestampLike;
    updatedAt: TimestampLike;
    tacticsById: Record<string, TacticValue>;
};
export declare const SHORT_DAYS: {
    1: string;
    2: string;
    3: string;
    4: string;
    5: string;
    6: string;
    7: string;
};
export declare const LONG_DAYS: string[];
export {};
